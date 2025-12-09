"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionContainer } from "@/components/section-container"
import { ArrowRight, BookOpen, Star, ChevronUp, ExternalLink } from "lucide-react"

export default function BooksPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)

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

  const books = [
    {
      title: "The Strangest of Fruit",
      subtitle: "A Collection of Stories",
      description:
        "A powerful collection centered on migration, war, womanhood, and the haunting afterlives of history. These stories explore the fractures between cultures—and the fragile bonds that hold us together.",
      year: "2013",
      awards: ["Lambda Literary Award Finalist", "Asian American Literary Award Nominee"],
      links: [
        { name: "ThriftBooks", url: "#" },
        { name: "Amazon", url: "#" },
        { name: "Barnes & Noble", url: "#" },
        { name: "Amazon (short link)", url: "#" },
      ],
    },
    {
      title: "The Ocean of Mrs. Nagai",
      subtitle: "A Novel",
      description:
        "A story of war, love, and unexpected tenderness—set in the aftermath of the 1971 Bangladesh Liberation War. Exploring themes of memory, loss, and reconciliation.",
      year: "2008",
      awards: ["Notable Book of the Year", "Featured in NYT Book Review"],
      links: [{ name: "Amazon eBook", url: "#" }],
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
            <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#D4AF37] to-transparent opacity-10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tr from-[#FFD700] to-transparent opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            {/* Floating Books */}
            <div className="absolute top-1/4 right-1/4 opacity-10 animate-float">
              <BookOpen size={80} className="text-[#FFD700]" />
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-up">
            <div className="text-center space-y-8">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full">
                <p className="text-sm font-bold text-[#0A1128] uppercase tracking-wider">Literary Works</p>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight">
                My Books
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto animate-expand"></div>
              
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                Stories that explore the fractures between cultures, the weight of history, and the resilience of the human spirit.
              </p>
            </div>
          </div>
        </section>

        {/* Books Grid */}
        <SectionContainer className="bg-transparent relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="space-y-24 relative z-10">
            {books.map((book, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-3 gap-8 lg:gap-12 items-start animate-slide-${index % 2 === 0 ? 'right' : 'left'}`}
              >
                {/* Book Cover Placeholder */}
                <div className="lg:col-span-1 relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative aspect-[3/4] bg-gradient-to-br from-[#0A1128] via-[#1A237E] to-[#283593] rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center">
                      <div className="space-y-6">
                        <div className="inline-block px-4 py-2 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-full">
                          <p className="text-sm font-medium text-[#D4AF37]">{book.year}</p>
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-white leading-tight">{book.title}</h3>
                        <p className="text-[#D4AF37]">{book.subtitle}</p>
                        
                        {/* Stars */}
                        <div className="flex justify-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} size={16} className="fill-[#FFD700] text-[#FFD700]" />
                          ))}
                        </div>
                        
                        {/* Awards */}
                        <div className="pt-4 space-y-2">
                          {book.awards.map((award, i) => (
                            <div key={i} className="text-xs text-white/60 border-t border-white/10 pt-2">
                              {award}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Corner Accents */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]"></div>
                    <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#FFD700]"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37]"></div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#FFD700]"></div>
                  </div>
                </div>

                {/* Book Content */}
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{book.title}</h2>
                    <p className="text-xl text-[#D4AF37] mb-6">{book.subtitle}</p>
                    
                    <p className="text-lg text-white/80 leading-relaxed mb-8 font-light bg-gradient-to-r from-transparent via-[#1A237E]/20 to-transparent p-6 rounded-lg">
                      {book.description}
                    </p>
                  </div>

                  {/* Purchase Links */}
                  <div className="space-y-4">
                    <p className="text-[#D4AF37] font-medium">Available from:</p>
                    <div className="flex flex-wrap gap-3">
                      {book.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1A237E] to-[#283593] border border-[#283593] text-white rounded-lg hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#FFD700] hover:text-[#0A1128] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:border-[#FFD700] transition-all duration-300"
                        >
                          <span>{link.name}</span>
                          <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Quotes Section */}
                  {index === 0 && (
                    <div className="pt-8 border-t border-[#283593]">
                      <div className="p-6 bg-gradient-to-br from-[#1A237E]/30 to-transparent border border-[#283593] rounded-xl">
                        <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                          <Star size={16} className="text-[#FFD700]" />
                          Praise for The Strangest of Fruit
                        </h4>
                        <blockquote className="text-white/70 italic border-l-2 border-[#D4AF37] pl-4">
                          "A remarkable debut collection... Ahmed writes with both precision and poetic grace about the complexities of identity and belonging."
                        </blockquote>
                        <p className="text-sm text-white/50 mt-2">— Publishers Weekly</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>

        {/* Additional Works */}
        <SectionContainer className="bg-gradient-to-b from-[#1A237E]/20 to-[#0A1128]/20 relative overflow-hidden">
          <div className="text-center space-y-12 relative z-10">
            <div className="animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Other Publications</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Featured stories and essays in literary journals and anthologies
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 animate-fade-up delay-200">
              {[
                {
                  title: "Birds of Bengal",
                  venue: "The Massachusetts Review",
                  year: "2015"
                },
                {
                  title: "The Distance Between Two Points",
                  venue: "Granta Magazine",
                  year: "2018"
                },
                {
                  title: "Monsoon Letters",
                  venue: "The Paris Review",
                  year: "2020"
                }
              ].map((pub, i) => (
                <div 
                  key={i} 
                  className="group p-6 bg-gradient-to-br from-[#1A237E]/30 to-transparent border border-[#283593] rounded-xl hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-300"
                >
                  <div className="text-left space-y-4">
                    <div className="flex justify-between items-start">
                      <h4 className="text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors">
                        {pub.title}
                      </h4>
                      <span className="text-sm text-[#D4AF37]">{pub.year}</span>
                    </div>
                    <p className="text-white/70">{pub.venue}</p>
                    <Link 
                      href="#" 
                      className="inline-flex items-center gap-2 text-sm text-[#D4AF37] hover:text-[#FFD700] transition-colors"
                    >
                      Read Excerpt
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>

        {/* CTA Section */}
        <SectionContainer className="bg-gradient-to-br from-[#0A1128] via-[#1A237E]/30 to-[#0A1128] relative overflow-hidden">
          {/* Floating Elements */}
          <div className="absolute inset-0">
            {Array.from({ length: 15 }).map((_, i) => (
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

          <div className="text-center space-y-8 relative z-10 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Explore My Stories</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Each book is a journey through identity, history, and human connection. 
              Dive into worlds where culture, conflict, and love intersect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0A1128] font-bold text-lg rounded-xl hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300"
              >
                Get in Touch
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/press"
                className="group inline-flex items-center gap-3 px-10 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold text-lg rounded-xl hover:bg-[#D4AF37] hover:text-[#0A1128] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
              >
                Press & Reviews
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
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

        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
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

        .animate-slide-right {
          animation: slide-right 1s ease-out;
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

        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  )
}