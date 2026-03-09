import palmLogo from "@/assets/palm-logo.png";

const Footer = () => (
  <footer className="bg-secondary py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <img src={palmLogo} alt="Campel Island" className="h-8 w-8 invert" />
        <span className="font-display text-lg font-semibold text-foreground tracking-wider uppercase">
          CAMPEL ISLAND
        </span>
      </div>
      <p className="font-body text-sm text-muted-foreground">
        © {new Date().getFullYear()} Campel Island. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
