import {
  Calendar,
  Users,
  Trophy,
  Rocket,
  BookOpen,
  Stethoscope,
  Building,
  FileText,
  ShoppingBag,
  Award,
  Code,
  Gift,
  Clock,
  ExternalLink,
  Linkedin,
  Youtube,
  Link,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="font-bold text-xl">SUTRA</span>
              <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                HACKATHON
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#overview" className="text-gray-600 hover:text-gray-900">
                Overview
              </a>
              <a
                href="#focus-areas"
                className="text-gray-600 hover:text-gray-900"
              >
                Focus Areas
              </a>
              <a href="#timeline" className="text-gray-600 hover:text-gray-900">
                Timeline
              </a>
              <a href="#prizes" className="text-gray-600 hover:text-gray-900">
                Prizes
              </a>
              <a
                href="#resources"
                className="text-gray-600 hover:text-gray-900"
              >
                Resources
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-8">
              <Calendar className="w-5 h-5" />
              <span className="text-blue-200">
                Registration Deadline: June 25, 2025
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              India AI Challenge Powered By SUTRA
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Building Apps That Understand Bharat
            </p>

            <p className="text-lg text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Harness the power of multilingual AI to create transformative
              applications that address the challenges of India&apos;s diverse
              linguistic landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 rounded-xl font-semibold"
              >
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-xl font-semibold"
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-6 h-6" />
                <span className="text-lg font-semibold">
                  1000+ Participants
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="w-6 h-6" />
                <div>
                  <span className="text-lg font-semibold">
                    June 26 - July 13, 2025
                  </span>
                  <div className="text-sm text-blue-200">தமிழ்</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Trophy className="w-6 h-6" />
                <span className="text-lg font-semibold">
                  Prizes Worth ₹300,000+
                </span>
              </div>
            </div>

            <div className="mt-8 flex justify-center space-x-8 text-sm text-blue-200">
              <span>हिंदी</span>
              <span>ಕನ್ನಡ</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="overview" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="bg-white/20 rounded-2xl p-8 w-full h-full flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold text-center">
                    SUTRA Multilingual Model
                  </h3>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">
                About The Challenge
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

              <div className="mt-8"></div>

              <Button className="bg-blue-600 hover:bg-blue-700 mt-6">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section id="focus-areas" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">
              Suggested Focus Areas
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Participants are encouraged to explore any India-specific
              challenge that benefits from SUTRA&apos;s multilingual
              capabilities. Below are suggested focus areas:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">
                  Multilingual Education Platforms
                </h3>
                <p className="text-gray-600">
                  Develop AI-powered platforms that generate personalized
                  learning content in multiple Indian languages, create chatbots
                  for real-time tutoring, or build tools that translate
                  educational resources into regional languages.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Stethoscope className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">
                  Healthcare Accessibility
                </h3>
                <p className="text-gray-600">
                  Design multilingual health assistants, develop apps for
                  real-time doctor-patient conversation translation, or create
                  medication reminder systems with voice-based alerts in
                  regional languages.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Building className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">
                  Cultural Preservation and Engagement
                </h3>
                <p className="text-gray-600">
                  Build AI-driven virtual tour guides for heritage sites,
                  develop chatbots that educate about Indian festivals and
                  traditions, or create apps that generate folk stories in
                  regional languages.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <FileText className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">
                  Governance & Public Services
                </h3>
                <p className="text-gray-600">
                  Create multilingual grievance redressal chatbots, develop apps
                  that translate legal documents, or build real-time information
                  portals for government schemes in multiple Indian languages.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <ShoppingBag className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">
                  Inclusive E-Commerce & Business
                </h3>
                <p className="text-gray-600">
                  Create AI tools for auto-generating product descriptions in
                  regional languages, develop multilingual customer support
                  chatbots, or build apps providing market insights for rural
                  entrepreneurs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">
              Event Timeline
            </h2>
            <p className="text-gray-600 text-lg">
              Key dates and deadlines for the India AI Challenge
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8">
                    <Card className="p-6">
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-2 text-blue-600 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-semibold">June 12, 2025</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          Registration Opens
                        </h3>
                        <p className="text-gray-600">
                          Start of the registration period for all interested
                          participants
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                <div className="relative flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>
                  <div className="flex-1 pl-8">
                    <Card className="p-6 border-l-4 border-l-red-500">
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-2 text-red-600 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-semibold">June 25, 2025</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          Registration Closes
                        </h3>
                        <p className="text-gray-600">
                          Last day to register for the hackathon
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="flex-1 pr-8">
                    <Card className="p-6">
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-2 text-blue-600 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-semibold">June 26, 2025</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          Kickoff Session
                        </h3>
                        <p className="text-gray-600">
                          Virtual orientation and introduction to the hackathon
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                <div className="relative flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>
                  <div className="flex-1 pl-8">
                    <Card className="p-6 border-l-4 border-l-red-500">
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-2 text-red-600 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-semibold">June 28, 2025</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          Team Submission Deadline
                        </h3>
                        <p className="text-gray-600">
                          Deadline for submitting your team details
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="flex-1 pr-8">
                    <Card className="p-6 border-l-4 border-l-red-500">
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-2 text-red-600 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-semibold">July 1, 2025</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          Round 1: Proposal Submission
                        </h3>
                        <p className="text-gray-600">
                          Deadline for submitting your project idea and
                          proposal. Top 100 teams qualify for final round.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                <div className="relative flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>
                  <div className="flex-1 pl-8">
                    <Card className="p-6 border-l-4 border-l-red-500">
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-2 text-red-600 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-semibold">July 10, 2025</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          Round 2: Final Submission
                        </h3>
                        <p className="text-gray-600">
                          Deadline for submitting your completed project with
                          demo video
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="flex-1 pr-8">
                    <Card className="p-6">
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-2 text-blue-600 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-semibold">
                            July 10-12, 2025
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          Round 3: Evaluations & Interviews
                        </h3>
                        <p className="text-gray-600">
                          Judging and project evaluation period
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                <div className="relative flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>
                  <div className="flex-1 pl-8">
                    <Card className="p-6 border-l-4 border-l-red-500">
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-2 text-red-600 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-semibold">July 13, 2025</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Demo Day</h3>
                        <p className="text-gray-600">
                          Final presentations and announcement of winners
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">
              Incentives and Prizes
            </h2>
            <p className="text-gray-600 text-lg">
              Win exciting rewards and recognition for your innovative solutions
            </p>
          </div>

          {/* Main Prizes */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="relative overflow-hidden border-2 border-yellow-300 bg-gradient-to-br from-yellow-50 to-orange-50">
              <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                1st Prize
              </div>
              <CardContent className="p-8 text-center">
                <Award className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Macbook Air</h3>
                <p className="text-gray-600">
                  For the top-performing team with the most innovative solution
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 border-gray-300 bg-gradient-to-br from-gray-50 to-blue-50">
              <div className="absolute top-4 right-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                2nd Prize
              </div>
              <CardContent className="p-8 text-center">
                <Gift className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Phone/Tablet</h3>
                <p className="text-gray-600">
                  For the second-place team with exceptional implementation
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 border-pink-300 bg-gradient-to-br from-pink-50 to-red-50">
              <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                3rd Prize
              </div>
              <CardContent className="p-8 text-center">
                <Gift className="w-16 h-16 text-pink-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Smart Watch</h3>
                <p className="text-gray-600">
                  For the third-place team with innovative approach
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Gift className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Career Opportunities</h3>
                <p className="text-gray-600 text-sm">
                  Internship opportunities with TWO AI for Top 5 Teams
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Technical Expertise</h3>
                <p className="text-gray-600 text-sm">
                  API Credits worth $100 for Top 10 Teams
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Recognition</h3>
                <p className="text-gray-600 text-sm">
                  Qualification for SUTRA Champion Program for Top 20 Teams
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Additional Perks</h3>
                <p className="text-gray-600 text-sm">
                  Certificate of participation for all teams
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">
              Resources & Support
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to excel in the India AI Challenge
            </p>
          </div>

          <div className="space-y-12">
            {/* Important Links */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Important Links</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Sutra Cookbook</h4>
                      <p className="text-sm text-gray-600">
                        A comprehensive place to find all resources for SUTRA
                      </p>
                      <span className="text-xs text-blue-600">
                        Documentation
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </CardContent>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">
                        Hackathon Workshop Notebook
                      </h4>
                      <p className="text-sm text-gray-600">
                        Tutorial and examples for the SUTRA hackathon
                      </p>
                      <span className="text-xs text-blue-600">Learning</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </CardContent>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Team Submission Form</h4>
                      <p className="text-sm text-gray-600">
                        Register your team for the hackathon
                      </p>
                      <span className="text-xs text-blue-600">Submission</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </CardContent>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Link className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Idea Submission Form</h4>
                      <p className="text-sm text-gray-600">
                        Submit your project proposal
                      </p>
                      <span className="text-xs text-blue-600">Submission</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </CardContent>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Link className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Idea PPT Template</h4>
                      <p className="text-sm text-gray-600">
                        Template for your project presentation
                      </p>
                      <span className="text-xs text-blue-600">Template</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Support Available */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Support Available</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Office Hours</h4>
                    <p className="text-gray-600 text-sm">
                      Regular sessions throughout the event on Mon, Wed, Fri:
                      23/25/27th June - 8.30PM to 10PM IST
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Q&A Sessions</h4>
                    <p className="text-gray-600 text-sm">
                      With AI and education experts to guide your development
                      process
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Code className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Technical Support</h4>
                    <p className="text-gray-600 text-sm">
                      For using provided tools and platforms
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <BookOpen className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Virtual Workshops</h4>
                    <p className="text-gray-600 text-sm">
                      Documentation and tutorials on Generative AI technologies
                      and key topics in AI and EdTech
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submission Requirements */}
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Submission Requirements
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="p-4 border-l-4 border-l-red-500">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Team Submission</h4>
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                        Critical
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Due June 28, 2025
                    </p>
                    <p className="text-sm text-gray-700">
                      Include team details, preferred focus area, and commitment
                      to multilingual focus
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-4 border-l-4 border-l-yellow-500">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Idea Submission</h4>
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                        Important
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Due July 1, 2025
                    </p>
                    <p className="text-sm text-gray-700">
                      Use PPT template with problem statement, solution, and
                      technical approach (max 10-12 slides). Include social
                      media postcard.
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-4 border-l-4 border-l-red-500">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Final Submission</h4>
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                        Critical
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Due July 10, 2025
                    </p>
                    <p className="text-sm text-gray-700">
                      GitHub repository, README, 3-5 minute demo video,
                      presentation slides (max 15), and optional live deployment
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <Rocket className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build the Future of Multilingual AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join innovators from across India in creating solutions that make AI
            accessible in every language.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 rounded-xl font-semibold"
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-xl font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-900 rounded-sm"></div>
                </div>
                <span className="font-bold text-xl">SUTRA</span>
                <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                  HACKATHON
                </span>
              </div>
              <p className="text-blue-200 mb-4">
                Building Apps That Understand Bharat
              </p>
              <div className="flex space-x-4">
                <Linkedin className="w-5 h-5 text-blue-200 hover:text-white cursor-pointer" />
                <Youtube className="w-5 h-5 text-blue-200 hover:text-white cursor-pointer" />
                <Link className="w-5 h-5 text-blue-200 hover:text-white cursor-pointer" />
                <Github className="w-5 h-5 text-blue-200 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <a href="#overview" className="hover:text-white">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#focus-areas" className="hover:text-white">
                    Focus Areas
                  </a>
                </li>
                <li>
                  <a href="#timeline" className="hover:text-white">
                    Timeline
                  </a>
                </li>
                <li>
                  <a href="#prizes" className="hover:text-white">
                    Prizes
                  </a>
                </li>
                <li>
                  <a href="#resources" className="hover:text-white">
                    Resources
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <a href="#" className="hover:text-white">
                    Sutra Cookbook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Workshop Notebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Idea PPT Template
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Submit Your Idea
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-blue-200 mb-2">
                Have questions about the hackathon?
              </p>
              <p className="text-white">support@two.ai</p>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2025 SUTRA / TWO.AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
