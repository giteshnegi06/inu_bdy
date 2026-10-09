"use client";

import { useEffect, useRef, useState } from "react";
import { SONG_SRC } from "@/data/content";
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
