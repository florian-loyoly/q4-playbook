"use client";

import { useState } from "react";
import type { MarketId, UIStrings } from "@/lib/types";
import { DISP, BODY, P } from "@/lib/tokens";
import { Icon } from "./Icon";
import { submitLead } from "@/lib/leads";

type Fields = { email: string; company: string; job: string; website: string; consent: boolean };
type Errors = Partial<Record<keyof Fields, string>>;

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const URL_RE = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/;

export function LeadForm({ market, ui, onSuccess }: { market: MarketId; ui: UIStrings; onSuccess: () => void }) {
  const [form, setForm] = useState<Fields>({ email: "", company: "", job: "", website: "", consent: false });
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  function validate(f: Fields): Errors {
    const e: Errors = {};
    if (!f.email.trim()) e.email = ui.errRequired;
    else if (!EMAIL_RE.test(f.email)) e.email = ui.errEmail;
    if (!f.company.trim()) e.company = ui.errRequired;
    if (!f.job.trim()) e.job = ui.errRequired;
    if (!f.website.trim()) e.website = ui.errRequired;
    else if (!URL_RE.test(f.website.trim())) e.website = ui.errUrl;
    if (!f.consent) e.consent = ui.errConsent;
    return e;
  }

  function onField<K extends keyof Fields>(name: K, val: Fields[K]) {
    const nf = { ...form, [name]: val };
    setForm(nf);
    setTouched((t) => ({ ...t, [name]: true }));
    if (Object.keys(errors).length) setErrors(validate(nf));
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate(form);
    if (Object.keys(e).length) {
      setErrors(e);
      setTouched({ email: true, company: true, job: true, website: true, consent: true });
      return;
    }
    setSubmitting(true);
    const res = await submitLead({
      email: form.email.trim(),
      company: form.company.trim(),
      job: form.job.trim(),
      website: form.website.trim(),
      consent: form.consent,
      market,
      source: "Q4 Playbook 2026",
    });
    setSubmitting(false);
    if (res.ok) onSuccess();
  }

  const field = (name: keyof Fields, label: string, ph: string, type = "text") => {
    const err = touched[name] && errors[name];
    return (
      <div style={{ marginBottom: 14 }}>
        <label htmlFor={`f-${name}`} style={{ display: "block", fontFamily: BODY, fontSize: 12, fontWeight: 500, color: P.p900, marginBottom: 6 }}>
          {label}
        </label>
        <input
          id={`f-${name}`}
          type={type}
          value={form[name] as string}
          placeholder={ph}
          autoComplete="off"
          onChange={(e) => onField(name, e.target.value as never)}
          onBlur={() => {
            setTouched((t) => ({ ...t, [name]: true }));
            setErrors(validate(form));
          }}
          style={{
            width: "100%",
            background: "#fff",
            border: `1px solid ${err ? P.pink : P.p200}`,
            borderRadius: 12,
            padding: "11px 14px",
            fontFamily: BODY,
            fontSize: 14,
            color: P.p950,
            outline: "none",
            boxShadow: err ? "0 0 0 3px rgba(247,79,158,.12)" : "none",
          }}
        />
        {err ? <div style={{ fontFamily: BODY, fontSize: 12, color: P.pink, marginTop: 5 }}>{err}</div> : null}
      </div>
    );
  };

  const consentErr = touched.consent && errors.consent;

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      style={{
        position: "relative",
        zIndex: 2,
        width: "100%",
        maxWidth: 460,
        background: "#fff",
        border: `1px solid ${P.p200}`,
        borderRadius: 4,
        boxShadow: "0 20px 50px rgba(43,37,31,.16), 0 4px 12px rgba(43,37,31,.08)",
        padding: "30px 28px",
        animation: "pbFadeUp .5s cubic-bezier(.2,.8,.2,1) both",
      }}
    >
      <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: 10, background: P.blueTert, border: "1px solid #B3C8FF", marginBottom: 14 }}>
        <Icon name="lock" color={P.blue} size={20} />
      </div>
      <h2 style={{ fontFamily: DISP, fontWeight: 600, fontSize: 23, lineHeight: 1.15, letterSpacing: "-.02em", color: P.p950, margin: "0 0 8px" }}>{ui.gateTitle}</h2>
      <p style={{ fontFamily: BODY, fontSize: 14, lineHeight: 1.5, color: P.p700, margin: "0 0 22px" }}>{ui.gateSub}</p>

      {field("email", ui.fieldEmail, ui.phEmail, "email")}
      {field("company", ui.fieldCompany, ui.phCompany)}
      {field("job", ui.fieldJob, ui.phJob)}
      {field("website", ui.fieldWebsite, ui.phWebsite)}

      <label style={{ display: "flex", gap: 10, alignItems: "flex-start", margin: "6px 0 4px", cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(e) => onField("consent", e.target.checked)}
          style={{ marginTop: 2, width: 16, height: 16, accentColor: P.blue, flexShrink: 0, cursor: "pointer" }}
        />
        <span style={{ fontFamily: BODY, fontSize: 12, lineHeight: 1.5, color: P.p800 }}>
          {ui.consent}{" "}
          <a href="#" onClick={(e) => e.preventDefault()} style={{ color: P.blue, textDecoration: "underline" }}>
            {ui.privacy}
          </a>
        </span>
      </label>
      {consentErr ? <div style={{ fontFamily: BODY, fontSize: 12, color: P.pink, margin: "2px 0 0 26px" }}>{consentErr}</div> : null}

      <button
        type="submit"
        disabled={submitting}
        style={{
          position: "relative",
          width: "100%",
          marginTop: 18,
          height: 46,
          borderRadius: 10,
          border: "none",
          background: P.blue,
          color: "#fff",
          fontFamily: BODY,
          fontWeight: 500,
          fontSize: 15,
          cursor: submitting ? "wait" : "pointer",
          opacity: submitting ? 0.85 : 1,
          boxShadow: "inset 0 1px 0 rgba(255,255,255,.2), 0 3.5px 6px rgba(41,101,254,.18)",
        }}
      >
        {submitting ? ui.submitting : ui.submit}
        {submitting ? (
          <span style={{ position: "absolute", right: 20, top: "50%", marginTop: -8, width: 16, height: 16, border: "2px solid rgba(255,255,255,.5)", borderTopColor: "#fff", borderRadius: 999, animation: "pbSpin .7s linear infinite" }} />
        ) : null}
      </button>
    </form>
  );
}
