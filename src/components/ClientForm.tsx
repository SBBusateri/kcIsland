import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ClientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch soon.");
    setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-body text-sm tracking-widest uppercase text-primary mb-3">Work With Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground uppercase mb-4">
            Book A Shoot
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Ready to get your game captured? Fill out the form below and we'll get back to you
            within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-md p-8 md:p-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="font-body text-sm font-medium text-foreground">
                Full Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-background border-border focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="font-body text-sm font-medium text-foreground">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-background border-border focus:ring-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="font-body text-sm font-medium text-foreground">
                Phone
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className="bg-background border-border focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="projectType" className="font-body text-sm font-medium text-foreground">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full h-10 rounded-md border border-border bg-background px-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a type...</option>
                <option value="gameday">Game Day Coverage</option>
                <option value="team">Team Photos</option>
                <option value="portrait">Player Portraits</option>
                <option value="highlight">Highlight Reel</option>
                <option value="event">Sports Event</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="font-body text-sm font-medium text-foreground">
              Tell Us About Your Project
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Team name, sport, dates, location, what you need covered..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="bg-background border-border focus:ring-primary"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full font-display text-sm tracking-widest uppercase bg-primary text-primary-foreground hover:bg-purple-glow transition-colors duration-300"
          >
            Submit Inquiry
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ClientForm;
