import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Waterford Junior & Pre-School supports children through their most formative school years with care, discipline, and discovery.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Waterford"
        heading="Rooted in care, discipline, and discovery."
      />

      {/* Identity section */}
      <SectionWrapper className="grid items-start gap-[clamp(28px,6vw,76px)] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <p className="mb-3 text-[0.78rem] font-black uppercase tracking-wide text-waterford-gold-dark">
            Our Identity
          </p>
          <h2 className="m-0 text-[clamp(2rem,5vw,3.45rem)] leading-[1.08]">
            A school for early confidence and lifelong curiosity.
          </h2>
        </div>
        <div className="space-y-4">
          <p className="text-[1.04rem] text-waterford-muted">
            Waterford Junior &amp; Pre-School supports children through their
            most formative school years. Our classrooms are designed to help
            learners explore ideas, discover their strengths, and learn with
            purpose.
          </p>
          <p className="text-[1.04rem] text-waterford-muted">
            The school culture values neatness, kindness, confidence, curiosity,
            and consistent effort. Children are guided to participate, ask
            questions, care for others, and take pride in their progress.
          </p>
        </div>
      </SectionWrapper>

      {/* Values */}
      <section className="bg-waterford-white">
        <SectionWrapper
          className="grid gap-4 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3"
          as="div"
        >
          {[
            {
              title: "Explore",
              desc: "Children engage with the world through observation, questions, play, stories, experiments, and movement.",
            },
            {
              title: "Discover",
              desc: "Teachers create room for learners to find new interests, talents, friendships, and ways of solving problems.",
            },
            {
              title: "Learn",
              desc: "Every day builds language, numeracy, confidence, creativity, independence, and respect for others.",
            },
          ].map((v) => (
            <Card
              key={v.title}
              className="min-h-[220px] border-waterford-line bg-waterford-white shadow-[0_12px_34px_rgba(0,0,0,0.06)]"
            >
              <CardContent className="p-7">
                <h3 className="m-0 text-[1.24rem] leading-[1.08]">{v.title}</h3>
                <p className="mt-2 text-waterford-muted">{v.desc}</p>
              </CardContent>
            </Card>
          ))}
        </SectionWrapper>
      </section>

      {/* Our Promise */}
      <SectionWrapper className="grid items-center gap-[clamp(28px,6vw,76px)] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="grid min-h-[360px] place-items-center rounded-lg border border-waterford-line bg-waterford-white shadow-[0_20px_60px_rgba(0,0,0,0.14)]">
          <Image
            src="/assets/waterford-logo.png"
            alt="Waterford Junior and Pre-School crest"
            width={330}
            height={330}
            className="w-[min(330px,78%)] rounded-full"
          />
        </div>
        <div>
          <p className="mb-3 text-[0.78rem] font-black uppercase tracking-wide text-waterford-gold-dark">
            Our Promise
          </p>
          <h2 className="m-0 text-[clamp(2rem,5vw,3.45rem)] leading-[1.08]">
            Every child should feel seen.
          </h2>
          <p className="mt-4 text-[1.04rem] text-waterford-muted">
            We keep learning personal, practical, and encouraging. Families
            receive clear communication, while learners receive the support and
            structure they need to grow at their own pace.
          </p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "mt-6 inline-flex items-center justify-center min-h-[48px] rounded-lg bg-waterford-gold px-5 font-black text-waterford-black hover:bg-waterford-gold-dark"
            )}
          >
            Talk to Us
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
