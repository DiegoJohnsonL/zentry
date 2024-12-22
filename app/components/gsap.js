"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect } from "react";

export default function GSAP() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({
      markers: process.env.NODE_ENV === "development",
    });
  }, []);
  return <></>;
}
