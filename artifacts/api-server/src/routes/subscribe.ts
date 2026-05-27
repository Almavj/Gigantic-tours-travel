import { Router, type IRouter, type Request, type Response } from "express";

const router: IRouter = Router();

router.post("/subscribe", async (req: Request, res: Response) => {
  const { email } = req.body as { email?: string };

  if (!email || !email.includes("@")) {
    res.status(400).json({ success: false, message: "Valid email is required" });
    return;
  }

  const resendApiKey = process.env["RESEND_API_KEY"];

  if (!resendApiKey) {
    res.json({ success: true, message: "Subscribed successfully!" });
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
        subject: "New Newsletter Subscriber",
        html: `<p>New subscriber: <strong>${email}</strong></p>`
      })
    });

    if (!response.ok) {
      throw new Error(`Resend error: ${await response.text()}`);
    }

    res.json({ success: true, message: "Subscribed successfully!" });
  } catch (_err) {
    res.status(500).json({ success: false, message: "Failed to send notification" });
  }
});

export default router;
