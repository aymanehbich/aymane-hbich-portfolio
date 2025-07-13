export async function sendEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const res = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.error || "Failed to send email");
    }

    console.log("✅ Email sent:", result.message);
    return { success: true, message: result.message };
  } catch (error: any) {
    console.error("❌ Email failed:", error.message);
    return { success: false, error: error.message };
  }
}
