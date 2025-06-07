"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  ExternalLink,
  Users,
  Code,
  Clock,
  LinkIcon,
} from "lucide-react";

export default function Resources() {
  return (
    <section id="resources" className="py-20 bg-gray-50 px-6">
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
                    <span className="text-xs text-blue-600">Documentation</span>
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
                    <LinkIcon className="w-5 h-5 text-white" />
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
                    <LinkIcon className="w-5 h-5 text-white" />
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
            <h3 className="text-2xl font-bold mb-6">Submission Requirements</h3>
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
                  <p className="text-sm text-gray-600 mb-2">Due July 1, 2025</p>
                  <p className="text-sm text-gray-700">
                    Use PPT template with problem statement, solution, and
                    technical approach (max 10-12 slides). Include social media
                    postcard.
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
  );
}
