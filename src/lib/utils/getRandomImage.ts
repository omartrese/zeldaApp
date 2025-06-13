// src/lib/utils/getRandomImage.ts

// Imágenes compartidas para Zelda
export const zeldaImages = [
  "/miniLink.jpeg",
  "/linkCoffee.jpeg",
  "/Bokoblin.webp"
];

export function getRandomImage(): string {
  const idx = Math.floor(Math.random() * zeldaImages.length);
  return zeldaImages[idx];
}
