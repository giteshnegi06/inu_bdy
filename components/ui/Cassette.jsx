import { media, pos } from "@/lib/utils";
import Text from "./Text";

/**
 * The cassette button; it spins up (wiggles) while the song plays.
 * Coordinates are design pixels; `dy` shifts them into the parent's space.
 */
export default function Cassette({ playing, onToggle, dy = 0 }) {
  return (
    <>
      <button
        type="button"
        className={`a cassette${playing ? " playing" : ""}`}
        aria-label={playing ? "Stop the song" : "Play the song"}
        aria-pressed={playing}
        style={pos(594.2, 2291.4 + dy, 224, 149, -10.01)}
        onClick={onToggle}
      >
        <img src={media("c27b2757c404218d1bdb9d01ae058d0e")} alt="Cassette tape" />
      </button>
      <Text
        x={576.6} y={2321.8 + dy} w={50.7} h={27.6} fs={20.71} lh={28} al="center"
        cls="cream nopt" style={{ whiteSpace: "nowrap", transform: "rotate(-9.8deg)" }}
      >
        click me!
      </Text>
    </>
  );
}
