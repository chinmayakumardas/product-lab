import { LoaderCircle } from "lucide-react";

export function Loading() {
  return (
    <div className="flex items-center justify-center py-20">
      <LoaderCircle className="h-6 w-6 animate-spin" />
    </div>
  );
}
