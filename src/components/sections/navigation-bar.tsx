"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
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
import Image from "next/image";

export function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [memberCount, setMemberCount] = useState(1);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleAddMember = () => {
    if (memberCount < 4) {
      setMemberCount(memberCount + 1);
    }
  };

  return (
    <>
      <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 py-4 md:py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/sutra.png" alt="SUTRA" width={40} height={40} />
              <div>
                <span className="font-bold text-xl tracking-tight">SUTRA</span>
                <span className="ml-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-2 py-1 rounded text-sm font-medium">
                  HACKATHON
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#overview"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Overview
              </a>
              <a
                href="#focus-areas"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Focus Areas
              </a>
              <a
                href="#timeline"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Timeline
              </a>
              <a
                href="#prizes"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Prizes
              </a>
              <a
                href="#resources"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Resources
              </a>
              <Button
                onClick={handleOpenDialog}
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-md hover:shadow-lg transition-all duration-300 rounded-lg"
              >
                Register Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-600" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pt-4 pb-3 border-t mt-4 space-y-3">
              <a
                href="#overview"
                className="block text-gray-600 hover:text-blue-600 py-2 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Overview
              </a>
              <a
                href="#focus-areas"
                className="block text-gray-600 hover:text-blue-600 py-2 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Focus Areas
              </a>
              <a
                href="#timeline"
                className="block text-gray-600 hover:text-blue-600 py-2 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Timeline
              </a>
              <a
                href="#prizes"
                className="block text-gray-600 hover:text-blue-600 py-2 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Prizes
              </a>
              <a
                href="#resources"
                className="block text-gray-600 hover:text-blue-600 py-2 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </a>
              <Button
                onClick={handleOpenDialog}
                className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 mt-2"
              >
                Register Now
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Registration Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="!max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
              India AI Challenge Powered by SUTRA - Team Submission
            </DialogTitle>
            <DialogDescription>
              Fill out this form to register your team for the SUTRA Indic AI
              Hackathon.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div>
              <h2 className="text-xl font-semibold mb-4">Team Information</h2>

              <div className="space-y-4">
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="teamName" className="flex items-center">
                    Team Name <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Input id="teamName" placeholder="Enter your team name" />
                </div>

                <div className="grid w-full gap-1.5">
                  <Label htmlFor="teamLeaderName" className="flex items-center">
                    Team Leader Name{" "}
                    <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Input
                    id="teamLeaderName"
                    placeholder="Enter team leader's full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid w-full gap-1.5">
                    <Label
                      htmlFor="teamLeaderEmail"
                      className="flex items-center"
                    >
                      Team Leader Email{" "}
                      <span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Input
                      id="teamLeaderEmail"
                      type="email"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="grid w-full gap-1.5">
                    <Label
                      htmlFor="contactNumber"
                      className="flex items-center"
                    >
                      Contact Number{" "}
                      <span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Input
                      id="contactNumber"
                      placeholder="10-digit phone number"
                    />
                  </div>
                </div>

                <div className="grid w-full gap-1.5">
                  <Label htmlFor="university" className="flex items-center">
                    University, City, State{" "}
                    <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Input
                    id="university"
                    placeholder="e.g., IIT Delhi, New Delhi, Delhi"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                Team Members (2-5 members, including leader){" "}
                <span className="text-red-500 ml-1">*</span>
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Add 1-4 additional team members (the team leader is already
                counted as one member).
              </p>

              <div className="space-y-4">
                {Array.from({ length: memberCount }).map((_, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor={`member${index + 1}Name`}>
                        Member {index + 1} Name
                      </Label>
                      <Input
                        id={`member${index + 1}Name`}
                        placeholder="Member name"
                      />
                    </div>
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor={`member${index + 1}Email`}>
                        Member {index + 1} Email
                      </Label>
                      <Input
                        id={`member${index + 1}Email`}
                        type="email"
                        placeholder="member@example.com"
                      />
                    </div>
                  </div>
                ))}

                {memberCount < 4 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleAddMember}
                    className="flex items-center"
                  >
                    <span>Add Another Member</span>
                  </Button>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Project Focus</h2>

              <div className="space-y-4">
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="focusArea" className="flex items-center">
                    Preferred Focus Area{" "}
                    <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger id="focusArea" className="w-full">
                      <SelectValue placeholder="Select a focus area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="agriculture">Agriculture</SelectItem>
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
                    className="flex items-center"
                  >
                    Focus Area Description{" "}
                    <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Textarea
                    id="focusDescription"
                    placeholder="Describe your chosen focus area and problem statement (100-200 words)"
                    rows={5}
                  />
                  <p className="text-xs text-gray-500">
                    Word count: 0 / 100-200 words
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Multilingual Focus</h2>

              <div className="space-y-4">
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="languages" className="flex items-center">
                    Targeted Indian Languages (3-5 languages){" "}
                    <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Input
                    id="languages"
                    placeholder="e.g., Hindi, Tamil, Telugu, Marathi, Bengali"
                  />
                  <p className="text-xs text-gray-500">
                    List 3-5 Indian languages separated by commas
                  </p>
                </div>

                <div className="grid w-full gap-1.5">
                  <Label htmlFor="commitment" className="flex items-center">
                    Commitment to Multilingual Focus{" "}
                    <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Textarea
                    id="commitment"
                    placeholder="Explain how your solution will leverage SUTRA's multilingual capabilities to address the chosen problem (100-200 words)"
                    rows={5}
                  />
                  <p className="text-xs text-gray-500">
                    Word count: 0 / 100-200 words
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="terms" />
              <div className="grid gap-1.5 leading-none">
                <Label
                  htmlFor="terms"
                  className="flex items-center text-sm font-medium leading-none"
                >
                  I agree to the terms and conditions of the hackathon{" "}
                  <span className="text-red-500 ml-1">*</span>
                </Label>
                <p className="text-sm text-gray-500">
                  By checking this box, you agree to abide by the rules and
                  guidelines of the SUTRA Indic AI Hackathon.
                </p>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={handleCloseDialog}>
              Cancel
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-md hover:shadow-lg transition-all duration-300">
              Submit Team Details
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
