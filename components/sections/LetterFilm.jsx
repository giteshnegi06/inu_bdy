import { filmPhotos, letterText as t, SECTION_TOP } from "@/data/content";
import { media, round } from "@/lib/utils";
import Crop from "../ui/Crop";
import Img from "../ui/Img";
import Star from "../ui/Star";
import Text from "../ui/Text";

const TOP = SECTION_TOP.letter;
const FILM_Y = 1613.7 - TOP; // film strip centre, section-relative

export default function LetterFilm() {
  return (
    <section className="sec" style={{ top: TOP, height: 1054 }}>
      <Img f="e27c13f513d663aad197d112aa965320" cx={282.4} cy={949.6 - TOP} w={245} h={297} rot={-15.4} />
      <Img f="img1" cx={296.7} cy={1013.2 - TOP} w={264} h={188} />
      <Img f="f307ddddc18ecc5447b11f847d0a7b0e.svg" cx={235.6} cy={890.8 - TOP} w={43} h={33} />
      <Img f="img2" cx={724} cy={1282.3 - TOP} w={349} h={252} />

      <Img f="cd0c182b7f517b8b500ddca5d4a0ad85" cx={508} cy={FILM_Y} w={229} h={976} rot={-90} />
      {filmPhotos.map((p) => (
        <Crop key={p.f} box={{ left: round(p.cx - 62.1), top: round(FILM_Y - 62.1), width: 124.2, height: 124.2 }}>
          <img src={media(p.f)} alt="" style={{ left: 0, top: 0, width: 124.2, height: 124.2, objectFit: "cover" }} />
        </Crop>
      ))}
      <Img f="b6452fad1507bdbd97d5f1e549d9d333.svg" cx={132.2} cy={1544.7 - TOP} w={110} h={125} rot={-11.34} />
      <Img f="4d2d2bd9771c41aa666d12268f831212" cx={592.4} cy={1190.1 - TOP} w={39} h={37} rot={-14.33} />
      <Star cx={894.7} cy={FILM_Y} w={82} h={72} rot={9.89} />

      <Text x={479.5} y={891 - TOP} w={407.7} h={175.8} fs={18.67} lh={26} al="left" cls="cream">{t.first}</Text>
      <Text x={122.4} y={1209.5 - TOP} w={407.7} h={150.7} fs={18.67} lh={26} al="left" cls="cream">{t.second}</Text>
    </section>
  );
}
