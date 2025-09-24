"use client";

import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  url: string;
  items?: MenuItem[];
}

const navMenuItems: MenuItem[] = [
  { title: "Home", url: "/" },
  {
    title: "About",
    url: "/about",
    items: [
      { title: "About", url: "/about" },
      { title: "Team", url: "/about/team" },
    ],
  },
  {
    title: "Our Pillars",
    url: "#",
    items: [
      { title: "CodeFACTORY", url: "/our-pillers/code-factory" },
      { title: "TalentFACTORY", url: "/our-pillers/talentFactory" },
      { title: "CapitalFACTORY", url: "/our-pillers/capitalFactory" },
      { title: "DigitalFACTORY", url: "/our-pillers/digitalFactory" },
      { title: "AccelaratorFACTORY", url: "/our-pillers/accelaratorFactory" },
    ],
  },
  { title: "News", url: "/news" },
  { title: "Impact Report", url: "/impact-report" },
  { title: "Contact", url: "/contact" },
];

const defaultLogo = { url: "/", src: "/BlueSpace-BIH-1.png", alt: "Bluespace Innovation Hub Logo" };
const ctaButton = { title: "Financial Cloud", url: "/financial-cloud" };

const NewNavbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 lg:hidden">
      <div className="flex justify-between items-center px-4 sm:px-6 py-3">
        {/* Logo Top Left */}
        <Link href={defaultLogo.url} className="flex-shrink-0">
          <Image src={defaultLogo.src} alt={defaultLogo.alt} width={120} height={40} className="h-8 w-auto" />
        </Link>

        {/* Menu Button Top Right */}
        <button
          onClick={() => setIsMobileOpen((prev) => !prev)}
          className="bg-green-700 text-white px-4 py-2 rounded-lg font-semibold shadow-lg transform transition-all duration-500 hover:bg-green-800"
        >
          <span className={`inline-block transform transition-transform duration-500 ${isMobileOpen ? "rotate-x-180" : ""}`}>
            {isMobileOpen ? "CLOSE" : "MENU"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Popup */}
      <div
        className={cn(
          "absolute top-14 right-4 w-[85%] max-w-sm bg-green-600 text-white rounded-xl shadow-xl overflow-hidden transform origin-top-right transition-all duration-700 ease-in-out",
          isMobileOpen ? "scale-100 opacity-100 py-4" : "scale-0 opacity-0 py-0"
        )}
      >
        <div className="flex flex-col space-y-3 px-4">
          {navMenuItems.map((item) => renderMobileMenuItem(item))}
          <Link
            href={ctaButton.url}
            className="block bg-green-700 text-center py-2 rounded-md font-medium hover:bg-green-800 transition"
          >
            {ctaButton.title}
          </Link>
        </div>
      </div>
    </header>
  );
};

// Mobile menu item with accordion if has sub-items
const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items && item.items.length > 0) {
    return (
      <Accordion type="single" collapsible className="w-full" key={item.title}>
        <AccordionItem value={item.title} className="border-b-0">
          <AccordionTrigger className="py-2 text-base font-medium hover:text-green-200 transition-colors">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="pl-2 pb-0">
            <div className="flex flex-col space-y-1 mt-1">
              {item.items.map((subItem) => (
                <Link
                  key={subItem.title}
                  href={subItem.url}
                  className="block py-2 pl-2 text-sm hover:text-green-200 transition-colors"
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <Link
      key={item.title}
      href={item.url}
      className="block py-2 text-base font-medium hover:text-green-200 transition-colors"
    >
      {item.title}
    </Link>
  );
};

export default NewNavbar;
