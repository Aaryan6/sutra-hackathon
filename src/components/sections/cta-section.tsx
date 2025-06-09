"use client";

import { Calendar, Rocket, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRegistration } from "@/context/registration-context";

export function CtaSection() {
  const { openDialog } = useRegistration();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transform transition-transform hover:scale-110 shadow-lg">
          <Rocket className="w-8 h-8 text-blue-200" />
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
          Ready to Build the Future of Multilingual AI?
        </h2>

        <p className="text-lg text-blue-100 mb-6 max-w-3xl mx-auto leading-relaxed">
          Join innovators from across India in creating solutions that make AI
          accessible in every language.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={openDialog}
          >
            Register Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white bg-transparent hover:text-white text-white hover:bg-white/10 px-6 py-4 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300"
            onClick={() => {
              document
                .getElementById("overview")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Learn More
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/15 transition-colors">
            <Calendar className="w-8 h-8 text-blue-200 mx-auto mb-2" />
            <h3 className="font-bold text-lg mb-1">June 12 - July 13</h3>
            <p className="text-blue-100 text-sm">
              Registration to final demo day
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/15 transition-colors">
            <Users className="w-8 h-8 text-blue-200 mx-auto mb-2" />
            <h3 className="font-bold text-lg mb-1">Team Formation</h3>
            <p className="text-blue-100 text-sm">Form teams of 2-4 members</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/15 transition-colors">
            <Trophy className="w-8 h-8 text-blue-200 mx-auto mb-2" />
            <h3 className="font-bold text-lg mb-1">Amazing Prizes</h3>
            <p className="text-blue-100 text-sm">
              Win exciting rewards and recognition
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
