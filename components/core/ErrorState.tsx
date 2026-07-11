type ErrorStateProps = {
  title?: string;
  description?: string;
};

export function ErrorState({
  title = "Something went wrong",
  description = "Please try again later.",
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="mt-2 max-w-md text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
