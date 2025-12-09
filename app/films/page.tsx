"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionContainer } from "@/components/section-container"
import { Film, ExternalLink, Play, Award, Calendar, Globe, Camera, Clapperboard, Star, ChevronUp, Users, ArrowRight } from "lucide-react"

export default function FilmsPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [hoveredFilm, setHoveredFilm] = useState<number | null>(null)

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

  const filmography = [
    {
      title: "Short Film",
      type: "Short Film",
      description: "Stills, synopsis, festival notes.",
      status: "In Production",
      link: "#",
      platform: "Available for Festival",
      year: "2024",
      color: "from-[#D4AF37] to-[#FFD700]"
    },
    {
      title: "Feature Adaptation",
      year: "2024",
      type: "Feature Film",
      description:
        "A film adaptation written by Sharbari, now streaming on Amazon. A powerful narrative exploring displacement, resilience, and the human spirit.",
      status: "Streaming",
      link: "https://www.amazon.com/",
      platform: "Amazon Prime Video",
      color: "from-[#1A237E] to-[#283593]"
    },
    {
      title: "Literary Adaptation",
      year: "2023",
      type: "Feature",
      description:
        "Available on Amazon Prime Video and select streaming platforms. A feature-length adaptation bringing literary fiction to the screen.",
      status: "Streaming",
      link: "https://www.amazon.com/",
      platform: "Amazon Prime Video",
      color: "from-[#D4AF37] to-[#FFD700]"
    },
    {
      title: "Documentary Series",
      year: "2023",
      type: "Series (3 Episodes)",
      description:
        "An intimate documentary series exploring storytelling, cultural heritage, and the creative process. Behind-the-scenes and personal narrative.",
      status: "In Festival Circuit",
      link: "#",
      platform: "Festival Submissions",
      color: "from-[#1A237E] to-[#283593]"
    },
    {
      title: "Short Film",
      year: "2022",
      type: "Short (12 min)",
      description:
        "An experimental narrative exploring memory and diaspora through visual metaphor. Selected for multiple international film festivals.",
      status: "Festival Award Winner",
      link: "#",
      platform: "Festival Circuit",
      color: "from-[#D4AF37] to-[#FFD700]"
    },
  ]

  const gallery = [
    { title: "Film Still 1", type: "still", category: "Cinematography" },
    { title: "Film Still 2", type: "still", category: "Visual Storytelling" },
    { title: "Production Shot", type: "bts", category: "Behind the Scenes" },
    { title: "Film Still 3", type: "still", category: "Art Direction" },
    { title: "Behind the Scenes", type: "bts", category: "Production" },
    { title: "Poster Art", type: "promo", category: "Marketing" },
  ]

  const festivals = [
    { name: "International Film Festival", year: "2023", location: "Cannes, FR" },
    { name: "Documentary Festival Selection", year: "2023", location: "Sundance, US" },
    { name: "Asian American Film Festival", year: "2022", location: "Los Angeles, US" },
    { name: "Emerging Filmmakers Program", year: "2022", location: "Toronto, CA" },
  ]

  const awards = [
    { name: "Best Short Film", festival: "Festival X", year: "2023" },
    { name: "Director's Award", festival: "Festival Y", year: "2022" },
    { name: "Audience Choice", festival: "Documentary Festival", year: "2023" },
    { name: "Emerging Artist Fellowship", festival: "Arts Council", year: "2022" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0A1128] via-[#1A237E] to-[#0A1128] text-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Animated Film Reel Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A1128]/95 via-[#1A237E]/90 to-[#0A1128]/95"></div>
            <div className="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-br from-[#D4AF37] to-transparent opacity-10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 -right-32 w-96 h-96 bg-gradient-to-tr from-[#FFD700] to-transparent opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            {/* Film Reel Animation */}
            <div className="absolute top-1/4 right-1/4 opacity-10 animate-spin-slow">
              <Film size={120} className="text-[#FFD700]" />
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-up">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left Column - Title */}
              <div className="lg:w-2/5 space-y-8">
                <div className="relative inline-block">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37] to-transparent opacity-20 blur rounded-lg"></div>
                  <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
                    Films Rooted<br />in Humanity
                  </h1>
                </div>
                
                <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] animate-expand"></div>
                
                <p className="text-xl text-white/90 leading-relaxed font-light">
                  Sharbari's filmmaking practice blends poetic visual language with emotionally charged narratives. Her work
                  explores displacement, diasporic longing, and the resilience of women's inner lives.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="p-4 bg-[#1A237E]/50 border border-[#283593] rounded-lg backdrop-blur-sm">
                    <p className="text-2xl font-bold text-[#FFD700]">5+</p>
                    <p className="text-xs text-white/70">Films Produced</p>
                  </div>
                  <div className="p-4 bg-[#1A237E]/50 border border-[#283593] rounded-lg backdrop-blur-sm">
                    <p className="text-2xl font-bold text-[#FFD700]">15+</p>
                    <p className="text-xs text-white/70">Festival Selections</p>
                  </div>
                  <div className="p-4 bg-[#1A237E]/50 border border-[#283593] rounded-lg backdrop-blur-sm">
                    <p className="text-2xl font-bold text-[#FFD700]">4</p>
                    <p className="text-xs text-white/70">Awards Won</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Video Placeholder */}
              <div className="lg:w-3/5 relative group animate-slide-left">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                <div className="relative aspect-video bg-gradient-to-br from-[#0A1128] via-[#1A237E] to-[#283593] rounded-xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <div className="relative z-10 space-y-6 text-center">
                      <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#FFD700]/20 border-2 border-[#D4AF37]/30 flex items-center justify-center">
                        <Play className="text-[#D4AF37] ml-2" size={48} />
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-[#D4AF37] tracking-wider">FILM REEL</p>
                        <p className="text-white/70">Featured film preview coming soon</p>
                      </div>
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFD700] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <Play className="text-[#0A1128] ml-2" size={32} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Director's Statement */}
        <SectionContainer className="bg-transparent relative overflow-hidden">
          {/* Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(45deg, #D4AF37 25%, transparent 25%),
                                linear-gradient(-45deg, #D4AF37 25%, transparent 25%),
                                linear-gradient(45deg, transparent 75%, #D4AF37 75%),
                                linear-gradient(-45deg, transparent 75%, #D4AF37 75%)`,
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
            }}></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-12 relative z-10">
            <div className="text-center space-y-6 animate-fade-up">
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
                  <Camera className="text-[#0A1128]" size={24} />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Director's Statement</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 animate-fade-up delay-200">
              <div className="p-6 bg-gradient-to-br from-[#1A237E]/30 to-transparent border border-[#283593] rounded-xl">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                    Visual Authenticity
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    As a director and filmmaker, I'm committed to bringing literary narratives and original stories to
                    the screen with visual authenticity and emotional depth.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-[#1A237E]/30 to-transparent border border-[#283593] rounded-xl">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                    Cultural Memory
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    My work explores the intersection of personal identity, cultural memory, and the universal human experience.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-[#1A237E]/30 to-transparent border border-[#283593] rounded-xl">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                    Marginalized Voices
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    I believe cinema is a powerful medium for challenging stereotypes and centering marginalized voices.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-r from-transparent via-[#1A237E]/20 to-transparent border-y border-[#283593] animate-fade-up delay-400">
              <p className="text-xl text-white/80 leading-relaxed text-center font-light">
                Whether adapting existing stories or developing original screenplays, my approach prioritizes nuance,
                representation, and the emotional truth at the heart of each narrative.
              </p>
            </div>
          </div>
        </SectionContainer>

        {/* Featured Projects */}
        <SectionContainer className="bg-gradient-to-b from-[#1A237E]/20 to-[#0A1128]/20 relative overflow-hidden">
          <div className="space-y-16 relative z-10">
            <div className="text-center space-y-6 animate-fade-up">
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
                  <Clapperboard className="text-[#0A1128]" size={24} />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Filmography</h2>
              </div>
              <p className="text-xl text-white/70">Notable works and recent projects</p>
            </div>

            <div className="space-y-8">
              {filmography.map((film, index) => (
                <div
                  key={index}
                  className={`relative group overflow-hidden rounded-2xl border border-[#283593] hover:border-[#D4AF37] transition-all duration-500 ${
                    hoveredFilm === index ? 'scale-[1.02] shadow-[0_0_50px_rgba(212,175,55,0.2)]' : ''
                  }`}
                  onMouseEnter={() => setHoveredFilm(index)}
                  onMouseLeave={() => setHoveredFilm(null)}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${film.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative p-8 grid md:grid-cols-4 gap-8 items-center">
                    {/* Film Number */}
                    <div className="flex items-center justify-center">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#1A237E] to-[#283593] rounded-full flex items-center justify-center border-2 border-[#283593] group-hover:border-[#D4AF37] transition-colors">
                          <span className="text-2xl font-bold text-white">{index + 1}</span>
                        </div>
                        <div className="absolute -inset-2 border border-[#D4AF37] rounded-full opacity-0 group-hover:opacity-50 transition-opacity"></div>
                      </div>
                    </div>

                    {/* Film Info */}
                    <div className="md:col-span-3 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white group-hover:text-[#FFD700] transition-colors">
                            {film.title}
                          </h3>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="px-3 py-1 bg-gradient-to-r from-[#1A237E] to-[#283593] text-white text-sm rounded-full font-medium">
                              {film.type}
                            </span>
                            <span className="px-3 py-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0A1128] text-sm rounded-full font-medium">
                              {film.year}
                            </span>
                          </div>
                        </div>
                        <span className="text-lg font-bold text-[#FFD700]">{film.status}</span>
                      </div>

                      <p className="text-white/80 leading-relaxed">{film.description}</p>

                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center gap-2 text-white/60">
                          <Globe size={16} />
                          <span>{film.platform}</span>
                        </div>
                        {film.link !== "#" && (
                          <Link
                            href={film.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#FFD700] transition-colors font-medium"
                          >
                            <Play size={16} />
                            Watch Now
                            <ExternalLink size={14} />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>

        {/* Gallery & Behind the Scenes */}
        <SectionContainer className="bg-transparent relative overflow-hidden">
          <div className="space-y-16 relative z-10">
            <div className="text-center space-y-6 animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Visual Gallery</h2>
              <p className="text-xl text-white/70">Behind the scenes & production stills</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((item, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] bg-gradient-to-br from-[#1A237E] to-[#283593] rounded-xl overflow-hidden hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-500 transform hover:scale-105"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Film className="text-white/20 group-hover:text-[#D4AF37]/40 transition-colors" size={64} />
                  </div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="space-y-2">
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full">
                        <p className="text-xs font-bold text-[#0A1128]">{item.category}</p>
                      </div>
                      <p className="text-white text-lg font-medium">{item.title}</p>
                    </div>
                  </div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>

            <div className="text-center pt-8 animate-fade-up">
              <Link
                href="/contact?subject=Film%20Assets"
                className="group inline-flex items-center gap-3 px-8 py-3 border-2 border-[#D4AF37] text-[#D4AF37] rounded-lg hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#FFD700] hover:text-[#0A1128] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
              >
                Request Film Assets
                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </SectionContainer>

        {/* Awards & Festivals */}
        <SectionContainer className="bg-gradient-to-b from-[#0A1128] to-[#1A237E]/30 relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            {/* Festivals */}
            <div className="space-y-8 animate-slide-right">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
                  <Calendar className="text-[#0A1128]" size={24} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-white">Festival Selections</h3>
              </div>
              
              <div className="space-y-4">
                {festivals.map((festival, index) => (
                  <div 
                    key={index} 
                    className="group p-4 bg-gradient-to-r from-transparent via-[#1A237E]/20 to-transparent border border-[#283593] rounded-lg hover:border-[#D4AF37] transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-[#FFD700] transition-colors">
                          {festival.name}
                        </h4>
                        <p className="text-white/60 text-sm">{festival.location}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[#FFD700] font-bold">{festival.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="space-y-8 animate-slide-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
                  <Award className="text-[#0A1128]" size={24} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-white">Awards & Honors</h3>
              </div>
              
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div 
                    key={index} 
                    className="group p-4 bg-gradient-to-r from-transparent via-[#1A237E]/20 to-transparent border border-[#283593] rounded-lg hover:border-[#D4AF37] transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <Star className="text-[#FFD700] flex-shrink-0 mt-1" size={16} />
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white group-hover:text-[#FFD700] transition-colors">
                          {award.name}
                        </h4>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-white/60 text-sm">{award.festival}</p>
                          <span className="text-[#FFD700] font-bold">{award.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* Creative Team */}
        <SectionContainer className="bg-gradient-to-br from-[#0A1128] via-[#1A237E]/30 to-[#0A1128] relative overflow-hidden">
          {/* Floating Elements */}
          <div className="absolute inset-0">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  opacity: Math.random() * 0.2 + 0.1,
                }}
              />
            ))}
          </div>

          <div className="max-w-4xl mx-auto space-y-12 text-center relative z-10 animate-fade-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Creative Collaborations</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                I work with talented cinematographers, producers, sound designers, and editors to bring stories to life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-gradient-to-br from-[#1A237E]/40 to-transparent border border-[#283593] rounded-2xl hover:border-[#D4AF37] transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
                    <Users className="text-[#0A1128]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Services Available</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Film production consultation</li>
                    <li>• Story development for screen</li>
                    <li>• Directing and cinematography guidance</li>
                    <li>• Post-production collaboration</li>
                  </ul>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#1A237E]/40 to-transparent border border-[#283593] rounded-2xl hover:border-[#D4AF37] transition-all duration-300">
                <div className="space-y-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
                    <Film className="text-[#0A1128]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
                  <p className="text-white/70">
                    Interested in collaboration, festival submissions, or licensing inquiries?
                  </p>
                  <Link
                    href="/contact?subject=Film%20Collaboration"
                    className="group inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#FFD700] transition-colors font-medium text-lg"
                  >
                    Start a Conversation
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
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
            width: 5rem;
            opacity: 1;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
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

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-float {
          animation: float 6s infinite ease-in-out;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  )
}