import React, { useRef, useEffect } from "react";
import "./RoseDay.css";
import roseVideo from "./assets/rose-bg.mp4";
import roseMusic from "./assets/rose-music.mp3";
import { createHearts } from "./effects";

function RoseDay() {
  const audioRef = useRef(null);

  useEffect(() => {
    createHearts();
  }, []);

  const playMusic = () => {
    audioRef.current.play();
  };

  return (
    <main className="rose-container">

      <video className="bg-video" autoPlay muted loop playsInline>
        <source src={roseVideo} type="video/mp4" />
      </video>

      <section className="glass-card">
        <h1 className="title">Happy Rose Day 🌹</h1>

        <p className="quote">
          “A rose speaks of love silently, in a language known only to the heart.”
        </p>

        <button className="rose-btn" onClick={playMusic}>
          Send a Rose 🌹
        </button>

        <footer className="footer">
          Made with ❤️ for Valentine Week
        </footer>

        <audio ref={audioRef} loop>
          <source src={roseMusic} type="audio/mpeg" />
        </audio>
      </section>
    </main>
  );
}

export default RoseDay;
