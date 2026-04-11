import { CompatibilityQuiz } from "@/components/compatibility-quiz";

export default function CalculateurPage() {
  return (
    <div className="relative min-h-screen overflow-hidden px-6 py-10 sm:px-10 sm:py-14">
      <div className="pointer-events-none absolute inset-0 synth-grid opacity-45" />
      <div className="relative z-10">
        <CompatibilityQuiz />
      </div>
    </div>
  );
}
