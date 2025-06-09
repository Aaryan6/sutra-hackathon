import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

type SubmissionCardProps = {
  title: string;
  dueDate: string;
  description: string;
  importance: string;
  color: string;
};

export function SubmissionCard({
  title,
  dueDate,
  description,
  importance,
  color,
}: SubmissionCardProps) {
  const colorMap = {
    red: {
      border: "border-l-red-500",
      bg: "bg-red-50",
      text: "text-red-700",
    },
    yellow: {
      border: "border-l-yellow-500",
      bg: "bg-yellow-50",
      text: "text-yellow-700",
    },
    green: {
      border: "border-l-green-500",
      bg: "bg-green-50",
      text: "text-green-700",
    },
  };

  const colorClasses = colorMap[color as keyof typeof colorMap];

  return (
    <Card
      className={`overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 ${colorClasses.border}`}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-bold text-slate-800 text-lg">{title}</h4>
          <span
            className={`text-xs px-3 py-1 rounded-full font-medium ${colorClasses.bg} ${colorClasses.text}`}
          >
            {importance}
          </span>
        </div>

        <div className="flex items-center text-slate-500 mb-3 text-sm">
          <Calendar className="w-4 h-4 mr-2" />
          <span>Due {dueDate}</span>
        </div>

        <p className="text-slate-600">{description}</p>
      </CardContent>
    </Card>
  );
}
