import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Gift } from "lucide-react";
import { cn } from "@/lib/utils";

type PrizeCardProps = {
  title: string;
  description: string;
  icon: string;
  rank: string;
  borderColor: string;
  bgGradient: string;
  iconColor: string;
  badgeBg: string;
};

export function PrizeCard({
  title,
  description,
  icon,
  rank,
  borderColor,
  bgGradient,
  iconColor,
  badgeBg,
}: PrizeCardProps) {
  // Icon components based on the icon type
  const IconComponent = icon === "Award" ? Award : Gift;

  // Map color strings to actual classes
  const getBorderClass = (color: string) => `border-${color}`;
  const getBgClass = (gradient: string) => `bg-gradient-to-br ${gradient}`;
  const getIconColorClass = (color: string) => `text-${color}`;
  const getBadgeBgClass = (color: string) => `bg-${color}`;

  return (
    <Card
      className={cn(
        "relative overflow-hidden border-2 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
        getBorderClass(borderColor),
        getBgClass(bgGradient)
      )}
    >
      <div
        className={cn(
          "absolute top-4 right-4 text-white px-3 py-1 rounded-full text-sm font-semibold",
          getBadgeBgClass(badgeBg)
        )}
      >
        {rank}
      </div>
      <CardContent className="p-8 text-center">
        <IconComponent
          className={cn("w-16 h-16 mx-auto mb-4", getIconColorClass(iconColor))}
        />
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
