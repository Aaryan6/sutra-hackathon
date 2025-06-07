"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Award, Code, Gift } from "lucide-react";

export default function Prizes() {
  return (
    <section id="prizes" className="py-20 px-6">
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
  );
}
