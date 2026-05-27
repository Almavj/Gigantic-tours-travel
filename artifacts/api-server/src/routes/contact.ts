import { Router, type IRouter } from "express";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const { name, email, phone, subject, message } = req.body as {
    name?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    res.status(400).json({ success: false, message: "Name, email, and message are required" });
    return;
  }

  if (!email.includes("@")) {
    res.status(400).json({ success: false, message: "Valid email is required" });
    return;
  }

  const resendApiKey = process.env["RESEND_API_KEY"];

  if (!resendApiKey) {
    console.log(`Contact form submission from ${name} (${email}): ${subject} — ${message}`);
    res.json({ success: true, message: "Message received! We'll get back to you shortly." });
    return;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Gigantic Tours <noreply@giganictours.com>",
        to: ["machariaallan881@gmail.com"],
        reply_to: email,
        subject: `[Contact Form] ${subject || "New Inquiry"} — from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <p><strong>Subject:</strong> ${subject || "General Inquiry"}</p>
          <hr>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `
      })
    });

    if (!response.ok) {
      throw new Error(`Resend error: ${await response.text()}`);
    }

    res.json({ success: true, message: "Message sent! We'll get back to you within 2–4 hours." });
  } catch (_err) {
    res.status(500).json({ success: false, message: "Failed to send message. Please try again." });
  }
});

export default router;
