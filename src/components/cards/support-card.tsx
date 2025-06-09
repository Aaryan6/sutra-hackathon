import React from "react";
import { BookOpen, Users, Code, Clock } from "lucide-react";

type SupportCardProps = {
  title: string;
  description: string;
  icon: string;
};

export function SupportCard({ title, description, icon }: SupportCardProps) {
  // Icon mapping
  const iconMap = {
    BookOpen: <BookOpen className="w-6 h-6 text-blue-600" />,
    Users: <Users className="w-6 h-6 text-blue-600" />,
    Code: <Code className="w-6 h-6 text-blue-600" />,
    Clock: <Clock className="w-6 h-6 text-blue-600" />,
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      <div className="flex items-start gap-4">
        <div className="bg-blue-50 p-3 rounded-lg">
          {iconMap[icon as keyof typeof iconMap]}
        </div>
        <div>
          <h4 className="font-semibold text-slate-800 mb-2">{title}</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
