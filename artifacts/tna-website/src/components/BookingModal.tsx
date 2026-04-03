import { useState, useEffect } from "react";
import { X, Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY ?? "";

const CLASS_SUBJECTS: Record<string, string[]> = {
  "Class 9":  ["Mathematics"],
  "Class 10": ["Mathematics"],
  "Class 11": ["Economics"],
  "Class 12": ["Economics"],
  "College":  ["Mathematics", "Economics", "Both"],
};

export function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    class: "",
    subject: ""
  });

  const availableSubjects = formData.class ? CLASS_SUBJECTS[formData.class] ?? [] : [];

  const handleClassChange = (val: string) => {
    const subjects = CLASS_SUBJECTS[val] ?? [];
    setFormData({
      ...formData,
      class: val,
      subject: subjects.length === 1 ? subjects[0] : ""
    });
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#book-demo") {
        setIsOpen(true);
        setIsSubmitted(false);
        setError("");
      }
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    history.replaceState(null, "", window.location.pathname);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Free Demo Request — ${formData.name} (${formData.class}, ${formData.subject})`,
          from_name: "TNA Website",
          "Student Name": formData.name,
          "Phone": formData.phone,
          "Class": formData.class,
          "Subject": formData.subject,
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: "", phone: "", class: "", subject: "" });
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Could not send request. Please call or WhatsApp us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-secondary"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-primary mb-2">Book Your Free Demo</h2>
                <p className="text-muted-foreground text-sm">
                  Fill out the form and we'll contact you to schedule your demo class.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Request Received!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you! Tanya ma'am will contact you shortly to confirm your demo class.
                  </p>
                  <button
                    onClick={closeModal}
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium w-full hover:bg-primary/90 transition-colors"
                  >
                    Done
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Student Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Class</label>
                      <select
                        required
                        value={formData.class}
                        onChange={(e) => handleClassChange(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      >
                        <option value="">Select</option>
                        <option value="Class 9">Class IX</option>
                        <option value="Class 10">Class X</option>
                        <option value="Class 11">Class XI</option>
                        <option value="Class 12">Class XII</option>
                        <option value="College">College</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Subject</label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        disabled={availableSubjects.length === 0}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
                      >
                        <option value="">Select</option>
                        {availableSubjects.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-xl text-sm">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-6 py-4 mt-2 bg-primary text-primary-foreground rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 hover:shadow-lg transition-all active:scale-[0.98] disabled:opacity-60"
                  >
                    {isLoading ? "Sending…" : <> Submit Request <Send className="w-4 h-4" /> </>}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
