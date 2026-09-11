import { createServerFn } from "@tanstack/react-start";

type Submission = {
  name: string;
  phone: string;
  heard_about: string;
  familiarity: string;
  six_month_win: string[];
  patience: string;
  current_training: string[];
  preferred_schedule: string;
  preferred_training_time: string;
  membership_fit: string;
  anything_else: string;
  submitted_at: string;
};

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const notifyInterestSubmission = createServerFn({ method: "POST" })
  .inputValidator((data: Submission) => data)
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];

    // CHANGE THIS TO YOUR EMAIL
    const to = "YOUR_EMAIL@gmail.com";

    if (!apiKey) {
      console.error("[interest] RESEND_API_KEY is missing");

      return {
        sent: false,
        reason: "email_not_configured" as const,
      };
    }

    const rows: Array<[string, string]> = [
      ["Name", data.name],
      ["Phone", data.phone],
      ["Where did you hear about us?", data.heard_about],
      ["How familiar are you with what we do?", data.familiarity],
      [
        "Six months in, what would feel like a real win?",
        data.six_month_win.join(" · "),
      ],
      [
        "How patient would you say you are with the process?",
        data.patience,
      ],
      [
        "What does training look like for you right now?",
        data.current_training.join(" · "),
      ],
      ["Which schedule would work best for you?", data.preferred_schedule],
      ["When do you usually prefer to train?", data.preferred_training_time],
      ["Does the membership structure work for you?", data.membership_fit],
      [
        "Anything we should know before we reach out?",
        data.anything_else || "Not provided",
      ],
      ["Submitted", data.submitted_at],
    ];

    const text = [
      "Bandra Movement Club — New Interest Form Submission",
      "",
      ...rows.map(([label, value]) => `${label}\n${value}\n`),
    ].join("\n");

    const html = `
      <div style="font-family:Helvetica,Arial,sans-serif;color:#1a1a1a">
        <h2 style="font-weight:400;letter-spacing:.04em">
          Bandra Movement Club — New Interest Form Submission
        </h2>

        ${rows
          .map(
            ([label, value]) =>
              `<p style="margin:0 0 16px">
                <strong style="display:block;font-weight:600">
                  ${esc(label)}
                </strong>
                ${esc(value)}
              </p>`,
          )
          .join("")}
      </div>
    `;

    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "onboarding@resend.dev",
          to: [to],
          subject: `New interest form submission — ${data.name}`,
          html,
          text,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.error("[interest] Resend error:", responseData);

        return {
          sent: false,
          reason: "send_failed" as const,
        };
      }

      console.log("[interest] Resend success:", responseData);

      return {
        sent: true,
        reason: null,
      };
    } catch (err) {
      console.error("[interest] Email failed:", err);

      return {
        sent: false,
        reason: "send_failed" as const,
      };
    }
  });