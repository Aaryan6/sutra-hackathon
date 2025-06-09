"use client";

import { Calendar, Rocket, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRegistration } from "@/context/registration-context";

export function CtaSection() {
  const { openDialog } = useRegistration();

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative Patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNGMwIDIuMjEgMS43OSA0IDQgNHM0LTEuNzkgNC00em0tMjAgMGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTR6bTQwIDBjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNGMwIDIuMjEgMS43OSA0IDQgNHM0LTEuNzkgNC00ek0zNiAxNGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTR6bS0yMCAwYzAtMi4yMDktMS43OS00LTQtNHMtNCAxLjc5MS00IDRjMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNHptNDAgMGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTR6bS0yMC0yMGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTR6bS0yMCAwYzAtMi4yMDktMS43OS00LTQtNHMtNCAxLjc5MS00IDRjMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNHptNDAgMGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="relative mb-4">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center transform transition-transform hover:scale-110 shadow-lg rotate-12 hover:rotate-0 duration-300">
            <Rocket className="w-7 h-7 text-white" />
          </div>
        </div>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          Ready to Build the Future of{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
            Multilingual AI?
          </span>
        </h2>

        <p className="text-lg text-blue-100 mb-6 max-w-3xl mx-auto">
          Join innovators from across India in creating solutions that make AI
          accessible in every language.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-0"
            onClick={openDialog}
          >
            Register Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            onClick={() => {
              document
                .getElementById("overview")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-4 rounded-xl hover:from-white/10 hover:to-white/15 transition-all duration-300 shadow-md border border-white/10">
            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-1">June 12 - July 13</h3>
            <p className="text-blue-100 text-sm">
              Registration to final demo day
            </p>
          </div>

          <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-4 rounded-xl hover:from-white/10 hover:to-white/15 transition-all duration-300 shadow-md border border-white/10">
            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-1">Team Formation</h3>
            <p className="text-blue-100 text-sm">Form teams of 2-4 members</p>
          </div>

          <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-4 rounded-xl hover:from-white/10 hover:to-white/15 transition-all duration-300 shadow-md border border-white/10">
            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Trophy className="w-6 h-6 text-white" />
            </div>
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
