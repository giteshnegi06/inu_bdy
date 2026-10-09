import { media, pos } from "@/lib/utils";

export default function Img({ f, cx, cy, w, h, rot = 0, alt = "", className = "a" }) {
  return <img className={className} src={media(f)} alt={alt} style={pos(cx, cy, w, h, rot)} />;
}
