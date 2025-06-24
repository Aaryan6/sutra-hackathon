"use client";

import { useState } from "react";
import {
  generateCardForMember,
  downloadCard,
  type TeamMember,
} from "@/lib/card-generator";
import { Button } from "@/components/ui/button";

export default function TestCardPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [cardDataURL, setCardDataURL] = useState<string>("");

  const testMember: TeamMember = {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "1234567890",
  };

  const generateTestCard = async () => {
    setIsGenerating(true);
    try {
      console.log("Starting test card generation...");
      const dataURL = await generateCardForMember(testMember, {
        font: "Poppins",
        backgroundImage: "/sutra-river.jpg",
      });
      console.log(
        "Test card generated successfully:",
        dataURL.substring(0, 50) + "..."
      );
      setCardDataURL(dataURL);
    } catch (error) {
      console.error("Error generating test card:", error);
      alert("Error: " + (error as Error).message);
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadTestCard = () => {
    if (cardDataURL) {
      downloadCard(cardDataURL, "test_card.png");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Card Generation Test</h1>

        <div className="space-y-4">
          <Button
            onClick={generateTestCard}
            disabled={isGenerating}
            className="w-full"
          >
            {isGenerating ? "Generating..." : "Generate Test Card"}
          </Button>

          {cardDataURL && (
            <div className="space-y-4">
              <div className="border border-gray-300 rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-2">Generated Card:</h2>
                <img
                  src={cardDataURL}
                  alt="Generated test card"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
              </div>

              <Button
                onClick={downloadTestCard}
                variant="outline"
                className="w-full"
              >
                Download Test Card
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
