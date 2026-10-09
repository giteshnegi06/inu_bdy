import ClosingNote from "./sections/ClosingNote";
import LetterFilm from "./sections/LetterFilm";
import Notebook from "./sections/Notebook";

/**
 * Fixed-size canvas that scales to the window width and stays centred.
 * Scaling is CSS-only (see globals.css: .fit / .stage), capped so it isn't blown up on huge screens.
 */
export default function Stage({ playing, onToggle }) {
  return (
    <div className="fit-outer desktop">
      <div className="fit">
        <div className="stage">
          <Notebook />
          <LetterFilm />
          <ClosingNote playing={playing} onToggle={onToggle} />
        </div>
      </div>
    </div>
  );
}
