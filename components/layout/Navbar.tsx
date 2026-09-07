"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Container } from "../ui/Container";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    // Check initial scroll position
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Build nav links dynamically
  const navLinks = [
    ...(pathname !== "/" ? [{ name: "Home", href: "/" }] : []),
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const navClasses = isScrolled
    ? "bg-navy/95 backdrop-blur-md border-b border-white/10 shadow-lg py-2 text-white"
    : "bg-navy py-2 text-white border-b border-white/10";

  const mobileToggleClasses = "text-white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${navClasses}`}
      >
        <Container>
          <div className="flex items-center justify-between">
            <Link
              href="/"
              aria-label="DEV-TEE home"
              className="relative z-50 block aspect-[3.315/1] w-[150px] overflow-hidden sm:w-[180px]"
            >
              <Image
                src="/logo.jpg"
                alt="DEV-TEE - Build. Solve. Grow."
                width={2560}
                height={1050}
                priority
                sizes="(max-width: 640px) 150px, 180px"
                className="absolute left-[-14.27%] top-[-37.9%] h-auto w-[129.55%] max-w-none"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                // For Home link, exact match. For others, startsWith to catch subpages
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href ||
                      pathname.startsWith(`${link.href}/`);

                const linkTextClasses = isActive
                  ? "text-white"
                  : "text-gray-300 hover:text-white";

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-bold tracking-wide transition-colors relative group ${linkTextClasses}`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-electric rounded-full" />
                    )}
                    <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-electric rounded-full transition-all group-hover:w-full opacity-0 group-hover:opacity-100" />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Toggle */}
            <button
              className={`md:hidden z-50 p-2 transition-colors duration-500 ${mobileToggleClasses}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-navy flex flex-col pt-24 px-6 pb-12 animate-in fade-in duration-300">
          <div className="flex flex-col space-y-6 flex-grow overflow-y-auto">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-extrabold transition-colors ${isActive ? "text-white" : "text-gray-400 hover:text-gray-200"}`}
                >
                  {link.name.toUpperCase()}
                  {isActive && (
                    <span className="ml-3 inline-block w-2 h-2 rounded-full bg-electric align-middle" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-8 border-t border-white/10 mt-auto">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center text-electric font-bold text-xl tracking-wide group"
            >
              BOOK A SESSION{" "}
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
