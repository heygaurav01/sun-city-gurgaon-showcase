import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Phone, Mail, MapPin } from "lucide-react";
import { submitFormData } from "@/lib/api";

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      toast.error("Please accept the terms and conditions");
      return;
    }

    if (formData.phone.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    setIsSubmitting(true);

    try {
      const trimmedMessage = formData.message.trim();
      const result = await submitFormData({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        countryCode: "+91",
        message: trimmedMessage ? trimmedMessage : undefined,
      });

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
      });

      // Redirect to Thank You page
      navigate("/thank-you.html");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-luxury-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-foreground/70 text-base md:text-lg">
            Book a free site visit or download the brochure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card/30 border border-border/30">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/60 mb-1">Phone</div>
                    <div className="text-foreground font-medium">+91 8200 201 202</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card/30 border border-border/30">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/60 mb-1">Email</div>
                    <div className="text-foreground font-medium">contact@elaris.consulting</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card/30 border border-border/30">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/60 mb-1">Location</div>
                    <div className="text-foreground font-medium">Sector 78, Gurgaon, Haryana</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-sm text-foreground/70">
                Channel Partner RERA No: GGM/284/2017/IR/514/Ext1/2023/21/1
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary transition-smooth"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary transition-smooth"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setFormData({ ...formData, phone: value });
                  }}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary transition-smooth"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Your Message / Requirements"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="bg-background/50 border-border/50 focus:border-primary transition-smooth resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, consent: checked as boolean })
                  }
                  className="mt-1"
                />
                <label
                  htmlFor="consent"
                  className="text-sm text-foreground/70 leading-relaxed cursor-pointer"
                >
                  I authorize company representatives to Call, SMS, Email or WhatsApp me about
                  its products and offers. This consent overrides any registration for DNC/NDNC.
                </label>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base transition-smooth shadow-luxury disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Enquire Now"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
