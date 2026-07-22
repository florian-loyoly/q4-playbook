"use client";

import { P, BODY } from "@/lib/tokens";
import { Icon } from "./Icon";

export function Toast({ message }: { message: string }) {
  return (
    <div
      role="status"
      style={{
        position: "fixed",
        left: "50%",
        bottom: 28,
        transform: "translateX(-50%)",
        zIndex: 100,
        background: P.p950,
        color: "#fff",
        fontFamily: BODY,
        fontSize: 14,
        fontWeight: 500,
        padding: "12px 20px",
        borderRadius: 999,
        boxShadow: "0 12px 30px rgba(0,0,0,.25)",
        display: "flex",
        alignItems: "center",
        gap: 10,
        animation: "pbToast 3.6s ease forwards",
      }}
    >
      <span style={{ width: 20, height: 20, borderRadius: 999, background: P.blue, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
        <Icon name="check" color="#fff" size={13} />
      </span>
      {message}
    </div>
  );
}
