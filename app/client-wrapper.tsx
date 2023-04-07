"use client";

import { Playfair_Display, Raleway } from "@next/font/google";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

const heading = Playfair_Display({
  subsets: ["latin"],
});

const primary = Raleway({ subsets: ["latin"] });

export function ClientWrapper({ children }: { children: ReactNode }) {
  const overlayRef = useRef<null | HTMLDivElement>(null);
  const [overlayOpacity, setOverlayOpacity] = useState(0);

  const calculateOpacity = useCallback(() => {
    if (overlayRef.current == null) return 0;

    const { y } = overlayRef.current.getBoundingClientRect();
    const maxY = overlayRef.current?.offsetTop;

    return 1 - y / maxY;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const opacity = calculateOpacity();
      setOverlayOpacity(opacity);
    };

    document.addEventListener("scroll", handleScroll, {
      capture: true,
      passive: true,
    });

    const initialOpacity = calculateOpacity();
    setOverlayOpacity(initialOpacity);

    return document.removeEventListener("scroll", handleScroll);
  }, [calculateOpacity]);

  return (
    <main className={`${primary.className} h-full w-full`}>
      <div className="h-full w-full text-primary bg-secondary fixed">
        <div
          style={{ opacity: `${overlayOpacity}` }}
          className={`bg-black absolute h-full w-full`}
        />
        <div
          className={`flex flex-col m-auto h-full ${heading.className} px-8 lg:px-0 w-full lg:w-4/6 text-5xl md:text-6xl lg:text-8xl`}
        >
          <div className="flex grow items-center justify-center">live,</div>
          <div className="flex grow items-center justify-between">
            <span>live</span>
            <span>through,</span>
          </div>
          <div className="flex grow items-center justify-end">live on.</div>
        </div>
      </div>
      <div
        ref={overlayRef}
        className="h-fit min-h-full relative flex content-center top-[100%] bg-white text-black bg-pattern bg-center"
      >
        <div className="flex flex-col gap-8 w-[65ch] p-8 md:pt-24 my-0 mx-auto">{children}</div>
      </div>
    </main>
  );
}
