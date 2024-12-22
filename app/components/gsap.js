"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

export default function GSAP() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  return null;
}
