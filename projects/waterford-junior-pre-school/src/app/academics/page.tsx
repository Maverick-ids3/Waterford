import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Explore Waterford Junior & Pre-School academic programs: Pre-School, Junior School, and Enrichment activities.",
};

const programs = [
  {
    id: "pre-school",
    number: "01",
    title: "Pre-School",
    desc: "Play-based routines introduce language, counting, motor skills, creativity, friendship, and classroom confidence.",
    items: [
      "Early literacy and phonics",
      "Foundational numeracy",
      "Creative play and movement",
      "Social and emotional development",
    ],
  },
  {
    id: "junior",
    number: "02",
    title: "Junior School",
    desc: "Structured lessons help learners build knowledge, discipline, independence, and problem-solving skills.",
    items: [
      "English and reading fluency",
      "Mathematics and mental arithmetic",
      "Science and environmental awareness",
      "Technology, art, sport, and life skills",
    ],
  },
  {
    id: "enrichment",
    number: "03",
    title: "Enrichment",
    desc: "Activities beyond the classroom encourage learners to lead, perform, create, and cooperate.",
    items: [
      "School events and assemblies",
      "Clubs and creative projects",
      "Sports and physical education",
      "Leadership and character formation",
    ],
  },
];

const learningPath = [
  {
    label: "Observe",
    desc: "Teachers understand each learner's strengths and needs.",
  },
  {
    label: "Guide",
    desc: "Lessons use clear routines, practice, and active participation.",
  },
  {
    label: "Grow",
    desc: "Progress is celebrated through feedback, confidence, and responsibility.",
  },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        heading="Programs that match each stage of childhood."
      />

      {/* Program cards */}
      <SectionWrapper className="grid gap-[18px] max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3">
        {programs.map((p) => (
          <Card
            key={p.id}
            id={p.id}
            className="border-waterford-line bg-waterford-white shadow-[0_12px_34px_rgba(0,0,0,0.06)]"
          >
            <CardContent className="p-7">
              <span className="mb-[18px] inline-flex size-[38px] items-center justify-center rounded-full bg-waterford-gold font-black text-waterford-black">
                {p.number}
              </span>
              <h2 className="m-0 text-[clamp(2rem,5vw,3.45rem)] leading-[1.08]">
                {p.title}
              </h2>
              <p className="mt-2 text-waterford-muted">{p.desc}</p>
              <ul className="mt-5 space-y-1.5 pl-5 text-waterford-muted">
                {p.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </SectionWrapper>

      {/* Learning Path */}
      <section className="bg-waterford-black text-waterford-white">
        <SectionWrapper
          className="learning-path grid items-start gap-[42px] md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
          as="div"
        >
          <div>
            <p className="mb-3 text-[0.78rem] font-black uppercase tracking-wide text-waterford-gold">
              Learning Path
            </p>
            <h2 className="m-0 text-[clamp(2rem,5vw,3.45rem)] leading-[1.08]">
              Small steps, steady growth.
            </h2>
          </div>
          <ol>
            {learningPath.map((step) => (
              <li key={step.label}>
                <strong>{step.label}</strong>
                <span className="text-white/[0.72]">{step.desc}</span>
              </li>
            ))}
          </ol>
        </SectionWrapper>
      </section>
    </>
  );
}
