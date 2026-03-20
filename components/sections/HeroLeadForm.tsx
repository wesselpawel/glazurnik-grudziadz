"use client";

import { useState } from "react";
import type { SiteContent } from "@/content";

type Props = {
  leadForm: SiteContent["lead_form"];
};

type Field = SiteContent["lead_form"]["fields"][number];

const inputClass =
  "mt-2 w-full border border-[var(--border)] bg-[var(--card)] px-4 py-2.5 text-sm text-[var(--text-heading)] shadow-[inset_0_1px_2px_rgba(28,25,23,0.04)] outline-none transition-colors placeholder:text-[var(--text-caption)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]";

function FieldBlock({ field }: { field: Field }) {
  return (
    <div>
      <label htmlFor={`hero-${field.id}`} className="text-xs font-semibold text-[var(--text-body)]">
        {field.label}
        {field.required ? (
          <span className="text-[var(--accent)]" aria-hidden>
            {" "}
            *
          </span>
        ) : null}
      </label>
      {field.type === "textarea" ? (
        <textarea
          id={`hero-${field.id}`}
          name={field.id}
          required={field.required}
          rows={field.rows ?? 3}
          placeholder={field.placeholder}
          className={`${inputClass} min-h-[5.5rem] resize-y`}
        />
      ) : null}
      {field.type === "file" ? (
        <input
          id={`hero-${field.id}`}
          name={field.id}
          type="file"
          required={field.required}
          accept={field.accept}
          className="mt-2 block w-full text-xs text-[var(--text-tertiary)] file:mr-3 file:border file:border-[var(--border)] file:bg-[var(--background)] file:px-3 file:py-2 file:text-xs file:font-medium file:text-[var(--text-body)] hover:file:bg-[var(--hero-tint)]"
        />
      ) : null}
      {field.type === "text" || field.type === "tel" ? (
        <input
          id={`hero-${field.id}`}
          name={field.id}
          type={field.type}
          required={field.required}
          defaultValue={
            "defaultValue" in field && typeof field.defaultValue === "string"
              ? field.defaultValue
              : undefined
          }
          placeholder={field.placeholder}
          autoComplete={field.autoComplete}
          className={inputClass}
        />
      ) : null}
    </div>
  );
}

export function HeroLeadForm({ leadForm }: Props) {
  const [sent, setSent] = useState(false);

  const byId = Object.fromEntries(leadForm.fields.map((f) => [f.id, f])) as Record<string, Field | undefined>;
  const name = byId.name;
  const phone = byId.phone;
  const scope = byId.scope;
  const area = byId.area;
  const photo = byId.photo;

  return (
    <div
      id={leadForm.id}
      className="scroll-mt-28 border border-[var(--border)] bg-[var(--trust-surface)] p-7 shadow-[0_24px_56px_-14px_rgba(0,0,0,0.38)] backdrop-blur-md sm:p-8 lg:p-9"
    >
      <div className="border-b border-[var(--border)] pb-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
          Formularz kontaktowy
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold leading-snug tracking-tight text-[var(--text-heading)] sm:text-2xl">
          {leadForm.title}
        </h2>
        <p className="mt-3.5 flex items-start gap-2.5 text-sm leading-[1.55] text-[var(--text-secondary)]">
          <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 bg-[var(--accent)]" aria-hidden />
          {leadForm.note}
        </p>
      </div>

      {sent ? (
        <p
          className="mt-6 border border-emerald-200/80 bg-emerald-50/95 p-5 text-sm leading-relaxed text-emerald-950"
          role="status"
        >
          Dziękujemy za wiadomość. Wkrótce się odezwiemy.
        </p>
      ) : (
        <form
          className="mt-7 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          {name && phone ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <FieldBlock field={name} />
              <FieldBlock field={phone} />
            </div>
          ) : null}
          {scope ? <FieldBlock field={scope} /> : null}
          {area && photo ? (
            <div className="grid gap-4 sm:grid-cols-2 sm:items-end">
              <FieldBlock field={area} />
              <FieldBlock field={photo} />
            </div>
          ) : (
            <>
              {area ? <FieldBlock field={area} /> : null}
              {photo ? <FieldBlock field={photo} /> : null}
            </>
          )}

          <button
            type="submit"
            className="w-full bg-[var(--accent)] py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[var(--accent-hover)]"
          >
            {leadForm.cta}
          </button>
          <p className="text-center text-[11px] leading-[1.6] text-[var(--text-tertiary)]">
            Wysyłając formularz, zgadzasz się na kontakt w sprawie zapytania. Nie przekazujemy danych osobom
            trzecim.
          </p>
        </form>
      )}
    </div>
  );
}
