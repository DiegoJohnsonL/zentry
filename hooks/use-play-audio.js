import { useCallback } from "react";
import { useAudio } from "../app/components/audio-provider";

export const usePlayAudio = () => {
  const { isAudioPlaying } = useAudio();
  const playAudio = useCallback(() => {
    if (!isAudioPlaying) {
      return;
    }
    // Create new audio instance
    const audio = new Audio("/audio/hover-audio.wav");
    audio.playbackRate = 1;
    audio.volume = 0.4;
    audio.play();
  }, [isAudioPlaying]);

  return playAudio;
};
