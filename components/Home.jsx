"use client";

import { useEffect, useRef, useState } from "react";
import { SONG_SRC } from "@/data/content";
import Intro from "./Intro";
import MobileLayout from "./MobileLayout";
import Stage from "./Stage";

/**
 * Holds the song shared by the desktop canvas and the phone layout (CSS picks which one shows).
 * A single <audio> element plays the mp3; the cassette toggles it.
 */
export default function Home() {
  const audio = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [problem, setProblem] = useState("");
  const [intro, setIntro] = useState("peek");

  // peek (letter half out) -> tap -> reading (letter slides out) -> leaving (fade) -> done
  const advanceIntro = () => {
    if (intro !== "peek") return;
    setIntro("reading");
    window.setTimeout(() => setIntro("leaving"), 1300);
    window.setTimeout(() => setIntro("done"), 2000);
  };

  const toggle = () => {
    const el = audio.current;
    if (!el) return;
    if (el.paused) {
      // play() must be called inside the click so browsers allow sound.
      setProblem("");
      el.play().catch((err) => {
        setPlaying(false);
        setProblem(`Couldn't play the song (${err?.name || "error"}). Tap the cassette again.`);
      });
    } else {
      el.pause();
    }
  };

  useEffect(() => {
    const el = audio.current;
    const on = () => setPlaying(true);
    const off = () => setPlaying(false);
    el.addEventListener("play", on);
    el.addEventListener("pause", off);
    el.addEventListener("ended", off);
    const fail = () => {
      setPlaying(false);
      setProblem("The song file could not be loaded (public/audio/song.mp3).");
    };
    el.addEventListener("error", fail);
    return () => {
      el.removeEventListener("error", fail);
      el.removeEventListener("play", on);
      el.removeEventListener("pause", off);
      el.removeEventListener("ended", off);
    };
  }, []);

  return (
    <>
      <Intro state={intro} onAdvance={advanceIntro} />
      <audio ref={audio} src={SONG_SRC} loop preload="metadata" playsInline />
      <Stage playing={playing} onToggle={toggle} />
      <MobileLayout playing={playing} onToggle={toggle} />
      {problem && (
        <p role="status" className="song-status">
          {problem}
        </p>
      )}
    </>
  );
}
