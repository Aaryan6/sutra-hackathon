"use client";

import {
  Github,
  Linkedin,
  Youtube,
  Mail,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gradient-to-b from-blue-950 via-indigo-950 to-blue-950 text-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNGMwIDIuMjEgMS43OSA0IDQgNHM0LTEuNzkxLTQgNHptLTIwIDBjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNGMwIDIuMjEgMS43OSA0IDQgNHM0LTEuNzkxLTQgNHptNDAgMGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTR6bS0yMCAwYzAtMi4yMDktMS43OS00LTQtNHMtNCAxLjc5MS00IDRjMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNHptNDAgMGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTR6bS0yMC0yMGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTR6bS0yMCAwYzAtMi4yMDktMS43OS00LTQtNHMtNCAxLjc5MS00IDRjMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNHptNDAgMGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-end mb-8">
          <button
            onClick={scrollToTop}
            className="bg-blue-900/50 hover:bg-blue-800/70 p-3 rounded-full transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUpRight className="w-5 h-5 text-blue-200 group-hover:text-white transition-colors" />
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-lg flex items-center justify-center shadow-md">
                <div className="w-5 h-5 bg-blue-900 rounded-sm"></div>
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight">SUTRA</span>
                <span className="ml-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-2 py-1 rounded text-sm font-medium">
                  HACKATHON
                </span>
              </div>
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Building Applications That Understand and Serve Bharat&apos;s
              Linguistic Diversity
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-800/50 hover:bg-blue-700/70 rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-blue-200 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-800/50 hover:bg-blue-700/70 rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-blue-200 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-800/50 hover:bg-blue-700/70 rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="Website"
              >
                <ExternalLink className="w-5 h-5 text-blue-200 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-800/50 hover:bg-blue-700/70 rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-blue-200 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-5 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-blue-200">
              <li>
                <a
                  href="#overview"
                  className="hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300 transition-colors"></span>
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    Overview
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#focus-areas"
                  className="hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300 transition-colors"></span>
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    Focus Areas
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  className="hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300 transition-colors"></span>
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    Timeline
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#prizes"
                  className="hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300 transition-colors"></span>
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    Prizes
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#resources"
                  className="hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300 transition-colors"></span>
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    Resources
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-5 text-white">Resources</h4>
            <ul className="space-y-3 text-blue-200">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300 transition-colors"></span>
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    Sutra Cookbook
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300 transition-colors"></span>
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    Workshop Notebook
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300 transition-colors"></span>
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    Idea PPT Template
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300 transition-colors"></span>
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    Submit Your Idea
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-5 text-white">Contact</h4>
            <div className="bg-blue-900/30 p-5 rounded-xl backdrop-blur-sm border border-blue-800/30 hover:border-blue-700/30 transition-colors">
              <p className="text-blue-200 mb-3">
                Have questions about the hackathon?
              </p>
              <a
                href="mailto:support@two.ai"
                className="text-white font-medium hover:text-blue-200 transition-colors inline-flex items-center group"
              >
                <Mail className="w-4 h-4 mr-2 text-blue-300 group-hover:text-blue-200" />
                <span>support@two.ai</span>
              </a>
              <div className="mt-4 pt-4 border-t border-blue-800/50">
                <Button
                  variant="outline"
                  className="w-full border-blue-700/50 text-blue-900 hover:bg-blue-800/50 hover:text-white transition-all hover:border-blue-600/50 group"
                >
                  <span>Contact Us</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800/50 mt-12 pt-8 text-center text-blue-300">
          <p className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </p>
          <p className="text-blue-400/80">
            &copy; 2025 SUTRA / TWO.AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
