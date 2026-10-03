import { NextResponse } from "next/server";

type EnquiryPayload = {
  name?: string;
  phone?: string;
  email?: string;
  projectType?: string;
  city?: string;
  budget?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body: EnquiryPayload = await request.json();

  if (!body.name || !body.phone || !body.email || !body.projectType) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // TODO: wire this up to an email service (Resend/SendGrid), CRM, or a
  // Google Sheet/Airtable base once the architect decides on a destination.
  // For now, log the enquiry so submissions aren't silently dropped.
  console.log("New enquiry received:", body);

  return NextResponse.json({ ok: true });
}
