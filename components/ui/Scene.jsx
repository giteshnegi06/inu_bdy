// Scales design pixels to the container width using CSS only (no JS, so it is right on first paint):
// tan(atan2(100cqw, Wpx)) is the unitless ratio  container-width / W.
const ratio = (w) => `tan(atan2(100cqw, ${w}px))`;

/**
 * Shows the rectangle (x, y, w, h) of the design canvas, scaled to the width of its container.
 * Children use absolute design coordinates.
 */
export default function Scene({ x, y, w, h, children, style }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minWidth: 0,
        aspectRatio: `${w} / ${h}`,
        containerType: "inline-size",
        overflow: "hidden",
        ...style,
      }}
    >
      <div style={{ position: "absolute", left: 0, top: 0, width: w, height: h, transform: `scale(${ratio(w)})`, transformOrigin: "0 0" }}>
        <div style={{ position: "absolute", left: -x, top: -y, width: 0, height: 0 }}>{children}</div>
      </div>
    </div>
  );
}

/**
 * Like Scene, but drawn at a fixed scale inside a horizontally scrollable row.
 * Use it for wide art that would be too small if squeezed to the screen width.
 */
export function ScrollScene({ x, y, w, h, scale, children, label }) {
  return (
    <div className="h-scroll" role="group" aria-label={label} tabIndex={0}>
      <div style={{ position: "relative", width: w * scale, height: h * scale, flex: "none" }}>
        <div style={{ position: "absolute", left: 0, top: 0, width: w, height: h, transform: `scale(${scale})`, transformOrigin: "0 0" }}>
          <div style={{ position: "absolute", left: -x, top: -y, width: 0, height: 0 }}>{children}</div>
        </div>
      </div>
    </div>
  );
}
