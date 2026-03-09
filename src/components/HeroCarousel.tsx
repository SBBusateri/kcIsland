import { useEffect, useState, useRef } from "react";
import heroImg from "@/assets/hero-placeholder-1.jpg";
import albumWedding from "@/assets/album-wedding.jpg";
import albumPortraits from "@/assets/album-portraits.jpg";
import albumLandscape from "@/assets/album-landscape.jpg";
import albumEvents from "@/assets/album-events.jpg";

const images = [heroImg, albumWedding, albumPortraits, albumLandscape, albumEvents];

const HeroCarousel = () => {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const count = images.length;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, count]);

  const getIndex = (offset: number) => (active + offset + count) % count;

  return (
    <section id="work" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(270 80% 65%) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 text-center mb-14 animate-fade-in">
        <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight uppercase mb-3">
          <span className="gradient-text">Campel Island</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground tracking-widest uppercase">
          Sports Photography & Videography
        </p>
      </div>

      {/* Stacked Carousel - 3 visible cards */}
      <div
        className="relative z-10 w-full flex justify-center items-center"
        style={{ height: "380px" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Previous card (left/back) */}
        <div
          className="absolute rounded-md overflow-hidden shadow-lg border border-border/20 transition-all duration-700 ease-in-out opacity-50"
          style={{
            width: "220px",
            height: "300px",
            transform: "translateX(-120px) scale(0.85)",
            zIndex: 1,
          }}
        >
          <img
            src={images[getIndex(-1)]}
            alt="Previous"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/40" />
        </div>

        {/* Center card (active) */}
        <div
          className="absolute rounded-md overflow-hidden shadow-2xl border-2 border-primary/40 transition-all duration-700 ease-in-out"
          style={{
            width: "260px",
            height: "360px",
            transform: "translateX(0) scale(1)",
            zIndex: 3,
          }}
        >
          <img
            src={images[active]}
            alt="Featured work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>

        {/* Next card (right/back) */}
        <div
          className="absolute rounded-md overflow-hidden shadow-lg border border-border/20 transition-all duration-700 ease-in-out opacity-50"
          style={{
            width: "220px",
            height: "300px",
            transform: "translateX(120px) scale(0.85)",
            zIndex: 1,
          }}
        >
          <img
            src={images[getIndex(1)]}
            alt="Next"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/40" />
        </div>
      </div>

      {/* Dots */}
      <div className="relative z-10 flex gap-2 mt-8">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === active ? "bg-primary w-6" : "bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/40 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
