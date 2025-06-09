"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Building,
  FileText,
  Rocket,
  ShoppingBag,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { useRouter } from "next/navigation";

export function FocusAreasSection() {
  const router = useRouter();
  const focusAreas = [
    {
      icon: BookOpen,
      title: "Multilingual Education Platforms",
      description:
        "Develop AI-powered platforms that generate personalized learning content in multiple Indian languages, create chatbots for real-time tutoring, or build tools that translate educational resources into regional languages.",
    },
    {
      icon: Stethoscope,
      title: "Healthcare Accessibility",
      description:
        "Design multilingual health assistants, develop apps for real-time doctor-patient conversation translation, or create medication reminder systems with voice-based alerts in regional languages.",
    },
    {
      icon: Building,
      title: "Cultural Preservation and Engagement",
      description:
        "Build AI-driven virtual tour guides for heritage sites, develop chatbots that educate about Indian festivals and traditions, or create apps that generate folk stories in regional languages.",
    },
    {
      icon: FileText,
      title: "Governance & Public Services",
      description:
        "Create multilingual grievance redressal chatbots, develop apps that translate legal documents, or build real-time information portals for government schemes in multiple Indian languages.",
    },
    {
      icon: ShoppingBag,
      title: "Inclusive E-Commerce & Business",
      description:
        "Create AI tools for auto-generating product descriptions in regional languages, develop multilingual customer support chatbots, or build apps providing market insights for rural entrepreneurs.",
    },
  ];

  return (
    <section
      id="focus-areas"
      className="py-24 px-6 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-100 rounded-full blur-3xl opacity-40 -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Innovation Opportunities</span>
          </div>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
            Suggested Focus Areas
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Participants are encouraged to explore any India-specific challenge
            that benefits from SUTRA&apos;s multilingual capabilities. Below are
            suggested focus areas:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 border-none bg-white/90 backdrop-blur-sm rounded-2xl hover:translate-y-[-5px] group"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-blue-900 group-hover:text-indigo-700 transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}

          <div className="p-8 hover:shadow-xl transition-all duration-300 border-none bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl hover:translate-y-[-5px] flex flex-col items-center justify-center relative overflow-hidden group">
            {/* Animated sparkles */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNGMwIDIuMjEgMS43OSA0IDQgNHM0LTEuNzkgNC00em0tMjAgMGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTR6bTQwIDBjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNGMwIDIuMjEgMS43OSA0IDQgNHM0LTEuNzkgNC00ek0zNiAxNGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTR6bS0yMCAwYzAtMi4yMDktMS43OS00LTQtNHMtNCAxLjc5MS00IDRjMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNHptNDAgMGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTR6bS0yMC0yMGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTR6bS0yMCAwYzAtMi4yMDktMS43OS00LTQtNHMtNCAxLjc5MS00IDRjMCAyLjIxIDEuNzkgNCA0IDRzNC0xLjc5IDQtNHptNDAgMGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
            </div>

            <div className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">
              Have Another Idea?
            </h3>
            <p className="text-center text-blue-100 mb-6">
              We welcome innovations across all domains that leverage
              SUTRA&apos;s multilingual capabilities.
            </p>
            <Button
              className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 group"
              onClick={() => router.push("/register")}
            >
              <span>Submit Your Idea</span>
              <Sparkles className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
