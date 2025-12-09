"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionContainer } from "@/components/section-container"
import { ArrowRight, Book, Film, Users, ChevronUp } from "lucide-react"

export default function HomePage() {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Predefined star positions to avoid hydration mismatch
  const starPositions = Array.from({ length: 50 }).map((_, i) => ({
    left: (i * 3.7) % 100, // Deterministic calculation
    top: (i * 2.1) % 100, // Deterministic calculation
    delay: (i * 0.1) % 5, // Deterministic calculation
    opacity: 0.1 + ((i * 0.02) % 0.5) // Deterministic calculation
  }))

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0A1128] via-[#1A237E] to-[#0A1128] text-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-screen md:h-[700px] flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A1128] via-[#1A237E] to-[#0A1128] opacity-95"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#D4AF37] to-transparent opacity-10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#D4AF37] to-transparent opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          {/* Animated Stars - Only render on client */}
          {isClient && (
            <div className="absolute inset-0">
              {starPositions.map((star, i) => (
                <div
                  key={i}
                  className="absolute w-[1px] h-[1px] bg-white rounded-full animate-twinkle"
                  style={{
                    left: `${star.left}%`,
                    top: `${star.top}%`,
                    animationDelay: `${star.delay}s`,
                    opacity: star.opacity,
                  }}
                />
              ))}
            </div>
          )}

          {/* Hero Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
            <p className="text-lg md:text-xl text-[#D4AF37] font-medium mb-6 tracking-wider uppercase animate-slide-down">
              Writer. Filmmaker. Speaker
            </p>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 animate-slide-up">
              Sharbari Ahmed
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto mb-8 animate-expand"></div>

            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-6 font-light tracking-wide">
              Author • Filmmaker • Screenwriting Mentor
            </p>

            <p className="text-2xl md:text-3xl text-white/85 max-w-3xl mx-auto mb-12 font-light leading-relaxed animate-fade-in delay-300">
              Stories that cross borders, reclaim narrative power, and illuminate the spaces between culture, history,
              and identity.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap animate-fade-up delay-500">
              <button
                onClick={() => scrollToSection("work")}
                className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0A1128] font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-105 transition-all duration-300 transform"
              >
                Read My Work
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("offerings")}
                className="group inline-flex items-center gap-3 px-10 py-4 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37] hover:text-[#0A1128] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:scale-105 transition-all duration-300 transform"
              >
                View My Films
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <Link
                href="/consulting"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#1A237E] to-[#283593] text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(26,35,126,0.5)] hover:scale-105 transition-all duration-300 transform"
              >
                Get Story Consulting
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#D4AF37] rounded-full mt-2 animate-scroll"></div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <SectionContainer id="about-intro" className="bg-transparent">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-transparent opacity-20 blur rounded-lg"></div>
              <h2 className="relative text-5xl md:text-6xl font-serif font-bold text-white mb-8">
                About Sharbari
              </h2>
            </div>
            
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                Sharbari Ahmed is a Bangladeshi-American writer, filmmaker, and educator whose work explores the politics
                of identity, belonging, and the myths we inherit. Her stories move between continents, genres, and
                histories—often grounded in South Asian and Muslim experiences, but universal in emotional truth.
              </p>
              
              <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto"></div>
              
              <p className="text-lg md:text-xl text-white/70 italic">
                "Her fiction and screenwriting work has appeared across acclaimed publications, film festivals, television
                productions, and literary circles worldwide."
              </p>
            </div>
          </div>
        </SectionContainer>

        {/* Featured Book Section */}
        <SectionContainer id="work" className="bg-gradient-to-b from-[#1A237E]/30 to-[#0A1128]/30 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="space-y-16 relative z-10">
            <div className="text-center space-y-6 animate-fade-up">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-white">
                Featured Work
              </h2>
              <p className="text-xl text-[#D4AF37] font-medium">The Strangest of Fruit — A Collection of Stories</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Animated Book Cover */}
              <div className="relative group animate-slide-left">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative aspect-[9/12] bg-gradient-to-br from-[#0A1128] via-[#1A237E] to-[#283593] rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center">
                    <div className="space-y-6">
                      <div className="inline-block px-4 py-2 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-full">
                        <p className="text-sm font-medium text-[#D4AF37]">Featured Collection</p>
                      </div>
                      <h3 className="text-4xl font-serif font-bold text-white mb-2">The Strangest of Fruit</h3>
                      <p className="text-[#D4AF37] text-lg">Stories</p>
                      <div className="flex justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div key={star} className="text-[#FFD700]">★</div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Book Info */}
              <div className="space-y-8 animate-slide-right">
                <div>
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                    The Strangest of Fruit
                  </h3>
                  <p className="text-xl text-white/80 leading-relaxed mb-8">
                    A haunting, vibrant collection that examines migration, womanhood, love, war, and the
                    borders—literal and emotional—that define us.
                  </p>

                  <div className="mb-8">
                    <p className="text-sm text-[#D4AF37] mb-4 uppercase tracking-wider">Available from:</p>
                    <div className="flex flex-wrap gap-4">
                      {['Amazon', 'Barnes & Noble', 'ThriftBooks'].map((store) => (
                        <Link
                          key={store}
                          href="#"
                          className="group px-6 py-3 bg-[#1A237E] border border-[#283593] rounded-lg hover:bg-[#283593] hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 flex items-center gap-3"
                        >
                          <span className="text-white group-hover:text-[#D4AF37] transition-colors">{store}</span>
                          <ArrowRight size={16} className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href="/books" 
                    className="group inline-flex items-center gap-3 text-[#D4AF37] hover:text-[#FFD700] transition-colors duration-300 font-semibold text-lg"
                  >
                    Explore My Books
                    <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* What I Offer Section */}
        <SectionContainer id="offerings" className="bg-gradient-to-b from-[#0A1128] to-[#1A237E] relative overflow-hidden">
          {/* Animated Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#D4AF37]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-l from-[#FFD700]/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="space-y-16 relative z-10">
            <div className="text-center space-y-6 animate-fade-up">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-white">
                What I Offer
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Creative services and storytelling expertise across multiple disciplines
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Writing */}
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#1A237E]/50 to-[#0A1128]/50 border border-[#283593] hover:border-[#D4AF37] hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] transition-all duration-500 transform hover:-translate-y-2 animate-fade-up">
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
                  <Book className="text-[#0A1128]" size={24} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-4">My Work</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Fiction and screenwriting that challenges narratives and explores cultural identity across continents.
                </p>
                <Link href="/books" className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold group-hover:text-[#FFD700] transition-colors">
                  Explore
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>

              {/* Filmmaking */}
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#1A237E]/50 to-[#0A1128]/50 border border-[#283593] hover:border-[#D4AF37] hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] transition-all duration-500 transform hover:-translate-y-2 animate-fade-up delay-200">
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
                  <Film className="text-[#0A1128]" size={24} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-4">Cinema</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  From short films to award-nominated adaptations, blending lyrical storytelling with character-driven narratives.
                </p>
                <Link href="/films" className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold group-hover:text-[#FFD700] transition-colors">
                  View Films
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>

              {/* Consulting */}
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#1A237E]/50 to-[#0A1128]/50 border border-[#283593] hover:border-[#D4AF37] hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] transition-all duration-500 transform hover:-translate-y-2 animate-fade-up delay-400">
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
                  <Users className="text-[#0A1128]" size={24} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-4">Story Consulting</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Screenwriting coaching, fiction mentorship, story structure, and developmental editing for writers.
                </p>
                <Link href="/consulting" className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold group-hover:text-[#FFD700] transition-colors">
                  Learn More
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* Blog Preview */}
        <SectionContainer id="blog-preview" className="bg-gradient-to-br from-[#0A1128] via-[#1A237E] to-[#0A1128] relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-shimmer"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent animate-shimmer delay-1000"></div>
          </div>

          <div className="space-y-12 text-center relative z-10 animate-fade-up">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
                Read My Latest Thoughts
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
                Critical essays, personal reflections, and behind-the-scenes looks at the creative life.
              </p>
            </div>

            <Link
              href="https://sharbariahmed.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 px-12 py-5 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0A1128] font-bold text-lg rounded-xl hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300 transform"
            >
              Visit My Substack
              <ArrowRight size={22} className="group-hover:translate-x-3 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </SectionContainer>
      </main>

      <Footer />

      {/* Scroll to Top Button - Only render when needed */}
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

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(10px);
            opacity: 0;
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

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 1s ease-out;
        }

        .animate-slide-left {
          animation: slide-left 1s ease-out;
        }

        .animate-slide-right {
          animation: slide-right 1s ease-out;
        }

        .animate-expand {
          animation: expand 1.5s ease-out;
        }

        .animate-twinkle {
          animation: twinkle 5s infinite;
        }

        .animate-scroll {
          animation: scroll 2s infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s infinite linear;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  )
}