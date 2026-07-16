import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Snapshots from school life at Waterford Junior & Pre-School — classroom activities, events, uniform pride, and outdoor play.",
};

const categories = [
  {
    title: "Classroom Learning",
    desc: "Hands-on activities, reading time, creative tasks, and early numeracy.",
  },
  {
    title: "Events",
    desc: "Parent testimonials, admissions posts, celebrations, and term notices.",
  },
  {
    title: "Uniform Pride",
    desc: "Portraits and school identity moments that show confidence and belonging.",
  },
  {
    title: "Outdoor Play",
    desc: "Playground time, movement, sports, and social development.",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        heading="Snapshots from school life."
      />

      {/* Feature image */}
      <SectionWrapper className="grid items-center gap-[clamp(28px,6vw,76px)] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Image
          src="/assets/waterford-gallery-board.png"
          alt="Waterford Junior and Pre-School photo and announcement gallery"
          width={800}
          height={560}
          className="h-full max-h-[560px] w-full rounded-lg object-cover shadow-[0_20px_60px_rgba(0,0,0,0.14)]"
        />
        <div>
          <p className="mb-3 text-[0.78rem] font-black uppercase tracking-wide text-waterford-gold-dark">
            Recent Moments
          </p>
          <h2 className="m-0 text-[clamp(2rem,5vw,3.45rem)] leading-[1.08]">
            Classroom activities, announcements, events, and learner portraits.
          </h2>
          <p className="mt-4 text-[1.04rem] text-waterford-muted">
            This gallery preview uses Waterford&apos;s own visual style: golden
            yellow, black, white, neat typography, and learner-centered imagery.
          </p>
        </div>
      </SectionWrapper>

      {/* Category grid */}
      <section className="bg-waterford-white">
        <SectionWrapper
          className="grid gap-4 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-4"
          as="div"
        >
          {categories.map((c) => (
            <Card
              key={c.title}
              className="min-h-[220px] border-waterford-line bg-waterford-white shadow-[0_12px_34px_rgba(0,0,0,0.06)]"
            >
              <CardContent className="p-7">
                <h3 className="m-0 text-[1.24rem] leading-[1.08]">
                  {c.title}
                </h3>
                <p className="mt-2 text-waterford-muted">{c.desc}</p>
              </CardContent>
            </Card>
          ))}
        </SectionWrapper>
      </section>
    </>
  );
}
