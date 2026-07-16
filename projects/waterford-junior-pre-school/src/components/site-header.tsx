"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Search, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const matchedLinks = searchQuery.trim()
    ? navLinks.filter((link) =>
        link.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <header className="sticky top-0 z-20 flex min-h-[76px] items-center justify-between border-b border-waterford-line bg-white/96 px-[clamp(18px,4vw,56px)] py-3 backdrop-blur-[14px] max-sm:min-h-[70px] max-sm:px-3.5">
      {searchOpen ? (
        <div className="flex w-full items-center gap-3 animate-in fade-in duration-200">
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="size-5 text-waterford-muted" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search pages (e.g., admissions, academics, gallery...)"
              className="w-full h-11 pl-10 pr-4 rounded-lg border border-waterford-line bg-waterford-paper text-waterford-black focus:outline-none focus:ring-2 focus:ring-waterford-gold text-sm"
              autoFocus
            />
          </div>
          <button
            type="button"
            onClick={() => {
              setSearchOpen(false);
              setSearchQuery("");
            }}
            className="flex items-center justify-center size-11 rounded-lg border border-waterford-line bg-waterford-white hover:bg-waterford-paper transition-colors"
            aria-label="Close search"
          >
            <X className="size-5 text-waterford-black" />
          </button>

          {/* Autocomplete Dropdown */}
          {searchQuery.trim() && (
            <div className="absolute top-[76px] left-0 right-0 border-b border-waterford-line bg-white/96 px-[clamp(18px,4vw,56px)] py-4 backdrop-blur-[14px] shadow-lg flex flex-col gap-2 max-sm:top-[70px] animate-in slide-in-from-top-2 duration-150">
              <p className="text-xs font-bold text-waterford-muted uppercase tracking-wider">
                Matching Pages
              </p>
              {matchedLinks.length > 0 ? (
                <div className="grid gap-1">
                  {matchedLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-waterford-gold text-sm font-bold text-[#2a2926] hover:text-waterford-black transition-colors"
                    >
                      <Search className="size-4" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-waterford-muted py-1">
                  No pages matching &quot;{searchQuery}&quot; found
                </p>
              )}
            </div>
          )}
        </div>
      ) : (
        <>
          {/* Brand */}
          <Link
            href="/"
            className="inline-flex min-w-0 items-center gap-3 font-extrabold leading-[1.1]"
            aria-label="Waterford Junior and Pre-School home"
          >
            <Image
              src="/assets/waterford-logo.png"
              alt="Waterford Junior and Pre-School logo"
              width={48}
              height={48}
              className="size-12 rounded-full object-cover max-sm:size-[42px]"
            />
            <span className="max-w-[280px] max-sm:max-w-[176px] max-sm:text-[0.9rem]">
              Waterford Junior &amp; Pre-School
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-1.5 md:flex"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex min-h-[40px] items-center rounded-lg px-3 py-2 text-[0.94rem] font-bold text-[#2a2926] transition-colors hover:bg-waterford-gold hover:text-waterford-black ${
                  pathname === link.href
                    ? "bg-waterford-gold text-waterford-black"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Desktop Search Toggle */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="ml-1.5 inline-flex min-h-[40px] size-[40px] items-center justify-center rounded-lg text-[#2a2926] hover:bg-waterford-gold hover:text-waterford-black transition-colors"
              aria-label="Open search"
            >
              <Search className="size-5" />
            </button>
          </nav>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Search Toggle */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="inline-flex size-11 items-center justify-center rounded-lg border border-waterford-line bg-waterford-white hover:bg-waterford-paper transition-colors"
              aria-label="Open search"
            >
              <Search className="size-5 text-waterford-black" />
            </button>

            {/* Mobile menu trigger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                className="inline-flex size-11 flex-col items-center justify-center gap-[5px] rounded-lg border border-waterford-line bg-waterford-white"
                aria-label="Open navigation"
              >
                <span className="h-0.5 w-[22px] bg-waterford-black" />
                <span className="h-0.5 w-[22px] bg-waterford-black" />
                <span className="h-0.5 w-[22px] bg-waterford-black" />
              </SheetTrigger>
              <SheetContent side="top" className="border-b border-waterford-line bg-waterford-white shadow-[0_16px_30px_rgba(0,0,0,0.1)]">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <nav className="grid gap-1 px-5 pb-5 pt-3" aria-label="Mobile navigation">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`inline-flex min-h-[44px] items-center rounded-lg px-3 py-2 text-[0.94rem] font-bold text-[#2a2926] transition-colors hover:bg-waterford-gold hover:text-waterford-black ${
                        pathname === link.href
                          ? "bg-waterford-gold text-waterford-black"
                          : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </>
      )}
    </header>
  );
}
