"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Award, Gift, Sparkles } from "lucide-react";
import { additionalBenefits } from "@/data/prizes-data";
import { BenefitCard } from "@/components/cards/benefit-card";
import { cn } from "@/lib/utils";

export default function Prizes() {
  // Main prizes with direct class names
  const mainPrizes = [
    {
      id: 1,
      title: "Macbook Air",
      description:
        "For the top-performing team with the most innovative solution",
      icon: <Award className="w-16 h-16 text-yellow-600 mx-auto mb-4" />,
      rank: "1st Prize",
      borderClass: "border-yellow-300",
      bgClass: "bg-gradient-to-br from-yellow-50 to-orange-50",
      badgeClass: "bg-yellow-500",
    },
    {
      id: 2,
      title: "Phone/Tablet",
      description: "For the second-place team with exceptional implementation",
      icon: <Gift className="w-16 h-16 text-gray-600 mx-auto mb-4" />,
      rank: "2nd Prize",
      borderClass: "border-gray-300",
      bgClass: "bg-gradient-to-br from-gray-50 to-blue-50",
      badgeClass: "bg-gray-500",
    },
    {
      id: 3,
      title: "Smart Watch",
      description: "For the third-place team with innovative approach",
      icon: <Gift className="w-16 h-16 text-pink-600 mx-auto mb-4" />,
      rank: "3rd Prize",
      borderClass: "border-pink-300",
      bgClass: "bg-gradient-to-br from-pink-50 to-red-50",
      badgeClass: "bg-pink-500",
    },
  ];

  return (
    <section
      id="prizes"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="relative inline-flex">
              <Sparkles className="w-8 h-8 text-yellow-500" />
              <span className="absolute top-0 right-0 -mr-1 -mt-1 bg-yellow-200 rounded-full w-3 h-3 animate-pulse"></span>
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
            Incentives and Prizes
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Win exciting rewards and recognition for your innovative solutions
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainPrizes.map((prize) => (
            <Card
              key={prize.id}
              className={cn(
                "relative overflow-hidden border-2 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
                prize.borderClass,
                prize.bgClass
              )}
            >
              <div
                className={cn(
                  "absolute top-4 right-4 text-white px-3 py-1 rounded-full text-sm font-semibold",
                  prize.badgeClass
                )}
              >
                {prize.rank}
              </div>
              <CardContent className="p-8 text-center">
                {prize.icon}
                <h3 className="text-2xl font-bold mb-2">{prize.title}</h3>
                <p className="text-gray-600">{prize.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section Divider */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full max-w-md"></div>
          <span className="mx-4 text-gray-400 font-medium">
            Additional Benefits
          </span>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full max-w-md"></div>
        </div>

        {/* Additional Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalBenefits.map((benefit) => (
            <BenefitCard
              key={benefit.id}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
