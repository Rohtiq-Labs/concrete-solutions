"use client";

import { useRef, useState, type JSX } from "react";
import { MEDIA } from "@/data/media";
import { useLocale } from "@/context/LocaleContext";
import "./video.desktop.css";
import "./video.mobile.css";

export const Video = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { video } = dictionary;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState("");

  const play = async (): Promise<void> => {
    const node = videoRef.current;
    if (!node) {
      return;
    }

    try {
      await node.play();
      setPlaying(true);
      setError("");
    } catch {
      setError(video.missing);
      setPlaying(false);
    }
  };

  return (
    <section id="video">
      <div className="wrap">
        <span className="eyebrow">{video.eyebrow}</span>
        <h2>{video.title}</h2>
        <div className={`pl ${playing ? "pl--playing" : ""}`.trim()} id="pl">
          <video
            ref={videoRef}
            src={MEDIA.video.src}
            poster={MEDIA.videoPoster.src}
            playsInline
            preload="metadata"
            controls={playing}
            onEnded={() => setPlaying(false)}
            onPause={() => {
              if (videoRef.current?.ended) {
                setPlaying(false);
              }
            }}
            onPlay={() => setPlaying(true)}
          >
            <track kind="captions" />
          </video>
          {!playing ? (
            <button
              type="button"
              id="play"
              aria-label={video.playAria}
              onClick={() => void play()}
            >
              ▶
            </button>
          ) : null}
          <p id="pn">{error || (playing ? "" : video.placeholder)}</p>
        </div>
      </div>
    </section>
  );
};
