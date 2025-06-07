import { Calendar, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:py-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center space-x-2 mb-1 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full">
            <Calendar className="w-4 h-4 text-blue-200" />
            <span className="text-blue-100 font-medium text-sm">
              Registration Deadline: June 25, 2025
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            India AI Challenge Powered By SUTRA
          </h1>

          <p className="text-lg md:text-xl text-blue-100 mb-2 font-medium">
            Building Apps That Understand Bharat
          </p>

          <p className="text-base text-blue-200 mb-4 max-w-3xl mx-auto leading-relaxed">
            Harness the power of multilingual AI to create transformative
            applications that address the challenges of India&apos;s diverse
            linguistic landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent hover:text-white text-white hover:bg-white/10 px-6 py-4 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <Users className="w-5 h-5 text-blue-200" />
              <span className="text-base font-semibold">
                1000+ Participants
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <Calendar className="w-5 h-5 text-blue-200" />
              <div>
                <span className="text-base font-semibold">
                  June 26 - July 13, 2025
                </span>
                <div className="text-xs text-blue-200">தமிழ்</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <Trophy className="w-5 h-5 text-blue-200" />
              <span className="text-base font-semibold">
                Prizes Worth ₹300,000+
              </span>
            </div>
          </div>

          <div className="mt-6 flex justify-center space-x-4 text-sm">
            <span className="px-3 py-1 bg-white/5 rounded-full text-blue-100 hover:bg-white/10 transition-colors duration-300 cursor-pointer">
              हिंदी
            </span>
            <span className="px-3 py-1 bg-white/5 rounded-full text-blue-100 hover:bg-white/10 transition-colors duration-300 cursor-pointer">
              ಕನ್ನಡ
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
