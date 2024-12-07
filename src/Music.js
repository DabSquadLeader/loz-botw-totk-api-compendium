import React, { useEffect, useRef } from "react";

export default function Music() {
  const musicButtonRef = useRef(null);
  const backgroundMusic = new Audio("LostForest.mp3");
  let musicType = 0;

  useEffect(() => {
    // Loop the music when it ends
    const handleMusicEnd = () => {
      backgroundMusic.currentTime = 0;
      backgroundMusic.play();
    };

    backgroundMusic.addEventListener("ended", handleMusicEnd, false);

    return () => {
      backgroundMusic.removeEventListener("ended", handleMusicEnd);
    };
  }, [backgroundMusic]);

  const toggleMusic = () => {
    if (musicType === 0) {
      musicType = 1;
      musicButtonRef.current.textContent = "MUSIC: ON ";
      backgroundMusic.play();
    } else if (musicType === 1) {
      musicType = 0;
      musicButtonRef.current.textContent = "MUSIC: OFF";
      backgroundMusic.pause();
    }
  };

  useEffect(() => {
    const musicButton = musicButtonRef.current;

    if (musicButton) {
      musicButton.addEventListener("click", toggleMusic);
    }

    return () => {
      if (musicButton) {
        musicButton.removeEventListener("click", toggleMusic);
      }
    };
  }, []);

  return (
    <div>
      <button id="music" ref={musicButtonRef}>
        MUSIC: OFF
      </button>
    </div>
  );
}
