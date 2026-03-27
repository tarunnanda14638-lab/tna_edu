import { MessageCircle, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingActions() {
  return (
    <div className="fixed z-40 pointer-events-none inset-0 flex justify-between items-end p-4 md:p-6">
      
      {/* WhatsApp Floating Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        href="https://wa.me/919876543210" // Replace with actual number if available
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 relative group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-10 left-0 bg-white text-foreground text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us!
        </span>
        <MessageCircle className="w-7 h-7" />
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></span>
      </motion.a>

      {/* Enroll Now Floating Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        href="#book-demo"
        className="pointer-events-auto px-6 py-4 bg-accent text-accent-foreground font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-accent/90 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
      >
        <Calendar className="w-5 h-5" />
        <span className="hidden sm:inline">Enroll Now</span>
      </motion.a>
    </div>
  );
}
