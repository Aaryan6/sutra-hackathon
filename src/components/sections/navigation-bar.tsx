"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 py-4 md:py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/sutra.png" alt="SUTRA" width={40} height={40} />
              <div>
                <span className="font-bold text-xl tracking-tight">SUTRA</span>
                <span className="ml-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-2 py-1 rounded text-sm font-medium">
                  HACKATHON
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <a
                href="#overview"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Overview
              </a>
              <a
                href="#focus-areas"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Focus Areas
              </a>
              <a
                href="#timeline"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Timeline
              </a>
              <a
                href="#prizes"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Prizes
              </a>
              <a
                href="#resources"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Resources
              </a>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-md hover:shadow-lg transition-all duration-300 rounded-lg">
                  Register Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-600" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pt-4 pb-3 border-t mt-4 space-y-3">
              <a
                href="#overview"
                className="block text-gray-600 hover:text-blue-600 py-2 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Overview
              </a>
              <a
                href="#focus-areas"
                className="block text-gray-600 hover:text-blue-600 py-2 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Focus Areas
              </a>
              <a
                href="#timeline"
                className="block text-gray-600 hover:text-blue-600 py-2 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Timeline
              </a>
              <a
                href="#prizes"
                className="block text-gray-600 hover:text-blue-600 py-2 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Prizes
              </a>
              <a
                href="#resources"
                className="block text-gray-600 hover:text-blue-600 py-2 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </a>
              <Link href="/register">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 mt-2">
                  Register Now
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
