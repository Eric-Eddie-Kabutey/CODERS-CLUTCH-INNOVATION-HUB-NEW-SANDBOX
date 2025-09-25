"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  url: string; // required
  description?: string;
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
    url: "/our-pillars",
    items: [
      { title: "CodeFACTORY", url: "/our-pillars/code-factory" },
      { title: "TalentFACTORY", url: "/our-pillars/talent-factory" },
      { title: "CapitalFACTORY", url: "/our-pillars/capital-factory" },
      { title: "DigitalFACTORY", url: "/our-pillars/digital-factory" },
      { title: "AcceleratorFACTORY", url: "/our-pillars/accelerator-factory" },
    ],
  },
  { title: "News", url: "/news" },
  { title: "Impact Report", url: "/impact-report" },
  { title: "Contact", url: "/contact" },
];

const defaultLogo = {
  url: "/",
  src: "/BlueSpace-BIH-1.png",
  alt: "Bluespace Innovation Hub Logo",
};

const ctaButton = { title: "Financial Cloud", url: "/financial-cloud" };

const NewNavbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[900px] rounded-xl border bg-white shadow-sm">
      <div className="flex h-12 items-center justify-between px-6 md:px-10 lg:px-12">
        {/* Logo */}
        <Link href={defaultLogo.url} className="flex-shrink-0">
          <Image
            src={defaultLogo.src}
            alt={defaultLogo.alt}
            width={140}
            height={48}
            className="h-6 sm:h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex flex-grow justify-center ml-4">
          <NavigationMenuList className="space-x-4">
            {navMenuItems.map((item) => (
              <React.Fragment key={item.title}>
                {renderDesktopMenuItem(item)}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-all hover:bg-green-800"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
          >
            {isMobileOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Popup */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden absolute top-16 right-4 w-[85%] max-w-sm bg-green-600 text-white rounded-xl shadow-xl overflow-hidden transform origin-top-right transition-all duration-700 ease-in-out",
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

export default NewNavbar;

/* ---------- helpers ---------- */

// Desktop menu item renderer
const renderDesktopMenuItem = (item: MenuItem) => {
  const linkClassName =
    "text-neutral-700 hover:text-blue-600 transition-colors duration-150 text-sm font-medium";

  // Dropdown
  if (item.items && item.items.length > 0) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger
          className={cn(
            navigationMenuTriggerStyle(),
            "bg-transparent",
            linkClassName
          )}
        >
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[240px] md:w-[260px] p-2">
            {item.items.map((subItem) => (
              <ListItem key={subItem.title} title={subItem.title} href={subItem.url} />
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  // Plain link
  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className={cn(
          navigationMenuTriggerStyle(),
          "bg-transparent",
          linkClassName,
          "px-2 py-1"
        )}
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

// Submenu list items — use a Link directly
const ListItem = React.forwardRef<
  HTMLAnchorElement, // ✅ correct ref type
  React.ComponentPropsWithoutRef<"a"> & { title: string; href: string }
>(({ className, title, href, ...props }, ref) => {
  return (
    <li>
      <Link
        href={href}
        ref={ref}
        className={cn(
          "block px-2 py-2 text-sm font-medium transition-colors hover:bg-neutral-800 hover:text-white rounded-md",
          className
        )}
        {...props}
      >
        {title}
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";

// Mobile menu item renderer
const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items && item.items.length > 0) {
    return (
      <Accordion type="single" collapsible className="w-full" key={item.title}>
        <AccordionItem value={item.title} className="border-b-0">
          <AccordionTrigger className="py-2.5 text-sm font-medium hover:no-underline">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="pl-2 pb-0">
            <div className="flex flex-col space-y-1 mt-1">
              {item.items.map((subItem) => (
                <Link
                  key={subItem.title}
                  href={subItem.url}
                  className="block py-2 text-sm hover:text-green-200 transition"
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
      className="block py-2 text-sm hover:text-green-200 transition"
    >
      {item.title}
    </Link>
  );
};
