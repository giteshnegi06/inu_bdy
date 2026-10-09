import { closingText as t, SECTION_TOP, STICKER_SHEET } from "@/data/content";
import { media, pos } from "@/lib/utils";
import Cassette from "../ui/Cassette";
import Crop from "../ui/Crop";
import HeartSticker from "../ui/HeartSticker";
import Img from "../ui/Img";
import Polaroid from "../ui/Polaroid";
import Star from "../ui/Star";
import Text from "../ui/Text";

const TOP = SECTION_TOP.closing;

/** Last section. Clicking the cassette starts (or stops) the song via the YouTube player. */
export default function ClosingNote({ playing, onToggle }) {
  return (
    <section className="sec" style={{ top: TOP, height: 703 }}>
      <Img f="fa546c235d815aa016b084736a960b61" cx={432.9} cy={2151.8 - TOP} w={682} h={454} alt="Paper" />
      <Crop box={{ left: 41, top: 2263 - TOP, width: 210, height: 127 }}>
        <img src={media(STICKER_SHEET)} alt="" style={{ left: 0, top: -220.2, width: 521.46, height: 347.64 }} />
      </Crop>
      <Polaroid
        cx={773.5} cy={2180 - TOP} s={0.697435} rot={10.5}
        photo={{ f: "last.jpeg", cx: 770.6, cy: 2184.6 - TOP, w: 269.2, h: 335.5, rot: 10.46, alt: "Photo" }}
      />

      <Cassette playing={playing} onToggle={onToggle} dy={-TOP} />
      <Star cx={177.6} cy={2121.2 - TOP} w={33} h={28} rot={-17.32} />
      <Star cx={601.9} cy={2053.1 - TOP} w={33} h={28} rot={10.8} />
      <Star cx={282.4} cy={2278.9 - TOP} w={33} h={28} rot={-8.87} />
      <HeartSticker bx={938} by={2036.5 - TOP} s={0.199401} brot={4.1} ix={938.2} iy={2036.1 - TOP} iw={49} ih={43} irot={3.21} link />
      <Crop box={pos(722.5, 2342 - TOP, 107, 88, 9.88)}>
        <img src={media(STICKER_SHEET)} alt="" style={{ left: -310.58, top: -197.98, width: 406.22, height: 270.81 }} />
      </Crop>
      <Img f="86bdf2cb909c89e8345ffea021428706" cx={197.5} cy={2047.4 - TOP} w={55} h={36} rot={-11.19} />
      <Text x={208.4} y={2076.1 - TOP} w={385.8} h={162.3} fs={17.56} lh={24} al="center">{t.note}</Text>

    </section>
  );
}
