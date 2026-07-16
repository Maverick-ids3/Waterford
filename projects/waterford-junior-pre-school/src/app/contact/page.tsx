import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionWrapper } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak with the school office at Waterford Junior & Pre-School for visits, admissions, and general school questions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        heading="Speak with the school office."
      />

      {/* Contact details + form */}
      <SectionWrapper className="grid items-start gap-[clamp(28px,6vw,76px)] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <p className="mb-3 text-[0.78rem] font-black uppercase tracking-wide text-waterford-gold-dark">
            Get in Touch
          </p>
          <h2 className="m-0 text-[clamp(2rem,5vw,3.45rem)] leading-[1.08]">
            We are ready to help with visits, admissions, and general school
            questions.
          </h2>
          <div className="mt-[26px] grid gap-3">
            {[
              { label: "Phone", value: "+263 000 000 000" },
              { label: "Email", value: "info@waterfordjunior.ac.zw" },
              {
                label: "Office Hours",
                value: "Monday to Friday, 8:00 AM to 4:00 PM",
              },
              { label: "Location", value: "Zimbabwe" },
            ].map((item) => (
              <div
                key={item.label}
                className="grid gap-0.5 border-b border-waterford-line py-4"
              >
                <strong>{item.label}</strong>
                <span className="text-waterford-muted">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <Card className="border-waterford-line bg-waterford-white shadow-[0_12px_34px_rgba(0,0,0,0.06)]">
          <CardContent className="grid gap-4 p-6">
            <div className="grid gap-2">
              <label className="font-extrabold text-waterford-black">
                Name
              </label>
              <Input
                type="text"
                name="name"
                placeholder="Your name"
                className="min-h-[46px] rounded-lg border-[#d7cfbd] bg-[#fffdf8]"
              />
            </div>
            <div className="grid gap-2">
              <label className="font-extrabold text-waterford-black">
                Email
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
                Message
              </label>
              <Textarea
                name="message"
                rows={6}
                placeholder="How can we help?"
                className="rounded-lg border-[#d7cfbd] bg-[#fffdf8] resize-y"
              />
            </div>
            <Button className="min-h-[48px] rounded-lg bg-waterford-gold font-black text-waterford-black hover:bg-waterford-gold-dark">
              Send Message
            </Button>
          </CardContent>
        </Card>
      </SectionWrapper>

      {/* Map placeholder */}
      <section className="grid min-h-[320px] items-center border-t-[8px] border-waterford-gold bg-[linear-gradient(rgba(0,0,0,0.78),rgba(0,0,0,0.78)),repeating-linear-gradient(45deg,#111_0_24px,#181818_24px_48px)] text-waterford-white">
        <SectionWrapper as="div">
          <p className="mb-3 text-[0.78rem] font-black uppercase tracking-wide text-waterford-gold">
            Visit Waterford
          </p>
          <h2 className="m-0 text-[clamp(2rem,5vw,3.45rem)] leading-[1.08]">
            Campus location map placeholder
          </h2>
        </SectionWrapper>
      </section>
    </>
  );
}
