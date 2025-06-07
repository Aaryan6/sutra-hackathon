"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default function Timeline() {
  return (
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
                        Deadline for submitting your project idea and proposal.
                        Top 100 teams qualify for final round.
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
                        Deadline for submitting your completed project with demo
                        video
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
                        <span className="font-semibold">July 10-12, 2025</span>
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
  );
}
