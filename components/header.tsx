"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Book, Film, MessageSquare, User, ChevronDown, Home, ArrowRight } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    
    // Initial check
    handleScroll()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { 
      label: "About", 
      href: "/about",
      icon: User
    },
    { 
      label: "Books", 
      href: "/books",
      icon: Book
    },
    { 
      label: "Films", 
      href: "/films",
      icon: Film
    },
    { 
      label: "Consulting", 
      href: "/consulting",
      icon: MessageSquare
    },
    { 
      label: "Blog", 
      href: "/blog",
      icon: Book
    },
    { 
      label: "Contact", 
      href: "/contact",
      icon: MessageSquare
    },
  ]

  const quickLinks = [
    { label: "Featured Work", href: "/#work" },
    { label: "Services", href: "/#offerings" },
    { label: "Substack", href: "https://sharbariahmed.substack.com", external: true },
  ]

  // Don't render animated dots on server to avoid hydration mismatch
  const renderAnimatedDots = () => {
    if (!isClient) return null
    
    return (
      <>
        <span className="absolute top-2 left-2 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse"></span>
        <span className="absolute top-2 right-2 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse delay-200"></span>
        <span className="absolute bottom-2 left-2 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse delay-400"></span>
        <span className="absolute bottom-2 right-2 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse delay-600"></span>
      </>
    )
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-gradient-to-b from-[#0A1128]/95 to-[#1A237E]/90 backdrop-blur-xl shadow-lg border-b border-[#283593]' 
            : 'bg-gradient-to-b from-[#0A1128]/90 to-transparent backdrop-blur-md border-b border-[#283593]/30'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className="group relative flex items-center gap-3"
              onMouseEnter={() => setActiveDropdown('home')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-all duration-300">
                  <span className="text-2xl font-serif font-bold text-[#0A1128]">SA</span>
                </div>
                <div className="absolute -inset-2 border border-[#D4AF37] rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              
              <div className="hidden lg:block">
                <span className="block text-lg font-serif font-bold text-white group-hover:text-[#FFD700] transition-colors">
                  Sharbari Ahmed
                </span>
                <span className="block text-xs text-white/60 group-hover:text-[#D4AF37] transition-colors">
                  Writer • Filmmaker • Speaker
                </span>
              </div>

              {/* Home Dropdown */}
              {activeDropdown === 'home' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-gradient-to-b from-[#0A1128] to-[#1A237E] border border-[#283593] rounded-xl shadow-2xl py-2 backdrop-blur-xl"
                  onMouseEnter={() => setActiveDropdown('home')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="px-4 py-2 border-b border-[#283593]">
                    <p className="text-xs text-white/60 uppercase tracking-wider">Quick Links</p>
                  </div>
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-[#FFD700] hover:bg-gradient-to-r hover:from-[#1A237E]/50 hover:to-transparent transition-all group"
                      onClick={() => setIsOpen(false)}
                    >
                      <Home size={14} className="text-[#D4AF37] group-hover:text-[#FFD700]" />
                      <span className="text-sm">{link.label}</span>
                      {link.external && (
                        <span className="ml-auto text-xs text-[#D4AF37]">↗</span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-1 items-center">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <div 
                    key={item.href} 
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        activeDropdown === item.label
                          ? 'bg-gradient-to-r from-[#D4AF37]/20 to-[#FFD700]/10 text-[#FFD700]'
                          : 'text-white/80 hover:text-[#FFD700] hover:bg-gradient-to-r hover:from-[#1A237E]/30 hover:to-transparent'
                      }`}
                    >
                      <Icon size={16} className={activeDropdown === item.label ? 'text-[#FFD700]' : 'text-[#D4AF37]'} />
                      <span className="text-sm font-medium">{item.label}</span>
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180 text-[#FFD700]' : 'text-white/40'}`}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.label && (
                      <div 
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[200px] bg-gradient-to-b from-[#0A1128] to-[#1A237E] border border-[#283593] rounded-xl shadow-2xl py-2 backdrop-blur-xl"
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="px-4 py-3 border-b border-[#283593]">
                          <p className="text-xs text-white/60 uppercase tracking-wider">{item.label} Section</p>
                        </div>
                        
                        {/* Dropdown content based on page */}
                        {item.label === 'Books' && (
                          <>
                            <Link 
                              href="/books#work" 
                              className="block px-4 py-3 text-white/80 hover:text-[#FFD700] hover:bg-gradient-to-r hover:from-[#1A237E]/50 hover:to-transparent transition-all"
                            >
                              Featured Collection
                            </Link>
                            <Link 
                              href="/books" 
                              className="block px-4 py-3 text-white/80 hover:text-[#FFD700] hover:bg-gradient-to-r hover:from-[#1A237E]/50 hover:to-transparent transition-all"
                            >
                              All Publications
                            </Link>
                          </>
                        )}
                        
                        {item.label === 'Films' && (
                          <>
                            <Link 
                              href="/films#filmography" 
                              className="block px-4 py-3 text-white/80 hover:text-[#FFD700] hover:bg-gradient-to-r hover:from-[#1A237E]/50 hover:to-transparent transition-all"
                            >
                              Filmography
                            </Link>
                            <Link 
                              href="/films#awards" 
                              className="block px-4 py-3 text-white/80 hover:text-[#FFD700] hover:bg-gradient-to-r hover:from-[#1A237E]/50 hover:to-transparent transition-all"
                            >
                              Awards & Festivals
                            </Link>
                          </>
                        )}
                        
                        {item.label === 'Consulting' && (
                          <>
                            <Link 
                              href="/consulting#services" 
                              className="block px-4 py-3 text-white/80 hover:text-[#FFD700] hover:bg-gradient-to-r hover:from-[#1A237E]/50 hover:to-transparent transition-all"
                            >
                              Services
                            </Link>
                            <Link 
                              href="/consulting#pricing" 
                              className="block px-4 py-3 text-white/80 hover:text-[#FFD700] hover:bg-gradient-to-r hover:from-[#1A237E]/50 hover:to-transparent transition-all"
                            >
                              Packages & Pricing
                            </Link>
                          </>
                        )}
                        
                        {item.label === 'Blog' && (
                          <>
                            <Link 
                              href="https://sharbariahmed.substack.com" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between px-4 py-3 text-white/80 hover:text-[#FFD700] hover:bg-gradient-to-r hover:from-[#1A237E]/50 hover:to-transparent transition-all"
                            >
                              <span>Latest Articles</span>
                              <span className="text-xs text-[#D4AF37]">↗</span>
                            </Link>
                            <Link 
                              href="/blog#topics" 
                              className="block px-4 py-3 text-white/80 hover:text-[#FFD700] hover:bg-gradient-to-r hover:from-[#1A237E]/50 hover:to-transparent transition-all"
                            >
                              Topics Covered
                            </Link>
                          </>
                        )}
                        
                        <div className="px-4 py-3 mt-2 border-t border-[#283593]">
                          <Link 
                            href={item.href} 
                            className="flex items-center gap-2 text-sm text-[#D4AF37] hover:text-[#FFD700] transition-colors"
                          >
                            View All {item.label}
                            <ArrowRight size={12} />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}

              {/* CTA Button */}
              <Link
                href="/contact"
                className="ml-4 px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0A1128] font-bold text-sm rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-12 h-12 bg-gradient-to-br from-[#1A237E] to-[#283593] border border-[#283593] rounded-lg flex items-center justify-center hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all"
            >
              {isOpen ? (
                <X size={24} className="text-[#FFD700]" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
              {/* Conditionally render animated dots only on client */}
              {!isOpen && renderAnimatedDots()}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-[#283593] space-y-2 animate-slide-down">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center gap-3 px-4 py-3 rounded-lg text-white/80 hover:text-[#FFD700] hover:bg-gradient-to-r hover:from-[#1A237E]/30 hover:to-transparent transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon size={18} className="text-[#D4AF37] group-hover:text-[#FFD700]" />
                    <span className="font-medium">{item.label}</span>
                    <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all" />
                  </Link>
                )
              })}

              <div className="pt-4 mt-4 border-t border-[#283593]">
                <p className="px-4 text-xs text-white/60 uppercase tracking-wider mb-2">Quick Links</p>
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between px-4 py-3 text-white/70 hover:text-[#FFD700] hover:bg-gradient-to-r hover:from-[#1A237E]/20 hover:to-transparent rounded-lg transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{link.label}</span>
                    {link.external && (
                      <span className="text-xs text-[#D4AF37]">↗</span>
                    )}
                  </Link>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#0A1128] font-bold rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Add space for fixed header */}
      <div className="h-20"></div>

      <style jsx global>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #0A1128;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #D4AF37, #FFD700);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #FFD700, #D4AF37);
        }
      `}</style>
    </>
  )
}