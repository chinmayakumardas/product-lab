import Link from "next/link";

import { footerNavigation } from "@/config/navigation";
import { Container } from "@/components/core/Container";

export function Footer() {
  return (
    <footer className="border-t">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground md:flex-row">
        <p>
          © {new Date().getFullYear()} Product Lab.
          All rights reserved.
        </p>

        <nav className="flex gap-6">
          {footerNavigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.title}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
