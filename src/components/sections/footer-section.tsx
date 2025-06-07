import { Github, Linkedin, Link, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FooterSection() {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-violet-400 rounded-lg flex items-center justify-center shadow-md">
                <div className="w-5 h-5 bg-blue-900 rounded-sm"></div>
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight">SUTRA</span>
                <span className="ml-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white px-2 py-1 rounded text-sm font-medium">
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
                className="w-10 h-10 bg-blue-800/50 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5 text-blue-200 hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-800/50 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Youtube className="w-5 h-5 text-blue-200 hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-800/50 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Link className="w-5 h-5 text-blue-200 hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-800/50 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Github className="w-5 h-5 text-blue-200 hover:text-white" />
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
                  className="hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#focus-areas"
                  className="hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  Focus Areas
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  className="hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  Timeline
                </a>
              </li>
              <li>
                <a
                  href="#prizes"
                  className="hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  Prizes
                </a>
              </li>
              <li>
                <a
                  href="#resources"
                  className="hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  Resources
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
                  className="hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  Sutra Cookbook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  Workshop Notebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  Idea PPT Template
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  Submit Your Idea
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-5 text-white">Contact</h4>
            <div className="bg-blue-800/30 p-5 rounded-xl backdrop-blur-sm">
              <p className="text-blue-200 mb-3">
                Have questions about the hackathon?
              </p>
              <a
                href="mailto:support@two.ai"
                className="text-white font-medium hover:text-blue-200 transition-colors"
              >
                support@two.ai
              </a>
              <div className="mt-4 pt-4 border-t border-blue-800/50">
                <Button
                  variant="outline"
                  className="w-full border-blue-500 text-blue-200 hover:bg-blue-800/50 hover:text-white transition-colors"
                >
                  Contact Us
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
