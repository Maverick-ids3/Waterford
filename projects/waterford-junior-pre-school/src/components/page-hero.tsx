interface PageHeroProps {
  eyebrow: string;
  heading: string;
}

export function PageHero({ eyebrow, heading }: PageHeroProps) {
  return (
    <section className="border-b-[8px] border-waterford-gold bg-waterford-black text-waterford-white">
      <div className="mx-auto w-[min(1160px,calc(100%-40px))] pt-[clamp(74px,10vw,118px)] pb-[clamp(58px,8vw,92px)]">
        <p className="mb-3 text-[0.78rem] font-black uppercase tracking-wide text-waterford-gold">
          {eyebrow}
        </p>
        <h1 className="m-0 max-w-none text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.08] break-words">
          {heading}
        </h1>
      </div>
    </section>
  );
}
