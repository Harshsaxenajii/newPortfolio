import React, { useRef } from "react";

// Card whose border and surface light up around the mouse pointer.
function SpotlightCard({ children, className = "", innerClassName = "", as: Tag = "div", ...rest }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      className={`group/card relative rounded-2xl bg-white/[0.07] p-px transition-colors duration-500 hover:bg-white/[0.1] ${className}`}
      {...rest}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(94,234,212,0.6), rgba(139,92,246,0.3) 45%, transparent 75%)",
        }}
      />
      <div className="relative h-full overflow-hidden rounded-[15px] bg-ink-900">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(94,234,212,0.07), transparent 60%)",
          }}
        />
        <div className={`relative h-full ${innerClassName}`}>{children}</div>
      </div>
    </Tag>
  );
}

export default SpotlightCard;
