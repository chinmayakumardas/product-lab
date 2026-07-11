import { cn } from "@/lib/cn";

type SectionProps = React.HTMLAttributes<HTMLElement>;

export function Section({
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-20 md:py-28", className)}
      {...props}
    >
      {children}
    </section>
  );
}
