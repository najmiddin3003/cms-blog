"use client";

import GlobalSearch from "@/components/shared/global-search";
import { Mobile } from "@/components/shared/mobile";
import ModeToggle from "@/components/shared/mode-toggle";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background">
      <div className="container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="font-creteRound text-4xl">Sammi</h1>
        </Link>

        <div className="gap-2  hidden md:flex">
          {navLinks.map((nav, index) => (
            <Link
              className={cn(
                `hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors`,
                pathname === nav.route && `text-blue-400`
              )}
              key={index}
              href={nav.route}
            >
              {nav.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <GlobalSearch />
          <ModeToggle />
          <div className="md:hidden">
            <Mobile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
