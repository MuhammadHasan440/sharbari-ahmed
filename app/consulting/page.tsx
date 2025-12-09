"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionContainer } from "@/components/section-container"
import { CheckCircle, Zap, BookOpen, ArrowRight, Star, ChevronUp, Users, Target, Clock, Award, MessageCircle, Sparkles } from "lucide-react"

export default function ConsultingPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<number | null>(1)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const services = [
    {
      title: "Screenwriting Consultation",
      description: "Develop your screenplay with personalized guidance on story structure and character development.",
      icon: BookOpen,
      color: "from-[#D4AF37] to-[#FFD700]"
    },
    {
      title: "Fiction Manuscript Development",
      description: "Refine your novel or short stories with detailed feedback on narrative voice and emotional depth.",
      icon: BookOpen,
      color: "from-[#1A237E] to-[#283593]"
    },
    {
      title: "Story Structure Analysis",
      description: "Master the foundations of compelling storytelling with focus on character and emotional arcs.",
      icon: Zap,
      color: "from-[#D4AF37] to-[#FFD700]"
    },
    {
      title: "Developmental Editing",
      description: "In-depth editing to strengthen your manuscript's core narrative, voice, and thematic elements.",
      icon: CheckCircle,
      color: "from-[#1A237E] to-[#283593]"
    },
  ]

  const packages = [
    {
      name: "Single Session",
      price: "Custom",
      duration: "1 Hour",
      description: "For quick story troubleshooting or brainstorming",
      features: [
        "60-minute consultation",
        "Focused feedback on your project",
        "Actionable recommendations",
        "Email follow-up",
      ],
      icon: Clock,
      color: "from-[#1A237E] to-[#283593]"
    },
    {
      name: "Manuscript Review",
      price: "Custom",
      duration: "Fiction",
      description: "Detailed analysis with margin notes and editorial letter",
      features: [
        "Complete manuscript analysis",
        "Detailed feedback document",
        "Margin notes throughout",
        "Editorial letter with recommendations",
        "Follow-up consultation available",
      ],
      icon: BookOpen,
      color: "from-[#D4AF37] to-[#FFD700]",
      featured: true,
    },
    {
      name: "Screenplay Coverage",
      price: "Custom",
      duration: "Consultation",
      description: "Scene-level notes + full story arc review",
      features: [
        "Scene-by-scene analysis",
        "Full story arc review",
        "Character arc guidance",
        "Consultation session included",
        "Revision recommendations",
      ],
      icon: Target,
      color: "from-[#1A237E] to-[#283593]"
    },
    {
      name: "Mentorship Package",
      price: "Custom",
      duration: "4–8 weeks",
      description: "Weekly sessions + feedback + industry guidance",
      features: [
        "Weekly sessions",
        "Ongoing feedback",
        "Publishing/industry guidance",
        "Custom curriculum",
        "Long-term creative partnership",
      ],
      icon: Users,
      color: "from-[#D4AF37] to-[#FFD700]"
    },
  ]

  const testimonials = [
    {
      text: "Sharbari's guidance transformed my approach to storytelling. Her insights helped me find the emotional core of my novel.",
      author: "Sarah K.",
      title: "Published Author",
      rating: 5
    },
    {
      text: "Her screenwriting consultation was invaluable. She helped me structure my script in a way that elevated the entire story.",
      author: "Michael T.",
      title: "Screenwriter",
      rating: 5
    },
    {
      text: "The manuscript review service was detailed and constructive. I feel equipped to take my work to the next level.",
      author: "Priya R.",
      title: "Fiction Writer",
      rating: 5
    },
  ]

  const approachPoints = [
    {
      title: "Honest Feedback",
      description: "I provide direct, constructive criticism grounded in craft principles. My goal is to strengthen your work, not reshape your vision.",
      icon: MessageCircle
    },
    {
      title: "Authentic Storytelling",
      description: "I prioritize narratives that center marginalized voices and refuse stereotypes. We'll dig into the cultural and emotional truth of your stories.",
      icon: Sparkles
    },
    {
      title: "Long-term Growth",
      description: "Whether it's a single session or ongoing mentorship, I'm invested in your development as a writer and your evolution as a creative voice.",
      icon: Award
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0A1128] via-[#1A237E] to-[#0A1128] text-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A1128]/95 via-[#1A237E]/90 to-[#0A1128]/95"></div>
            <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-[#D4AF37] to-transparent opacity-10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-[#FFD700] to-transparent opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            {/* Floating Icons */}
            <div className="absolute top-1/4 right-1/4 opacity-10 animate-float">
              <BookOpen size={80} className="text-[#FFD700]" />
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-up">
            <div className="text-center space-y-8">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full">
                <p className="text-sm font-bold text-[#0A1128] uppercase tracking-wider">Story Development</p>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight">
                Story Consulting<br />& Mentorship
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto animate-expand"></div>
              
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                I work closely with emerging and established writers—helping them shape stories that are structurally sound, emotionally resonant, and deeply human.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                <div className="p-4 bg-[#1A237E]/50 border border-[#283593] rounded-lg backdrop-blur-sm">
                  <p className="text-2xl font-bold text-[#FFD700]">10+</p>
                  <p className="text-xs text-white/70">Years Mentoring</p>
                </div>
                <div className="p-4 bg-[#1A237E]/50 border border-[#283593] rounded-lg backdrop-blur-sm">
                  <p className="text-2xl font-bold text-[#FFD700]">50+</p>
                  <p className="text-xs text-white/70">Writers Mentored</p>
                </div>
                <div className="p-4 bg-[#1A237E]/50 border border-[#283593] rounded-lg backdrop-blur-sm">
                  <p className="text-2xl font-bold text-[#FFD700]">100%</p>
                  <p className="text-xs text-white/70">Satisfaction Rate</p>
                </div>
                <div className="p-4 bg-[#1A237E]/50 border border-[#283593] rounded-lg backdrop-blur-sm">
                  <p className="text-2xl font-bold text-[#FFD700]">15+</p>
                  <p className="text-xs text-white/70">Publications</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <SectionContainer className="bg-transparent relative overflow-hidden">
          {/* Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="space-y-16 relative z-10">
            <div className="text-center space-y-6 animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">What I Offer</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Tailored consulting services for writers at every stage of their journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="group relative p-8 bg-gradient-to-br from-[#1A237E]/30 to-transparent border border-[#283593] rounded-2xl hover:border-[#D4AF37] hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <div className="space-y-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="text-[#0A1128]" size={32} />
                      </div>
                      
                      <h3 className="text-2xl font-serif font-bold text-white group-hover:text-[#FFD700] transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-white/70 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="pt-4">
                        <Link 
                          href={`/contact?service=${encodeURIComponent(service.title)}`}
                          className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#FFD700] transition-colors font-medium"
                        >
                          Learn More
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </SectionContainer>

        {/* Packages & Pricing */}
        <SectionContainer className="bg-gradient-to-b from-[#1A237E]/20 to-[#0A1128]/20 relative overflow-hidden">
          <div className="space-y-16 relative z-10">
            <div className="text-center space-y-6 animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Packages & Pricing</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Flexible options designed for different needs and budgets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg, index) => {
                const Icon = pkg.icon
                return (
                  <div
                    key={index}
                    className={`group relative h-full ${
                      pkg.featured ? 'lg:scale-105 lg:-translate-y-4' : ''
                    }`}
                    onMouseEnter={() => setSelectedPackage(index)}
                    onMouseLeave={() => setSelectedPackage(null)}
                  >
                    {pkg.featured && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <span className="inline-block px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0A1128] text-sm font-bold rounded-full shadow-lg">
                          MOST POPULAR
                        </span>
                      </div>
                    )}

                    <div className={`relative h-full p-8 rounded-2xl border-2 transition-all duration-500 ${
                      selectedPackage === index || pkg.featured
                        ? 'border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.3)] bg-gradient-to-br from-[#1A237E]/40 to-[#0A1128]/40'
                        : 'border-[#283593] bg-gradient-to-br from-[#1A237E]/20 to-transparent'
                    }`}>
                      <div className="space-y-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="text-[#0A1128]" size={32} />
                        </div>

                        <div>
                          <h3 className="text-xl font-serif font-bold text-white mb-2">{pkg.name}</h3>
                          <p className="text-sm text-white/60">{pkg.description}</p>
                        </div>

                        <div>
                          <p className="text-3xl font-bold text-[#FFD700]">{pkg.price}</p>
                          <p className="text-sm text-white/60">{pkg.duration}</p>
                        </div>

                        <ul className="space-y-4 py-4">
                          {pkg.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-white/80">
                              <CheckCircle size={18} className="text-[#FFD700] flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Link
                          href={`/contact?service=${encodeURIComponent(pkg.name)}`}
                          className={`block text-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                            pkg.featured
                              ? 'bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0A1128] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]'
                              : 'bg-gradient-to-r from-[#1A237E] to-[#283593] text-white hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#FFD700] hover:text-[#0A1128]'
                          }`}
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="text-center pt-8 animate-fade-up">
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Don't see exactly what you need? Each writer's journey is unique—reach out for a custom package tailored to your specific goals.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 text-[#D4AF37] hover:text-[#FFD700] transition-colors font-medium text-lg"
              >
                Request Custom Package
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </SectionContainer>

        {/* Approach */}
        <SectionContainer className="bg-transparent relative overflow-hidden">
          <div className="space-y-16 relative z-10">
            <div className="text-center space-y-6 animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">My Mentorship Approach</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                A collaborative process focused on your growth as a writer and the integrity of your stories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {approachPoints.map((point, index) => {
                const Icon = point.icon
                return (
                  <div 
                    key={index} 
                    className="group relative p-8 bg-gradient-to-br from-[#1A237E]/20 to-transparent border border-[#283593] rounded-2xl hover:border-[#D4AF37] transition-all duration-500 animate-fade-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="space-y-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
                        <Icon className="text-[#0A1128]" size={24} />
                      </div>
                      
                      <h3 className="text-2xl font-serif font-bold text-white group-hover:text-[#FFD700] transition-colors">
                        {point.title}
                      </h3>
                      
                      <p className="text-white/70 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </SectionContainer>

        {/* Testimonials */}
        <SectionContainer className="bg-gradient-to-b from-[#0A1128] to-[#1A237E]/30 relative overflow-hidden">
          {/* Floating Stars */}
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  opacity: Math.random() * 0.2 + 0.1,
                }}
              />
            ))}
          </div>

          <div className="space-y-16 relative z-10">
            <div className="text-center space-y-6 animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Writers' Voices</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Hear from writers who have transformed their work through our collaboration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="group p-8 bg-gradient-to-br from-[#1A237E]/30 to-transparent border border-[#283593] rounded-2xl hover:border-[#D4AF37] transition-all duration-500 animate-fade-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="space-y-6">
                    {/* Rating Stars */}
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} size={20} className="fill-[#FFD700] text-[#FFD700]" />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl text-white/80 leading-relaxed italic">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="pt-4 border-t border-[#283593]">
                      <p className="font-bold text-white">{testimonial.author}</p>
                      <p className="text-sm text-white/60">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-8 animate-fade-up">
              <p className="text-white/70 mb-6">
                Video testimonials and detailed case studies coming soon
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-3 border-2 border-[#D4AF37] text-[#D4AF37] rounded-lg hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#FFD700] hover:text-[#0A1128] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
              >
                Share Your Story
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </SectionContainer>

        {/* Final CTA */}
        <SectionContainer className="bg-gradient-to-br from-[#0A1128] via-[#1A237E]/30 to-[#0A1128] relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center space-y-12 relative z-10 animate-fade-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Ready to Begin Your Journey?</h2>
              <p className="text-xl text-white/70">
                Have questions about the consulting process or which package is right for you? Let's connect and discuss your creative goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0A1128] font-bold text-lg rounded-xl hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300"
              >
                Schedule a Consultation
                <ArrowRight size={22} className="group-hover:translate-x-2 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="mailto:hello@example.com"
                className="group inline-flex items-center gap-3 px-10 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold text-lg rounded-xl hover:bg-[#D4AF37] hover:text-[#0A1128] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
              >
                Email Me Directly
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="p-6 bg-gradient-to-r from-transparent via-[#1A237E]/20 to-transparent border-y border-[#283593]">
              <p className="text-white/70 text-sm">
                Response time: Typically within 24-48 hours • First-time clients receive a complimentary 15-minute discovery call
              </p>
            </div>
          </div>
        </SectionContainer>
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-110 transition-all duration-300 transform ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} className="text-[#0A1128]" />
      </button>

      <style jsx global>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expand {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 6rem;
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .animate-fade-up {
          animation: fade-up 1s ease-out;
        }

        .animate-expand {
          animation: expand 1.5s ease-out;
        }

        .animate-float {
          animation: float 6s infinite ease-in-out;
        }
      `}</style>
    </div>
  )
}