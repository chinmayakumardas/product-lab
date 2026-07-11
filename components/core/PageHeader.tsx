import { cn } from "@/lib/cn";

type PageHeaderProps = {
  title: string;
  description?: string;
  className?: string;
};

export function PageHeader({
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
        {title}
      </h1>

      {description && (
        <p className="max-w-2xl text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
