import Link from "next/link";

import { siteConfig } from "@/config/site";

type LogoProps = {
  showText?: boolean;
};

export function Logo({ showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-semibold tracking-tight"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
        PL
      </div>

      {showText && (
        <span className="text-lg">
          {siteConfig.shortName}
        </span>
      )}
    </Link>
  );
}
