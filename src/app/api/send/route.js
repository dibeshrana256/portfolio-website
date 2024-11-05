// Import Resend and initialize with the API key
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend("re_Js3QSKbD_Bx9gv866CMxSKH7mYMu6Ces5");
const fromEmail = "portfolio@drhomelabs.com";

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

