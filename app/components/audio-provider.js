"use client";

import { createContext, useContext, useState } from "react";

const AudioContext = createContext();

export function AudioProvider({ children }) {
  const [isAudioPlaying, setIsAudioPlaying] = useState(true);

  const toggleAudio = () => setIsAudioPlaying((prev) => !prev);

  return (
    <AudioContext.Provider value={{ isAudioPlaying, toggleAudio, setIsAudioPlaying }}>{children}</AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}
