"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type RoomImageSliderProps = {
  images: string[];
  title: string;
};

export default function RoomImageSlider({ images, title }: RoomImageSliderProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-72 overflow-hidden">
      <img src={images[currentImage]} alt={`${title} ${currentImage + 1}`} className="h-full w-full object-cover transition-all duration-500" />

      {/* Previous Button */}
      <button onClick={prevImage} className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-[#D4AF37] hover:text-black">
        <ChevronLeft size={20} />
      </button>

      {/* Next Button */}
      <button onClick={nextImage} className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-[#D4AF37] hover:text-black">
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button key={index} onClick={() => setCurrentImage(index)} className={`h-2 rounded-full transition-all duration-300 ${currentImage === index ? "w-8 bg-[#D4AF37]" : "w-2 bg-white/60"}`} />
        ))}
      </div>
    </div>
  );
}
