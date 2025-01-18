'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkStyles = (path: string) =>
    pathname === path
      ? "text-black font-bold"
      : "hover:text-gray-300";

  return (
    <div className="py-2 mt-2 md:mt-5 ps-1 shadow-md flex flex-row space-x-4 md:space-x-10 font-semibold text-gray-500 transition-all">
      <Link href="/" className={linkStyles("/")}>
        Home
      </Link>
      <Link href="/users" className={linkStyles("/users")}>
        Users
      </Link>
      <Link href="/about" className={linkStyles("/about")}>
        About
      </Link>
    </div>
  );
}
