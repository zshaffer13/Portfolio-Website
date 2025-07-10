'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ⛔ Don’t render on server

  const linkStyle = (path: string) =>
    `px-2 py-1 text-black hover:text-blue-600 transition-colors ${
      pathname.replace(/\/+$/, '') === path
        ? 'underline underline-offset-4 font-semibold'
        : ''
    }`;

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-black hover:text-blue-600">
          Zach Shaffer
        </Link>
        <div className="space-x-4">
          <Link href="/projects" className={linkStyle('/projects')}>
            Projects
          </Link>
          <Link href="/contact" className={linkStyle('/contact')}>
            Contact
          </Link>
          <a
            href="/Zach Shaffer Resume.pdf"
            download
            className="text-black hover:text-blue-600 transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
