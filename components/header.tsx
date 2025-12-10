"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Book, Film, MessageSquare, User, ChevronDown, Home, ArrowRight } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
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

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <>
        <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#0A1128]/90 to-transparent backdrop-blur-md border-b border-[#283593]/30 h-24">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex justify-between items-center h-full">
              <div className="relative flex items-center h-full">
                {/* Logo placeholder during mount */}
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-transparent flex items-center justify-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-xl"></div>
                  </div>
                </div>
              </div>
              <div className="w-12 h-12"></div>
            </div>
          </nav>
        </header>
        <div className="h-24"></div>
      </>
    )
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-24 ${
          isScrolled 
            ? 'bg-gradient-to-b from-[#0A1128]/95 to-[#1A237E]/90 backdrop-blur-xl shadow-lg border-b border-[#283593]' 
            : 'bg-gradient-to-b from-[#0A1128]/90 to-transparent backdrop-blur-md border-b border-[#283593]/30'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo - Visible on all screen sizes */}
            <div
              className="group relative flex items-center"
              onMouseEnter={() => setActiveDropdown('home')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/">
                <div className="relative flex items-center gap-3 cursor-pointer group">
                  {/* Logo container - visible on mobile AND desktop */}
                  
                  
                  {/* Text next to logo - hidden on mobile, visible on large screens */}
               
                    <div className="flex flex-col">
                     <div className=" w-full h-full flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                    {/* Logo image - responsive sizing */}
                    <img 
                      src="/images/logo.png" 
                      alt="Sharbari Ahmed Logo" 
                      className="w-50 h-30 object-contain"
                      onError={(e) => {
                        // Fallback if image doesn't load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.className = 'w-full h-full flex items-center justify-center bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-xl';
                        fallback.innerHTML = '<span class="text-xl font-serif font-bold text-[#0A1128]">SA</span>';
                        target.parentNode?.insertBefore(fallback, target);
                      }}
                    />
                  </div>
                    </div>
                  </div>
               
              </Link>

              {/* Home Dropdown */}
              {activeDropdown === 'home' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-gradient-to-b from-[#0A1128] to-[#1A237E] border border-[#283593] rounded-xl shadow-2xl py-2 backdrop-blur-xl z-50"
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
                      {link.external && <span className="ml-auto text-xs text-[#D4AF37]">↗</span>}
                    </Link>
                  ))}
                </div>
              )}
            </div>

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
                      data-active={activeDropdown === item.label}
                      className="group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 text-white/80 hover:text-[#FFD700] hover:bg-gradient-to-r hover:from-[#1A237E]/30 hover:to-transparent data-[active=true]:bg-gradient-to-r data-[active=true]:from-[#D4AF37]/20 data-[active=true]:to-[#FFD700]/10 data-[active=true]:text-[#FFD700]"
                    >
                      <Icon 
                        size={16} 
                        data-active={activeDropdown === item.label}
                        className="text-[#D4AF37] data-[active=true]:text-[#FFD700]" 
                      />
                      <span className="text-sm font-medium">{item.label}</span>
                      <ChevronDown 
                        size={14}
                        data-active={activeDropdown === item.label}
                        className="transition-transform duration-300 text-white/40 data-[active=true]:rotate-180 data-[active=true]:text-[#FFD700]" 
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.label && (
                      <div 
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[200px] bg-gradient-to-b from-[#0A1128] to-[#1A237E] border border-[#283593] rounded-xl shadow-2xl py-2 backdrop-blur-xl z-50"
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="px-4 py-3 border-b border-[#283593]">
                          <p className="text-xs text-white/60 uppercase tracking-wider">{item.label} Section</p>
                        </div>
                        {/* You can add dropdown items for each section here if needed */}
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
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X size={24} className="text-[#FFD700]" />
              ) : (
                <>
                  <Menu size={24} className="text-white" />
                  <span className="absolute top-2 left-2 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse"></span>
                  <span className="absolute top-2 right-2 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse delay-200"></span>
                  <span className="absolute bottom-2 left-2 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse delay-400"></span>
                  <span className="absolute bottom-2 right-2 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse delay-600"></span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-[#0A1128] to-[#1A237E] border-t border-[#283593] space-y-2 animate-slide-down py-4 px-4 shadow-xl z-40">
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
                    {link.external && <span className="text-xs text-[#D4AF37]">↗</span>}
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
      <div className="h-24"></div>

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