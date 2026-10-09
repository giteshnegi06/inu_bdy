import { media, pos, round } from "@/lib/utils";

const CARD =
  "M427.29,0L1.5,0C0.7,0 0,0.7 0,1.6L0,499.09C0,499.9 0.7,500.6 1.5,500.6L427.29,500.6C428.1,500.6 428.8,499.9 428.8,499.09L428.8,1.6C428.9,0.7 428.2,0 427.29,0ZM405.06,24.83L405.06,391.95C405.06,392.75 404.36,393.45 403.56,393.45L21.03,393.45C20.23,393.45 19.53,392.75 19.53,391.95L19.53,24.83C19.53,24.03 20.23,23.33 21.03,23.33L403.56,23.33C404.46,23.23 405.06,23.93 405.06,24.83Z";
const BEVEL_DARK =
  "M405.16,24.33C405.16,24.33 404.86,23.43 403.76,23.33L19.73,23.33C19.03,23.33 18.13,23.63 18.13,24.43L18.43,25.13C18.73,24.73 19.23,24.53 19.73,24.53L404.06,24.53L404.06,392.15C404.06,392.65 403.86,393.15 403.46,393.45L403.86,393.45C404.56,393.45 405.16,392.85 405.16,392.15L405.16,24.33ZM428.9,499.19L1.7,499.19L1.7,1.5L0.6,0.5L0.5,0.5C0.3,0.8 0.1,1.1 0.1,1.5L0.1,499.09C0.1,500 0.8,500.6 1.6,500.6L429.4,500.6C429.8,500.6 430.1,500.5 430.4,500.2L428.9,499.19Z";
const BEVEL_LIGHT =
  "M404.76,393.25C404.46,393.65 404.06,393.85 403.56,393.85L19.83,393.85C19.33,393.85 18.83,393.65 18.53,393.15C18.13,392.85 17.92,392.45 17.92,391.95L17.92,24.83C17.92,24.43 18.13,24.03 18.43,23.73L19.53,24.53L19.53,392.35L403.56,392.35C403.76,392.35 403.96,392.25 404.06,392.25L404.76,393.25ZM431,1.5L431,499.19C431,499.6 430.8,500 430.4,500.3L428.7,499.09L428.7,1.6L1.7,1.6L0.6,0.6C0.9,0.2 1.3,0 1.8,0L429.5,0C430.3,0 431,0.7 431,1.5ZM430.8,2.4C430.6,2.1 430.4,1.9 430.1,1.7L430.8,2.4Z";

/** Polaroid card (centre cx,cy, scale s, rotation rot) with a photo clipped to the frame opening. */
export default function Polaroid({ cx, cy, s, rot, photo }) {
  const w = 431 * s;
  const h = 501 * s;
  const rad = (rot * Math.PI) / 180;
  const c = Math.cos(rad);
  const sn = Math.sin(rad);
  const dx = photo.cx - cx;
  const dy = photo.cy - cy;
  const lx = dx * c + dy * sn;
  const ly = -dx * sn + dy * c;
  const inset = `inset(${round(23.33 * s)}px ${round((431 - 405.06) * s)}px ${round((501 - 393.45) * s)}px ${round(19.53 * s)}px)`;
  const box = pos(cx, cy, w, h, rot);

  return (
    <>
      <svg className="a" viewBox="0 0 431 501" style={box}>
        <path d={CARD} fill="#f2f1eb" />
      </svg>
      <div className="a" style={{ ...box, clipPath: inset }}>
        <img
          className="a"
          src={media(photo.f)}
          alt={photo.alt}
          style={{ ...pos(w / 2 + lx, h / 2 + ly, photo.w, photo.h, photo.rot - rot), objectFit: "cover" }}
        />
      </div>
      <svg className="a" viewBox="0 0 431 501" style={box}>
        <path d={BEVEL_DARK} fill="#3c3333" />
        <path d={BEVEL_LIGHT} fill="#fff" />
      </svg>
    </>
  );
}
