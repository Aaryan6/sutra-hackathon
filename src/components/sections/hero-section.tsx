"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const router = useRouter();
  return (
    <section className="relative bg-blue-600 text-white py-16 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="text-left max-w-3xl lg:mr-8">
            <div className="inline-flex items-center justify-center space-x-2 mb-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-blue-100 font-medium text-sm">
                June 1 - July 6, 2025
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
              Sutra Indic AI Hackathon
            </h1>

            <p className="text-xl text-white mb-4 font-medium">
              Building Apps That Understand Bharat
            </p>

            <p className="text-base text-blue-100 mb-8 leading-relaxed max-w-xl">
              Harness the power of multilingual AI to create transformative
              applications serving India&apos;s diverse linguistic landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => router.push("/register")}
              >
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent hover:text-white text-white hover:bg-white/10 px-6 py-6 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300"
                onClick={() => {
                  document
                    .getElementById("overview")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="lg:ml-auto hidden lg:block">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/sutra-blue-logo.png"
                alt="Sutra Logo"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
