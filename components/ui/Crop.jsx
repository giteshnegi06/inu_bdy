/** A clipping box; children are positioned inside it. */
export default function Crop({ box, children }) {
  return (
    <div className="a crop" style={box}>
      {children}
    </div>
  );
}
