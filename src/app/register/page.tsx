"use client";

import { useState } from "react";
import { NavigationBar } from "@/components/sections/navigation-bar";
import { FooterSection } from "@/components/sections/footer-section";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  generateCardsForTeam,
  downloadCard,
  type TeamMember,
} from "@/lib/card-generator";
import { useRouter } from "next/navigation";

interface FormData {
  teamName: string;
  teamLeaderName: string;
  teamLeaderEmail: string;
  contactNumber: string;
  university: string;
  members: TeamMember[];
  focusArea: string;
  problemStatement: string;
  commitment: string;
  termsAccepted: boolean;
}

export default function RegistrationPage() {
  const router = useRouter();
  const [memberCount, setMemberCount] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedCards, setGeneratedCards] = useState<
    { member: TeamMember; cardDataURL: string }[]
  >([]);
  const [showCards, setShowCards] = useState(false);
  const totalSteps = 5;

  const [formData, setFormData] = useState<FormData>({
    teamName: "",
    teamLeaderName: "",
    teamLeaderEmail: "",
    contactNumber: "",
    university: "",
    members: Array(4)
      .fill(null)
      .map(() => ({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      })),
    focusArea: "",
    problemStatement: "",
    commitment: "",
    termsAccepted: false,
  });

  const handleAddMember = () => {
    if (memberCount < 4) {
      setMemberCount(memberCount + 1);
    }
  };

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const updateMemberData = (
    index: number,
    field: keyof TeamMember,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      members: prev.members.map((member, i) =>
        i === index ? { ...member, [field]: value } : member
      ),
    }));
  };

  const downloadAllCards = () => {
    generatedCards.forEach(({ member, cardDataURL }) => {
      const fileName = `${member.firstName}_${member.lastName}_hackathon_card.png`;
      downloadCard(cardDataURL, fileName);
    });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // This prevents the form from submitting when pressing Enter or clicking continue buttons
    return;
  };

  const handleFinalSubmit = async () => {
    console.log("Final form submission!");
    console.log("Form data:", JSON.stringify(formData, null, 2));
    console.log("Member count:", memberCount);

    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions to continue.");
      return;
    }

    setIsSubmitting(true);
    console.log("Starting card generation...");

    try {
      // Collect only team members from Step 2 (NOT the team leader)
      const teamMembers = formData.members
        .slice(0, memberCount) // Only take as many as memberCount
        .filter(
          (member) =>
            member.firstName &&
            member.firstName.trim() &&
            member.lastName &&
            member.lastName.trim()
        );

      console.log("Team members for cards:", teamMembers);
      console.log("Member count:", memberCount);

      if (teamMembers.length === 0) {
        alert(
          "No team members found to generate cards for. Please add team members in Step 2."
        );
        setIsSubmitting(false);
        return;
      }

      console.log("Team members for card generation:", teamMembers);

      // Generate cards for team members only
      const cards = await generateCardsForTeam(teamMembers, {
        font: "Poppins",
        backgroundImage: "/sutra-river.jpg",
      });

      console.log("Generated cards:", cards);
      setGeneratedCards(cards);
      setShowCards(true);
      setCurrentStep(5); // Move to card display step
      console.log("Moved to step 5, showCards:", true);
    } catch (error) {
      console.error("Error generating cards:", error);
      alert("Failed to generate cards. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <NavigationBar />

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-scaleIn"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-scaleIn animate-delay-200"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-scaleIn animate-delay-300"></div>

        {/* Decorative shapes */}
        <div className="absolute top-40 right-20 w-20 h-20 border-4 border-blue-100 rounded-lg rotate-12"></div>
        <div className="absolute bottom-32 left-20 w-16 h-16 border-4 border-purple-100 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-8 border-4 border-indigo-100 rounded-lg -rotate-12"></div>
      </div>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fadeIn">
            <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-6 md:p-8 mb-6 shadow-lg">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Register for SUTRA Indic AI Hackathon
              </h1>
              <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                Join India&apos;s premier multilingual AI hackathon and build
                solutions that understand Bharat
              </p>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="mb-10 animate-fadeIn animate-delay-100">
            <div className="flex justify-between items-center mb-4 relative">
              {/* Connecting line */}
              <div className="absolute top-5 left-0 w-full h-1 bg-gray-200 -z-10"></div>

              {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center transition-all duration-300 ${
                    currentStep === index + 1 ? "scale-110" : ""
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-medium shadow-md transition-all duration-500 ${
                      currentStep > index + 1
                        ? "bg-gradient-to-r from-green-400 to-green-500 text-white"
                        : currentStep === index + 1
                        ? "bg-gradient-to-r from-blue-500 to-violet-600 text-white ring-4 ring-blue-100"
                        : "bg-white text-gray-400 border border-gray-200"
                    }`}
                  >
                    {currentStep > index + 1 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span
                    className={`text-sm mt-2 font-medium transition-all duration-300 ${
                      currentStep === index + 1
                        ? "text-blue-700"
                        : "text-gray-500"
                    }`}
                  >
                    {index === 0
                      ? "Team Info"
                      : index === 1
                      ? "Team Members"
                      : index === 2
                      ? "Project Focus"
                      : index === 3
                      ? "Confirm"
                      : "Cards"}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden shadow-inner mt-4">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-3xl p-6 md:p-10 border border-gray-100 backdrop-blur-sm bg-opacity-80 animate-scaleIn">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Team Information */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                    <span className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 text-white inline-flex items-center justify-center mr-3 shadow-md">
                      1
                    </span>
                    Team Information
                  </h2>

                  <div className="space-y-4">
                    <div className="grid w-full gap-1.5">
                      <Label
                        htmlFor="teamName"
                        className="flex items-center text-gray-700 font-medium mb-1.5"
                      >
                        Team Name <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input
                        id="teamName"
                        placeholder="Enter your team name"
                        value={formData.teamName}
                        onChange={(e) =>
                          updateFormData("teamName", e.target.value)
                        }
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl px-4 py-3 shadow-sm"
                      />
                    </div>

                    <div className="grid w-full gap-1.5">
                      <Label
                        htmlFor="teamLeaderName"
                        className="flex items-center text-gray-700 font-medium mb-1.5"
                      >
                        Team Leader Name{" "}
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input
                        id="teamLeaderName"
                        placeholder="Enter team leader's full name"
                        value={formData.teamLeaderName}
                        onChange={(e) =>
                          updateFormData("teamLeaderName", e.target.value)
                        }
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl px-4 py-3 shadow-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="grid w-full gap-1.5">
                        <Label
                          htmlFor="teamLeaderEmail"
                          className="flex items-center text-gray-700 font-medium mb-1.5"
                        >
                          Team Leader Email{" "}
                          <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                          id="teamLeaderEmail"
                          type="email"
                          placeholder="email@example.com"
                          className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl px-4 py-3 shadow-sm"
                        />
                      </div>

                      <div className="grid w-full gap-1.5">
                        <Label
                          htmlFor="contactNumber"
                          className="flex items-center text-gray-700 font-medium mb-1.5"
                        >
                          Contact Number{" "}
                          <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <div className="flex rounded-xl overflow-hidden border border-gray-200 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 shadow-sm">
                          <span className="flex items-center justify-center px-3 bg-gray-50 text-gray-500 border-r border-gray-200">
                            +91
                          </span>
                          <Input
                            id="contactNumber"
                            placeholder="10-digit phone number"
                            className="border-0 rounded-none focus:ring-0 py-3"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid w-full gap-1.5">
                      <Label
                        htmlFor="university"
                        className="flex items-center text-gray-700 font-medium mb-1.5"
                      >
                        University, City, State{" "}
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input
                        id="university"
                        placeholder="e.g., IIT Delhi, New Delhi, Delhi"
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl px-4 py-3 shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Team Members */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                    <span className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 text-white inline-flex items-center justify-center mr-3 shadow-md">
                      2
                    </span>
                    Team Members
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">
                    Add 1-4 additional team members (the team leader is already
                    counted as one member).
                  </p>

                  <div className="space-y-4">
                    {Array.from({ length: memberCount }).map((_, index) => (
                      <div
                        key={index}
                        className="p-5 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold text-sm mr-3">
                            {index + 1}
                          </div>
                          <h3 className="font-medium text-gray-800">
                            Team Member {index + 1}
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="grid w-full gap-1.5">
                            <Label
                              htmlFor={`member${index + 1}Name`}
                              className="text-gray-700 font-medium mb-1.5"
                            >
                              First Name{" "}
                              <span className="text-red-500 ml-1">*</span>
                            </Label>
                            <Input
                              id={`member${index + 1}Name`}
                              placeholder="First name"
                              value={formData.members[index]?.firstName || ""}
                              onChange={(e) =>
                                updateMemberData(
                                  index,
                                  "firstName",
                                  e.target.value
                                )
                              }
                              className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl px-4 py-3 shadow-sm"
                            />
                          </div>
                          <div className="grid w-full gap-1.5">
                            <Label
                              htmlFor={`member${index + 1}LastName`}
                              className="text-gray-700 font-medium mb-1.5"
                            >
                              Last Name{" "}
                              <span className="text-red-500 ml-1">*</span>
                            </Label>
                            <Input
                              id={`member${index + 1}LastName`}
                              placeholder="Last name"
                              value={formData.members[index]?.lastName || ""}
                              onChange={(e) =>
                                updateMemberData(
                                  index,
                                  "lastName",
                                  e.target.value
                                )
                              }
                              className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl px-4 py-3 shadow-sm"
                            />
                          </div>
                          <div className="grid w-full gap-1.5">
                            <Label
                              htmlFor={`member${index + 1}Email`}
                              className="text-gray-700 font-medium mb-1.5"
                            >
                              Email <span className="text-red-500 ml-1">*</span>
                            </Label>
                            <Input
                              id={`member${index + 1}Email`}
                              type="email"
                              placeholder="member@example.com"
                              value={formData.members[index]?.email || ""}
                              onChange={(e) =>
                                updateMemberData(index, "email", e.target.value)
                              }
                              className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl px-4 py-3 shadow-sm"
                            />
                          </div>
                          <div className="grid w-full gap-1.5">
                            <Label
                              htmlFor={`member${index + 1}Phone`}
                              className="text-gray-700 font-medium mb-1.5"
                            >
                              Mobile Number{" "}
                              <span className="text-red-500 ml-1">*</span>
                            </Label>
                            <div className="flex rounded-xl overflow-hidden border border-gray-200 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 shadow-sm">
                              <span className="flex items-center justify-center px-3 bg-gray-50 text-gray-500 border-r border-gray-200">
                                +91
                              </span>
                              <Input
                                id={`member${index + 1}Phone`}
                                placeholder="10-digit phone number"
                                value={formData.members[index]?.phone || ""}
                                onChange={(e) =>
                                  updateMemberData(
                                    index,
                                    "phone",
                                    e.target.value
                                  )
                                }
                                className="border-0 rounded-none focus:ring-0 py-3"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {memberCount < 4 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleAddMember}
                        className="flex items-center mt-4 border-dashed border-2 border-blue-200 text-blue-600 hover:bg-blue-50 w-full py-3 rounded-xl justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2"
                        >
                          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                          <circle cx="8.5" cy="7" r="4" />
                          <line x1="20" y1="8" x2="20" y2="14" />
                          <line x1="23" y1="11" x2="17" y2="11" />
                        </svg>
                        <span>Add Another Team Member</span>
                      </Button>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Project Focus */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                    <span className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 text-white inline-flex items-center justify-center mr-3 shadow-md">
                      3
                    </span>
                    Project Focus
                  </h2>

                  <div className="space-y-6">
                    <div className="grid w-full gap-1.5">
                      <Label
                        htmlFor="focusArea"
                        className="flex items-center text-gray-700 font-medium mb-1.5"
                      >
                        Preferred Focus Area{" "}
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Select>
                        <SelectTrigger
                          id="focusArea"
                          className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl px-4 py-3 shadow-sm bg-white"
                        >
                          <SelectValue placeholder="Select a focus area" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-gray-200">
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="agriculture">
                            Agriculture
                          </SelectItem>
                          <SelectItem value="government">
                            Government Services
                          </SelectItem>
                          <SelectItem value="entertainment">
                            Entertainment
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid w-full gap-1.5">
                      <Label
                        htmlFor="focusDescription"
                        className="flex items-center text-gray-700 font-medium mb-1.5"
                      >
                        Focus Area Description{" "}
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Textarea
                        id="focusDescription"
                        placeholder="Describe your chosen focus area and problem statement (100-200 words)"
                        rows={5}
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl px-4 py-3 shadow-sm resize-none"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Word count: 0 / 100-200 words
                      </p>
                    </div>

                    <div className="grid w-full gap-1.5">
                      <Label
                        htmlFor="languages"
                        className="flex items-center text-gray-700 font-medium mb-1.5"
                      >
                        Targeted Indian Languages (3-5 languages){" "}
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input
                        id="languages"
                        placeholder="e.g., Hindi, Tamil, Telugu, Marathi, Bengali"
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl px-4 py-3 shadow-sm"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        List 3-5 Indian languages separated by commas
                      </p>
                    </div>

                    <div className="grid w-full gap-1.5">
                      <Label
                        htmlFor="commitment"
                        className="flex items-center text-gray-700 font-medium mb-1.5"
                      >
                        Commitment to Multilingual Focus{" "}
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Textarea
                        id="commitment"
                        placeholder="Explain how your solution will leverage SUTRA's multilingual capabilities to address the chosen problem (100-200 words)"
                        rows={5}
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl px-4 py-3 shadow-sm resize-none"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Word count: 0 / 100-200 words
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Terms and Submit */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                    <span className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 text-white inline-flex items-center justify-center mr-3 shadow-md">
                      4
                    </span>
                    Confirm & Submit
                  </h2>

                  <div className="p-6 border border-gray-200 rounded-lg bg-gradient-to-br from-gray-50 to-white mb-6 shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h3 className="font-medium text-gray-800 text-lg">
                        Registration Summary
                      </h3>
                    </div>
                    <div className="pl-13 ml-3 border-l-2 border-blue-100">
                      <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-100">
                        <h4 className="font-medium text-green-800 mb-2">
                          Team Info:
                        </h4>
                        <p className="text-sm text-green-700">
                          <strong>Team:</strong>{" "}
                          {formData.teamName || "Not filled"}
                          <br />
                          <strong>Leader:</strong>{" "}
                          {formData.teamLeaderName || "Not filled"} (No card
                          will be generated)
                          <br />
                          <strong>Members:</strong> {memberCount} total
                        </p>
                      </div>
                      <div className="mb-4 p-3 bg-purple-50 rounded-lg border border-purple-100">
                        <h4 className="font-medium text-purple-800 mb-2">
                          Team Members (Cards will be generated for these):
                        </h4>
                        {formData.members
                          .slice(0, memberCount)
                          .map((member, idx) => (
                            <div
                              key={idx}
                              className="text-sm text-purple-700 mb-1"
                            >
                              <strong>Member {idx + 1}:</strong>{" "}
                              {member.firstName} {member.lastName}
                              {(!member.firstName || !member.lastName) && (
                                <span className="text-red-500">
                                  {" "}
                                  (Incomplete - No card will be generated)
                                </span>
                              )}
                              {member.firstName && member.lastName && (
                                <span className="text-green-600">
                                  {" "}
                                  ✓ Card will be generated
                                </span>
                              )}
                            </div>
                          ))}
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Please review your information before submitting. You
                        can go back to edit any section if needed.
                      </p>
                      <p className="text-sm text-gray-500">
                        You will receive a confirmation email after successful
                        registration.
                      </p>
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <p className="text-sm text-blue-700 font-medium">
                          By submitting this form, you agree to participate in
                          the SUTRA Indic AI Hackathon and follow all the event
                          guidelines.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      checked={formData.termsAccepted}
                      onCheckedChange={(checked) =>
                        updateFormData("termsAccepted", !!checked)
                      }
                      className="mt-1 rounded-md h-5 w-5 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="terms"
                        className="flex items-center text-sm font-medium leading-none text-gray-700"
                      >
                        I agree to the terms and conditions of the hackathon{" "}
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <p className="text-sm text-gray-500">
                        By checking this box, you agree to abide by the rules
                        and guidelines of the SUTRA Indic AI Hackathon.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Generated Cards Display */}
              {currentStep === 5 && showCards && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                    <span className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white inline-flex items-center justify-center mr-3 shadow-md">
                      ✓
                    </span>
                    Registration Complete! Your Cards are Ready
                  </h2>

                  <div className="text-center mb-6">
                    <p className="text-gray-600 mb-4">
                      Congratulations! Your team has been registered
                      successfully. Here are your personalized hackathon cards:
                    </p>
                    <Button
                      onClick={downloadAllCards}
                      className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-md px-8 py-3"
                    >
                      Download All Cards
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {generatedCards.map(({ member, cardDataURL }, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
                      >
                        <h3 className="font-semibold text-lg text-gray-800 mb-4 text-center">
                          {member.firstName} {member.lastName}
                        </h3>
                        <div className="aspect-square rounded-lg overflow-hidden mb-4">
                          <img
                            src={cardDataURL}
                            alt={`Card for ${member.firstName} ${member.lastName}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <Button
                          onClick={() =>
                            downloadCard(
                              cardDataURL,
                              `${member.firstName}_${member.lastName}_hackathon_card.png`
                            )
                          }
                          variant="outline"
                          className="w-full"
                        >
                          Download {member.firstName}&apos;s Card
                        </Button>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mt-8">
                    <Button
                      onClick={() => router.push("/")}
                      variant="outline"
                      className="px-8"
                    >
                      Back to Home
                    </Button>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              {currentStep < 5 && (
                <div className="flex justify-between mt-10 pt-6 border-t border-gray-100">
                  {currentStep > 1 ? (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      className="flex items-center hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 px-6"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                      <span>Previous Step</span>
                    </Button>
                  ) : (
                    <div></div>
                  )}

                  {currentStep < 4 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-md hover:shadow-xl transition-all duration-300 px-6 group"
                    >
                      <span>Continue to Next Step</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={handleFinalSubmit}
                      disabled={isSubmitting}
                      className="flex items-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md hover:shadow-xl transition-all duration-300 px-6 py-6 text-lg font-medium group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                          <span>Generating Cards...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Registration</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </Button>
                  )}
                </div>
              )}
            </form>
          </div>

          <div className="text-center mt-8 animate-fadeIn animate-delay-200">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-sm text-blue-700 border border-blue-100 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              Need help? Contact us at{" "}
              <a
                href="mailto:support@sutra.ai"
                className="font-medium text-blue-600 hover:underline ml-1"
              >
                support@sutra.ai
              </a>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
