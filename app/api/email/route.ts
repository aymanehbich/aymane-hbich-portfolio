import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request: NextRequest) {
  const { name, email, subject, message } = await request.json();
  const transport = nodemailer.createTransport({
    service: "gmail",
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: nodemailer.SendMailOptions = {
    from: `"${name}" <contact@aymanehbich.me>`,
    // to: process.env.MY_EMAIL!,
    to: "contact@aymanehbich.me",
    subject: `Portfolio Contact Form: ${subject}`,
    text: message,
    replyTo: email,
    html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <div style="background-color: #2c4b80; padding: 20px; color: white;">
      <h2 style="margin: 0; font-size: 20px;">📬 New Contact Message</h2>
    </div>
    <div style="padding: 20px; background-color: #f9f9f9; color: #333;">
      <p><strong style="color: #2c4b80;">Name:</strong> ${name}</p>
      <p><strong style="color: #2c4b80;">Email:</strong> ${email}</p>
      <p><strong style="color: #2c4b80;">Subject:</strong> ${subject}</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
      <p style="margin-bottom: 5px;"><strong style="color: #2c4b80;">Message:</strong></p>
      <p style="white-space: pre-line; line-height: 1.5;">${message}</p>
    </div>
    <div style="background-color: #f1f1f1; padding: 10px 20px; font-size: 12px; color: #888; text-align: center;">
      This message was sent from your portfolio contact form.
    </div>
  </div>
`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
