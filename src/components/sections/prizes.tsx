"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Award, Gift, Sparkles } from "lucide-react";
import { additionalBenefits } from "@/data/prizes-data";
import { BenefitCard } from "@/components/cards/benefit-card";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Prizes() {
  // Main prizes with direct class names and image paths
  const mainPrizes = [
    {
      id: 1,
      title: "Macbook Air",
      description:
        "For the top-performing team with the most innovative solution",
      icon: <Award className="w-16 h-16 text-yellow-300 mx-auto mb-4" />,
      rank: "1st Prize",
      borderClass: "border-yellow-300",
      bgClass: "bg-gradient-to-br from-yellow-50 to-orange-50",
      badgeClass: "bg-yellow-500",
      imagePath: "/macbook-prize.png",
    },
    {
      id: 2,
      title: "Tablet",
      description: "For the second-place team with exceptional implementation",
      icon: <Gift className="w-16 h-16 text-gray-200 mx-auto mb-4" />,
      rank: "2nd Prize",
      borderClass: "border-gray-300",
      bgClass: "bg-gradient-to-br from-gray-50 to-blue-50",
      badgeClass: "bg-gray-500",
      imagePath: "/tablet-prize.png",
    },
    {
      id: 3,
      title: "Smart Watch",
      description: "For the third-place team with innovative approach",
      icon: <Gift className="w-16 h-16 text-pink-300 mx-auto mb-4" />,
      rank: "3rd Prize",
      borderClass: "border-pink-300",
      bgClass: "bg-gradient-to-br from-pink-50 to-red-50",
      badgeClass: "bg-pink-500",
      imagePath: "/smartwatch-prize.png",
    },
  ];

  return (
    <section
      id="prizes"
      className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="relative inline-flex items-center justify-center mb-4">
            <div className="absolute -inset-4 rounded-full bg-yellow-100 opacity-50 blur-sm"></div>
            <span className="relative inline-flex">
              <Sparkles className="w-8 h-8 text-yellow-500" />
              <span className="absolute top-0 right-0 -mr-1 -mt-1 bg-yellow-200 rounded-full w-3 h-3 animate-pulse"></span>
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 drop-shadow-sm">
            Incentives and Prizes
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Win exciting rewards and recognition for your innovative solutions
          </p>

          {/* Decorative divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Main Prizes */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainPrizes.map((prize, index) => (
            <Card
              key={prize.id}
              className={cn(
                "relative overflow-hidden border-2 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl group p-0",
                prize.borderClass,
                index === 0
                  ? "md:translate-y-0"
                  : index === 1
                  ? "md:translate-y-4"
                  : "md:translate-y-8"
              )}
            >
              {/* Prize rank badge */}
              <div
                className={cn(
                  "absolute top-4 right-4 z-20 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md",
                  prize.badgeClass
                )}
              >
                {prize.rank}
              </div>

              {/* Prize content with image */}
              <CardContent className="p-8 text-center relative z-10 flex flex-col">
                <div className="mb-4 relative z-10 flex-shrink-0">
                  <div className="relative inline-block">{prize.icon}</div>
                </div>

                <h3 className="text-2xl font-bold mb-2 relative z-10 text-white">
                  {prize.title}
                </h3>
                <p className="text-gray-300 relative z-10 mb-6">
                  {prize.description}
                </p>

                <Image
                  src={prize.imagePath}
                  alt={prize.title}
                  fill
                  className="object-cover w-full h-full drop-shadow-lg brightness-50"
                  priority
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section Divider with sparkle animation */}
        <div className="flex items-center justify-center mb-12 relative">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full max-w-md"></div>
          <span className="mx-4 text-gray-500 font-medium px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 relative">
            Additional Benefits
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping opacity-75"></span>
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
