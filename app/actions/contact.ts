"use server";

import nodemailer from "nodemailer";

export type ContactResult = { ok: true } | { ok: false; error: string };

const MAX = { name: 120, email: 200, company: 160, phone: 40, service: 60, message: 5000 };

function field(formData: FormData, key: keyof typeof MAX) {
  const v = formData.get(key);
  return typeof v === "string" ? v.trim().slice(0, MAX[key]) : "";
}

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** Sends the contact form to the inbox in CONTACT_TO via SMTP (settings in .env.local). */
export async function sendContact(formData: FormData): Promise<ContactResult> {
  // honeypot: real visitors never see or fill this field
  if (formData.get("website")) return { ok: true };

  const data = {
    service: field(formData, "service"),
    name: field(formData, "name"),
    email: field(formData, "email"),
    company: field(formData, "company"),
    phone: field(formData, "phone"),
    message: field(formData, "message"),
  };

  if (!data.name || !data.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { ok: false, error: "Please fill in your name, a valid email and a message." };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("[contact] SMTP is not configured (SMTP_HOST / SMTP_USER / SMTP_PASS).");
    return { ok: false, error: "Something went wrong. Please email or call us directly." };
  }

  const port = Number(SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows: [string, string][] = [
    ["Interested in", data.service],
    ["Name", data.name],
    ["Email", data.email],
    ["Company", data.company],
    ["Phone", data.phone],
  ];

  try {
    await transporter.sendMail({
      from: `"Ezify Website" <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      replyTo: `"${data.name.replace(/"/g, "")}" <${data.email}>`,
      subject: `New enquiry: ${data.service || "General"} | ${data.name}`,
      text: [...rows.map(([k, v]) => `${k}: ${v || "-"}`), "", "Message:", data.message].join("\n"),
      html: `
        <table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
          ${rows.map(([k, v]) => `<tr><td style="color:#56637a">${k}</td><td><strong>${escape(v || "-")}</strong></td></tr>`).join("")}
        </table>
        <p style="font-family:Arial,sans-serif;font-size:14px;color:#56637a;margin:16px 0 4px">Message</p>
        <p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap;margin:0">${escape(data.message)}</p>
      `,
    });
    return { ok: true };
  } catch (err) {
    console.error("[contact] sendMail failed:", err);
    return { ok: false, error: "Something went wrong. Please email or call us directly." };
  }
}
