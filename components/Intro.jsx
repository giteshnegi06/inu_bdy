"use client";

import { useEffect } from "react";
import { media } from "@/lib/utils";

// Fixed positions for the baby's-breath dots in the bouquet (x, y, r) so the art never changes between renders.
const BREATH = [
  [668, 342, 3], [684, 330, 2.6], [700, 322, 3], [722, 318, 2.6], [744, 326, 3], [766, 338, 2.6], [782, 352, 3],
  [660, 372, 2.6], [676, 388, 3], [792, 380, 2.6], [786, 404, 3], [650, 396, 2.4], [706, 342, 2.4], [736, 340, 2.8],
  [758, 362, 2.4], [694, 358, 2.4], [770, 392, 2.6], [662, 412, 2.4],
];
const ROSES = [
  [690, 372, 25], [734, 356, 26], [714, 398, 27], [758, 402, 24], [674, 410, 21],
];
const LEAVES = [
  [640, 372, -40], [652, 340, -70], [800, 372, 40], [812, 400, 70], [690, 318, -20], [770, 322, 25], [650, 430, -55],
];

function Rose({ cx, cy, r }) {
  const stroke = { fill: "none", stroke: "#8f0c1f", strokeWidth: 1.6, strokeLinecap: "round" };
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="#cf1330" />
      <path d={`M${cx - r * 0.85} ${cy + r * 0.1} Q${cx - r * 0.5} ${cy - r * 0.9} ${cx + r * 0.3} ${cy - r * 0.8}`} {...stroke} />
      <path d={`M${cx + r * 0.85} ${cy - r * 0.05} Q${cx + r * 0.6} ${cy + r * 0.8} ${cx - r * 0.2} ${cy + r * 0.85}`} {...stroke} />
      <path d={`M${cx - r * 0.45} ${cy - r * 0.1} Q${cx} ${cy - r * 0.6} ${cx + r * 0.45} ${cy - r * 0.05} Q${cx + r * 0.1} ${cy + r * 0.45} ${cx - r * 0.35} ${cy + r * 0.15}`} {...stroke} />
      <circle cx={cx} cy={cy} r={r * 0.14} fill="#a30c22" />
    </g>
  );
}

/**
 * Opening screen: an envelope with a "Happy Birthday" card, a camera and a bouquet.
 * `state` is "closed" | "opening" | "done"; clicking anywhere on the scene calls `onOpen`.
 */
export default function Intro({ state, onOpen }) {
  // Keep the page behind the intro from scrolling until it is opened.
  useEffect(() => {
    document.body.style.overflow = state === "done" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [state]);

  if (state === "done") return null;

  return (
    <div className={`intro ${state}`}>
      <button type="button" className="intro-btn" onClick={onOpen} aria-label="Open the birthday card" disabled={state !== "closed"}>
        <svg viewBox="140 104 710 530" role="img" aria-hidden="true" className="intro-svg">
          <defs>
            <clipPath id="env-clip">
              <rect x="300" y="60" width="300" height="440" />
            </clipPath>
            <filter id="soft" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* envelope: back, open flap, card, front folds, closing flap */}
          <g filter="url(#soft)">
            <rect x="300" y="250" width="300" height="250" rx="4" fill="#e6dec9" />
          </g>
          <polygon className="flap-open" points="300,250 600,250 450,375" fill="#ddd4be" />

          <g clipPath="url(#env-clip)">
            <g className="card">
              <rect x="330" y="278" width="250" height="196" fill="#fbfaf7" stroke="#eee9de" strokeWidth="1" />
              <text x="455" y="352" textAnchor="middle" className="script" fontSize="46">Happy</text>
              <text x="470" y="408" textAnchor="middle" className="script" fontSize="46">Birthday</text>
            </g>
          </g>

          <polygon points="300,250 450,375 300,500" fill="#efe8d6" />
          <polygon points="600,250 450,375 600,500" fill="#efe8d6" />
          <polygon points="300,500 450,375 600,500" fill="#f4eedf" />
          <polygon className="flap-closed" points="300,250 600,250 450,375" fill="#e9e1cd" />

          {/* little bow doodle + stickers on the envelope */}
          <g transform="translate(330 418) rotate(-8)" fill="none" stroke="#d0303a" strokeWidth="2.2" strokeLinecap="round">
            <path d="M0 0 C-14 -16 -34 -12 -30 4 C-26 14 -8 8 0 0 C8 -8 26 -20 36 -10 C40 0 20 6 0 0" />
            <path d="M0 0 C-4 14 -12 24 -16 34 M0 0 C8 12 14 22 24 30" />
          </g>
          <image href={media("35bbaceb2b42e9daea562ec022646bde")} x="522" y="436" width="48" height="44" transform="rotate(-6 546 458)" />
          <g fill="#e2323e">
            <path d="M558 494 c-8-9-3-15 2-12 c5-3 10 3 2 12z" />
            <path d="M582 508 c-6-7-2-12 2-9 c4-3 8 2 2 9z" />
            <path d="M548 520 c-5-6-2-10 1-8 c3-2 6 2 1 8z" />
          </g>

          {/* camera */}
          <g transform="translate(168 396)" filter="url(#soft)">
            <rect x="0" y="22" width="196" height="104" rx="14" fill="#f4f3f1" stroke="#d7d5d2" />
            <rect x="12" y="8" width="36" height="20" rx="5" fill="#eceae7" stroke="#d0cecb" />
            <rect x="56" y="12" width="18" height="14" rx="3" fill="#e4e2df" />
            <rect x="12" y="46" width="30" height="64" rx="10" fill="#e9e7e4" />
            <circle cx="112" cy="76" r="44" fill="#ecebe8" stroke="#cfcdc9" strokeWidth="2" />
            <circle cx="112" cy="76" r="33" fill="#2a2a2c" />
            <circle cx="112" cy="76" r="23" fill="#0f1822" />
            <circle cx="112" cy="76" r="12" fill="#14304a" />
            <circle cx="102" cy="66" r="5" fill="#ffffff" opacity="0.55" />
            <circle cx="168" cy="52" r="6" fill="#d9d7d4" />
            <text x="58" y="42" fontSize="12" fill="#8a8886" fontFamily="Arial, sans-serif" fontWeight="700">Canon</text>
          </g>

          {/* bouquet */}
          <g filter="url(#soft)">
            <polygon points="612,300 664,330 650,430 600,400" fill="#b5171f" />
            <polygon points="640,330 760,310 828,340 800,470 700,560 640,520" fill="#efe6d2" />
            <polygon points="596,350 650,360 700,470 670,560 612,500" fill="#f7f0e0" />
            <polygon points="760,340 820,350 806,468 720,552 700,470" fill="#e6dbc3" />
            <polygon points="700,470 760,440 800,470 720,560" fill="#f1e8d4" />
            <path d="M650 420 L700 560 L722 560 L706 470 Z" fill="#f9f3e6" />
          </g>
          {LEAVES.map(([x, y, a], i) => (
            <ellipse key={i} cx={x} cy={y} rx="22" ry="8" fill="#82a98a" transform={`rotate(${a} ${x} ${y})`} />
          ))}
          {BREATH.map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} fill="#fff" opacity="0.95" />
          ))}
          {ROSES.map(([x, y, r], i) => (
            <Rose key={i} cx={x} cy={y} r={r} />
          ))}
          {/* ribbon bow */}
          <g fill="#c8102e" stroke="#8f0c1f" strokeWidth="1.5" strokeLinejoin="round">
            <path d="M690 488 C660 458 624 470 636 504 C648 524 680 508 690 488Z" />
            <path d="M690 488 C722 456 760 474 746 508 C732 526 700 508 690 488Z" />
            <path d="M690 488 C672 520 650 560 640 596 L664 586 L690 520Z" />
            <path d="M694 488 C706 522 730 560 750 596 L724 590 L692 520Z" />
            <ellipse cx="692" cy="490" rx="13" ry="11" />
          </g>
          <g fill="#fff8ec" stroke="#d9cfba" strokeWidth="1">
            <rect x="760" y="430" width="38" height="52" rx="3" transform="rotate(12 779 456)" />
          </g>

          <text x="455" y="600" textAnchor="middle" className="hand click-me" fontSize="30">click me!</text>
        </svg>
      </button>
    </div>
  );
}
