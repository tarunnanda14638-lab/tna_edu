import { AnimatedSection } from "@/components/AnimatedSection";
import { Mail, MapPin, Send, MessageCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY ?? "";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", message: ""
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Enquiry from ${form.firstName} ${form.lastName}`.trim(),
          from_name: "TNA Website",
          "Name": `${form.firstName} ${form.lastName}`.trim(),
          "Email": form.email,
          "Phone": form.phone,
          "Message": form.message,
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Could not send message. Please call or WhatsApp us directly.");
    } finally {
      setIsLoading(false);
    }
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
                <a href="mailto:tanyanandaacademy07@gmail.com" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-secondary transition-colors group">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Email</h4>
                    <p className="text-muted-foreground mt-1">tanyanandaacademy07@gmail.com</p>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">Tap to email directly</p>
                  </div>
                </a>

                <a href="https://wa.me/917082563023" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[#25D366]/10 transition-colors group">
                  <div className="w-12 h-12 bg-[#25D366]/20 text-[#25D366] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">WhatsApp</h4>
                    <p className="text-muted-foreground mt-1">+91 70825 63023</p>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">Tap to open WhatsApp directly</p>
                  </div>
                </a>

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
                    <p className="text-muted-foreground">Thank you for reaching out. Tanya ma'am will get back to you shortly.</p>
                    <button
                      onClick={() => { setIsSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" }); }}
                      className="mt-6 px-6 py-2 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">First Name</label>
                        <input required type="text" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="First name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Last Name</label>
                        <input required type="text" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Last name" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Email Address</label>
                      <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                      <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Your Message</label>
                      <textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none" placeholder="How can we help you?"></textarea>
                    </div>

                    {error && (
                      <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-xl text-sm">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {error}
                      </div>
                    )}

                    <button type="submit" disabled={isLoading} className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all active:scale-[0.98] disabled:opacity-60">
                      {isLoading ? "Sending…" : <> Send Message <Send className="w-4 h-4" /> </>}
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
