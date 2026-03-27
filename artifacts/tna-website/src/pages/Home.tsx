import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "wouter";
import { 
  ArrowRight, 
  BookOpen, 
  Trophy, 
  Users, 
  CheckCircle2, 
  PlayCircle,
  Video,
  FileText,
  Clock,
  Target,
  Calendar
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-primary text-white">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Abstract Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <AnimatedSection direction="down">
              <span className="inline-block py-1.5 px-4 rounded-full bg-accent/20 text-accent border border-accent/30 font-semibold text-sm mb-6 shadow-[0_0_15px_rgba(251,192,45,0.3)]">
                Batch Starting Soon — Limited Seats
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1] mb-6 text-white text-balance">
                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">Economics & Mathematics</span> with Confidence.
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 leading-relaxed max-w-2xl">
                Join Tanya Nanda Academy to build crystal-clear concepts, score 90%+, and gain your maximum utility from education. Available Online & Offline.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} className="flex flex-wrap gap-4">
              <a 
                href="#book-demo"
                className="px-8 py-4 bg-accent text-accent-foreground rounded-xl font-bold text-lg hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(251,192,45,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                Enroll Now <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#book-demo"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                <PlayCircle className="w-5 h-5" /> Book Free Demo
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-12 bg-background border-b border-border relative -mt-8 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedSection delay={0.4} className="bg-white rounded-2xl p-6 shadow-xl border border-border/50 flex items-center gap-4 hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Trophy className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold text-primary">8+</h3>
                <p className="text-muted-foreground font-medium">Years Experience</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5} className="bg-white rounded-2xl p-6 shadow-xl border border-border/50 flex items-center gap-4 hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center text-accent-foreground">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold text-primary">90%+</h3>
                <p className="text-muted-foreground font-medium">Top Scorers</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.6} className="bg-white rounded-2xl p-6 shadow-xl border border-border/50 flex items-center gap-4 hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                <Video className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-primary leading-tight">Online &<br/>Offline</h3>
                <p className="text-muted-foreground font-medium text-sm mt-1">Flexible Batches</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 3. ABOUT TNA PREVIEW */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-3xl" />
                <img 
                  src={`${import.meta.env.BASE_URL}images/about-bg.png`}
                  alt="Education Abstract" 
                  className="relative z-10 rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
                />
                {/* floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-border animate-bounce-slow">
                  <div className="flex items-center gap-3">
                    <div className="text-accent">
                      <Target className="w-10 h-10" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Concept Clarity</p>
                      <p className="text-sm text-muted-foreground">Focus on fundamentals</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-2">About TNA</h2>
              <h3 className="text-4xl font-display font-bold text-foreground mb-6">Empowering Students to Excel</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 8 years of dedicated teaching experience, Tanya Nanda Academy has been the guiding force behind hundreds of successful students in CBSE Board Exams.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We don't just teach subjects; we build an analytical mindset. Our core philosophy is <strong>"Gain your maximum utility"</strong>—ensuring every hour you spend studying translates into profound understanding and excellent grades.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 font-bold text-primary hover:text-accent transition-colors">
                Read our full story <ArrowRight className="w-5 h-5" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4. COURSES */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Our Programs</h2>
            <h3 className="text-4xl font-display font-bold text-foreground mb-4">Courses tailored for success</h3>
            <p className="text-muted-foreground text-lg">Comprehensive curriculum coverage, regular testing, and personalized attention.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Course 1 */}
            <AnimatedSection delay={0.1} className="bg-card rounded-3xl p-8 shadow-lg border border-border hover:shadow-2xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-3">Class XI & XII</h4>
              <p className="text-primary font-semibold mb-4">Economics</p>
              <p className="text-muted-foreground mb-8 flex-grow">
                Master Microeconomics, Macroeconomics, and Indian Economic Development with deep conceptual clarity for board exams.
              </p>
              <Link href="/courses" className="text-primary font-bold inline-flex items-center gap-2 hover:text-accent transition-colors mt-auto">
                View Details <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            {/* Course 2 */}
            <AnimatedSection delay={0.2} className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
              <div className="w-16 h-16 rounded-2xl bg-white/20 text-white flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Class IX & X</h4>
              <p className="text-accent font-semibold mb-4">Mathematics</p>
              <p className="text-primary-foreground/80 mb-8 flex-grow">
                Build a strong foundation in Mathematics. Regular practice, doubt clearing sessions, and step-by-step problem solving.
              </p>
              <Link href="/courses" className="text-accent font-bold inline-flex items-center gap-2 hover:text-white transition-colors mt-auto">
                View Details <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            {/* Course 3 */}
            <AnimatedSection delay={0.3} className="bg-card rounded-3xl p-8 shadow-lg border border-border hover:shadow-2xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full group">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent-foreground flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-3">College Students</h4>
              <p className="text-primary font-semibold mb-4">Maths & Economics</p>
              <p className="text-muted-foreground mb-8 flex-grow">
                Advanced concepts for degree students. Simplified approach to complex university-level theories.
              </p>
              <Link href="/courses" className="text-primary font-bold inline-flex items-center gap-2 hover:text-accent transition-colors mt-auto">
                View Details <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE TNA */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection direction="right" className="order-2 lg:order-1">
              <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-2">Why Choose Us</h2>
              <h3 className="text-4xl font-display font-bold text-foreground mb-8">The TNA Advantage</h3>
              
              <div className="space-y-6">
                {[
                  { title: "8+ Years Expert Teaching", desc: "Proven methodologies that make learning intuitive." },
                  { title: "Online + Offline Flexibility", desc: "Choose the mode of learning that suits you best." },
                  { title: "Regular & Surprise Tests", desc: "Continuous evaluation to track and improve performance." },
                  { title: "Premium Study Material", desc: "Comprehensive notes covering the entire syllabus." },
                  { title: "Personalized Attention", desc: "Small batch sizes ensure every doubt is addressed." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="left" className="order-1 lg:order-2 flex items-center justify-center">
              {/* landing page student studying */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-accent rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=800&fit=crop" 
                  alt="Student studying" 
                  className="rounded-3xl shadow-2xl relative z-10 w-full h-full object-cover"
                />
                <div className="absolute -right-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-xl">A+</div>
                    <div>
                      <p className="font-bold text-sm">Board Exams</p>
                      <p className="text-xs text-muted-foreground">Excellent Results</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Your Path to 90%+</h2>
            <p className="text-primary-foreground/80 text-lg">Four simple steps to transform your academic journey.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {[
              { step: "01", title: "Book a Demo", icon: Calendar, desc: "Schedule a free demo class to experience our teaching style." },
              { step: "02", title: "Attend Class", icon: Video, desc: "Join online or offline and see the difference in concept clarity." },
              { step: "03", title: "Enroll", icon: FileText, desc: "Register for the full course and get access to premium materials." },
              { step: "04", title: "Score High", icon: Trophy, desc: "Follow our process, give tests, and achieve your dream score." }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="relative group text-center">
                <div className="w-20 h-20 mx-auto bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:-translate-y-2">
                  <item.icon className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold mb-2">
                  <span className="text-accent/50 text-sm block mb-1">STEP {item.step}</span>
                  {item.title}
                </h4>
                <p className="text-primary-foreground/70">{item.desc}</p>
                
                {/* Connecting Line (hidden on mobile) */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-white/20"></div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              { q: "Do you provide both online and offline classes?", a: "Yes, we offer both modes. You can choose the format that best suits your learning style and location." },
              { q: "What is the typical batch size?", a: "We maintain small batch sizes to ensure personalized attention for every student, allowing for active participation and immediate doubt resolution." },
              { q: "Are study materials provided?", a: "Absolutely. We provide comprehensive notes, worksheets, and past year question banks tailored strictly to the CBSE syllabus." },
              { q: "How often are tests conducted?", a: "We conduct regular weekly tests to track progress, along with surprise tests and full-length mock exams before the boards." },
              { q: "Can I take a trial class before joining?", a: "Yes! We encourage students to book a free demo class to experience our teaching methodology before making a commitment." }
            ].map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <details className="group border border-border rounded-xl bg-card overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="p-6 font-semibold cursor-pointer flex justify-between items-center text-foreground hover:text-primary transition-colors">
                    {faq.q} 
                    <span className="ml-4 shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-open:bg-primary group-open:text-primary-foreground transition-colors">
                      <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground border-t border-border mt-2">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-20 relative overflow-hidden bg-accent">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAiPjwvcmVjdD4KPGNpcmNsZSBjeD0iNCIgY3k9IjQiIHI9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xNSI+PC9jaXJjbGU+Cjwvc3ZnPg==')]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-display font-black text-accent-foreground mb-6">
              Ready to gain your maximum utility?
            </h2>
            <p className="text-xl text-accent-foreground/80 mb-10 font-medium">
              Join the new batch. Limited seats available to ensure personalized attention.
            </p>
            <a 
              href="#book-demo"
              className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground rounded-xl font-bold text-xl hover:bg-primary/90 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Book Your Free Demo <ArrowRight className="w-6 h-6" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
