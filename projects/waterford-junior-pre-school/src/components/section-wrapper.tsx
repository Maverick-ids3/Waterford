import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
}

export function SectionWrapper({
  children,
  className,
  as: Component = "section",
}: SectionWrapperProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-[min(1160px,calc(100%-40px))] py-[clamp(58px,8vw,96px)]",
        className
      )}
    >
      {children}
    </Component>
  );
}
