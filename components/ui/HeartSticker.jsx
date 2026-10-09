import { pos } from "@/lib/utils";
import Img from "./Img";

const HEART =
  "M277.85,54.09C268.95,23.85 240.19,0 206.19,0C177.64,0 152.84,16.11 140.3,39.77C127.76,16.11 102.97,0 74.42,0C38.85,0 7.74,23.85 1.64,58.46C-13.85,146.22 84.31,214.92 140.52,256C192.49,218.02 303.32,140.58 277.85,54.09Z";

/** Cream heart outline with a gingham heart on top; `link` makes it jump back to the top. */
export default function HeartSticker({ bx, by, s, brot, ix, iy, iw, ih, irot, link }) {
  return (
    <>
      <svg className="a" viewBox="0 0 282 256" style={pos(bx, by, 282 * s, 256 * s, brot)}>
        <path d={HEART} fill="#faf4e9" />
      </svg>
      <Img f="35bbaceb2b42e9daea562ec022646bde" cx={ix} cy={iy} w={iw} h={ih} rot={irot} alt="Heart sticker" className="a nopt" />
      {link && <a href="#top" className="a" style={pos(ix, iy, iw, ih, irot)} aria-label="Back to top" />}
    </>
  );
}
