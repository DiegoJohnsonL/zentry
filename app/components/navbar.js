"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useMotionValueEvent, useScroll } from "motion/react";
import Button from "./button";
import { cn } from "../../lib/utils";
import Image from "next/image";
import { useAudio } from "./audio-provider";
import { usePlayAudio } from "../../hooks/use-play-audio";

const navItems = ["Nexus", "About", "Contact"];

const Navbar = () => {
  // State for toggling audio and visual indicator
  const playAudio = usePlayAudio();
  const { isAudioPlaying, toggleAudio, setIsAudioPlaying } = useAudio();

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { scrollY } = useScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    console.log("isAudioPlaying", isAudioPlaying);
    if (isAudioPlaying) {
      try {
        audioElementRef.current.play().catch((error) => {
          console.error("Error playing audio", error);
          setIsAudioPlaying(false);
        });
      } catch (error) {
        console.error("Error playing audio", error);
        setIsAudioPlaying(false);
      }
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying, setIsAudioPlaying]);

  useMotionValueEvent(scrollY, "change", (value) => {
    const previousValue = scrollY.getPrevious();
    if (value === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (value > previousValue) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (value < previousValue) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
  });

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <Image src="/img/logo.png" alt="logo" className="w-10" width={40} height={40} />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a key={index} href={`#${item.toLowerCase()}`} onMouseEnter={playAudio} className="nav-hover-btn">
                  {item}
                </a>
              ))}
            </div>

            <button onClick={toggleAudio} className="ml-6 flex items-center justify-center space-x-0.5 min-h-6 px-4">
              <audio ref={audioElementRef} className="hidden" src="/audio/loop.mp3" loop />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={cn("indicator-line", {
                    active: isAudioPlaying,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
