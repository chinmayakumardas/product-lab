import Link from "next/link";

import { navigation } from "@/config/navigation";
import { Container } from "@/components/core/Container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight"
        >
          Product Lab
        </Link>

        <nav className="hidden gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
