import React from "react";

function PleaseWait() {
  return (
    <div className="grid h-[100svh] w-full place-items-center bg-ink-950">
      <div className="flex flex-col items-center gap-4">
        <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-teal-300" />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">Loading</span>
      </div>
    </div>
  );
}

export default PleaseWait;
