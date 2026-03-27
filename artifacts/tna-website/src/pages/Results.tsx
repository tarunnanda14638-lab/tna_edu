import { AnimatedSection } from "@/components/AnimatedSection";
import { Quote, Star } from "lucide-react";

export default function Results() {
  const testimonials = [
    { name: "Tanisha Arora", score: "98%", subject: "Economics (Class XII)", text: "It's an excellent institution for students who really aspire to learn." },
    { name: "Samaira Khurana", score: "95%", subject: "Mathematics (Class X)", text: "I joined TNA in class 9. The regular tests and constant motivation took away my fear of Math. Scored way above my own expectations." },
    { name: "Seerat Kakkar", score: "96%", subject: "Economics (Class XII)", text: "The doubt sessions are the best part. No question is too silly. The focus on how to present answers according to CBSE marking scheme was game-changing." },
    { name: "Harsh Arora", score: "92%", subject: "Mathematics (Class X)", text: "Offline classes here have a great environment. Very focused but not stressful. The worksheets provided are more than enough to score a 90+." },
    { name: "Jasmeet Singh", score: "94%", subject: "Economics (Class XI)", text: "Statistics used to be scary, but learning it here made it logical and easy to score. Highly recommend TNA to all juniors!" },
    { name: "Payal Kataria", score: "97%", subject: "Mathematics & Economics", text: "Gaining maximum utility is truly the motto here. Every hour spent studying here translates directly into marks. Best decision of my 12th grade." },
    { name: "Amneet Kaur", score: "93%", subject: "Economics (Class XII)", text: "Tanya ma'am's notes are a lifesaver. I used to struggle with Macroeconomics, but her way of breaking down complex flowcharts made it my highest scoring subject!" },
  ];

  return (
    <div className="pt-24 pb-16 bg-background">
      <section className="relative bg-primary text-primary-foreground py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/results-bg.png`}
            alt="Results Background" 
            className="w-full h-full object-cover opacity-20 mix-blend-screen"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">Our Wall of Fame</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto font-medium">
              We measure our success through the outstanding achievements of our students. Over 90% of our batch consistently scores above 90.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-accent/10 border-b border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            <AnimatedSection delay={0.1}>
              <div className="text-4xl font-black text-primary font-display mb-1">100/100</div>
              <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Highest Score</div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="text-4xl font-black text-primary font-display mb-1">500+</div>
              <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Students Mentored</div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="text-4xl font-black text-primary font-display mb-1">90%+</div>
              <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Average Batch Score</div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-card rounded-3xl p-8 shadow-lg border border-border h-full flex flex-col relative">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-secondary opacity-50" />
                  
                  <div className="flex items-center gap-1 text-accent mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  
                  <p className="text-foreground/80 italic mb-8 flex-grow relative z-10">
                    "{t.text}"
                  </p>
                  
                  <div className="pt-6 border-t border-border flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-foreground">{t.name}</h4>
                      <p className="text-sm text-muted-foreground">{t.subject}</p>
                    </div>
                    <div className="text-2xl font-black text-primary font-display">
                      {t.score}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
