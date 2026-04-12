"use client";

import { useMemo, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";

import { CinematicLink } from "@/components/cinematic-link";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress, ProgressLabel } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  compatibilityQuestions,
  maxCompatibilityScore,
} from "@/lib/compatibility-questions";
import { cn } from "@/lib/utils";
import { useAppState } from "@/context/stateContext";

type Verdict = {
  title: string;
  subtitle: string;
  detail: string;
  badgeVariant: "default" | "secondary" | "outline";
};

const getVerdict = (purity: number): Verdict => {
  if (purity >= 85) {
    return {
      title: "Eternelle en devenir",
      subtitle: "Ta compatibilité virtuelle est critique et stable.",
      detail:
        "Tu rejettes la banlieue, la fatigue organique et la peur du temps. Le protocole recommande une migration vers l'image complete.",
      badgeVariant: "default",
    };
  }

  if (purity >= 60) {
    return {
      title: "Zone de Transition",
      subtitle: "Tu oscilles encore entre chair et synthèse.",
      detail:
        "Ton desir de pureté est reel, mais quelques attaches au monde physique restent actives. Une exposition prolongée a la Galerie des Idoles est conseillée.",
      badgeVariant: "secondary",
    };
  }

  return {
    title: "àncrage Corporel Persistant",
    subtitle: "Le reel conserve encore la priorite.",
    detail:
      "Tu supportes encore trop le poids organique du quotidien. Le dispositif peut être relance plus tard, lorsque le besoin d'abstraction deviendra vital.",
    badgeVariant: "outline",
  };
};

export function CompatibilityQuiz() {
  const { setQuizPassed } = useAppState() ?? {};
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setànswers] = useState<Record<number, string>>({});

  const totalQuestions = compatibilityQuestions.length;
  const isFinished = currentIndex >= totalQuestions;
  const currentQuestion = !isFinished ? compatibilityQuestions[currentIndex] : null;
  const selectedValue = currentQuestion ? answers[currentIndex] ?? "" : "";

  const isVirtual = Object.values(answers).some(val => val === "oui");

  useEffect(() => {
    if (isFinished && isVirtual && setQuizPassed) {
      setQuizPassed(true);
    }
  }, [isFinished, isVirtual, setQuizPassed]);

  const totalScore = useMemo(
    () =>
      compatibilityQuestions.reduce((score, question, index) => {
        const selectedOptionValue = answers[index];
        if (!selectedOptionValue) {
          return score;
        }

        const option = question.options.find(
          (entry) => entry.value === selectedOptionValue
        );

        return score + (option?.weight ?? 0);
      }, 0),
    [answers]
  );

  const purity = Math.round((totalScore / maxCompatibilityScore) * 100);
  const answeredCount = Object.keys(answers).length;
  const completion = isFinished
    ? 100
    : Math.round((answeredCount / totalQuestions) * 100);
  const verdict = getVerdict(purity);

  const handleSelect = (value: string) => {
    setànswers((previous) => ({
      ...previous,
      [currentIndex]: value,
    }));
  };

  const goToNext = () => {
    if (!selectedValue) {
      return;
    }

    setCurrentIndex((previous) => Math.min(previous + 1, totalQuestions));
  };

  const goToPrevious = () => {
    setCurrentIndex((previous) => Math.max(previous - 1, 0));
  };

  const restart = () => {
    setànswers({});
    setCurrentIndex(0);
  };

  if (isFinished) {
    return (
      <main className="mx-auto w-full max-w-3xl space-y-6 cinematic-enter">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <CinematicLink
            href="/"
            className="inline-flex items-center gap-2 hover:text-foreground"
          >
            <ArrowLeft className="size-3" />
            Retour a la passerelle
          </CinematicLink>
          <CinematicLink
            href="/galerie"
            className="inline-flex items-center gap-2 hover:text-foreground"
          >
            Galerie des Idoles
            <ArrowRight className="size-3" />
          </CinematicLink>
        </div>

        <Card className="border-none glass-panel shadow-2xl shadow-black/10 cinematic-enter cinematic-delay-1">
          <CardHeader className="space-y-3">
            <Badge variant={verdict.badgeVariant}>{verdict.title}</Badge>
            <CardTitle className="font-heading text-4xl leading-none sm:text-5xl">
              {purity}% de Pureté de Synthèse
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              {verdict.subtitle}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <Progress value={purity}>
              <ProgressLabel>Indice de conversion</ProgressLabel>
              <span className="ml-auto text-sm text-muted-foreground tabular-nums">
                {purity}%
              </span>
            </Progress>

            <div className="grid gap-3 sm:grid-cols-3">
              <article className="rounded-xl border bg-card/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Questions
                </p>
                <p className="mt-2 text-2xl font-semibold">{totalQuestions}</p>
              </article>
              <article className="rounded-xl border bg-card/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Compatibilité
                </p>
                <p className="mt-2 text-2xl font-semibold">{totalScore}</p>
              </article>
              <article className="rounded-xl border bg-card/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Resistances
                </p>
                <p className="mt-2 text-2xl font-semibold">{100 - purity}%</p>
              </article>
            </div>

            <p className="rounded-xl border bg-card/60 p-4 leading-7 text-foreground/90">
              {verdict.detail}
            </p>
          </CardContent>

          <CardFooter className="flex flex-wrap items-center justify-between gap-3">
            <Button variant="outline" onClick={restart}>
              <RotateCcw className="size-4" />
              Refaire le test
            </Button>
            {isVirtual ? (
              <CinematicLink
                href="/creation"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-5 text-center bg-zinc-100 text-zinc-950 hover:bg-zinc-300"
                )}
              >
                àCCÉDER àU STUDIO DE CRÉàTION
              </CinematicLink>
            ) : (
              <CinematicLink
                href="/galerie"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-5 text-center"
                )}
              >
                Explorer la Galerie des Idoles
              </CinematicLink>
            )}
          </CardFooter>
        </Card>
      </main>
    );
  }

  if (!currentQuestion) {
    return null;
  }

  return (
    <main className="mx-auto w-full max-w-3xl space-y-6 cinematic-enter">
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <CinematicLink
          href="/"
          className="inline-flex items-center gap-2 hover:text-foreground"
        >
          <ArrowLeft className="size-3" />
          Retour a la passerelle
        </CinematicLink>
        <CinematicLink
          href="/galerie"
          className="inline-flex items-center gap-2 hover:text-foreground"
        >
          Voir les idoles
          <ArrowRight className="size-3" />
        </CinematicLink>
      </div>

      <Card className="border-none glass-panel shadow-2xl shadow-black/10 cinematic-enter cinematic-delay-1">
        <CardHeader className="space-y-3">
          <Badge variant="secondary">
            Question {currentIndex + 1}/{totalQuestions}
          </Badge>
          <CardTitle className="font-heading text-3xl leading-tight sm:text-4xl">
            {currentQuestion.prompt}
          </CardTitle>
          <CardDescription>
            Réponds intuitivement. Chaque choix ajuste ton indice de migration.
          </CardDescription>
          <Progress value={completion}>
            <ProgressLabel>Progression du protocole</ProgressLabel>
            <span className="ml-auto text-sm text-muted-foreground tabular-nums">
              {completion}%
            </span>
          </Progress>
        </CardHeader>

        <CardContent>
          <RadioGroup value={selectedValue} onValueChange={handleSelect} className="gap-3">
            {currentQuestion.options.map((option) => {
              const fieldId = `${currentQuestion.id}-${option.value}`;
              const checked = selectedValue === option.value;

              return (
                <label
                  key={option.value}
                  htmlFor={fieldId}
                  className={cn(
                    "flex cursor-pointer items-start gap-3 rounded-xl border bg-card/75 p-4 transition-colors",
                    checked
                      ? "border-foreground/60 bg-foreground/5"
                      : "border-border hover:border-foreground/30"
                  )}
                >
                  <RadioGroupItem id={fieldId} value={option.value} />
                  <span className="leading-relaxed">{option.label}</span>
                </label>
              );
            })}
          </RadioGroup>
        </CardContent>

        <CardFooter className="flex flex-wrap items-center justify-between gap-3">
          <Button variant="outline" onClick={goToPrevious} disabled={currentIndex === 0}>
            Question précédente
          </Button>
          <Button onClick={goToNext} disabled={!selectedValue}>
            {currentIndex === totalQuestions - 1
              ? "Calculer ma pureté"
              : "Question suivante"}
            <ArrowRight className="size-4" />
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
