"use client";

import { ResourceCard } from "@/components/cards/resource-card";
import { SupportCard } from "@/components/cards/support-card";
import { SubmissionCard } from "@/components/cards/submission-card";
import {
  importantLinks,
  supportOptions,
  submissionRequirements,
} from "@/data/resources-data";

export default function Resources() {
  return (
    <section
      id="resources"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
            Resources & Support
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Everything you need to excel in the India AI Challenge
          </p>
        </div>

        <div className="space-y-16">
          {/* Important Links */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-slate-800">
                Important Links
              </h3>
              <div className="h-px bg-gradient-to-r from-blue-500 to-transparent flex-grow ml-4 hidden md:block"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {importantLinks.map((link) => (
                <ResourceCard
                  key={link.id}
                  title={link.title}
                  description={link.description}
                  category={link.category}
                  icon={link.icon}
                  url={link.url}
                />
              ))}
            </div>
          </div>

          {/* Support Available */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-slate-800">
                Support Available
              </h3>
              <div className="h-px bg-gradient-to-r from-blue-500 to-transparent flex-grow ml-4 hidden md:block"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportOptions.map((option) => (
                <SupportCard
                  key={option.id}
                  title={option.title}
                  description={option.description}
                  icon={option.icon}
                />
              ))}
            </div>
          </div>

          {/* Submission Requirements */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-slate-800">
                Submission Requirements
              </h3>
              <div className="h-px bg-gradient-to-r from-blue-500 to-transparent flex-grow ml-4 hidden md:block"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {submissionRequirements.map((requirement) => (
                <SubmissionCard
                  key={requirement.id}
                  title={requirement.title}
                  dueDate={requirement.dueDate}
                  description={requirement.description}
                  importance={requirement.importance}
                  color={requirement.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
