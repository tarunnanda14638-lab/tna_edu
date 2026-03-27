import { AnimatedSection } from "@/components/AnimatedSection";
import { CheckCircle2, Clock, MapPin, FileText, ArrowRight } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      title: "Class XI & XII",
      subject: "Economics",
      badge: "Most Popular",
      desc: "Comprehensive board exam preparation focusing on Microeconomics, Macroeconomics, and Indian Economic Development.",
      features: [
        "Complete CBSE Syllabus Coverage",
        "Printed & Digital Premium Notes",
        "Weekly Unit Tests",
        "Past 10 Years Paper Solving",
        "Dedicated Doubt Clearing Sessions"
      ],
      mode: "Online & Offline",
      duration: "1 Year Academic Batch"
    },
    {
      title: "Class IX & X",
      subject: "Mathematics",
      badge: "Foundation Builder",
      desc: "Building an unshakable mathematical foundation to ensure top grades in board exams and readiness for high school.",
      features: [
        "NCERT & RD Sharma Coverage",
        "Step-by-step Problem Solving",
        "Regular Practice Worksheets",
        "Surprise Formula Tests",
        "Mental Math Strategies"
      ],
      mode: "Online & Offline",
      duration: "1 Year Academic Batch"
    },
    {
      title: "College Level",
      subject: "Maths & Economics",
      badge: "Advanced Level",
      desc: "Targeted tutoring for degree students to simplify complex university-level economic theories and higher mathematics.",
      features: [
        "University Syllabus Alignment",
        "Advanced Macro & Micro Theory",
        "Statistical & Mathematical Economics",
        "Exam-focused Answering Techniques",
        "Flexible Timings"
      ],
      mode: "Online Preferred",
      duration: "Semester Based"
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-background">
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Our Courses</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Expertly crafted curriculum designed to maximize your academic utility and guarantee results.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-card rounded-3xl p-8 shadow-xl border border-border flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                  {/* Accent Top Bar */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent" />
                  
                  <div className="mb-6 mt-2 flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{course.title}</h3>
                      <p className="text-xl font-display font-bold text-primary">{course.subject}</p>
                    </div>
                    <span className="bg-accent/20 text-accent-foreground text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      {course.badge}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-8">
                    {course.desc}
                  </p>

                  <div className="space-y-4 mb-8 flex-grow">
                    <h4 className="font-semibold text-foreground border-b pb-2">What's Included:</h4>
                    <ul className="space-y-3">
                      {course.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-secondary p-4 rounded-xl space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm font-medium text-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      {course.mode}
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium text-foreground">
                      <Clock className="w-5 h-5 text-primary" />
                      {course.duration}
                    </div>
                  </div>

                  <a 
                    href="#book-demo"
                    className="w-full py-4 text-center bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
                  >
                    Join Batch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Study Material Banner */}
      <section className="py-12 bg-secondary border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="bg-white rounded-3xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="w-20 h-20 bg-accent/20 text-accent-foreground rounded-full flex items-center justify-center shrink-0">
              <FileText className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Exclusive Study Material</h3>
              <p className="text-muted-foreground mb-0">
                All enrolled students get access to our premium, hand-crafted notes that compile the best of NCERT, reference books, and 10-year past papers into easy-to-read formats.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
