import { notebookText as t, SECTION_TOP } from "@/data/content";
import { media } from "@/lib/utils";
import Crop from "../ui/Crop";
import HeartSticker from "../ui/HeartSticker";
import Img from "../ui/Img";
import Polaroid from "../ui/Polaroid";
import Text from "../ui/Text";

export default function Notebook() {
  return (
    <section className="sec" style={{ top: SECTION_TOP.notebook, height: 741 }}>
      <Img f="62e8a325b52c3042b703b7637968dba8" cx={504.5} cy={370.9} w={914} h={609} alt="Open notebook" />
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

      <Text x={151.3} y={410.6} w={284.4} h={25} fs={20.71} lh={28} al="center">{t.title}</Text>
      <Text x={151.3} y={435.6} w={284.4} h={75.1} fs={20.71} lh={28} al="center">{t.body}</Text>
      <Text x={147.6} y={228.7} w={291.8} h={195.9} fs={133.52} lh={186} al="center" cls="n">{t.age}</Text>
      <Img f="eda886231e989b9e7559109c0f2b2a43" cx={377.4} cy={349.3} w={79} h={87} rot={7.16} alt="Cupcake" />
      <Text x={675.5} y={518.3} w={73.2} h={22.7} fs={20.71} lh={28} al="center">{t.caption}</Text>
    </section>
  );
}
