import { NextResponse } from "next/server";
import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN;

const writeClient =
  projectId && dataset && token
    ? createClient({
        projectId,
        dataset,
        apiVersion: "2024-05-19",
        token,
        useCdn: false,
      })
    : null;

export async function POST(req: Request) {
  if (!writeClient) {
    return NextResponse.json(
      {
        error:
          "Missing Sanity client configuration. Set SANITY_API_WRITE_TOKEN and project envs.",
      },
      { status: 500 }
    );
  }

  try {
    const formData = await req.formData();

    const name = (formData.get("name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const linkedin = (formData.get("linkedin") as string) || "";
    const portfolio = (formData.get("portfolio") as string) || "";
    const additionalInfo = (formData.get("additionalInfo") as string) || "";
    const jobId = (formData.get("jobId") as string) || "";
    const interviewDate =
      (formData.get("interviewDate") as string | null) || null;
    const resume = formData.get("resume") as File | null;

    if (!name || !email || !jobId || !resume) {
      return NextResponse.json(
        { error: "Name, email, jobId, and resume are required." },
        { status: 400 }
      );
    }

    // Upload resume to Sanity assets
    const resumeBuffer = Buffer.from(await resume.arrayBuffer());
    const asset = await writeClient.assets.upload("file", resumeBuffer, {
      filename: resume.name,
      contentType: resume.type,
    });

    const doc = {
      _type: "applicant",
      name,
      email,
      phone,
      linkedin,
      portfolio,
      additionalInfo,
      job: {
        _type: "reference",
        _ref: jobId,
      },
      resume: {
        _type: "file",
        asset: {
          _type: "reference",
          _ref: asset._id,
        },
      },
      stage: "applied",
      interviewDate: interviewDate || undefined,
      createdAt: new Date().toISOString(),
    };

    const result = await writeClient.create(doc);

    return NextResponse.json({ success: true, id: result._id });
  } catch (error: any) {
    console.error("Error creating applicant", error);
    return NextResponse.json(
      {
        error: "Failed to create applicant.",
        details: error?.message,
      },
      { status: 500 }
    );
  }
}
