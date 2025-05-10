"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <Image
          src="/fof.svg"
          alt="Diverse professionals collaborating"
          width={600}
          height={400}
          className="rounded-lg w-full object-cover h-[400px] mb-6"
        />
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-brand-primary underline">
          <ArrowLeft className="inline mr-1" />
          Return to Back
        </a>
      </div>
    </div>
  );
}
