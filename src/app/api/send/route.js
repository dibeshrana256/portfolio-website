// Import Resend and initialize with the API key
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    const body = await req.formData();
    // const { email, subject, message } = body;

    const email = body.get("email");
    const subject = body.get("subject");
    const message = body.get("message");
    

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ["dibeshrana.dr+resend@gmail.com", email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting me!</p>
          <p>New message submitted!</p>
          <p>{message}</p>
        </>
      ),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

