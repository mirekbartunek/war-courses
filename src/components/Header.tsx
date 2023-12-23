"use client";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex flex-row p-5 items-center border-b border-b-gray-300 mb-2 gap-5">
      <GraduationCap />
      <Link href="/" className={pathname === "/" ? "font-bold" : ""}>
        Courses
      </Link>
      <Link
        href="/speakers"
        className={(pathname === "/speakers" ? "font-bold" : "text-gray-600")}
      >
        Speakers
      </Link>
      <Link
        href="/locations"
        className={pathname === "/locations" ? "font-bold" : "text-gray-600"}
      >
        Locations
      </Link>
    </header>
  );
};
