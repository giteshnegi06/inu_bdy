const MEDIA = "/assets/media/";

export const round = (n) => +n.toFixed(2);

/** Absolute position from an element's centre, size and rotation (design pixels). */
export const pos = (cx, cy, w, h, rot = 0) => ({
  left: round(cx - w / 2),
  top: round(cy - h / 2),
  width: round(w),
  height: round(h),
  ...(rot ? { transform: `rotate(${rot}deg)` } : {}),
});

/** Resolve a media file: a bare hash means `<hash>.png`, otherwise use the name as-is. */
export const media = (f) => (f.includes(".") ? MEDIA + f : `${MEDIA}${f}.png`);
