import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
}

export function FeatureCard({ number, title, description }: FeatureCardProps) {
  return (
    <Card className="min-h-[242px] border-waterford-line bg-waterford-white shadow-[0_12px_34px_rgba(0,0,0,0.06)]">
      <CardContent className="p-6">
        <span className="mb-[18px] inline-flex size-[38px] items-center justify-center rounded-full bg-waterford-gold font-black text-waterford-black">
          {number}
        </span>
        <h3 className="m-0 text-[1.24rem] leading-[1.08]">{title}</h3>
        <p className="mt-2 text-waterford-muted">{description}</p>
      </CardContent>
    </Card>
  );
}
