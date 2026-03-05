"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (pathname === "/") return null;

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1300px] px-6 mt-[150px]">

        <div className="inline-flex items-center gap-2
          bg-[#1f1f1f]
          text-[14px]
          text-gray-400
          px-3 py-1
          rounded-md">

          <Link href="/" className="hover:text-white transition">
            Home
          </Link>

          {segments.map((segment, index) => {
            const href = "/" + segments.slice(0, index + 1).join("/");
            const isLast = index === segments.length - 1;

            return (
              <div key={index} className="flex items-center gap-2">
                <span className="text-gray-600">›</span>

                {isLast ? (
                  <span className="text-gray-300 capitalize">
                    {segment.replace("-", " ")}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="hover:text-white transition capitalize"
                  >
                    {segment.replace("-", " ")}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}