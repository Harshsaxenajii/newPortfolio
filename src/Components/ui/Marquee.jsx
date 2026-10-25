import React from "react";

// Infinite horizontal ticker. The list is rendered twice so the loop is seamless.
function Marquee({ items, renderItem, reverse = false, duration = 40, className = "" }) {
  return (
    <div className={`group flex overflow-hidden mask-fade-x ${className}`}>
      <ul
        className={`flex w-max shrink-0 items-center ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${duration}s` }}
      >
        {[...items, ...items].map((item, i) => (
          <li key={i} aria-hidden={i >= items.length} className="shrink-0">
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Marquee;
