import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Basic honeypot check
    if (data.middleName) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    console.log("Mock Contact Submission:", data);
    
    // In a real app, send email via Resend or Formspree here.
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
