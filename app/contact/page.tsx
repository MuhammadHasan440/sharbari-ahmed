"use client"

import type React from "react"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionContainer } from "@/components/section-container"
import { Send, Mail, Linkedin, ChevronUp, Clock, MessageSquare, Zap, Globe, ArrowRight } from "lucide-react"

// Create a separate component that uses useSearchParams
function ContactForm() {
  const searchParams = useSearchParams()
  const initialService = searchParams.get("service") || ""
  const initialSubject = searchParams.get("subject") || ""

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: initialService,
    subject: initialSubject,
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to an API route or email service
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", service: "", subject: "", message: "" })
    }, 3000)
  }

  const faqItems = [
    {
      question: "How do I book a consulting session?",
      answer: "Fill out the contact form with details about your project, and I'll get back to you within 2-3 business days. You can also visit the consulting page to view packages and pricing.",
      icon: Clock
    },
    {
      question: "What format are sessions offered in?",
      answer: "Sessions are conducted via video call (Zoom/Google Meet). You can share your manuscript, screenplay, or describe your project, and we'll discuss feedback, structure, and next steps.",
      icon: MessageSquare
    },
    {
      question: "Do you accept film collaboration inquiries?",
      answer: "Yes! I'm open to discussing adaptation projects, original screenplays, and filmmaking collaborations. Please include details about your project in the contact form.",
      icon: Globe
    },
    {
      question: "Are you available for speaking engagements?",
      answer: "I'm interested in speaking at literary festivals, film festivals, universities, and conferences. Get in touch with details about your event.",
      icon: Zap
    },
  ]

  return (
    <>
      {/* Contact Content */}
      <SectionContainer className="bg-transparent relative overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
          {/* Contact Form */}
          <div className="lg:col-span-2 space-y-8">
            {submitted ? (
              <div className="relative p-8 bg-gradient-to-br from-[#1A237E]/30 to-transparent border border-[#D4AF37] rounded-2xl space-y-6 animate-fade-up">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center">
                  <Send className="text-[#0A1128]" size={32} />
                </div>
                
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-serif font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-xl text-white/70">
                    Thank you for reaching out. I'll get back to you within 2-3 business days.
                  </p>
                  <p className="text-white/60">
                    In the meantime, check out my latest work or subscribe to my Substack for updates.
                  </p>
                </div>
                
                <div className="flex justify-center gap-4 pt-4">
                  <Link
                    href="/blog"
                    className="px-6 py-3 bg-gradient-to-r from-[#1A237E] to-[#283593] text-white rounded-lg hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#FFD700] hover:text-[#0A1128] transition-all duration-300"
                  >
                    Read Blog
                  </Link>
                  <Link
                    href="https://sharbariahmed.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-[#0A1128] transition-all duration-300"
                  >
                    Visit Substack
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 animate-fade-up">
                <div className="p-6 bg-gradient-to-br from-[#1A237E]/20 to-transparent border border-[#283593] rounded-xl">
                  <h3 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
                      <Send className="text-[#0A1128]" size={20} />
                    </div>
                    Send a Message
                  </h3>

                  <div className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-[#283593] rounded-lg bg-[#0A1128]/50 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-[#283593] rounded-lg bg-[#0A1128]/50 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Service Type */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2">
                        Type of Inquiry
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#283593] rounded-lg bg-[#0A1128]/50 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                      >
                        <option value="">Select an option</option>
                        <option value="general">General Inquiry</option>
                        <option value="press">Press & Media</option>
                        <option value="consulting">Story Consulting</option>
                        <option value="speaking">Speaking Engagement</option>
                        <option value="collaboration">Creative Collaboration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#283593] rounded-lg bg-[#0A1128]/50 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                        placeholder="What would you like to discuss?"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-[#283593] rounded-lg bg-[#0A1128]/50 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all resize-none"
                        placeholder="Tell me more about your inquiry, project, or question..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0A1128] font-bold text-lg rounded-xl hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300"
                    >
                      Send Message
                      <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8 animate-slide-left">
            <div className="p-8 bg-gradient-to-br from-[#1A237E]/30 to-transparent border border-[#283593] rounded-2xl space-y-6">
              <h3 className="text-xl font-serif font-bold text-white mb-4">Other Ways to Connect</h3>

              <div className="space-y-4">
                <a
                  href="mailto:hello@example.com"
                  className="group flex items-center gap-4 p-4 bg-gradient-to-r from-transparent via-[#1A237E]/20 to-transparent border border-[#283593] rounded-lg hover:border-[#D4AF37] hover:bg-gradient-to-r hover:from-[#D4AF37]/10 hover:to-[#FFD700]/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
                    <Mail className="text-[#0A1128]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Email</p>
                    <p className="font-medium text-white group-hover:text-[#FFD700] transition-colors">hello@example.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-gradient-to-r from-transparent via-[#1A237E]/20 to-transparent border border-[#283593] rounded-lg hover:border-[#D4AF37] hover:bg-gradient-to-r hover:from-[#D4AF37]/10 hover:to-[#FFD700]/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
                    <Linkedin className="text-[#0A1128]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">LinkedIn</p>
                    <p className="font-medium text-white group-hover:text-[#FFD700] transition-colors">@sharbariahmed</p>
                  </div>
                </a>

                <a
                  href="https://sharbariahmed.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-gradient-to-r from-transparent via-[#1A237E]/20 to-transparent border border-[#283593] rounded-lg hover:border-[#D4AF37] hover:bg-gradient-to-r hover:from-[#D4AF37]/10 hover:to-[#FFD700]/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
                    <MessageSquare className="text-[#0A1128]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Substack</p>
                    <p className="font-medium text-white group-hover:text-[#FFD700] transition-colors">Subscribe to Newsletter</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-[#1A237E]/30 to-transparent border border-[#283593] rounded-2xl space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="text-[#D4AF37]" size={20} />
                <h3 className="text-xl font-serif font-bold text-white">Response Time</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                I typically respond to inquiries within 2-3 business days. For urgent matters, please mark your email as priority.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-[#D4AF37]/10 to-[#FFD700]/10 border border-[#D4AF37] rounded-2xl space-y-4">
              <h3 className="text-xl font-serif font-bold text-white">Interested in Consulting?</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Learn more about my story consulting packages, mentorship programs, and creative services.
              </p>
              <Link
                href="/consulting"
                className="group inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#FFD700] transition-colors font-medium"
              >
                View Services
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer className="bg-gradient-to-b from-[#1A237E]/20 to-[#0A1128]/20 relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-12 relative z-10">
          <div className="text-center space-y-6 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Frequently Asked Questions</h2>
            <p className="text-xl text-white/70">Common inquiries about working together</p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const Icon = item.icon
              return (
                <details 
                  key={index} 
                  className="group bg-gradient-to-br from-[#1A237E]/30 to-transparent border border-[#283593] rounded-xl hover:border-[#D4AF37] transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-[#0A1128]" size={18} />
                      </div>
                      <h3 className="text-lg font-bold text-white group-open:text-[#FFD700] transition-colors">
                        {item.question}
                      </h3>
                    </div>
                    <span className="text-2xl font-bold text-white group-open:rotate-45 transition-transform flex-shrink-0">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 ml-14">
                    <p className="text-white/70 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </details>
              )
            })}
          </div>
        </div>
      </SectionContainer>

      {/* Quote Section */}
      <SectionContainer className="bg-gradient-to-br from-[#0A1128] via-[#1A237E]/30 to-[#0A1128] relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full animate-float"
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 23) % 100}%`,
                animationDelay: `${(i * 0.4) % 4}s`,
                opacity: 0.1 + ((i * 0.02) % 0.2),
              }}
            />
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10 animate-fade-up">
          <div className="p-8 border-l-4 border-[#D4AF37] bg-gradient-to-r from-transparent via-[#1A237E]/20 to-transparent">
            <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed">
              "Stories remind us who we are—and who we might yet become. I look forward to hearing yours."
            </p>
          </div>
          <p className="text-white/60">— Sharbari Ahmed</p>
        </div>
      </SectionContainer>
    </>
  )
}

// Main page component
export default function ContactPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

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
            {isClient && (
              <div className="absolute top-1/4 right-1/4 opacity-5 animate-float">
                <Mail size={80} className="text-[#FFD700]" />
              </div>
            )}
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-up">
            <div className="text-center space-y-8">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full">
                <p className="text-sm font-bold text-[#0A1128] uppercase tracking-wider">Get in Touch</p>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight">
                Let's<br />Connect
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto animate-expand"></div>
              
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                For press, speaking, consulting, or general inquiries, feel free to reach out. I'm always interested in meaningful conversations about storytelling and creative work.
              </p>
            </div>
          </div>
        </section>

        {/* Wrap the contact form in Suspense */}
        <Suspense fallback={
          <SectionContainer className="bg-transparent">
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D4AF37]"></div>
            </div>
          </SectionContainer>
        }>
          <ContactForm />
        </Suspense>
      </main>

      <Footer />

      {/* Scroll to Top Button - Only render on client */}
      {isClient && showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-110 transition-all duration-300 transform opacity-0 animate-fade-in"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} className="text-[#0A1128]" />
        </button>
      )}

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

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        .animate-slide-left {
          animation: slide-left 1s ease-out;
        }

        .animate-expand {
          animation: expand 1.5s ease-out;
        }

        .animate-float {
          animation: float 6s infinite ease-in-out;
        }

        /* FAQ Open/Close Animation */
        details[open] summary ~ * {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}