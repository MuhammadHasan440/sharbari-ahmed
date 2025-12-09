"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionContainer } from "@/components/section-container"
import { ArrowRight, BookOpen, PenTool, Globe, Compass, Film, Sparkles, Calendar, ChevronUp, ExternalLink } from "lucide-react"

export default function BlogPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [hoveredArticle, setHoveredArticle] = useState<number | null>(null)

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

  const blogTopics = [
    {
      title: "On Migration & Identity",
      category: "Essay",
      date: "December 2023",
      excerpt: "Reflections on displacement, belonging, and the stories we carry across borders.",
      readTime: "8 min read",
      icon: Globe,
      color: "from-[#D4AF37] to-[#FFD700]"
    },
    {
      title: "Writing & Faith",
      category: "Essay",
      date: "November 2023",
      excerpt: "How spirituality shapes the act of creation and what it means to write from a place of belief.",
      readTime: "10 min read",
      icon: PenTool,
      color: "from-[#1A237E] to-[#283593]"
    },
    {
      title: "Diasporic Longing",
      category: "Essay",
      date: "October 2023",
      excerpt: "Exploring the complex emotions of living between two worlds and the art of capturing that feeling.",
      readTime: "12 min read",
      icon: Compass,
      color: "from-[#D4AF37] to-[#FFD700]"
    },
    {
      title: "Creativity & Identity",
      category: "Craft",
      date: "September 2023",
      excerpt: "The intersection of personal heritage and artistic expression in storytelling.",
      readTime: "6 min read",
      icon: Sparkles,
      color: "from-[#1A237E] to-[#283593]"
    },
  ]

  const topics = [
    { title: "Writing & Craft", icon: "✍️", description: "Techniques, process, and philosophy of writing" },
    { title: "Identity & Heritage", icon: "🌍", description: "Exploring cultural roots and personal history" },
    { title: "Diasporic Longing", icon: "🧭", description: "Stories of displacement and finding home" },
    { title: "Faith & Spirituality", icon: "🕌", description: "The role of belief in creative work" },
    { title: "Filmmaking & Art", icon: "🎬", description: "Visual storytelling and cinematic craft" },
    { title: "Creativity & Life", icon: "💫", description: "The intersection of art and daily living" },
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
            <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-[#D4AF37] to-transparent opacity-10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-tr from-[#FFD700] to-transparent opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            {/* Floating Pens */}
            <div className="absolute top-1/3 left-10 opacity-5 animate-float">
              <PenTool size={60} className="text-[#FFD700]" />
            </div>
            <div className="absolute bottom-1/3 right-10 opacity-5 animate-float delay-2000">
              <BookOpen size={60} className="text-[#FFD700]" />
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-up">
            <div className="text-center space-y-8">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full">
                <p className="text-sm font-bold text-[#0A1128] uppercase tracking-wider">Essays & Reflections</p>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight">
                Notes from<br />the In-Between
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto animate-expand"></div>
              
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                Reflections on writing, identity, film, faith, creativity, and diasporic life.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 max-w-md mx-auto">
                <div className="p-4 bg-[#1A237E]/50 border border-[#283593] rounded-lg backdrop-blur-sm">
                  <p className="text-2xl font-bold text-[#FFD700]">50+</p>
                  <p className="text-xs text-white/70">Essays Published</p>
                </div>
                <div className="p-4 bg-[#1A237E]/50 border border-[#283593] rounded-lg backdrop-blur-sm">
                  <p className="text-2xl font-bold text-[#FFD700]">5k+</p>
                  <p className="text-xs text-white/70">Readers</p>
                </div>
                <div className="p-4 bg-[#1A237E]/50 border border-[#283593] rounded-lg backdrop-blur-sm">
                  <p className="text-2xl font-bold text-[#FFD700]">100%</p>
                  <p className="text-xs text-white/70">Free Content</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <SectionContainer className="bg-transparent relative overflow-hidden">
          {/* Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(to right, #D4AF37 1px, transparent 1px),
                               linear-gradient(to bottom, #D4AF37 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="space-y-16 relative z-10">
            <div className="text-center space-y-6 animate-fade-up">
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
                  <BookOpen className="text-[#0A1128]" size={24} />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Featured Essays</h2>
              </div>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Read full essays and articles on my Substack newsletter
              </p>
            </div>

            <div className="space-y-8">
              {blogTopics.map((article, index) => {
                const Icon = article.icon
                return (
                  <article
                    key={index}
                    className={`relative group overflow-hidden rounded-2xl border border-[#283593] hover:border-[#D4AF37] transition-all duration-500 ${
                      hoveredArticle === index ? 'scale-[1.02] shadow-[0_0_50px_rgba(212,175,55,0.2)]' : ''
                    }`}
                    onMouseEnter={() => setHoveredArticle(index)}
                    onMouseLeave={() => setHoveredArticle(null)}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${article.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <div className="relative p-8 grid md:grid-cols-3 gap-8 items-center">
                      {/* Article Icon */}
                      <div className="flex items-center justify-center">
                        <div className={`relative w-24 h-24 bg-gradient-to-br ${article.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500`}>
                          <Icon className="text-[#0A1128]" size={40} />
                        </div>
                      </div>

                      {/* Article Content */}
                      <div className="md:col-span-2 space-y-4">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="px-3 py-1 bg-gradient-to-r from-[#1A237E] to-[#283593] text-white text-sm rounded-full font-medium">
                            {article.category}
                          </span>
                          <div className="flex items-center gap-2 text-white/60 text-sm">
                            <Calendar size={14} />
                            <span>{article.date}</span>
                          </div>
                          <div className="text-sm text-[#FFD700]">
                            {article.readTime}
                          </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white group-hover:text-[#FFD700] transition-colors">
                          {article.title}
                        </h3>

                        <p className="text-lg text-white/80 leading-relaxed">
                          {article.excerpt}
                        </p>

                        <div className="pt-4 flex items-center justify-between">
                          <Link
                            href="https://sharbariahmed.substack.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#FFD700] transition-colors font-medium"
                          >
                            Read Full Essay
                            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                          </Link>
                          <ExternalLink size={16} className="text-white/40 group-hover:text-[#FFD700] transition-colors" />
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="text-center pt-8 animate-fade-up">
              <Link
                href="https://sharbariahmed.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0A1128] font-bold text-lg rounded-xl hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300"
              >
                Visit Substack Archive
                <ArrowRight size={22} className="group-hover:translate-x-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </SectionContainer>

        {/* Newsletter Signup */}
        <SectionContainer className="bg-gradient-to-b from-[#1A237E]/20 to-[#0A1128]/20 relative overflow-hidden">
          {/* Animated Border */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-shimmer"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent animate-shimmer delay-500"></div>
          </div>

          <div className="max-w-2xl mx-auto text-center space-y-12 relative z-10 animate-fade-up">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-2xl flex items-center justify-center">
              <BookOpen className="text-[#0A1128]" size={48} />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Subscribe to My Newsletter</h2>
              <p className="text-xl text-white/70 leading-relaxed">
                Get essays about writing, identity, film, faith, creativity, and diasporic life. Join a community of
                writers and storytelling enthusiasts.
              </p>
            </div>

            <div className="space-y-6">
              <Link
                href="https://sharbariahmed.substack.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0A1128] font-bold text-lg rounded-xl hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300"
              >
                Subscribe Now
                <ArrowRight size={22} className="group-hover:translate-x-2 group-hover:scale-110 transition-transform" />
              </Link>
              
              <div className="p-4 bg-gradient-to-r from-transparent via-[#1A237E]/20 to-transparent rounded-lg border border-[#283593]">
                <p className="text-sm text-white/60">New essays published regularly • Free content always • Unsubscribe anytime</p>
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* Topics Covered */}
        <SectionContainer className="bg-transparent relative overflow-hidden">
          <div className="space-y-16 relative z-10">
            <div className="text-center space-y-6 animate-fade-up">
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
                  <PenTool className="text-[#0A1128]" size={24} />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Topics I Explore</h2>
              </div>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                A wide range of subjects at the intersection of creativity, culture, and identity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic, index) => (
                <div 
                  key={index} 
                  className="group relative p-8 bg-gradient-to-br from-[#1A237E]/20 to-transparent border border-[#283593] rounded-2xl hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-500 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">{topic.icon}</span>
                      <div className="w-2 h-2 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors">
                      {topic.title}
                    </h3>
                    
                    <p className="text-white/70 text-sm">
                      {topic.description}
                    </p>
                    
                    <div className="pt-2">
                      <Link 
                        href="https://sharbariahmed.substack.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#D4AF37] hover:text-[#FFD700] transition-colors text-sm font-medium"
                      >
                        Read essays
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>

        {/* Archive CTA */}
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

          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 animate-fade-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Explore the Archive</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Years of writing on culture, creativity, and the human experience. All essays are free to read.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="p-6 bg-gradient-to-br from-[#1A237E]/20 to-transparent border border-[#283593] rounded-xl">
                <h3 className="text-lg font-bold text-white mb-2">Latest Essays</h3>
                <p className="text-white/60 text-sm">Most recent reflections and insights</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-[#1A237E]/20 to-transparent border border-[#283593] rounded-xl">
                <h3 className="text-lg font-bold text-white mb-2">Popular Series</h3>
                <p className="text-white/60 text-sm">Multi-part essays and themed collections</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-[#1A237E]/20 to-transparent border border-[#283593] rounded-xl">
                <h3 className="text-lg font-bold text-white mb-2">Writer's Notes</h3>
                <p className="text-white/60 text-sm">Behind-the-scenes of the creative process</p>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="https://sharbariahmed.substack.com/archive"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold text-lg rounded-xl hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#FFD700] hover:text-[#0A1128] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
              >
                Browse Full Archive
                <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
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

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
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

        .animate-shimmer {
          animation: shimmer 3s infinite linear;
        }
      `}</style>
    </div>
  )
}