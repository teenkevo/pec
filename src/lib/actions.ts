"use server";

import { writeClient } from "@/sanity/lib/write-client";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { sanitizePhoneNumber } from "./utils";

export async function createProject(prevState: any, formData: FormData) {
  try {
    const projectName = formData.get("projectName");
    const dateFrom = formData.get("dateFrom");
    const dateTo = formData.get("dateTo");
    const priority = formData.get("priority");
    const clients = formData
      .getAll("clients")
      .map((client) => JSON.parse(client as string));

    const clientIds = await Promise.all(
      clients.map(async (client) => {
        if (client.clientType === "new") {
          // Create the new client
          const newClient = await writeClient.create({
            _type: "client",
            name: client.newClientName,
          });
          return newClient._id; // Return the new client's ID
        } else {
          // Use existing client ID
          return client.existingClient;
        }
      })
    );

    // Create the project
    const project = await writeClient.create(
      {
        _type: "project",
        name: projectName,
        startDate: dateFrom,
        endDate: dateTo,
        priority,
        stagesCompleted: ["BILLING"], // Placeholder logic
        clients: clientIds.map((clientId) => ({
          _type: "reference",
          _ref: clientId,
        })), // Reference clients
      },
      {
        autoGenerateArrayKeys: true,
      }
    );
    revalidateTag("projects");
    return { result: project, status: "ok" };
  } catch (error) {
    return { error, status: "error" };
  }
}

export async function updateClientName(
  clientId: string,
  projectId: string,
  formData: FormData
) {
  try {
    const clientName = formData.get("clientName");
    const result = await writeClient
      .patch(clientId as string)
      .set({ name: clientName as string })
      .commit();
    // TODO: Possible bug, no tag is specified but revalidateTag seems to update cache
    revalidateTag(`project-${projectId}`);
    return { result, status: "ok" };
  } catch (error) {
    return { error, status: "error" };
  }
}

export async function updateContactPerson(
  contactId: string,
  projectId: string,
  formData: FormData
) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const designation = formData.get("designation");
    const result = await writeClient
      .patch(contactId)
      .set({
        name,
        email,
        phone: sanitizePhoneNumber(phone as string),
        designation,
      })
      .commit();
    // TODO: Possible bug, no tag is specified but revalidateTag seems to update cache
    revalidateTag(`project-${projectId}`);
    return { result, status: "ok" };
  } catch (error) {
    return { error, status: "error" };
  }
}

export async function removeContactFromProject(
  contactId: string,
  projectId: string
) {
  try {
    const result = await writeClient
      .patch(projectId)
      .unset([`contactPersons[_ref == "${contactId}"]`])
      .commit();
    // TODO: Possible bug, no tag is specified but revalidateTag seems to update cache
    revalidateTag(`project-${projectId}`);
    return { result, status: "ok" };
  } catch (error) {
    return { error, status: "error" };
  }
}

export async function removeClientFromProject(
  clientId: string,
  projectId: string
) {
  try {
    const result = await writeClient
      .patch(projectId)
      .unset([`clients[_ref == "${clientId}"]`])
      .commit();
    // TODO: Possible bug, no tag is specified but revalidateTag seems to update cache
    revalidateTag(`project-${projectId}`);
    return { result, status: "ok" };
  } catch (error) {
    return { error, status: "error" };
  }
}

export async function deleteProject(projectId: string) {
  try {
    const result = await writeClient.delete(projectId);
    // TODO: Is there a need to revalidate projects?
    revalidateTag(`projects`);
    return { result, status: "ok" };
  } catch (error) {
    return { error, status: "error" };
  }
}

export async function revalidateProjects() {
  revalidateTag("projects");
}

export async function revalidateProject(projectId: string) {
  revalidateTag(`project-${projectId}`);
}

export async function revalidateAll() {
  revalidatePath("/");
  redirect("/");
}
