import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Admissions are open for the 2026 school year. Inquire, visit, and apply to Waterford Junior & Pre-School.",
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        heading="Join the Waterford family."
      />

      {/* Enrollment + Form */}
      <SectionWrapper className="grid items-start gap-[clamp(28px,6vw,76px)] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <p className="mb-3 text-[0.78rem] font-black uppercase tracking-wide text-waterford-gold-dark">
            Enrollment
          </p>
          <h2 className="m-0 text-[clamp(2rem,5vw,3.45rem)] leading-[1.08]">
            Admissions are open for the 2026 school year.
          </h2>
          <p className="mt-4 text-[1.04rem] text-waterford-muted">
            Families can start with an inquiry, arrange a school visit, and
            complete the application process with support from the admissions
            office.
          </p>
          <div className="mt-6 grid gap-2 border-l-[6px] border-waterford-gold bg-waterford-white p-[18px]">
            <strong>Bring along:</strong>
            <span className="text-waterford-muted">
              Birth certificate, recent report where applicable, parent or
              guardian ID, and any medical information the school should know.
            </span>
          </div>
        </div>

        <Card className="border-waterford-line bg-waterford-white shadow-[0_12px_34px_rgba(0,0,0,0.06)]">
          <CardContent className="grid gap-4 p-6">
            <div className="grid gap-2">
              <label className="font-extrabold text-waterford-black">
                Parent or Guardian Name
              </label>
              <Input
                type="text"
                name="parent-name"
                placeholder="Full name"
                className="min-h-[46px] rounded-lg border-[#d7cfbd] bg-[#fffdf8]"
              />
            </div>
            <div className="grid gap-2">
              <label className="font-extrabold text-waterford-black">
                Phone Number
              </label>
              <Input
                type="tel"
                name="phone"
                placeholder="+263..."
                className="min-h-[46px] rounded-lg border-[#d7cfbd] bg-[#fffdf8]"
              />
            </div>
            <div className="grid gap-2">
              <label className="font-extrabold text-waterford-black">
                Email Address
              </label>
              <Input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="min-h-[46px] rounded-lg border-[#d7cfbd] bg-[#fffdf8]"
              />
            </div>
            <div className="grid gap-2">
              <label className="font-extrabold text-waterford-black">
                Child&apos;s Grade or Stage
              </label>
              <Select defaultValue="pre-school">
                <SelectTrigger className="min-h-[46px] rounded-lg border-[#d7cfbd] bg-[#fffdf8]">
                  <SelectValue placeholder="Select a stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pre-school">Pre-School</SelectItem>
                  <SelectItem value="grade-1">Grade 1</SelectItem>
                  <SelectItem value="grade-2">Grade 2</SelectItem>
                  <SelectItem value="grade-3">Grade 3</SelectItem>
                  <SelectItem value="grade-4-plus">Grade 4+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <label className="font-extrabold text-waterford-black">
                Message
              </label>
              <Textarea
                name="message"
                rows={4}
                placeholder="Tell us what you would like to know"
                className="rounded-lg border-[#d7cfbd] bg-[#fffdf8] resize-y"
              />
            </div>
            <Button className="min-h-[48px] rounded-lg bg-waterford-gold font-black text-waterford-black hover:bg-waterford-gold-dark">
              Send Inquiry
            </Button>
          </CardContent>
        </Card>
      </SectionWrapper>

      {/* Steps */}
      <section className="bg-waterford-white">
        <SectionWrapper
          className="grid gap-4 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3"
          as="div"
        >
          {[
            {
              n: "1",
              title: "Inquire",
              desc: "Contact the school and confirm available places for your child's stage.",
            },
            {
              n: "2",
              title: "Visit",
              desc: "Tour the campus, meet staff, and understand daily routines.",
            },
            {
              n: "3",
              title: "Apply",
              desc: "Submit documents and complete the enrollment requirements.",
            },
          ].map((s) => (
            <Card
              key={s.n}
              className="min-h-[220px] border-waterford-line bg-waterford-white shadow-[0_12px_34px_rgba(0,0,0,0.06)]"
            >
              <CardContent className="p-7">
                <span className="mb-[18px] inline-flex size-[38px] items-center justify-center rounded-full bg-waterford-gold font-black text-waterford-black">
                  {s.n}
                </span>
                <h3 className="m-0 text-[1.24rem] leading-[1.08]">
                  {s.title}
                </h3>
                <p className="mt-2 text-waterford-muted">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </SectionWrapper>
      </section>
    </>
  );
}
