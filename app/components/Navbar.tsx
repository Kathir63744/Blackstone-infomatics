"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {

  const [serviceOpen, setServiceOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 w-full flex justify-center px-6 mt-2 z-50">
      <div className="relative w-full h-[45px] max-w-[1280px]">

        <div className="relative rounded-[18px] p-[1px]"
        style={{
          background: `
            linear-gradient(rgba(255,255,255,0.25), rgba(255,255,255,0.15)),
            radial-gradient(120% 100% at 0% 0%,
            rgba(255,255,255,0.7) 0%,
            rgba(255,255,255,0.35) 15%,
            rgba(255,255,255,0.12) 30%,
            rgba(255,255,255,0) 55%)
          `,
        }}>

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
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-[14px] text-white">

        <Link href="/about">About Us</Link>

        {/* SERVICES DROPDOWN */}
        <div className="relative">
        <button
        onClick={() => setServiceOpen(!serviceOpen)}
        className="flex items-center gap-1 hover:text-gray-300"
        >
        Services
        <ChevronDown size={16} className={`${serviceOpen ? "rotate-180" : ""} transition`} />
        </button>

        {serviceOpen && (
        <div className="absolute top-8 left-0 bg-[#1a1a1a] p-6 rounded-lg shadow-xl w-[220px] space-y-3">
        <p className="text-sm text-gray-200">Software Development</p>
        <p className="text-sm text-gray-200">Designs</p>
        <p className="text-sm text-gray-200">Digital Marketing</p>
        <p className="text-sm text-gray-200">Offshore & Outsourcing</p>
        </div>
        )}
        </div>

        {/* PRODUCTS */}
        <Link href="/product">Products</Link>

        {/* COMPANY DROPDOWN */}
        <div className="relative">
        <button
        onClick={() => setCompanyOpen(!companyOpen)}
        className="flex items-center gap-1 hover:text-gray-300"
        >
        Company
        <ChevronDown size={16} className={`${companyOpen ? "rotate-180" : ""} transition`} />
        </button>

        {companyOpen && (
        <div className="absolute top-8 left-0 bg-[#1a1a1a] p-6 rounded-lg shadow-xl w-[200px] space-y-3">
        <p className="text-sm text-gray-200">Our Works</p>
        <p className="text-sm text-gray-200">Blogs</p>
        <p className="text-sm text-gray-200">Workshop</p>
        </div>
        )}
        </div>

        <Link href="/">Contacts</Link>
        <Link href="/">Telecom</Link>
        <Link href="/">Careers</Link>

        </div>

        {/* BUTTON */}
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
        backdrop-blur-md hover:brightness-110 transition"
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