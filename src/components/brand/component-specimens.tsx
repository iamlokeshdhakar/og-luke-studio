"use client";
import { ArrowRight, Check, Copy } from "lucide-react";
import { useState } from "react";
import { ArchMotif } from "@/components/brand/graphics";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function ComponentSpecimens() {
  const [message, setMessage] = useState(
    "Choose a button to preview its interaction.",
  );
  const [value, setValue] = useState("");
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <p className="eyebrow">01 — Actions</p>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => setMessage("Primary action selected.")}>
              Primary action <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              variant="accent"
              onClick={() => setMessage("Accent action selected.")}
            >
              Accent action
            </Button>
            <Button
              variant="outline"
              onClick={() => setMessage("Secondary action selected.")}
            >
              Secondary
            </Button>
            <Button
              variant="ghost"
              onClick={() => setMessage("Quiet action selected.")}
            >
              Quiet action
            </Button>
            <Button disabled>Unavailable</Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Copy brand name"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText("OG’s Luke Studio");
                  setMessage("Brand name copied.");
                } catch {
                  setMessage(
                    "Clipboard unavailable. Brand name: OG’s Luke Studio.",
                  );
                }
              }}
            >
              <Copy />
            </Button>
          </div>
          <output className="min-h-6 text-xs text-muted-foreground">
            {message}
          </output>
        </div>
        <div className="flex flex-col gap-5">
          <p className="eyebrow">02 — Form controls</p>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="sample-name">Studio name</FieldLabel>
              <Input
                id="sample-name"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder="A space for your ideas"
                aria-describedby="sample-name-help"
              />
              <FieldDescription id="sample-name-help">
                An editable specimen. Nothing is submitted or saved.
              </FieldDescription>
            </Field>
            <Field data-invalid>
              <FieldLabel htmlFor="sample-error">Validation state</FieldLabel>
              <Input
                id="sample-error"
                defaultValue="An incomplete entry"
                aria-invalid="true"
                aria-describedby="sample-error-help"
              />
              <FieldError id="sample-error-help">
                A clear explanation helps people correct an entry.
              </FieldError>
            </Field>
            <Field data-disabled>
              <FieldLabel htmlFor="sample-disabled">Disabled state</FieldLabel>
              <Input
                id="sample-disabled"
                disabled
                placeholder="Currently unavailable"
              />
            </Field>
          </FieldGroup>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <p className="eyebrow">03 — Surfaces</p>
          <Card>
            <CardHeader>
              <CardTitle>A little room for possibility.</CardTitle>
              <CardDescription>
                A card brings related content together, with space to breathe.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-40 items-center justify-center bg-secondary">
                <ArchMotif className="h-32" />
              </div>
            </CardContent>
            <CardFooter className="justify-between gap-4">
              <Badge variant="outline">Brand specimen</Badge>
              <a href="#elements" className="brand-link">
                Explore the elements{" "}
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col gap-5">
          <p className="eyebrow">04 — Status & labels</p>
          <div className="flex flex-wrap gap-3">
            <Badge>Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="accent">Accent</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="success">
              <Check data-icon="inline-start" />
              Success
            </Badge>
            <Badge variant="warning">Attention</Badge>
            <Badge variant="destructive">Error</Badge>
            <Badge variant="info">Information</Badge>
          </div>
          <p className="text-xs text-muted-foreground">
            Status always includes a text label; color is a supporting cue.
          </p>
        </div>
      </div>
    </div>
  );
}
