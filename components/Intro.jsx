"use client";

import { useEffect } from "react";

const INK = "#1c1c1c";
const DIR = "/assets/bouquet/";

// The bouquet is a stack of pictures laid out inside a 500 x 410 box, drawn at (OX, OY) in the 600 x 780 scene.
// [file, x, y, width, height, rotation in degrees] in the order they are painted (back to front).
const OX = 50;
const OY = 100;
const LAYERS = [
  ["bush-1.webp", 0, -63.9, 500, 537.7, 0],
  ["lily.webp", 125.5, 15.5, 161.1, 161.1, 0.39],
  ["anemone.webp", 265.2, 31.2, 129.7, 129.7, -4.83],
  ["dahlia.webp", 112.4, 130.2, 83.1, 83.5, 2.29],
  ["orchid.webp", 173.8, 107.8, 128.3, 128.3, -4.12],
  ["rose.webp", 279.5, 109.5, 125.1, 125.1, 2.48],
  ["sunflower.webp", 165.1, 163.1, 169.8, 169.8, 3.61],
  ["bush-1-top.webp", 0, -63.9, 500, 537.7, 0],
];

// A small heart centred on (0,0), about `s` px wide.
const heart = (s) => {
  const k = s / 24;
  return `M0 ${9 * k} C${-14 * k} ${-1 * k} ${-8 * k} ${-12 * k} 0 ${-5 * k} C${8 * k} ${-12 * k} ${14 * k} ${-1 * k} 0 ${9 * k}Z`;
};

// Faint hearts sprinkled over the letter paper: [x, y, size, rotation, opacity]
const PAPER_HEARTS = [
  [215, 575, 16, -12, 0.35], [300, 598, 12, 10, 0.3], [395, 585, 18, 8, 0.35], [470, 600, 14, -10, 0.3],
  [250, 618, 10, 6, 0.25], [350, 612, 14, -6, 0.3], [440, 622, 10, 12, 0.25],
];

function Bouquet() {
  return (
    <g>
      {/* pale disc behind the flowers */}
      <circle cx={OX + 250} cy={OY + 205} r="215" fill="#f1f0d0" />
      {LAYERS.map(([file, x, y, w, h, rot]) => (
        <image
          key={file}
          href={DIR + file}
          x={OX + x}
          y={OY + y}
          width={w}
          height={h}
          transform={rot ? `rotate(${rot} ${OX + x + w / 2} ${OY + y + h / 2})` : undefined}
        />
      ))}
    </g>
  );
}

/**
 * Opening screen: a bouquet with an envelope whose letter is half out, saying "Happy Birthday".
 * state: "peek"    -> tap the letter: it slides fully out ("reading")
 *        "reading" -> the intro then fades away on its own ("leaving" -> "done")
 */
export default function Intro({ state, onAdvance }) {
  useEffect(() => {
    document.body.style.overflow = state === "done" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [state]);

  if (state === "done") return null;

  const active = state === "peek";
  const label = "Open the birthday letter";
  const hint = state === "peek" ? "tap the letter ♡" : "";

  return (
    <div className={`intro ${state}`}>
      <button type="button" className="intro-btn" onClick={onAdvance} aria-label={label} disabled={!active}>
        <svg viewBox="0 0 600 780" aria-hidden="true" className="intro-svg">
          <defs>
            <linearGradient id="paper-wash" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="1" stopColor="#f9c9d0" stopOpacity="0.55" />
            </linearGradient>
            <filter id="drop" x="-10%" y="-10%" width="125%" height="130%">
              <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#000" floodOpacity="0.25" />
            </filter>
          </defs>

          <Bouquet />

          {/* envelope back + its open flap (pointing up, behind the letter) */}
          <g filter="url(#drop)">
            <rect x="170" y="620" width="360" height="150" rx="4" fill="#efe6d0" stroke={INK} strokeWidth="1.6" />
          </g>
          <polygon points="170,620 530,620 350,510" fill="#e3d9bf" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />

          {/* the letter: sits half out ("peek"), slides fully out on the first tap ("reading") */}
          <g className="letter">
            <g transform="rotate(-3 350 520)">
              {/* paper: soft blush, double heart-trimmed border */}
              <rect x="175" y="410" width="350" height="220" fill="#fff7f5" stroke={INK} strokeWidth="1.4" filter="url(#drop)" />
              <rect x="175" y="410" width="350" height="220" fill="url(#paper-wash)" />
              <rect x="186" y="421" width="328" height="198" fill="none" stroke="#e5788a" strokeWidth="1.6" strokeDasharray="2 6" strokeLinecap="round" />
              <rect x="192" y="427" width="316" height="186" fill="none" stroke="#f3b4be" strokeWidth="1" />

              {/* corner hearts */}
              {[[196, 431, -15], [504, 431, 15], [196, 609, 15], [504, 609, -15]].map(([x, y, r], i) => (
                <path key={i} d={heart(15)} transform={`translate(${x} ${y}) rotate(${r})`} fill="#e5485f" stroke="#a82336" strokeWidth="0.8" />
              ))}

              {/* hearts floating over the lower half */}
              {PAPER_HEARTS.map(([x, y, sz, r, o], i) => (
                <path key={i} d={heart(sz)} transform={`translate(${x} ${y}) rotate(${r})`} fill="#ec6a7d" opacity={o} />
              ))}

              {/* the greeting */}
              <text x="350" y="470" textAnchor="middle" className="script" fontSize="50" fill="#8f1d2c">Happy</text>
              <text x="350" y="524" textAnchor="middle" className="script" fontSize="50" fill="#8f1d2c">Birthday</text>
              <path d="M262 540 Q350 552 438 540" fill="none" stroke="#e5788a" strokeWidth="1.6" strokeLinecap="round" />
              <path d={heart(16)} transform="translate(350 548)" fill="#e5485f" stroke="#a82336" strokeWidth="0.8" />
            </g>
          </g>

          {/* envelope front (pocket) */}
          <polygon points="170,620 350,705 170,770" fill="#f3ecd9" stroke={INK} strokeWidth="1.4" strokeLinejoin="round" />
          <polygon points="530,620 350,705 530,770" fill="#f3ecd9" stroke={INK} strokeWidth="1.4" strokeLinejoin="round" />
          <polygon points="170,770 350,705 530,770" fill="#f7f1e1" stroke={INK} strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M170 620 L350 705 L530 620" fill="none" stroke={INK} strokeWidth="1.4" strokeLinejoin="round" />
          {/* heart seal where the flaps meet */}
          <g transform="translate(350 700)">
            <path d={heart(62)} fill="#d8283f" stroke="#8f1424" strokeWidth="1.6" strokeLinejoin="round" />
            <path d={heart(28)} transform="translate(-8 -8) rotate(-15)" fill="#ff8d9c" opacity="0.7" />
          </g>
        </svg>
      </button>
      <p className="intro-hint" aria-live="polite">{hint}</p>
    </div>
  );
}
