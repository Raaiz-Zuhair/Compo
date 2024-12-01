"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClass = (path) => {
    return pathname === path
      ? "text-[#86efac] font-bold  rounded-full py-1 cursor-pointer px-6 "
      : "hover:text-[#86efac] hover:font-bold  rounded-full py-1 cursor-pointer px-6";
  };

  return (
    <main>
      {/* Navbar */}
      <nav className="bg-white shadow-lg flex justify-center w-full">
        <div className="w-10/12">
          <div className="flex py-6 justify-between items-center">
            <div>
              <Image src="/logo.svg" alt="Logo" width={170} height={100} />
            </div>
            <div className="hidden lg:block text-gray-500 space-x-1 text-lg">
              <Link href="/">
                <span className={getLinkClass("/")}>Home</span>
              </Link>
              <Link href="/about">
                <span className={getLinkClass("/about")}>About</span>
              </Link>
              <Link href="/contact">
                <span className={getLinkClass("/contact")}>Contact</span>
              </Link>
              <Link href="/blog">
                <span className={getLinkClass("/blog")}>Blog</span>
              </Link>
              <Link href="/careers">
                <span className={getLinkClass("/careers")}>Careers</span>
              </Link>
            </div>
            <div className="hidden lg:block">
              <button className="py-3 px-8 bg-green-400 hover:ring hover:ring-mygreen hover:text-myblue rounded-full text-white text-sm font-semibold">
                Request Invite
              </button>
            </div>
            {/* Mobile menu icon */}
            <div className="lg:hidden" onClick={toggleMenu}>
              <Image
                src={isMenuOpen ? "/icon-close.svg" : "/icon-hamburger.svg"}
                alt="menu-button"
                width={30}
                height={30}
              />
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-6 flex flex-col justify-center items-center gap-3 text-gray-900">
              <Link href="/">
                <span className={getLinkClass("/")}>Home</span>
              </Link>
              <Link href="/about">
                <span className={getLinkClass("/about")}>About</span>
              </Link>
              <Link href="/contact">
                <span className={getLinkClass("/contact")}>Contact</span>
              </Link>
              <Link href="/blog">
                <span className={getLinkClass("/blog")}>Blog</span>
              </Link>
              <Link href="/careers">
                <span className={getLinkClass("/careers")}>Careers</span>
              </Link>
              <button
                className="py-3 px-8 bg-green-400 hover:ring hover:ring-mygreen hover:text-myblue rounded-full text-white text-sm font-semibold"
                onClick={toggleMenu}
              >
                Request Invite
              </button>
            </div>
          )}
        </div>
      </nav>
    </main>
  );
}
