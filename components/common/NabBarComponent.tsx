// src/components/NavbarComponent.tsx
"use client";

import React from "react";
import { Menu } from "lucide-react"; // Using ChevronDown for dropdowns
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility from shadcn/ui
import Image from "next/image";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  items?: MenuItem[];
}

const navMenuItems: MenuItem[] = [
  { title: "Home", url: "/" },
  {
    title: "About",
    url: "/about", // The main "About" itself might not link if it's just a trigger
    items: [
      {
        title: "About",
        url: "/about",
        description: ".",
      },
      {
        title: "Team",
        url: "/about/team",
        description: "",
      },
    ],
  },
  {
    title: "Our Pillars",
    url: "#", // The main "Our Pillars" itself might not link
    items: [
      {
        title: "CodeFACTORY",
        url: "/our-pillers/code-factory",
        description: "Details about our first core pillar.",
      },
      {
        title: "TalentFACTORY",
        url: "/our-pillers/talentFactory",
        description: "Exploring the second foundational pillar.",
      },
      {
        title: "CapitalFACTORY",
        url: "/our-pillers/capitalFactory",
        description: "Exploring the second foundational pillar.",
      },
      {
        title: "DigitalFACTORY",
        url: "/our-pillers/digitalFactory",
        description: "Exploring the second foundational pillar.",
      },
      {
        title: "AccelaratorFACTORY",
        url: "/our-pillers/accelaratorFactory",
        description: "Exploring the second foundational pillar.",
      },
    ],
  },
  { title: "News", url: "/news" },
  { title: "Impact Report", url: "/impact-report" },
  { title: "Contact", url: "/contact" },
];

const defaultLogo = {
  url: "/",
  src: "/BlueSpace-BIH-1.png", // Ensure this path is correct
  alt: "Bluespace Innovation Hub Logo",
};

const ctaButton = {
  title: "Financial Cloud",
  url: "/financial-cloud",
};

const NavbarComponent = () => {
  return (
    <header className=" fixed left-10 right-10 top-5 top-0 z-50 rounded-lg border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href={defaultLogo.url} className="flex-shrink-0">
          <Image
            width={200}
            height={100}
            src={defaultLogo.src}
            className="h-10 sm:h-12" // Adjusted height
            alt={defaultLogo.alt}
          />
        </Link>

        {/* Desktop Menu - Centered and taking available space */}
        <NavigationMenu className="hidden lg:flex flex-grow justify-center">
          <NavigationMenuList className="space-x-1">
            {navMenuItems.map((item) => renderDesktopMenuItem(item))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button - Pushed to the right */}
        <div className="hidden lg:flex flex-shrink-0">
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md text-sm font-medium"
          >
            <Link href={ctaButton.url}>{ctaButton.title}</Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[330px] p-0 overflow-y-auto"
            >
              <SheetHeader className="p-4 border-b">
                <SheetTitle>
                  <Link href={defaultLogo.url} className="flex items-center">
                    <img
                      src={defaultLogo.src}
                      className="h-10"
                      alt={defaultLogo.alt}
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4 space-y-1">
                {navMenuItems.map((item) => renderMobileMenuItem(item))}
                <div className="pt-6 mt-4 border-t">
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base"
                  >
                    <Link href={ctaButton.url}>{ctaButton.title}</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

const renderDesktopMenuItem = (item: MenuItem) => {
  const linkClassName =
    "text-neutral-700 hover:text-blue-600 focus:text-blue-600 transition-colors duration-150 text-sm font-medium";

  if (item.items && item.items.length > 0) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger
          className={cn(
            navigationMenuTriggerStyle(),
            "bg-transparent",
            linkClassName
            // "px-3 py-2"
          )}
        >
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[300px]  md:w-[350px] lg:w-[300px]">
            {item.items.map((subItem) => (
              <ListItem
                key={subItem.title}
                title={subItem.title}
                href={subItem.url}
              >
                {subItem.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <Link href={`${item.url}`}>
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            "bg-transparent",
            linkClassName,
            "px-3 py-2"
          )}
        >
          {item.title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string } // Ensure title is part of props
>(({ className, title, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md  leading-none no-underline outline-none transition-colors hover:bg-neutral-100 focus:bg-neutral-100",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold text-neutral-800">{title}</div>
          {/* <p className="line-clamp-2 text-sm leading-snug text-neutral-600">
            {children}
          </p> */}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const renderMobileMenuItem = (item: MenuItem) => {
  const linkClassName = "text-neutral-700 hover:text-blue-600";
  if (item.items && item.items.length > 0) {
    return (
      <Accordion type="single" collapsible className="w-full" key={item.title}>
        <AccordionItem value={item.title} className="border-b-0">
          <AccordionTrigger
            className={cn(
              "py-3 text-base font-medium hover:no-underline",
              linkClassName
            )}
          >
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="pl-4 pb-0">
            <div className="flex flex-col space-y-1 mt-1">
              {item.items.map((subItem) => (
                <Link
                  key={subItem.title}
                  href={subItem.url}
                  className="block py-2.5 text-base text-neutral-600 hover:text-blue-600"
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
      className={cn("block py-3 text-base font-medium", linkClassName)}
    >
      {item.title}
    </Link>
  );
};

export default NavbarComponent;
