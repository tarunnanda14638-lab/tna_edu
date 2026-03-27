import { useState, useEffect } from "react";
import { X, Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    class: "",
    subject: ""
  });

  // Listen for hash changes to open the modal
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#book-demo") {
        setIsOpen(true);
        setIsSubmitted(false);
      }
    };

    // Check initial hash
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    // Remove hash without scrolling
    history.replaceState(null, "", window.location.pathname);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", phone: "", class: "", subject: "" });
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
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
                    Fill out the form below and we'll contact you to schedule your demo class.
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
                      Thank you for your interest. Our team will contact you shortly to confirm your demo class timing.
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
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Class</label>
                        <select
                          required
                          value={formData.class}
                          onChange={(e) => setFormData({...formData, class: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        >
                          <option value="">Select Class</option>
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
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        >
                          <option value="">Select Subject</option>
                          <option value="Economics">Economics</option>
                          <option value="Mathematics">Mathematics</option>
                          <option value="Both">Both</option>
                        </select>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-4 mt-4 bg-primary text-primary-foreground rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 hover:shadow-lg transition-all active:scale-[0.98]"
                    >
                      Submit Request <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
