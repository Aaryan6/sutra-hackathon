"use client";

import { ArrowRight, Rocket, SparkleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function AboutSection() {
  const router = useRouter();
  return (
    <section
      id="overview"
      className="py-24 px-6 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-6 shadow-xl transform transition-transform hover:scale-[1.01] duration-500 overflow-hidden group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-96 flex items-center justify-center transition-all duration-500 group-hover:bg-white/15">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center mb-5 backdrop-blur-sm shadow-lg group-hover:scale-110 transition-all duration-500">
                    <SparkleIcon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-white text-3xl font-bold text-center mb-3">
                    SUTRA Multilingual Model
                  </h3>
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-4"></div>
                  <p className="text-blue-100 leading-relaxed max-w-md mx-auto">
                    Powering India&apos;s language diversity through advanced AI
                    models tailored for Indian languages
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium">
              <Rocket className="w-4 h-4" />
              <span>About The Challenge</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Transforming India with Multilingual AI
            </h2>

            <div className="space-y-2">
              <p className="text-slate-700 text-lg leading-relaxed">
                The Sutra Indic AI Hackathon invites innovators to harness the
                power of Large Language Models (LLMs) to create transformative
                applications serving India&apos;s diverse linguistic landscape.
              </p>

              <p className="text-slate-700 text-lg leading-relaxed">
                This event focuses on developing practical AI solutions that
                address real challenges facing Indian communities while
                celebrating and leveraging the country&apos;s rich language
                diversity.
              </p>

              <p className="text-slate-700 text-lg leading-relaxed">
                Participants will build cutting-edge LLM applications that make
                technology more accessible and impactful across India.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all duration-300 px-6 py-6 rounded-xl group"
                onClick={() => router.push("/register")}
              >
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
