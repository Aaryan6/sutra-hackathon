import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Code, Gift, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

type BenefitCardProps = {
  title: string;
  description: string;
  icon: string;
};

export function BenefitCard({ title, description, icon }: BenefitCardProps) {
  // Icon and background color mapping
  const iconConfig = {
    Award: {
      icon: <Award className="w-12 h-12 text-white" />,
      gradient: "from-blue-400 to-blue-600",
      dotColor: "bg-blue-300",
      glowColor: "bg-blue-100",
    },
    Gift: {
      icon: <Gift className="w-12 h-12 text-white" />,
      gradient: "from-purple-400 to-purple-600",
      dotColor: "bg-purple-300",
      glowColor: "bg-purple-100",
    },
    Code: {
      icon: <Code className="w-12 h-12 text-white" />,
      gradient: "from-green-400 to-green-600",
      dotColor: "bg-green-300",
      glowColor: "bg-green-100",
    },
    Zap: {
      icon: <Zap className="w-12 h-12 text-white" />,
      gradient: "from-amber-400 to-amber-600",
      dotColor: "bg-amber-300",
      glowColor: "bg-amber-100",
    },
  };

  const config =
    iconConfig[icon as keyof typeof iconConfig] || iconConfig.Award;

  return (
    <Card className="group p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-200 bg-white hover:bg-blue-50/20 relative overflow-hidden">
      <CardContent className="p-0 relative z-10">
        {/* Icon with gradient background */}
        <div className="mb-5 transform transition-transform group-hover:scale-110 duration-300 mx-auto w-20 h-20 rounded-2xl relative">
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br rounded-2xl shadow-lg",
              config.gradient
            )}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            {config.icon}
          </div>

          {/* Animated dots */}
          <span
            className={cn(
              "absolute -top-1 -right-1 w-3 h-3 rounded-full",
              config.dotColor
            )}
          ></span>
          <span
            className={cn(
              "absolute -bottom-1 -left-1 w-2 h-2 rounded-full animate-ping opacity-75 delay-300",
              config.dotColor
            )}
          ></span>
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold mb-2 text-slate-800 group-hover:text-blue-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">{description}</p>

        {/* Hover effect */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </CardContent>

      {/* Background decoration */}
      <div
        className={cn(
          "absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl",
          config.glowColor
        )}
      ></div>
    </Card>
  );
}
