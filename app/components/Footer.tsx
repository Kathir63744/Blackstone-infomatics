"use client";

import Image from "next/image";
import { FaTwitter, FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-6 px-6 lg:px-20">
  <div className="max-w-7xl mx-auto">

    {/* Top Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-20 border-b border-gray-800 pb-12">

      {/* Column 1 – Company Info */}
      <div className="lg:col-span-1">
        <div className="mb-6">
          <img
            src="/blackstonelogo.png"
            alt="Blackstone Logo"
            className="h-10 object-contain"
          />
        </div>

        <p className="text-[16px] leading-6 mb-5">
          70 - 71, Inhabit @ BuildScape, Mill Road,
          opp to Marakadai Bus Stop,
          Coimbatore, Tamil Nadu-641001
        </p>

        <p className="text-[16px] mb-2">
          info@blackstoneinfomatics.com
        </p>
        <p className="text-[16px]">
          +91 9043804505
        </p>
      </div>

      {/* Column 2 – Company */}
      <div>
        <h3 className="text-white text-[20px] font-semibold mb-6">Company</h3>
        <ul className="space-y-3 text-[16px]">
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Products</li>
          <li>Our Portfolio</li>
          <li>Contact Us</li>
        </ul>
      </div>

      {/* Column 3 – Services */}
      <div>
        <h3 className="text-white text-[20px] font-semibold mb-6">Services</h3>
        <ul className="space-y-3 text-[16px]">
          <li>Web Design & Development</li>
          <li>Digital Marketing</li>
          <li>Graphic Design</li>
          <li>App Development</li>
          <li>UI/UX Design</li>
          <li>Voice Process</li>
          <li>Software Development</li>
        </ul>
      </div>

      {/* Column 4 – Products */}
      <div>
        <h3 className="text-white text-[20px] font-semibold mb-6">Products</h3>
        <ul className="space-y-3 text-[16px] ">
          <li>Website</li>
          <li>CRM Software Development</li>
          <li>ERP Software Development</li>
          <li>Billing Software Development</li>
          <li>Rider APP Development</li>
        </ul>
      </div>

<div>
  <h3 className="text-white text-[20px] font-semibold mb-6">
    Get in Touch
  </h3>

  <ul className="space-y-4 text-[16px]">

    <li className="flex items-center gap-3">
      <span className="bg-white p-2 rounded-md flex items-center justify-center">
        <Image
          src="/x.png"
          alt="Twitter"
          width={20}
          height={20}
        />
      </span>
      <span className="text-gray-300">Twitter</span>
    </li>

    <li className="flex items-center gap-3">
      <span className="bg-white p-2 rounded-md flex items-center justify-center">
        <Image
          src="/instagram.png"
          alt="Instagram"
          width={20}
          height={20}
        />
      </span>
      <span className="text-gray-300">Instagram</span>
    </li>

    <li className="flex items-center gap-3">
      <span className="bg-white p-2 rounded-md flex items-center justify-center">
        <Image
          src="/fb.png"
          alt="Facebook"
          width={20}
          height={20}
        />
      </span>
      <span className="text-gray-300">Facebook</span>
    </li>

    <li className="flex items-center gap-3">
      <span className="bg-white p-2 rounded-md flex items-center justify-center">
        <Image
          src="/git.png"
          alt="Github"
          width={20}
          height={20}
        />
      </span>
      <span className="text-gray-300">Github</span>
    </li>

  </ul>
</div>

    </div>

    {/* Bottom Section */}
    <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-500">
      <p>2026 – Blackstone Informatics.com</p>
      <p className="mt-3 md:mt-0">Terms Conditions & Policy</p>
    </div>

  </div>
</footer>
  );
}