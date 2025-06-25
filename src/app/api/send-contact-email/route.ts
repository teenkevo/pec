import { ContactEmailTemplate } from "@/components/email-template";
import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, company, email, phone, question } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !question) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Contact Form <noreply@yourdomain.com>", // Replace with your verified domain
      to: ["luwembamugumya@gmail.com"],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      react: ContactEmailTemplate({
        firstName,
        lastName,
        company,
        email,
        phone,
        question,
      }),
      // Also send a plain text version
      text: `
New Contact Form Submission

Name: ${firstName} ${lastName}
${company ? `Company: ${company}` : ""}
Email: ${email}
${phone ? `Phone: ${phone}` : ""}

Message:
${question}

---
Sent from your website contact form
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, messageId: data?.id });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
