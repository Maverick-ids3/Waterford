"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const slides = [
  "/assets/hero-slide-01.png",
  "/assets/hero-slide-04.png",
  "/assets/hero-slide-05.png",
  "/assets/hero-slide-06.png",
  "/assets/hero-slide-07.png",
];

export function HomeHero() {
  const [active, setActive] = useState(0);

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, 5000);
    return () => clearInterval(id);
  }, [advance]);

  return (
    <section className="relative isolate flex min-h-[74vh] items-center overflow-hidden px-[clamp(20px,6vw,76px)] py-[clamp(86px,12vw,150px)] text-waterford-white bg-[radial-gradient(circle_at_82%_50%,rgba(246,181,22,0.28),transparent_34%),linear-gradient(90deg,#020202_0%,#080808_47%,#17120a_100%)]">
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(0,0,0,0.84)_0%,rgba(0,0,0,0.64)_38%,rgba(0,0,0,0.08)_74%,rgba(0,0,0,0.22)_100%)] max-md:bg-[linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.68)_45%,rgba(0,0,0,0.9)_100%)]" />

      {/* Gold bottom bar */}
      <div className="absolute inset-x-0 bottom-0 z-[2] h-2 bg-waterford-gold" />

      {/* Slideshow */}
      <div
        className="pointer-events-none absolute z-0 max-md:inset-[86px_20px_auto] max-md:h-[min(42vh,380px)] max-sm:inset-[82px_16px_auto] max-sm:h-[min(38vh,310px)] md:inset-[clamp(92px,11vw,132px)_clamp(18px,5vw,72px)_clamp(44px,6vw,76px)_48%]"
        aria-hidden="true"
      >
        {slides.map((src, i) => (
          <div
            key={src}
            className={`hero-slide ${i === active ? "is-active" : ""}`}
            style={{
              backgroundImage: `url('${src}')`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-[3] w-[min(720px,100%)] max-md:self-end max-md:pt-[min(44vh,390px)] max-sm:pt-[min(40vh,320px)]">
        <p className="mb-3 text-[0.78rem] font-black uppercase tracking-wide text-waterford-gold">
          Explore. Discover. Learn.
        </p>
        <h1 className="m-0 max-w-[980px] text-[clamp(2.7rem,8vw,6.4rem)] leading-[1.08] break-words">
          Waterford Junior &amp; Pre-School
        </h1>
        <p className="mt-[22px] max-w-[670px] text-[clamp(1.05rem,2vw,1.3rem)] text-white/90">
          Bright early learning, confident junior schooling, and a caring
          community shaped around every child&apos;s next step.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 max-sm:flex-col max-sm:items-stretch">
          <Link
            href="/admissions"
            className={cn(
              buttonVariants({ size: "lg" }),
              "inline-flex shrink-0 items-center justify-center min-h-[48px] rounded-lg bg-waterford-gold px-5 text-base font-black text-waterford-black hover:bg-waterford-gold-dark max-sm:w-full"
            )}
          >
            Apply for 2026
          </Link>
          <Link
            href="/academics"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "inline-flex shrink-0 items-center justify-center min-h-[48px] rounded-lg border-2 border-white/60 bg-transparent px-5 text-base font-black text-waterford-white hover:bg-white/10 hover:text-waterford-white max-sm:w-full"
            )}
          >
            View Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
