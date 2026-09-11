import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { InterestForm } from "@/components/InterestForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bandra Movement Club" },
      {
        name: "description",
        content:
          "A private, members-only movement studio in Bandra, Mumbai. Show interest.",
      },
      { property: "og:title", content: "Bandra Movement Club" },
      {
        property: "og:description",
        content:
          "A private, members-only movement studio in Bandra, Mumbai. Show interest.",
      },
    ],
  }),
  component: Index,
});

type Stage = "landing" | "form" | "done";

function Index() {
  const [stage, setStage] = useState<Stage>("landing");

  return (
    <main className="concrete min-h-dvh bg-background">
      {stage === "landing" ? (
        <section className="quiet-in flex min-h-dvh flex-col items-center justify-center px-8">
          <img
  src={logo.url}
  alt="Bandra Movement Club"

/>


          <button
            type="button"
            onClick={() => setStage("form")}
            className="mt-10 px-2 py-3 text-[0.75rem] tracking-[0.3em] text-foreground underline-offset-8 hover:underline"
          >
            SHOW INTEREST
          </button>
        </section>
      ) : null}

      {stage === "form" ? (
        <div className="quiet-in">
          <InterestForm onSubmitted={() => setStage("done")} />
        </div>
      ) : null}

      {stage === "done" ? (
        <section className="quiet-in flex min-h-dvh items-center justify-center px-8">
          <p className="max-w-md text-center font-serif text-xl leading-relaxed font-light text-foreground">
            Thank you for your interest, if we have a spot for you, someone from our team
            will reach out!
          </p>
        </section>
      ) : null}
    </main>
  );
}
