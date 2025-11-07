"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/yugrow", label: "YuGrow" },
    { href: "/wegrow", label: "WeGrow" },
    { href: "/allgrow", label: "AllGrow" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  // Always link to home page + section anchor
  const bookLink = "/#book-consultation";

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/images/yugrow.png"
              alt="YUGROW Logo"
              className="h-16 w-auto"
            />
            <div className="hidden sm:block">
              <div className="text-xs text-orange-500 italic font-medium">
                Friendly · Creative · Professional
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-all font-medium relative pb-1 ${
                    isActive
                      ? "text-orange-600 font-semibold"
                      : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></span>
                  )}
                </Link>
              );
            })}

            <Button asChild>
              <Link href={bookLink}>Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md font-medium transition-all ${
                      isActive
                        ? "text-orange-600 bg-orange-100 font-semibold border-l-4 border-orange-500"
                        : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="px-3 py-2">
                <Button
                  asChild
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={bookLink}>Book Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
