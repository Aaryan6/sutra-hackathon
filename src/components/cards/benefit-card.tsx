import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Code, Gift } from "lucide-react";

type BenefitCardProps = {
  title: string;
  description: string;
  icon: string;
};

export function BenefitCard({ title, description, icon }: BenefitCardProps) {
  // Icon mapping
  const iconMap = {
    Award: <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
    Gift: <Gift className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
    Code: <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
  };

  return (
    <Card className="group p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-200 bg-white hover:bg-blue-50/20">
      <CardContent className="p-0">
        <div className="mb-4 transform transition-transform group-hover:scale-110 duration-300">
          {iconMap[icon as keyof typeof iconMap]}
        </div>
        <h3 className="text-lg font-bold mb-2 text-slate-800 group-hover:text-blue-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
