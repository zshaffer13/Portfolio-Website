'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoid SSR mismatch

  const linkClass = "text-black px-2 py-1 hover:text-blue-600 transition";

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <a
          href="#home"
          className="text-xl font-bold text-black hover:text-blue-600 transition"
        >
          Zach Shaffer
        </a>
        <div className="flex items-center space-x-4">
          <a href="#projects" className={linkClass}>
            Projects
          </a>
          <a href="#contact" className={linkClass}>
            Contact
          </a>
          <a
            href="/Zach Shaffer Resume.pdf"
            download
            className={linkClass}
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
