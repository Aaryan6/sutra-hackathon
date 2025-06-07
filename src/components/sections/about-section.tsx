import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section
      id="overview"
      className="py-24 px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 h-96 flex items-center justify-center shadow-xl transform transition-transform hover:scale-[1.02] duration-500">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 w-full h-full flex items-center justify-center border border-white/30">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <div className="w-8 h-8 bg-white rounded-md"></div>
                  </div>
                  <h3 className="text-white text-3xl font-bold text-center mb-2">
                    SUTRA Multilingual Model
                  </h3>
                  <p className="text-blue-100 text-sm">
                    Powering India&apos;s language diversity
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-70 -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-100 rounded-full blur-2xl opacity-70 -z-10"></div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-2">
              <Rocket className="w-4 h-4" />
              <span>About The Challenge</span>
            </div>

            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
              Transforming India with Multilingual AI
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              The Sutra Indic AI Hackathon invites innovators to harness the
              power of Large Language Models (LLMs) to create transformative
              applications serving India&apos;s diverse linguistic landscape.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              This event focuses on developing practical AI solutions that
              address real challenges facing Indian communities while
              celebrating and leveraging the country&apos;s rich language
              diversity.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Participants will build cutting-edge LLM applications that make
              technology more accessible and impactful across India.
            </p>

            <div className="mt-8 flex space-x-4">
              <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-md hover:shadow-lg transition-all duration-300 rounded-lg px-6">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-lg px-6"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
