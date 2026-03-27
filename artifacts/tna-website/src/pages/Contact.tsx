import { AnimatedSection } from "@/components/AnimatedSection";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState, useRef } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const firstName = (form.querySelector("[name=firstName]") as HTMLInputElement)?.value || "";
    const lastName = (form.querySelector("[name=lastName]") as HTMLInputElement)?.value || "";
    const email = (form.querySelector("[name=email]") as HTMLInputElement)?.value || "";
    const phone = (form.querySelector("[name=phone]") as HTMLInputElement)?.value || "";
    const message = (form.querySelector("[name=message]") as HTMLTextAreaElement)?.value || "";

    const subject = encodeURIComponent(`New Enquiry from ${firstName} ${lastName} - Tanya Nanda Academy`);
    const body = encodeURIComponent(
      `You have received a new message from the TNA website contact form:\n\n` +
      `Name: ${firstName} ${lastName}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n\n` +
      `Message:\n${message}`
    );

    window.open(`mailto:tanyananda91@gmail.com,tanyananda2253@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setIsSubmitted(true);
  };

  return (
    <div className="pt-24 pb-16 bg-background">
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Have questions? Want to book a demo? Reach out to us through any of the channels below.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <AnimatedSection direction="right" className="space-y-10">
              <div>
                <h3 className="text-3xl font-display font-bold text-foreground mb-4">Get in Touch</h3>
                <p className="text-muted-foreground">We typically reply within 24 hours. For urgent queries, please WhatsApp or call us directly.</p>
              </div>

              <div className="space-y-4">

                {/* Phone */}
                <a href="tel:+918607663023" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-secondary transition-colors group">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Phone</h4>
                    <p className="text-muted-foreground mt-1">+91 86076 63023</p>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">Tap to call directly</p>
                  </div>
                </a>

                {/* Emails */}
                <div className="flex items-start gap-4 p-4 rounded-2xl">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Emails</h4>
                    <div className="mt-1 space-y-1">
                      <a href="mailto:tanyananda91@gmail.com" className="block text-muted-foreground hover:text-primary transition-colors">tanyananda91@gmail.com</a>
                      <a href="mailto:tanyananda2253@gmail.com" className="block text-muted-foreground hover:text-primary transition-colors">tanyananda2253@gmail.com</a>
                    </div>
                    <p className="text-xs text-muted-foreground/70 mt-1">Tap to email directly</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <a href="tel:+917082563230" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[#25D366]/10 transition-colors group">
                  <div className="w-12 h-12 bg-[#25D366]/20 text-[#25D366] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">WhatsApp</h4>
                    <p className="text-muted-foreground mt-1">+91 70825 63230</p>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">Tap to call / message on WhatsApp</p>
                  </div>
                </a>

                {/* Location */}
                <a
                  href="https://maps.google.com/?q=307-A+Huda+Sector+12+Panipat+Haryana+132103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-secondary transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Location</h4>
                    <p className="text-muted-foreground mt-1">307-A Huda Sector 12,<br />Panipat, Haryana 132103</p>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">Near Brahamkumari Ashram · Tap to open in Maps</p>
                  </div>
                </a>

              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection direction="left">
              <div className="bg-card rounded-3xl p-8 shadow-xl border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground">Thank you for contacting us. We will get back to you shortly.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 px-6 py-2 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">First Name</label>
                        <input required name="firstName" type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="First name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Last Name</label>
                        <input required name="lastName" type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Last name" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Email Address</label>
                      <input required name="email" type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                      <input required name="phone" type="tel" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Your Message</label>
                      <textarea required name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none" placeholder="How can we help you?"></textarea>
                    </div>
                    <button type="submit" className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all active:scale-[0.98]">
                      Send Message <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </div>
  );
}
