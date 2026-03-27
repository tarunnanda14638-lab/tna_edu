import { AnimatedSection } from "@/components/AnimatedSection";
import { BookOpen, Target, Heart, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-16 bg-background">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">About TNA</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Dedicated to transforming how students perceive and master Economics and Mathematics.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              {/* about page teacher teaching */}
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=1000&fit=crop" 
                alt="Teaching experience" 
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]"
              />
            </AnimatedSection>
            <AnimatedSection direction="left">
              <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-2">Our Story</h2>
              <h3 className="text-4xl font-display font-bold text-foreground mb-6">Over 8 Years of Academic Excellence</h3>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Tanya Nanda Academy was founded with a singular vision: to make learning intuitive, conceptual, and highly rewarding for students. What started as a small initiative has grown into a trusted institution for CBSE students.
                </p>
                <p>
                  Over the past 8+ years, we have proudly guided hundreds of students. Our focus has never been just on rote learning; instead, we dive deep into the 'why' and 'how' of every concept. 
                </p>
                <p>
                  Whether it's the intricate graphs of Microeconomics or the complex theorems of Mathematics, we break them down into digestible, logical steps. The result? Our students consistently score above 90% in their board examinations and develop a lifelong analytical mindset.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Our Philosophy</h2>
            <p className="text-muted-foreground mt-4 text-lg">The pillars that make our teaching effective.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1} className="bg-card p-8 rounded-2xl shadow-sm border border-border">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-3">Concept Clarity</h4>
              <p className="text-muted-foreground">
                We believe that strong fundamentals are the key to tackling any complex problem. We spend time ensuring the core is unbreakable.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="bg-card p-8 rounded-2xl shadow-sm border border-border">
              <div className="w-14 h-14 bg-accent/20 text-accent-foreground rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-3">Exam Orientation</h4>
              <p className="text-muted-foreground">
                While concept is king, knowing how to present answers is crucial for boards. We train students strictly aligned with CBSE marking schemes.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="bg-card p-8 rounded-2xl shadow-sm border border-border">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold mb-3">Personalized Care</h4>
              <p className="text-muted-foreground">
                Every student learns at a different pace. Our small batch sizes allow us to identify and nurture individual strengths and weaknesses.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
