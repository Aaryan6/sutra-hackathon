import React from "react";
import {
  BookOpen,
  ExternalLink,
  Users,
  Code,
  Clock,
  Link as LinkIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type ResourceCardProps = {
  title: string;
  description: string;
  category: string;
  icon: string;
  url: string;
};

export function ResourceCard({
  title,
  description,
  category,
  icon,
  url,
}: ResourceCardProps) {
  // Icon mapping
  const iconMap = {
    BookOpen: <BookOpen className="w-5 h-5 text-white" />,
    Users: <Users className="w-5 h-5 text-white" />,
    Link: <LinkIcon className="w-5 h-5 text-white" />,
    Code: <Code className="w-5 h-5 text-white" />,
    Clock: <Clock className="w-5 h-5 text-white" />,
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 border border-slate-200 hover:border-blue-200 hover:shadow-lg">
      <CardContent className="p-0">
        <div className="flex items-start p-5 gap-4 relative">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
            {iconMap[icon as keyof typeof iconMap]}
          </div>
          <div className="flex-1 space-y-1">
            <h4 className="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
              {title}
            </h4>
            <p className="text-sm text-slate-600">{description}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                {category}
              </span>
              <a
                href={url}
                className="text-slate-400 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
