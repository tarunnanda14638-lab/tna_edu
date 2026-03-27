import { ReactNode, useState, useEffect } from "react";
import { Link, useRoute } from "wouter";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { FloatingActions } from "./FloatingActions";
import { BookingModal } from "./BookingModal";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/results", label: "Results" },
  { href: "/contact", label: "Contact" },
];

export function Layout({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative bg-background">
      {/* Sticky Navigation */}
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled ? "glass py-3 shadow-md" : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-white rounded-full p-1 shadow-sm group-hover:shadow-md transition-shadow">
                <img 
                  src={`${import.meta.env.BASE_URL}tna-logo.png`} 
                  alt="Tanya Nanda Academy Logo" 
                  className="h-10 w-10 sm:h-12 sm:w-12 object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  "font-display font-bold text-lg sm:text-xl leading-tight transition-colors",
                  isScrolled ? "text-primary" : "text-white"
                )}>
                  TANYA NANDA ACADEMY
                </span>
                <span className={cn(
                  "text-[10px] sm:text-xs font-medium tracking-wide transition-colors",
                  isScrolled ? "text-accent-foreground/70" : "text-white/80"
                )}>
                  Gain your maximum utility
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const [isActive] = useRoute(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-semibold transition-colors hover:text-accent relative",
                      isScrolled ? "text-foreground" : "text-white",
                      isActive && "text-accent"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full" />
                    )}
                  </Link>
                );
              })}
              <a
                href="#book-demo"
                className="px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 active:scale-95 text-sm bg-accent text-accent-foreground shadow-lg hover:shadow-xl hover:bg-accent/90"
              >
                Enroll Now
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "md:hidden p-2 rounded-lg transition-colors",
                isMobileMenuOpen ? "text-foreground" : isScrolled ? "text-foreground" : "text-white",
                "hover:bg-black/5"
              )}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-md transition-transform duration-300 md:hidden pt-24 px-6",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-6 items-center text-center">
          {navLinks.map((link) => {
            const [isActive] = useRoute(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-2xl font-bold transition-colors",
                  isActive ? "text-accent" : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="#book-demo"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-6 w-full max-w-xs py-4 text-center rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-lg"
          >
            Enroll Now
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col w-full">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-full p-1">
                  <img 
                    src={`${import.meta.env.BASE_URL}tna-logo.png`} 
                    alt="TNA Logo" 
                    className="h-12 w-12 object-contain rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl leading-tight">TNA</span>
                  <span className="text-xs text-primary-foreground/70 tracking-wide">Tanya Nanda Academy</span>
                </div>
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed text-balance">
                Empowering CBSE students with concept clarity and practical understanding to gain maximum utility from education.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display font-bold text-lg mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3 text-sm text-primary-foreground/80">
                <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-accent transition-colors">About TNA</Link></li>
                <li><Link href="/courses" className="hover:text-accent transition-colors">Our Courses</Link></li>
                <li><Link href="/results" className="hover:text-accent transition-colors">Student Results</Link></li>
                <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h3 className="font-display font-bold text-lg mb-6 text-white">Courses</h3>
              <ul className="space-y-3 text-sm text-primary-foreground/80">
                <li>Class XI Economics</li>
                <li>Class XII Economics</li>
                <li>Class IX & X Mathematics</li>
                <li>College Level Subjects</li>
                <li>Online & Offline Batches</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display font-bold text-lg mb-6 text-white">Contact Us</h3>
              <ul className="space-y-4 text-sm text-primary-foreground/80">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <div className="flex flex-col">
                    <a href="mailto:tanyananda2253@gmail.com" className="hover:text-white transition-colors">tanyananda2253@gmail.com</a>
                    <a href="mailto:tanyananda91@gmail.com" className="hover:text-white transition-colors">tanyananda91@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <a href="tel:+918607663023" className="hover:text-white transition-colors">+91 86076 63023</a>
                    <a href="tel:+917082563230" className="hover:text-white transition-colors">+91 70825 63230</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0" />
                  <span>307-A Huda Sector 12, Panipat, Haryana 132103</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Tanya Nanda Academy. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Gain your maximum utility
            </p>
          </div>
        </div>
      </footer>

      {/* Global Overlays */}
      <FloatingActions />
      <BookingModal />
    </div>
  );
}
