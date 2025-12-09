"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionContainer } from "@/components/section-container"
import { ArrowRight, ChevronUp, BookOpen, Film, Mic, GraduationCap, Globe, Heart, Play, Pause, Volume2, VolumeX } from "lucide-react"


// Import your author image - update the path to your actual image
import authorImage from "@/public/images/author.jpeg" // Change this to your image path

export default function AboutPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [floatingElements, setFloatingElements] = useState<Array<{ left: string, top: string, delay: string, opacity: number }>>([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isMuted, setIsMuted] = useState(true) // Start muted for autoplay
  const [volume, setVolume] = useState(0.7)
  const [isClient, setIsClient] = useState(false)
  const [showControls, setShowControls] = useState(true)

  const videoRef = useRef<HTMLVideoElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const controlsTimeoutRef = useRef<NodeJS.Timeout>(null)

  useEffect(() => {
    setIsClient(true)

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    // Generate floating elements on client side only
    const elements = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.3 + 0.1,
    }))
    setFloatingElements(elements)

    window.addEventListener("scroll", handleScroll)

    // Initialize video controls
    const video = videoRef.current
    if (video) {
      const handleTimeUpdate = () => setCurrentTime(video.currentTime)
      const handleLoadedMetadata = () => setDuration(video.duration)

      video.addEventListener('timeupdate', handleTimeUpdate)
      video.addEventListener('loadedmetadata', handleLoadedMetadata)

      // Try to autoplay (muted)
      video.muted = true
      video.play().catch(() => {
        // Autoplay blocked, keep paused
        setIsPlaying(false)
      })

      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate)
        video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current)
      }
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const tedxLink = "https://www.ted.com/talks/sharbari_ahmed_between_the_kabah_sharif_and_a_hard_place?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare"

  const togglePlay = () => {
    const video = videoRef.current
    if (video) {
      if (video.paused) {
        video.play()
        setIsPlaying(true)
      } else {
        video.pause()
        setIsPlaying(false)
      }
    }
    showControlsTemporarily()
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (video) {
      video.muted = !video.muted
      setIsMuted(video.muted)
      if (!video.muted) {
        setVolume(video.volume)
      }
    }
    showControlsTemporarily()
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    const video = videoRef.current
    if (video) {
      video.volume = newVolume
      video.muted = newVolume === 0
      setIsMuted(newVolume === 0)
      setVolume(newVolume)
    }
    showControlsTemporarily()
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = progressBarRef.current
    const video = videoRef.current
    if (progressBar && video) {
      const rect = progressBar.getBoundingClientRect()
      const percent = (e.clientX - rect.left) / rect.width
      video.currentTime = percent * duration
      setCurrentTime(video.currentTime)
    }
    showControlsTemporarily()
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0

  const showControlsTemporarily = () => {
    setShowControls(true)
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false)
      }
    }, 3000)
  }

  const handleVideoClick = () => {
    if (!showControls) {
      showControlsTemporarily()
    } else {
      togglePlay()
    }
  }

  // Don't render video controls on server to avoid hydration mismatch
  if (!isClient) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0A1128] via-[#1A237E] to-[#0A1128] text-white">
        <Header />
        <main className="flex-1">
          <div className="h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFD700] animate-pulse"></div>
              <p className="mt-4 text-white/70">Loading...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
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
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-[#D4AF37] to-transparent opacity-10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-tr from-[#FFD700] to-transparent opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(to right, #D4AF37 1px, transparent 1px),
                                 linear-gradient(to bottom, #D4AF37 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-up">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left Column - Title */}
              <div className="lg:w-2/5 space-y-6">
                <div className="relative inline-block">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37] to-transparent opacity-20 blur rounded-lg"></div>
                  <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
                    My<br />Journey
                  </h1>
                </div>

                <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] animate-expand"></div>

                <p className="text-xl text-white/90 leading-relaxed">
                  A writer, filmmaker, and educator shaped by the legacies and contradictions of migration.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 bg-[#1A237E]/50 border border-[#283593] rounded-lg backdrop-blur-sm">
                    <p className="text-3xl font-bold text-[#FFD700]">15+</p>
                    <p className="text-sm text-white/70">Years Writing</p>
                  </div>
                  <div className="p-4 bg-[#1A237E]/50 border border-[#283593] rounded-lg backdrop-blur-sm">
                    <p className="text-3xl font-bold text-[#FFD700]">50+</p>
                    <p className="text-sm text-white/70">Stories Told</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Author Picture */}
              <div className="lg:w-3/5 relative group animate-slide-left">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>

                <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                  {/* Author Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={authorImage}
                      alt="Sharbari Ahmed - Author, Filmmaker, Educator"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>

                  {/* Author Signature */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full border border-[#D4AF37]/30">
                    <p className="text-[#D4AF37] font-serif text-lg tracking-wider">Sharbari Ahmed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Author Bio Section */}
        <SectionContainer className="bg-gradient-to-b from-[#1A237E]/20 to-transparent relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up delay-300">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/10 to-[#FFD700]/10 rounded-full blur-lg"></div>
              <h2 className="relative text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                About the Author
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Author Bio Text */}
              <div className="space-y-6 text-left">
                <div className="p-6 bg-gradient-to-br from-[#1A237E]/30 to-transparent border border-[#283593] rounded-xl">
                  <h3 className="text-2xl font-bold text-[#FFD700] mb-4">Writer & Storyteller</h3>
                  <p className="text-white/80 leading-relaxed">
                    Sharbari Ahmed is an award-winning writer and filmmaker whose work explores the intersections of
                    South Asian history, diasporic identity, faith, and storytelling traditions. Her narratives
                    challenge stereotypes and center voices often marginalized in contemporary literature.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-[#0A1128]/30 to-transparent border border-[#283593] rounded-xl">
                  <h3 className="text-2xl font-bold text-[#FFD700] mb-4">Creative Vision</h3>
                  <p className="text-white/80 leading-relaxed">
                    With a background spanning television writing, independent filmmaking, and literary fiction,
                    Sharbari brings a unique cinematic sensibility to her prose, creating vivid, emotionally resonant
                    stories that linger long after the final page.
                  </p>
                </div>
              </div>

              {/* Author Details */}
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-[#1A237E]/40 to-[#0A1128]/40 border border-[#283593] rounded-xl backdrop-blur-sm">
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Heart className="text-[#D4AF37]" size={20} />
                    Writing Philosophy
                  </h4>
                  <blockquote className="text-xl font-serif italic text-white/90 border-l-4 border-[#D4AF37] pl-4 py-2">
                    "I write to understand the world, and in doing so, help others understand themselves."
                  </blockquote>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-[#1A237E]/30 to-transparent border border-[#283593] rounded-lg">
                    <p className="text-2xl font-bold text-[#FFD700]">2</p>
                    <p className="text-sm text-white/70">Published Books</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#1A237E]/30 to-transparent border border-[#283593] rounded-lg">
                    <p className="text-2xl font-bold text-[#FFD700]">25+</p>
                    <p className="text-sm text-white/70">Short Stories</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#1A237E]/30 to-transparent border border-[#283593] rounded-lg">
                    <p className="text-2xl font-bold text-[#FFD700]">10+</p>
                    <p className="text-sm text-white/70">Film Projects</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-[#1A237E]/30 to-transparent border border-[#283593] rounded-lg">
                    <p className="text-2xl font-bold text-[#FFD700]">50+</p>
                    <p className="text-sm text-white/70">Students Mentored</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* Main Content */}
        <SectionContainer className="bg-transparent relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
            {/* Left Column - Navigation & Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8 animate-fade-up">
                {/* Author Photo Card */}
                <div className="relative group overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] via-[#FFD700] to-[#D4AF37] opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative p-6 bg-[#0A1128]/80 backdrop-blur-sm border border-[#283593] rounded-xl">
                    <div className="aspect-square mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={authorImage}
                        alt="Sharbari Ahmed"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-white mb-1">Sharbari Ahmed</h4>
                      <p className="text-sm text-[#D4AF37]">Writer • Filmmaker • Educator</p>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="p-6 bg-gradient-to-br from-[#1A237E]/40 to-[#0A1128]/40 border border-[#283593] rounded-xl backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <BookOpen size={20} className="text-[#D4AF37]" />
                    Quick Links
                  </h3>
                  <ul className="space-y-3">
                    {['Who I Am', 'Literary & Cinematic Life', 'Education & Mentorship', 'TEDx Talk'].map((item) => (
                      <li key={item}>
                        <a
                          href={`#${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                          className="text-white/70 hover:text-[#D4AF37] transition-colors flex items-center gap-2 group"
                        >
                          <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#FFD700]" />
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Core Values */}
                <div className="p-6 bg-gradient-to-br from-[#1A237E]/40 to-[#0A1128]/40 border border-[#283593] rounded-xl backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Heart size={20} className="text-[#D4AF37]" />
                    Core Values
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Authentic Representation',
                      'Cultural Preservation',
                      'Radical Empathy',
                      'Narrative Sovereignty'
                    ].map((value) => (
                      <li key={value} className="text-white/70 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"></div>
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Story */}
            <div className="lg:col-span-3 space-y-16">
              {/* Who I Am */}
              <div id="who-i-am" className="space-y-6 animate-slide-right">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
                    <Globe className="text-[#0A1128]" size={24} />
                  </div>
                  <h2 className="text-4xl font-serif font-bold text-white">Who I Am</h2>
                </div>

                <div className="space-y-6">
                  <p className="text-xl text-white/80 leading-relaxed font-light bg-gradient-to-r from-transparent via-[#1A237E]/20 to-transparent p-6 rounded-lg border-l-4 border-[#D4AF37]">
                    I am a writer, filmmaker, and educator shaped by the legacies and contradictions of migration. Born in
                    Bangladesh and raised across multiple worlds, my creative work sits at the intersection of South Asian
                    history, diasporic identity, faith, gender, and storytelling traditions.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 bg-gradient-to-br from-[#1A237E]/30 to-transparent border border-[#283593] rounded-xl">
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                        Creative Philosophy
                      </h4>
                      <p className="text-white/70">
                        I believe in the power of narrative as a radical act—an act of reclaiming, reframing, and resisting.
                      </p>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-[#0A1128]/30 to-transparent border border-[#283593] rounded-xl">
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
                        Mission
                      </h4>
                      <p className="text-white/70">
                        To illuminate the spaces between cultures, histories, and identities through authentic storytelling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* A Literary & Cinematic Life */}
              <div id="literary-cinematic-life" className="space-y-6 animate-slide-right delay-200">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
                    <Film className="text-[#0A1128]" size={24} />
                  </div>
                  <h2 className="text-4xl font-serif font-bold text-white">A Literary & Cinematic Life</h2>
                </div>

                <div className="space-y-6">
                  <p className="text-xl text-white/80 leading-relaxed">
                    My short story collection <em className="text-[#FFD700] not-italic">The Strangest of Fruit</em> has been praised by celebrated writers for
                    its sharp emotional intelligence and fearless engagement with history. My previous book,{" "}
                    <em className="text-[#FFD700] not-italic">The Ocean of Mrs. Nagai</em>, explores the aftermath of war and the tenderness that emerges from
                    rupture.
                  </p>

                  <div className="relative p-8 bg-gradient-to-r from-[#1A237E]/20 to-[#0A1128]/20 border border-[#283593] rounded-xl mt-8 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent rounded-full blur-xl"></div>
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded flex items-center justify-center">
                        <Mic size={12} className="text-[#0A1128]" />
                      </div>
                      Television Writing
                    </h4>
                    <p className="text-white/70">
                      As a TV writer, I have contributed to acclaimed projects and worked across rooms that value
                      complexity, representation, and character-driven storytelling.
                    </p>
                  </div>
                </div>
              </div>

              {/* Educator, Mentor, Guide */}
              <div id="education-mentorship" className="space-y-6 animate-slide-right delay-400">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
                    <GraduationCap className="text-[#0A1128]" size={24} />
                  </div>
                  <h2 className="text-4xl font-serif font-bold text-white">Educator, Mentor, Guide</h2>
                </div>

                <div className="space-y-6">
                  <p className="text-xl text-white/80 leading-relaxed bg-gradient-to-r from-transparent via-[#1A237E]/20 to-transparent p-6 rounded-lg">
                    For years, I've mentored emerging writers—fiction and screenwriters alike—helping them shape their
                    stories with clarity, structure, and emotional depth. My students have gone on to publish books,
                    produce films, and enter top MFA programs.
                  </p>

                  <div className="p-6 bg-gradient-to-br from-[#0A1128] via-[#1A237E]/30 to-[#0A1128] border border-[#283593] rounded-xl mt-8">
                    <blockquote className="text-2xl font-serif italic text-center text-white/90 p-8">
                      "I teach not just craft, but courage."
                    </blockquote>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto mt-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* TEDx Talk Section */}
        <SectionContainer id="tedx" className="bg-gradient-to-b from-[#1A237E]/20 to-[#0A1128]/20 relative overflow-hidden">
          {/* Animated Border */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-shimmer"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent animate-shimmer delay-500"></div>
          </div>

          <div className="space-y-12 relative z-10">
            <div className="text-center space-y-6 animate-fade-up">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full">
                <p className="text-sm font-bold text-[#0A1128] uppercase tracking-wider">TEDx Talk</p>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-white max-w-4xl mx-auto">
                Between the Kabah Sharif and a Hard Place
              </h2>
              <p className="text-xl text-white/70">Exploring identity, spirituality, and inherited stories</p>
            </div>

           {/* YouTube-like Video Player - Now with YouTube Embed */}
<div className="relative group animate-slide-up">
  <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
  
  <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
    {/* YouTube Embed */}
    <div className="relative w-full h-full">
      <iframe
        src="https://www.youtube.com/embed/qfyHTmv5JRk?si=Sfu6FeOUqzSLez_s"
        title="YouTube video player - Between the Kabah Sharif and a Hard Place"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-full"
      />
      
      {/* Video Title */}
      <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full">
        <p className="text-xs text-white/90 font-medium">TEDx Talk</p>
      </div>
    </div>
  </div>
</div>

            {/* Talk Description */}
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up delay-300">
              <p className="text-xl text-white/80 leading-relaxed">
                In this deeply personal talk, I explore the spaces between faith and doubt, tradition and modernity,
                heritage and individuality—sharing stories that challenge assumptions about identity and belonging.
              </p>
              <Link
                href={tedxLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#FFD700] transition-colors font-medium text-sm"
              >
                Watch the full talk on TED.com
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </SectionContainer>



        {/* Call to Action */}
        <SectionContainer className="bg-gradient-to-br from-[#0A1128] via-[#1A237E]/30 to-[#0A1128] relative overflow-hidden">
          {/* Floating Elements */}
          <div className="absolute inset-0">
            {floatingElements.map((element, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full animate-float"
                style={{
                  left: element.left,
                  top: element.top,
                  animationDelay: element.delay,
                  opacity: element.opacity,
                }}
              />
            ))}
          </div>

          <div className="text-center space-y-8 relative z-10 animate-fade-up">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white">Let's Work Together</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Whether you're interested in consulting, collaboration, or learning more about my work, I'd love to
              connect.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 px-12 py-5 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0A1128] font-bold text-lg rounded-xl hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300 transform"
            >
              Get in Touch
              <ArrowRight size={22} className="group-hover:translate-x-3 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </SectionContainer>
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-110 transition-all duration-300 transform ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
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

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
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

        .animate-slide-up {
          animation: slide-up 1s ease-out;
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

        .animate-shimmer {
          animation: shimmer 3s infinite linear;
        }

        .animate-float {
          animation: float 6s infinite ease-in-out;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        /* Custom range input styling */
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
          cursor: pointer;
        }

        input[type="range"]::-webkit-slider-track {
          background: rgba(255, 255, 255, 0.2);
          height: 4px;
          border-radius: 2px;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          height: 16px;
          width: 16px;
          background: #D4AF37;
          border-radius: 50%;
          border: 2px solid white;
          margin-top: -6px;
        }

        input[type="range"]::-moz-range-track {
          background: rgba(255, 255, 255, 0.2);
          height: 4px;
          border-radius: 2px;
        }

        input[type="range"]::-moz-range-thumb {
          height: 16px;
          width: 16px;
          background: #D4AF37;
          border-radius: 50%;
          border: 2px solid white;
        }

        /* Touch-friendly video controls */
        @media (max-width: 768px) {
          video {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            user-select: none;
          }
          
          .video-controls button {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </div>
  )
}