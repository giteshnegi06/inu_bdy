/** Absolutely positioned handwriting text. Centered text gets slack on both sides so long lines never overflow. */
export default function Text({ x, y, w, h, fs, lh, al, children, cls = "", style }) {
  const center = al === "center";
  return (
    <p
      className={`a ${cls}`}
      style={{
        left: center ? x - 30 : x,
        top: y,
        width: center ? w + 60 : w,
        height: h,
        fontSize: fs,
        lineHeight: `${lh}px`,
        textAlign: al,
        ...style,
      }}
    >
      {children}
    </p>
  );
}
