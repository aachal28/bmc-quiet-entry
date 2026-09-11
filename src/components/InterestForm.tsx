import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { notifyInterestSubmission } from "@/lib/notify.functions";
import { questions } from "@/lib/interest-questions";

type Answers = Record<string, string | string[]>;

const pad = (n: number) => String(n).padStart(2, "0");

const asList = (v: string | string[] | undefined) =>
  Array.isArray(v) ? v : v ? [String(v)] : [];


export function InterestForm({ onSubmitted }: { onSubmitted: () => void }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const q = questions[step]!;
  const total = questions.length;
  const value = answers[q.field];

  const setValue = (v: string | string[]) =>
    setAnswers((prev) => ({ ...prev, [q.field]: v }));

  const canProceed = (() => {
    if (q.kind === "text") return q.optional || String(value ?? "").trim().length > 0;
    if (q.kind === "single") return typeof value === "string" && value.length > 0;
    const picked = Array.isArray(value) ? value : [];
    return q.exactly ? picked.length === q.exactly : picked.length > 0;
  })();

  const toggleMulti = (option: string) => {
    if (q.kind !== "multi") return;
    const picked = Array.isArray(value) ? [...value] : [];
    const i = picked.indexOf(option);
    if (i >= 0) picked.splice(i, 1);
    else if (!q.exactly || picked.length < q.exactly) picked.push(option);
    setValue(picked);
  };

  const submit = async () => {
    if (submitting) return;

    const name = String(answers["name"] ?? "").trim();
    const phone = String(answers["phone"] ?? "").trim();
    const heardAbout = String(answers["heard_about"] ?? "");
    const familiarity = String(answers["familiarity"] ?? "");
    const sixMonthWin = asList(answers["six_month_wins"]);
    const patience = String(answers["patience"] ?? "");
    const currentTraining = asList(answers["current_training"]);
    const preferredSchedule = String(answers["preferred_schedule"] ?? "");
    const preferredTrainingTime = String(answers["preferred_time"] ?? "");
    const membershipFit = String(answers["quarterly_commitment"] ?? "");
    const anythingElse = String(answers["notes"] ?? "").trim();

    const missingRequired =
      !name ||
      !phone ||
      !heardAbout ||
      !familiarity ||
      !patience ||
      !preferredSchedule ||
      !preferredTrainingTime ||
      !membershipFit ||
      currentTraining.length === 0;

    if (missingRequired) {
      setError("Some answers are missing. Please go back and complete them.");
      return;
    }
    if (sixMonthWin.length !== 2) {
      setError("Please go back and pick exactly 2 answers for question 05.");
      return;
    }

    setSubmitting(true);
    setError(null);

    const { error: insertError } = await supabase
      .from("interest_submissions")
      .insert({
        name,
        phone,
        heard_about: heardAbout,
        familiarity,
        six_month_win: sixMonthWin,
        patience,
        current_training: currentTraining,
        preferred_schedule: preferredSchedule,
        preferred_training_time: preferredTrainingTime,
        membership_fit: membershipFit,
        anything_else: anythingElse || null,
      });

    if (insertError) {
      setSubmitting(false);
      setError("Something didn't go through. Please try again.");
      return;
    }

    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    try {
  await notifyInterestSubmission({
    data: {
      name,
      phone,
      heard_about: heardAbout,
      familiarity,
      six_month_win: sixMonthWin,
      patience,
      current_training: currentTraining,
      preferred_schedule: preferredSchedule,
      preferred_training_time: preferredTrainingTime,
      membership_fit: membershipFit,
      anything_else: anythingElse,
      submitted_at: submittedAt,
    },
  });
} catch (err) {
  console.error("[interest] notification failed", err);
  setSubmitting(false);
  setError("Your details were saved, but the email notification could not be sent. Please try again.");
  return;
}


    setSubmitting(false);
    onSubmitted();
};


  const next = () => {
    if (!canProceed) return;
    if (step === total - 1) void submit();
    else setStep((s) => s + 1);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        next();
      }}
      className="mx-auto flex min-h-dvh w-full max-w-xl flex-col px-6 py-10 sm:px-8"
    >
      <div className="text-[0.7rem] tracking-[0.3em] text-muted-foreground">
        {pad(step + 1)} / {pad(total)}
      </div>

      <div key={step} className="quiet-in mt-16 flex-1 sm:mt-24">
        <h1 className="font-serif text-[1.65rem] leading-snug font-light text-foreground sm:text-3xl">
          {q.title}
        </h1>
        {q.subtitle ? (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{q.subtitle}</p>
        ) : null}
        {q.kind === "text" && q.optional ? (
          <p className="mt-2 text-[0.7rem] tracking-[0.2em] text-muted-foreground">
            OPTIONAL
          </p>
        ) : null}

        <div className="mt-10">
          {q.kind === "text" ? (
            q.multiline ? (
              <textarea
                autoFocus
                rows={4}
                value={String(value ?? "")}
                onChange={(e) => setValue(e.target.value)}
                placeholder={q.placeholder}
                className="w-full resize-none border-b border-border bg-transparent pb-3 text-lg text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-foreground"
              />
            ) : (
              <input
                autoFocus
                type={q.inputType ?? "text"}
                inputMode={q.inputType === "tel" ? "tel" : undefined}
                autoComplete={q.inputType === "tel" ? "tel" : "name"}
                value={String(value ?? "")}
                onChange={(e) => setValue(e.target.value)}
                placeholder={q.placeholder}
                className="w-full border-b border-border bg-transparent pb-3 text-lg text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-foreground"
              />
            )
          ) : (
            <ul className="space-y-1">
              {q.options.map((option) => {
                const selected =
                  q.kind === "single"
                    ? value === option
                    : Array.isArray(value) && value.includes(option);
                return (
                  <li key={option}>
                    <button
                      type="button"
                      onClick={() =>
                        q.kind === "single" ? setValue(option) : toggleMulti(option)
                      }
                      className="flex w-full items-start gap-4 py-4 text-left"
                    >
                      <span
                        aria-hidden
                        className={[
                          "mt-1 h-4 w-4 shrink-0 border border-foreground/60 transition-colors",
                          q.kind === "single" ? "rounded-full" : "",
                          selected ? "bg-foreground" : "bg-transparent",
                        ].join(" ")}
                      />
                      <span
                        className={
                          selected
                            ? "text-base leading-relaxed text-foreground"
                            : "text-base leading-relaxed text-muted-foreground"
                        }
                      >
                        {option}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {error ? <p className="mt-8 text-sm text-destructive">{error}</p> : null}
      </div>

      <div className="mt-12 flex items-center justify-between pt-6">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="-ml-1 px-1 py-3 text-[0.75rem] tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
          >
            BACK
          </button>
        ) : (
          <span />
        )}
        <button
          type="submit"
          disabled={!canProceed || submitting}
          className="border border-foreground px-7 py-3 text-[0.75rem] tracking-[0.25em] text-foreground transition-opacity disabled:opacity-25"
        >
          {step === questions.length - 1
            ? submitting
              ? "SENDING"
              : "SUBMIT"
            : "NEXT →"}
        </button>
      </div>
    </form>
  );
}
