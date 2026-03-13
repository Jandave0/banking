"use client";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px] ">
      <Sheet>
        <SheetTrigger>
          <Image
            src="./icons/hamburger.svg"
            width={30}
            height={30}
            alt={"menu"}
            className="cursor-pointer"
          />
        </SheetTrigger>

        {/* Kept your sheet padding at 0 as requested, but you might want bg-white here instead of bg-transparent! */}
        <SheetContent side="left" className="border-none bg-white-gradient p-0">
          <Link
            href="/"
            className="mb-12 flex cursor-pointer items-center gap-2 px-4 pt-3"
          >
            <Image src="/icons/logo.svg" width={34} height={34} alt="logo" />
            <h1
              className="text-26 
            font-ibm-plex-serif font-bold text-black-1"
            >
              Asteria Banking
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              {/* Removed the conflicting p-16 here */}
              <nav className="flex h-full flex-col gap-3 pt-2 px-4 pl-[-1px] text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);
                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn(
                          // Added flex, items-center, gap-3, and p-4 right here:
                          "mobilenav-sheet_close w-full flex items-center gap-3 p-3 rounded-[3px]",
                          {
                            "bg-bank-gradient": isActive,
                          },
                        )}
                      >
                        <div className="relative size-6">
                          <Image
                            src={item.imgURL}
                            alt={item.label}
                            width={20}
                            height={20}
                            className={cn({
                              "brightness-[3] invert-0": isActive,
                            })}
                          />
                        </div>
                        <p
                          className={cn("text-16 font-bold text-black-2", {
                            "!text-white": isActive,
                          })}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                USER
              </nav>
            </SheetClose>
            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
