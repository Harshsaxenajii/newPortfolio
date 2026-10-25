import React from "react";

// Renders "plain **highlighted** plain" strings from the data file.
function RichText({ text, strongClassName = "font-medium text-slate-100" }) {
  return text.split("**").map((part, i) =>
    i % 2 ? (
      <strong key={i} className={strongClassName}>
        {part}
      </strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}

export default RichText;
