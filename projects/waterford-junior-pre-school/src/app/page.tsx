import Link from "next/link";
import Image from "next/image";
import { HomeHero } from "@/components/home-hero";
import { SectionWrapper } from "@/components/section-wrapper";
import { FeatureCard } from "@/components/feature-card";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HomeHero />

      {/* Intro band */}
      <section className="bg-waterford-white">
        <SectionWrapper
          className="grid items-center gap-[clamp(28px,6vw,76px)] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
          as="div"
        >
          <div>
            <p className="mb-3 text-[0.78rem] font-black uppercase tracking-wide text-waterford-gold-dark">
              Welcome
            </p>
            <h2 className="m-0 text-[clamp(2rem,5vw,3.45rem)] leading-[1.08]">
              A school day built for curiosity and confidence.
            </h2>
          </div>
          <p className="text-[1.04rem] text-waterford-muted">
            Waterford Junior &amp; Pre-School combines structured learning with
            play, creativity, sport, and character formation. The result is a
            warm school environment where learners feel known, capable, and ready
            to grow.
          </p>
        </SectionWrapper>
      </section>

      {/* Feature grid */}
      <SectionWrapper>
        <div className="mb-7 max-w-[760px]">
          <p className="mb-3 text-[0.78rem] font-black uppercase tracking-wide text-waterford-gold-dark">
            Why Choose Us?
          </p>
          <h2 className="m-0 text-[clamp(2rem,5vw,3.45rem)] leading-[1.08]">
            Strong foundations, joyful learning.
          </h2>
        </div>
        <div className="grid gap-4 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-4">
          <FeatureCard
            number="01"
            title="Early Years Care"
            description="Pre-school routines balance play, movement, language, numeracy, and social growth."
          />
          <FeatureCard
            number="02"
            title="Junior School Focus"
            description="Core subjects are taught with clear progression, classroom support, and regular feedback."
          />
          <FeatureCard
            number="03"
            title="Creative Expression"
            description="Art, music, reading, presentation, and practical projects give learners room to shine."
          />
          <FeatureCard
            number="04"
            title="Safe Community"
            description="Families, teachers, and pupils work together in a respectful and values-led culture."
          />
        </div>
      </SectionWrapper>

      {/* Gold programs band */}
      <section className="bg-waterford-gold text-waterford-black">
        <SectionWrapper
          className="grid items-center gap-9 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.65fr)]"
          as="div"
        >
          <div>
            <p className="mb-3 text-[0.78rem] font-black uppercase tracking-wide text-waterford-black">
              Programs
            </p>
            <h2 className="m-0 text-[clamp(2rem,5vw,3.45rem)] leading-[1.08]">
              From first steps to confident juniors.
            </h2>
          </div>
          <div className="grid gap-2.5">
            <Link
              href="/academics#pre-school"
              className="rounded-lg border-2 border-waterford-black bg-white/35 px-[18px] py-4 font-black transition-transform hover:-translate-y-0.5"
            >
              Pre-School
            </Link>
            <Link
              href="/academics#junior"
              className="rounded-lg border-2 border-waterford-black bg-white/35 px-[18px] py-4 font-black transition-transform hover:-translate-y-0.5"
            >
              Junior School
            </Link>
            <Link
              href="/academics#enrichment"
              className="rounded-lg border-2 border-waterford-black bg-white/35 px-[18px] py-4 font-black transition-transform hover:-translate-y-0.5"
            >
              Enrichment
            </Link>
          </div>
        </SectionWrapper>
      </section>

      {/* School Life / Moments */}
      <SectionWrapper className="grid items-stretch gap-[clamp(28px,6vw,76px)] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="self-center">
          <p className="mb-3 text-[0.78rem] font-black uppercase tracking-wide text-waterford-gold-dark">
            School Life
          </p>
          <h2 className="m-0 text-[clamp(2rem,5vw,3.45rem)] leading-[1.08]">
            Learning moments worth remembering.
          </h2>
          <p className="mt-4 text-waterford-muted">
            Events, class activities, celebrations, and learner milestones give
            every term its own rhythm.
          </p>
          <Link
            href="/gallery"
            className="mt-[18px] inline-flex border-b-[3px] border-waterford-gold font-black transition-transform hover:-translate-y-0.5"
          >
            See the gallery
          </Link>
        </div>
        <Image
          src="/assets/waterford-gallery-board.png"
          alt="Waterford school photo gallery preview"
          width={800}
          height={560}
          style={{ width: "100%", height: "auto" }}
          className="max-h-[560px] w-full rounded-lg object-cover shadow-[0_20px_60px_rgba(0,0,0,0.14)]"
        />
      </SectionWrapper>
    </>
  );
}
