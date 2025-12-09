"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ExternalLink, Mail, Twitter, Instagram, Linkedin, BookOpen, Film, MessageSquare, ArrowRight, PenTool, Heart } from "lucide-react"

export function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [floatingElements, setFloatingElements] = useState<Array<{left: string, top: string, delay: string, opacity: number}>>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Generate floating elements on client side only
    const elements = Array.from({ length: 8 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.1 + 0.05,
    }))
    setFloatingElements(elements)
  }, [])

  const exploreLinks = [
    { label: "About", href: "/about", icon: null },
    { label: "Books", href: "/books", icon: BookOpen },
    { label: "Films", href: "/films", icon: Film },
    { label: "Consulting", href: "/consulting", icon: MessageSquare },
    { label: "Blog", href: "/blog", icon: PenTool },
    { label: "Contact", href: "/contact", icon: Mail },
  ]

  const socialLinks = [
    { label: "Substack", href: "https://sharbariahmed.substack.com", icon: BookOpen, color: "#FF6719" },
    { label: "Instagram", href: "https://instagram.com", icon: Instagram, color: "#E4405F" },
    { label: "Twitter", href: "https://twitter.com", icon: Twitter, color: "#1DA1F2" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin, color: "#0A66C2" },
  ]

  const quickLinks = [
    { label: "TEDx Talk", href: "/about#tedx" },
    { label: "Press Features", href: "/press" },
    { label: "Awards", href: "/films#awards" },
    { label: "Events", href: "/about#events" },
  ]

  // Don't render floating elements on server
  const renderFloatingElements = () => {
    if (!isClient) return null
    
    return (
      <>
        {floatingElements.map((element, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full animate-float"
            style={{
              left: element.left,
              top: element.top,
              animationDelay: element.delay,
              opacity: element.opacity,
            }}
          />
        ))}
      </>
    )
  }

  return (
    <>
      <footer className="relative bg-gradient-to-t from-[#0A1128] via-[#1A237E] to-[#0A1128] border-t border-[#283593] mt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-20"></div>
        
        {/* Floating Elements - Client-side only */}
        <div className="absolute inset-0">
          {renderFloatingElements()}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Branding */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-xl font-serif font-bold text-[#0A1128]">SA</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-white">Sharbari Ahmed</h3>
                  <p className="text-sm text-white/60">Writer • Filmmaker • Speaker</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Challenging inherited narratives through storytelling that crosses borders and illuminates identity.
              </p>
              
              {/* Newsletter CTA */}
              <div className="pt-4">
                <a
                  href="https://sharbariahmed.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#FFD700] transition-colors text-sm font-medium"
                >
                  <BookOpen size={14} />
                  Subscribe to Newsletter
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Explore Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-serif font-bold text-white flex items-center gap-2">
                <Heart size={16} className="text-[#D4AF37]" />
                Explore
              </h4>
              <ul className="space-y-3">
                {exploreLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-3 text-white/70 hover:text-[#FFD700] transition-colors"
                        onMouseEnter={() => setHoveredLink(link.href)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        {Icon && (
                          <Icon size={14} className="text-[#D4AF37] group-hover:text-[#FFD700] transition-colors" />
                        )}
                        <span className="relative">
                          {link.label}
                          <span 
                            className={`absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-[#D4AF37] to-[#FFD700] transition-all duration-300 ${
                              hoveredLink === link.href ? 'w-full' : 'w-0'
                            }`}
                          ></span>
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-serif font-bold text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between text-white/70 hover:text-[#FFD700] transition-colors"
                    >
                      <span>{link.label}</span>
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all text-[#D4AF37]" />
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Email Contact */}
              <div className="pt-4">
                <a
                  href="mailto:hello@example.com"
                  className="group inline-flex items-center gap-2 text-white/70 hover:text-[#FFD700] transition-colors"
                >
                  <Mail size={14} className="text-[#D4AF37]" />
                  <span>hello@example.com</span>
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-serif font-bold text-white">Connect</h4>
              <p className="text-white/70 text-sm">
                Follow for updates, essays, and behind-the-scenes storytelling.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                      onMouseEnter={() => setHoveredLink(link.href)}
                      onMouseLeave={() => setHoveredLink(null)}
                      aria-label={link.label}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        hoveredLink === link.href
                          ? 'bg-white shadow-lg scale-110'
                          : 'bg-gradient-to-br from-[#1A237E] to-[#283593] border border-[#283593]'
                      }`}>
                        <Icon 
                          size={18} 
                          className={`transition-colors ${
                            hoveredLink === link.href 
                              ? 'text-[#0A1128]' 
                              : 'text-white/80'
                          }`} 
                          style={{ color: hoveredLink === link.href ? link.color : undefined }}
                        />
                      </div>
                      
                      {/* Tooltip */}
                      {hoveredLink === link.href && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#0A1128] border border-[#283593] rounded text-xs text-white whitespace-nowrap">
                          {link.label}
                        </div>
                      )}
                    </a>
                  )
                })}
              </div>
              
              {/* Back to Top */}
              <div className="pt-4">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="group inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#FFD700] transition-colors"
                >
                  <ArrowRight size={14} className="rotate-90 group-hover:-translate-y-1 transition-transform" />
                  Back to top
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#283593] to-transparent my-8"></div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm">
                &copy; {new Date().getFullYear()} Sharbari Ahmed. All rights reserved.
              </p>
              <p className="text-white/40 text-xs mt-1">
                Stories that illuminate the spaces between culture, history, and identity.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-white/50 hover:text-white/80 transition-colors text-xs">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/50 hover:text-white/80 transition-colors text-xs">
                Terms of Service
              </Link>
              <span className="text-white/30 text-xs">•</span>
              <span className="text-white/40 text-xs">
                Made with <Heart size={10} className="inline text-[#D4AF37]" /> for storytelling
              </span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }

        .animate-float {
          animation: float 6s infinite ease-in-out;
        }
      `}</style>
    </>
  )
}