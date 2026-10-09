import { closingText, letterText, notebookText, filmPhotos, STICKER_SHEET } from "@/data/content";
import { media, pos, round } from "@/lib/utils";
import Cassette from "./ui/Cassette";
import Crop from "./ui/Crop";
import HeartSticker from "./ui/HeartSticker";
import Img from "./ui/Img";
import Polaroid from "./ui/Polaroid";
import Scene, { ScrollScene } from "./ui/Scene";
import Star from "./ui/Star";
import Text from "./ui/Text";

const FILM_Y = 1613.7;
const flow = (s) => s.replace(/\n/g, " ");

/** Phone layout: art is scaled to the screen, text is real, readable, wrapping text. */
export default function MobileLayout({ playing, onToggle }) {
  return (
    <main className="mobile">
      {/* Notebook, opened flat but stacked: left page above, right page below */}
      <div className="m-pages">
        <Scene x={78} y={84} w={424} h={564}>
          <Img f="62e8a325b52c3042b703b7637968dba8" cx={504.5} cy={370.9} w={914} h={609} alt="Open notebook" />
          <Text x={140} y={190} w={300} h={260} fs={190} lh={260} al="center" cls="n">{notebookText.age}</Text>
          <Img f="eda886231e989b9e7559109c0f2b2a43" cx={413} cy={385} w={115} h={127} rot={7.16} alt="Cupcake" />
          <Text x={151.3} y={452} w={284.4} h={25} fs={20.71} lh={28} al="center">{notebookText.title}</Text>
          <Text x={151.3} y={477} w={284.4} h={75.1} fs={20.71} lh={28} al="center">{notebookText.body}</Text>
        </Scene>
        <Scene x={500} y={84} w={424} h={564}>
          <Img f="62e8a325b52c3042b703b7637968dba8" cx={504.5} cy={370.9} w={914} h={609} alt="" />
          <Crop box={{ left: 585, top: 244, width: 254, height: 253 }}>
            <img src={media("1b398d96671db9da95c31cbc3bbf9a32")} alt="" style={{ left: 0, top: -176, width: 254, height: 451 }} />
          </Crop>
          <Polaroid
            cx={733} cy={370} s={221 / 431} rot={5.9}
            photo={{ f: "hero.jpeg", cx: 733.3, cy: 348.2, w: 197.9, h: 220.5, rot: 5.86, alt: "Photo" }}
          />
          <Img f="a5eb33132b348ae60644d4a206746aa6" cx={785.5} cy={244.2} w={127} h={93} alt="Favorite person?" />
          <HeartSticker bx={645} by={244.5} s={0.14502} brot={-12.2} ix={644.7} iy={244.2} iw={36} ih={32} irot={-13.1} />
          <Img f="02e2187247bb6358000641373bd61b26" cx={817} cy={497.5} w={73} h={49} rot={-5.63} />
          <Text x={675.5} y={518.3} w={73.2} h={22.7} fs={20.71} lh={28} al="center">{notebookText.caption}</Text>
        </Scene>
      </div>

      {/* Envelope + letter */}
      <Scene x={110} y={765} w={340} h={370}>
        <Img f="e27c13f513d663aad197d112aa965320" cx={282.4} cy={949.6} w={245} h={297} rot={-15.4} />
        <Img f="img1" cx={296.7} cy={1013.2} w={264} h={188} />
        <Img f="f307ddddc18ecc5447b11f847d0a7b0e.svg" cx={235.6} cy={890.8} w={43} h={33} />
      </Scene>
      <p className="m-text">{flow(letterText.first)}</p>

      <Scene x={540} y={1140} w={370} h={290}>
        <Img f="img2" cx={724} cy={1282.3} w={349} h={252} />
        <Img f="4d2d2bd9771c41aa666d12268f831212" cx={592.4} cy={1190.1} w={39} h={37} rot={-14.33} />
      </Scene>
      <p className="m-text">{flow(letterText.second)}</p>

      {/* Film strip */}
      <ScrollScene x={20} y={1466} w={980} h={270} scale={0.8} label="Photo film strip, swipe sideways">
        <Img f="cd0c182b7f517b8b500ddca5d4a0ad85" cx={508} cy={FILM_Y} w={229} h={976} rot={-90} />
        {filmPhotos.map((p) => (
          <Crop key={p.f} box={{ left: round(p.cx - 62.1), top: round(FILM_Y - 62.1), width: 124.2, height: 124.2 }}>
            <img src={media(p.f)} alt="" style={{ left: 0, top: 0, width: 124.2, height: 124.2, objectFit: "cover" }} />
          </Crop>
        ))}
        <Img f="b6452fad1507bdbd97d5f1e549d9d333.svg" cx={132.2} cy={1544.7} w={110} h={125} rot={-11.34} />
        <Star cx={894.7} cy={FILM_Y} w={82} h={72} rot={9.89} />
      </ScrollScene>
      <p className="m-hint">Swipe the film strip →</p>

      {/* Closing note on paper */}
      <div className="m-paper" style={{ backgroundImage: `url(${media("fa546c235d815aa016b084736a960b61")})` }}>
        <p>{flow(closingText.note)}</p>
        <img className="m-bow" src={media("86bdf2cb909c89e8345ffea021428706")} alt="" />
        <img className="m-star m-star1" src={media("849655dd7954b19597ae0c2e75cd31ff")} alt="" />
        <img className="m-star m-star2" src={media("849655dd7954b19597ae0c2e75cd31ff")} alt="" />
        <span className="m-bears" style={{ backgroundImage: `url(${media(STICKER_SHEET)})` }} role="img" aria-label="Teddy bears" />
      </div>

      {/* Polaroid + cassette: tap the cassette to play the song */}
      <Scene x={468} y={1972} w={500} h={425} style={{ width: "calc(100% + 20px)", margin: "0 -10px" }}>
        <Polaroid
          cx={773.5} cy={2180} s={0.697435} rot={10.5}
          photo={{ f: "last.jpeg", cx: 770.6, cy: 2184.6, w: 269.2, h: 335.5, rot: 10.46, alt: "Photo" }}
        />
        <Cassette playing={playing} onToggle={onToggle} dy={0} />
        <Star cx={601.9} cy={2053.1} w={33} h={28} rot={10.8} />
        <HeartSticker bx={938} by={2036.5} s={0.199401} brot={4.1} ix={938.2} iy={2036.1} iw={49} ih={43} irot={3.21} />
        <Crop box={pos(722.5, 2342, 107, 88, 9.88)}>
          <img src={media(STICKER_SHEET)} alt="" style={{ left: -310.58, top: -197.98, width: 406.22, height: 270.81 }} />
        </Crop>
      </Scene>
      <p className="m-hint">Tap the cassette to play our song ♡</p>
    </main>
  );
}
