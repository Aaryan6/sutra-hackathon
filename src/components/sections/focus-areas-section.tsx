import {
  BookOpen,
  Building,
  FileText,
  Rocket,
  ShoppingBag,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function FocusAreasSection() {
  return (
    <section
      id="focus-areas"
      className="py-24 px-6 bg-gradient-to-br from-white to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Innovation Opportunities</span>
          </div>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 mb-6">
            Suggested Focus Areas
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Participants are encouraged to explore any India-specific challenge
            that benefits from SUTRA&apos;s multilingual capabilities. Below are
            suggested focus areas:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-8 hover:shadow-xl transition-all duration-300 border-none bg-white/80 backdrop-blur-sm rounded-2xl hover:translate-y-[-5px]">
            <CardContent className="p-0">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-2xl mb-6">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">
                Multilingual Education Platforms
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Develop AI-powered platforms that generate personalized learning
                content in multiple Indian languages, create chatbots for
                real-time tutoring, or build tools that translate educational
                resources into regional languages.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 border-none bg-white/80 backdrop-blur-sm rounded-2xl hover:translate-y-[-5px]">
            <CardContent className="p-0">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-2xl mb-6">
                <Stethoscope className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">
                Healthcare Accessibility
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Design multilingual health assistants, develop apps for
                real-time doctor-patient conversation translation, or create
                medication reminder systems with voice-based alerts in regional
                languages.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 border-none bg-white/80 backdrop-blur-sm rounded-2xl hover:translate-y-[-5px]">
            <CardContent className="p-0">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-2xl mb-6">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">
                Cultural Preservation and Engagement
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Build AI-driven virtual tour guides for heritage sites, develop
                chatbots that educate about Indian festivals and traditions, or
                create apps that generate folk stories in regional languages.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 border-none bg-white/80 backdrop-blur-sm rounded-2xl hover:translate-y-[-5px]">
            <CardContent className="p-0">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-2xl mb-6">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">
                Governance & Public Services
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Create multilingual grievance redressal chatbots, develop apps
                that translate legal documents, or build real-time information
                portals for government schemes in multiple Indian languages.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 border-none bg-white/80 backdrop-blur-sm rounded-2xl hover:translate-y-[-5px]">
            <CardContent className="p-0">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-2xl mb-6">
                <ShoppingBag className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">
                Inclusive E-Commerce & Business
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Create AI tools for auto-generating product descriptions in
                regional languages, develop multilingual customer support
                chatbots, or build apps providing market insights for rural
                entrepreneurs.
              </p>
            </CardContent>
          </Card>

          <div className="p-8 hover:shadow-xl transition-all duration-300 border-none bg-gradient-to-br from-blue-600 to-violet-600 text-white rounded-2xl hover:translate-y-[-5px] flex flex-col items-center justify-center">
            <div className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">
              Have Another Idea?
            </h3>
            <p className="text-center text-blue-100 mb-6">
              We welcome innovations across all domains that leverage
              SUTRA&apos;s multilingual capabilities.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300">
              Submit Your Idea
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
