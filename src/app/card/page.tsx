"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, User, Type, RefreshCw } from "lucide-react";

export default function CardGenerator() {
  const [name, setName] = useState("");
  const [selectedFont, setSelectedFont] = useState("Poppins");
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fontOptions = [
    {
      value: "Poppins",
      label: "Poppins",
      fallback: "'Poppins', 'Geist', system-ui, sans-serif",
    },
    {
      value: "Geist",
      label: "Geist",
      fallback: "'Geist', 'Poppins', system-ui, sans-serif",
    },
    {
      value: "Roboto",
      label: "Roboto",
      fallback: "'Roboto', 'Poppins', system-ui, sans-serif",
    },
  ];

  const getCurrentFont = () => {
    const selected = fontOptions.find((font) => font.value === selectedFont);
    return selected?.fallback || fontOptions[0].fallback;
  };

  const updatePreview = async () => {
    try {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Set canvas size
      canvas.width = 1200;
      canvas.height = 1200;

      // Load and draw background image
      const bgImage = new Image();
      bgImage.crossOrigin = "anonymous";

      // Declare variables for image dimensions (needed for blur effect later)
      let drawWidth: number,
        drawHeight: number,
        offsetX: number,
        offsetY: number;

      await new Promise<void>((resolve) => {
        bgImage.onload = () => {
          // Calculate dimensions for object-fit: cover behavior
          const canvasAspectRatio = canvas.width / canvas.height;
          const imageAspectRatio = bgImage.width / bgImage.height;

          if (imageAspectRatio > canvasAspectRatio) {
            // Image is wider than canvas ratio - fit to height, crop width
            drawHeight = canvas.height;
            drawWidth = canvas.height * imageAspectRatio;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
          } else {
            // Image is taller than canvas ratio - fit to width, crop height
            drawWidth = canvas.width;
            drawHeight = canvas.width / imageAspectRatio;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
          }

          // Draw background image with cover behavior
          ctx.drawImage(bgImage, offsetX, offsetY, drawWidth, drawHeight);

          // Add dark overlay for better text readability
          ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          // Store dimensions for later use in blur effect
          resolve();
        };
        bgImage.onerror = () => {
          // Fallback to gradient if image fails to load
          const gradient = ctx.createLinearGradient(
            0,
            0,
            canvas.width,
            canvas.height
          );
          gradient.addColorStop(0, "#7c3aed");
          gradient.addColorStop(0.5, "#a855f7");
          gradient.addColorStop(1, "#3b82f6");
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          resolve();
        };
        bgImage.src = "/sutra-river.jpg";
      });

      // Draw glassmorphism card container
      const cardMargin = 80;
      const cardX = cardMargin;
      const cardY = cardMargin;
      const cardWidth = canvas.width - cardMargin * 2;
      const cardHeight = canvas.height - cardMargin * 2;
      const borderRadius = 40;

      // Create glassmorphism card with actual blur effect
      // First, capture the background region where the card will be
      const cardRegion = ctx.getImageData(cardX, cardY, cardWidth, cardHeight);

      // Apply blur effect to the captured region (reduced radius for performance)
      const blurredRegion = applyBlur(cardRegion, 50);

      // Draw the blurred background
      ctx.putImageData(blurredRegion, cardX, cardY);

      // Now create the glassmorphism overlay
      ctx.save();

      // Create rounded rectangle path
      ctx.beginPath();
      ctx.roundRect(cardX, cardY, cardWidth, cardHeight, borderRadius);
      ctx.clip();

      // Add subtle glassmorphism overlay (much less white)
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.fillRect(cardX, cardY, cardWidth, cardHeight);

      // Add gradient for depth
      const cardGradient = ctx.createLinearGradient(
        cardX,
        cardY,
        cardX,
        cardY + cardHeight
      );
      cardGradient.addColorStop(0, "rgba(255, 255, 255, 0.15)");
      cardGradient.addColorStop(0.5, "rgba(255, 255, 255, 0.05)");
      cardGradient.addColorStop(1, "rgba(255, 255, 255, 0.02)");
      ctx.fillStyle = cardGradient;
      ctx.fillRect(cardX, cardY, cardWidth, cardHeight);

      ctx.restore();

      // Helper function to apply a lighter blur effect (optimized for performance)
      function applyBlur(imageData: ImageData, blurRadius: number): ImageData {
        const { data, width, height } = imageData;
        const output = new ImageData(width, height);
        const outputData = output.data;

        // Much more efficient blur - only sample every few pixels
        const step = Math.max(1, Math.floor(blurRadius / 8));

        for (let y = 0; y < height; y += step) {
          for (let x = 0; x < width; x += step) {
            let r = 0,
              g = 0,
              b = 0,
              a = 0;
            let count = 0;

            // Sample fewer pixels for performance
            for (let dy = -blurRadius; dy <= blurRadius; dy += step * 2) {
              for (let dx = -blurRadius; dx <= blurRadius; dx += step * 2) {
                const nx = Math.max(0, Math.min(width - 1, x + dx));
                const ny = Math.max(0, Math.min(height - 1, y + dy));
                const index = (ny * width + nx) * 4;

                r += data[index];
                g += data[index + 1];
                b += data[index + 2];
                a += data[index + 3];
                count++;
              }
            }

            // Fill the block area with the blurred color
            const avgR = r / count;
            const avgG = g / count;
            const avgB = b / count;
            const avgA = a / count;

            for (let fy = y; fy < Math.min(height, y + step); fy++) {
              for (let fx = x; fx < Math.min(width, x + step); fx++) {
                const outputIndex = (fy * width + fx) * 4;
                outputData[outputIndex] = avgR;
                outputData[outputIndex + 1] = avgG;
                outputData[outputIndex + 2] = avgB;
                outputData[outputIndex + 3] = avgA;
              }
            }
          }
        }

        return output;
      }

      // Draw card border (subtle glassmorphism border)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(cardX, cardY, cardWidth, cardHeight, borderRadius);
      ctx.stroke();

      // Add inner highlight for glassmorphism effect
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(
        cardX + 2,
        cardY + 2,
        cardWidth - 4,
        cardHeight - 4,
        borderRadius - 2
      );
      ctx.stroke();

      // Set text properties
      ctx.fillStyle = "white";
      ctx.textAlign = "left";

      // Calculate text positions relative to card
      const textMargin = 60;
      const textX = cardX + textMargin;
      const rightTextX = cardX + cardWidth - textMargin;

      const currentFont = getCurrentFont();

      // Draw name (top left)
      ctx.font = `500 40px ${currentFont}`;
      ctx.fillText(name || "<Student Name>", textX, cardY + 100);

      // Draw "TWO AI" (top right)
      ctx.textAlign = "right";
      ctx.font = `400 40px ${currentFont}`;
      ctx.fillText("TWO AI", rightTextX, cardY + 100);

      // Draw main content (center)
      ctx.textAlign = "left";
      ctx.font = `500 48px ${currentFont}`;
      ctx.fillText("I am participating in", textX, cardY + 220);

      ctx.font = `bold 120px ${currentFont}`;
      ctx.fillText("India AI", textX, cardY + 350);
      ctx.fillText("Challenge by", textX, cardY + 470);
      ctx.fillText("SUTRA", textX, cardY + 590);

      ctx.font = `400 60px ${currentFont}`;
      ctx.fillText("Building AI That Understands", textX, cardY + 720);
      ctx.fillText("Bharat", textX, cardY + 780);

      // Draw footer elements
      ctx.font = `400 32px ${currentFont}`;
      ctx.fillText("student hackathon", textX, cardY + cardHeight - 80);

      // Draw social icons and website (bottom right)
      ctx.textAlign = "right";
      ctx.font = `400 32px ${currentFont}`;
      ctx.fillText("two.ai/hackathon", rightTextX, cardY + cardHeight - 80);

      // Wait a moment for rendering to complete
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Set preview image
      const dataURL = canvas.toDataURL("image/png", 1.0);
      setPreviewImage(dataURL);
    } catch (error) {
      console.error("Error updating preview:", error);
    }
  };

  // Manual preview update function
  const handlePreviewUpdate = () => {
    updatePreview();
  };

  const generateCard = async () => {
    if (!name.trim()) return;

    setIsGenerating(true);
    try {
      const canvas = canvasRef.current;
      if (!canvas) {
        throw new Error("Canvas not found");
      }

      // Use a timeout to ensure UI updates and prevent blocking
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Regenerate the card to ensure latest changes (non-blocking)
      await updatePreview();

      // Add another small delay to let the canvas finish rendering
      await new Promise((resolve) => setTimeout(resolve, 200));

      // Download using the more reliable toDataURL method
      const dataURL = canvas.toDataURL("image/png", 0.9); // Slightly lower quality for speed
      const a = document.createElement("a");
      a.href = dataURL;
      a.download = `${name.replace(/\s+/g, "_")}_hackathon_card.png`;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();

      // Cleanup after a short delay
      setTimeout(() => {
        document.body.removeChild(a);
      }, 100);
    } catch (error) {
      console.error("Error generating card:", error);
      alert(
        `Failed to generate card: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    } finally {
      // Small delay before clearing loading state
      setTimeout(() => {
        setIsGenerating(false);
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <Card className="backdrop-blur-sm bg-white/10 border-white/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-white">
              India AI Challenge Card Generator
            </CardTitle>
            <CardDescription className="text-purple-100">
              Enter your name to generate your participation card
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Your Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-purple-300" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    // Debounce preview update
                    setTimeout(() => handlePreviewUpdate(), 500);
                  }}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-purple-200"
                  onKeyPress={(e) => e.key === "Enter" && generateCard()}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="font" className="text-white">
                Font Style
              </Label>
              <div className="relative">
                <Type className="absolute left-3 top-3 h-4 w-4 text-purple-300 z-10" />
                <Select
                  value={selectedFont}
                  onValueChange={(value) => {
                    setSelectedFont(value);
                    setTimeout(() => handlePreviewUpdate(), 300);
                  }}
                >
                  <SelectTrigger className="pl-10 bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select a font" />
                  </SelectTrigger>
                  <SelectContent className="bg-purple-900/90 backdrop-blur-sm border-white/20">
                    {fontOptions.map((font) => (
                      <SelectItem
                        key={font.value}
                        value={font.value}
                        className="text-white hover:bg-white/10 focus:bg-white/10"
                        style={{ fontFamily: font.fallback }}
                      >
                        {font.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handlePreviewUpdate}
                variant="outline"
                className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Update Preview
              </Button>
              <Button
                onClick={generateCard}
                disabled={!name.trim() || isGenerating}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {previewImage && (
          <Card className="backdrop-blur-sm bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-lg text-white">Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={previewImage}
                  alt="Generated card preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Hidden canvas for image generation */}
      <canvas
        ref={canvasRef}
        style={{ display: "none" }}
        width={1200}
        height={1200}
      />
    </div>
  );
}
