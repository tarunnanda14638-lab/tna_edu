import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";

const router: IRouter = Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

router.post("/enquiry", async (req, res) => {
  const { name, phone, email, classLevel, subject, message, type } = req.body;

  if (!name || !phone) {
    res.status(400).json({ success: false, error: "Name and phone are required." });
    return;
  }

  const isDemo = type === "demo";
  const emailSubject = isDemo
    ? `Free Demo Request — ${name} (${classLevel}, ${subject})`
    : `New Enquiry — ${name}`;

  const html = isDemo
    ? `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden">
        <div style="background:#1e3a8a;color:white;padding:24px">
          <h2 style="margin:0">📚 New Free Demo Request</h2>
          <p style="margin:4px 0 0;opacity:0.8">Tanya Nanda Academy</p>
        </div>
        <div style="padding:24px">
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#6b7280;width:120px">Student Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Phone</td><td style="padding:8px 0;font-weight:600">${phone}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Class</td><td style="padding:8px 0;font-weight:600">${classLevel || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Subject</td><td style="padding:8px 0;font-weight:600">${subject || "—"}</td></tr>
          </table>
          <div style="margin-top:16px;padding:12px;background:#fef3c7;border-radius:8px;font-size:14px;color:#92400e">
            ⚡ Please contact this student to schedule their free demo class.
          </div>
        </div>
      </div>`
    : `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden">
        <div style="background:#1e3a8a;color:white;padding:24px">
          <h2 style="margin:0">✉️ New Website Enquiry</h2>
          <p style="margin:4px 0 0;opacity:0.8">Tanya Nanda Academy</p>
        </div>
        <div style="padding:24px">
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#6b7280;width:120px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0;font-weight:600">${email || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Phone</td><td style="padding:8px 0;font-weight:600">${phone}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Message</td><td style="padding:8px 0">${message || "—"}</td></tr>
          </table>
        </div>
      </div>`;

  try {
    await transporter.sendMail({
      from: `"TNA Website" <${process.env.GMAIL_USER}>`,
      to: "tanyananda91@gmail.com, tanyananda2253@gmail.com",
      subject: emailSubject,
      html,
    });
    res.json({ success: true });
  } catch (err) {
    req.log.error({ err }, "Failed to send enquiry email");
    res.status(500).json({ success: false, error: "Failed to send email. Please try again." });
  }
});

export default router;
