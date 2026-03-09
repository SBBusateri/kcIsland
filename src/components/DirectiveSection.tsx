import heroImg from "@/assets/hero-placeholder-1.jpg";

const DirectiveSection = () => {
  return (
    <section id="directive" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-body text-sm tracking-widest uppercase text-primary mb-3">Our Directive</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground uppercase mb-6">
            Capturing the<br />
            <span className="gradient-text">Intensity</span>
          </h2>
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
            <p>
              At Campel Island, we live for the game. Our mission is to deliver raw, cinematic
              sports photography and videography that captures the grit, passion, and explosive
              energy of competition.
            </p>
            <p>
              Specializing in college basketball, we bring a courtside perspective that puts you
              in the middle of the action — every dunk, every clutch shot, every moment of
              triumph frozen in time.
            </p>
            <p>
              We don't just shoot the game — we tell the story behind every play, every player,
              every season. Your legacy, our lens.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-md overflow-hidden shadow-2xl">
            <img
              src={heroImg}
              alt="Campel Island at work"
              className="w-full h-[500px] object-cover"
              loading="lazy"
            />
          </div>
          <div
            className="absolute -bottom-4 -right-4 w-full h-full rounded-md -z-10"
            style={{ background: "linear-gradient(135deg, hsl(270 60% 55% / 0.2), hsl(270 80% 65% / 0.1))" }}
          />
        </div>
      </div>
    </section>
  );
};

export default DirectiveSection;
