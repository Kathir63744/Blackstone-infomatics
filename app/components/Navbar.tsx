"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-6 left-0 w-full flex justify-center px-6 mt-2 z-50">
      <div className="relative w-full h-[45px] max-w-[1280px]">

        {/* ===== BORDER LAYER ===== */}
        <div
          className="relative rounded-[18px] p-[1px]"
          style={{
            background: `
              linear-gradient(
                rgba(255,255,255,0.25),
                rgba(255,255,255,0.15)
              ),
              radial-gradient(
                120% 100% at 0% 0%,
                rgba(255,255,255,0.7) 0%,
                rgba(255,255,255,0.35) 15%,
                rgba(255,255,255,0.12) 30%,
                rgba(255,255,255,0) 55%
              )
            `,
          }}
        >
          {/* ===== MAIN NAVBAR ===== */}
          <div className="rounded-[17px] bg-black backdrop-blur-xl">
            <nav className="flex items-center justify-between px-8 py-4">

              {/* LOGO */}
              <Link href="/">
                <Image
                  src="/Blackstonelogo.png"
                  alt="Blackstone Logo"
                  width={135}
                  height={40}
                  priority
                />
              </Link>

              {/* CENTER LINKS */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-[14px] font-sans text-[#FFFFFF]">
                <Link href="/" className="hover:text-white transition">About Us</Link>
                <Link href="/" className="hover:text-white transition">Services</Link>
                <Link href="/" className="hover:text-white transition">Products</Link>
                <Link href="/" className="hover:text-white transition">Company ▾</Link>
                <Link href="/" className="hover:text-white transition">Contacts</Link>
                <Link href="/" className="hover:text-white transition">Workshop</Link>
                <Link href="/" className="hover:text-white transition">Careers</Link>
              </div>

              {/* ===== GLASS BUTTON ===== */}
              <div
                className="relative p-[1px] rounded-xl"
                style={{
                  background: `
                    linear-gradient(
                      rgba(255,255,255,0.4),
                      rgba(255,255,255,0.15)
                    )
                  `,
                }}
              >
                <Link
                  href="/"
                  className="block rounded-xl px-6 py-2.5 
                  bg-[#1bb6a5] text-white text-sm font-medium
                  backdrop-blur-md
                  hover:brightness-110 transition"
                >
                  Get in touch
                </Link>
              </div>

            </nav>
          </div>
        </div>

      </div>
    </div>
  );
}
