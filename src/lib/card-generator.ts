export interface TeamMember {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface CardOptions {
  font?: string;
  backgroundImage?: string;
}

export const generateCardForMember = async (
  member: TeamMember,
  options: CardOptions = {}
): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      // Create a canvas element
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        throw new Error("Could not get canvas context");
      }

      // Set canvas size
      canvas.width = 1200;
      canvas.height = 1200;

      const fullName = `${member.firstName} ${member.lastName}`;
      const currentFont =
        options.font || "'Poppins', 'Geist', 'Roboto', system-ui, sans-serif";

      // Load and draw background image
      const bgImage = new Image();
      bgImage.crossOrigin = "anonymous";

      bgImage.onload = () => {
        try {
          // Calculate dimensions for object-fit: cover behavior
          const canvasAspectRatio = canvas.width / canvas.height;
          const imageAspectRatio = bgImage.width / bgImage.height;

          let drawWidth: number,
            drawHeight: number,
            offsetX: number,
            offsetY: number;

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

          // Draw glassmorphism card container
          const cardMargin = 80;
          const cardX = cardMargin;
          const cardY = cardMargin;
          const cardWidth = canvas.width - cardMargin * 2;
          const cardHeight = canvas.height - cardMargin * 2;
          const borderRadius = 40;

          // Create glassmorphism card with blur effect
          const cardRegion = ctx.getImageData(
            cardX,
            cardY,
            cardWidth,
            cardHeight
          );
          const blurredRegion = applyBlur(cardRegion, 50);
          ctx.putImageData(blurredRegion, cardX, cardY);

          // Create glassmorphism overlay
          ctx.save();
          ctx.beginPath();

          // Create rounded rectangle path manually for better compatibility
          ctx.moveTo(cardX + borderRadius, cardY);
          ctx.lineTo(cardX + cardWidth - borderRadius, cardY);
          ctx.quadraticCurveTo(
            cardX + cardWidth,
            cardY,
            cardX + cardWidth,
            cardY + borderRadius
          );
          ctx.lineTo(cardX + cardWidth, cardY + cardHeight - borderRadius);
          ctx.quadraticCurveTo(
            cardX + cardWidth,
            cardY + cardHeight,
            cardX + cardWidth - borderRadius,
            cardY + cardHeight
          );
          ctx.lineTo(cardX + borderRadius, cardY + cardHeight);
          ctx.quadraticCurveTo(
            cardX,
            cardY + cardHeight,
            cardX,
            cardY + cardHeight - borderRadius
          );
          ctx.lineTo(cardX, cardY + borderRadius);
          ctx.quadraticCurveTo(cardX, cardY, cardX + borderRadius, cardY);
          ctx.closePath();
          ctx.clip();

          // Add subtle glassmorphism overlay
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

          // Helper function to draw rounded rectangle
          const drawRoundedRect = (
            x: number,
            y: number,
            width: number,
            height: number,
            radius: number
          ) => {
            ctx.beginPath();
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + width - radius, y);
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
            ctx.lineTo(x + width, y + height - radius);
            ctx.quadraticCurveTo(
              x + width,
              y + height,
              x + width - radius,
              y + height
            );
            ctx.lineTo(x + radius, y + height);
            ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
            ctx.lineTo(x, y + radius);
            ctx.quadraticCurveTo(x, y, x + radius, y);
            ctx.closePath();
          };

          // Draw card border
          ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
          ctx.lineWidth = 2;
          drawRoundedRect(cardX, cardY, cardWidth, cardHeight, borderRadius);
          ctx.stroke();

          // Add inner highlight
          ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
          ctx.lineWidth = 1;
          drawRoundedRect(
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

          // Calculate text positions
          const textMargin = 60;
          const textX = cardX + textMargin;
          const rightTextX = cardX + cardWidth - textMargin;

          // Draw name (top left)
          ctx.font = `500 40px ${currentFont}`;
          ctx.fillText(fullName, textX, cardY + 100);

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

          // Convert to data URL
          const dataURL = canvas.toDataURL("image/png", 0.9);
          resolve(dataURL);
        } catch (error) {
          reject(error);
        }
      };

      bgImage.onerror = () => {
        // Fallback to gradient if image fails to load
        try {
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

          // Continue with the rest of the drawing logic...
          // (simplified for fallback)
          const dataURL = canvas.toDataURL("image/png", 0.9);
          resolve(dataURL);
        } catch (error) {
          reject(error);
        }
      };

      bgImage.src = options.backgroundImage || "/sutra-river.jpg";
    } catch (error) {
      reject(error);
    }
  });
};

// Helper function to apply blur effect (optimized for performance)
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

export const downloadCard = (dataURL: string, fileName: string) => {
  const a = document.createElement("a");
  a.href = dataURL;
  a.download = fileName;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
  }, 100);
};

export const generateCardsForTeam = async (
  teamMembers: TeamMember[],
  options: CardOptions = {}
): Promise<{ member: TeamMember; cardDataURL: string }[]> => {
  const results = [];

  for (const member of teamMembers) {
    try {
      const cardDataURL = await generateCardForMember(member, options);
      results.push({ member, cardDataURL });
    } catch (error) {
      console.error(
        `Failed to generate card for ${member.firstName} ${member.lastName}:`,
        error
      );
    }
  }

  return results;
};
