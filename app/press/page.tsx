"use client"

import Link from "next/link"
import { Star } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionContainer } from "@/components/section-container"
import { useEffect, useState } from "react"

export default function PressPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const praise = [
    {
      text: "A stunning exploration of identity and belonging. Ahmed's stories challenge what we think we know about culture and heritage.",
      author: "Acclaimed Author",
      title: "Literary Review",
    },
    {
      text: "The Strangest of Fruit is a masterwork of contemporary fiction. Raw, honest, and profoundly moving.",
      author: "Book Critic",
      title: "The Literary Magazine",
    },
    {
      text: "Sharbari Ahmed has crafted stories that linger long after you finish reading them. Essential work.",
      author: "Independent Reviewer",
      title: "Cultural Perspectives",
    },
    {
      text: "These stories refuse to be contained by category or expectation. They are bold, beautiful, and necessary.",
      author: "Press Mention",
      title: "Contemporary Fiction Review",
    },
  ]

  const pressItems = [
    {
      title: "The Strangest of Fruit Featured in National Literary Coverage",
      publication: "Literary Journal",
      date: "2024",
      excerpt: "New collection brings fresh voices to American fiction...",
      link: "#",
    },
    {
      title: "Filmmaker & Writer Sharbari Ahmed Discusses Storytelling & Culture",
      publication: "Arts Magazine",
      date: "2024",
      excerpt: "Ahmed discusses her approach to challenging narratives through both page and screen...",
      link: "#",
    },
    {
      title: "Behind the Scenes: From Television to Independent Filmmaking",
      publication: "Variety",
      date: "2023",
      excerpt: "An exclusive interview about creative independence and authentic representation...",
      link: "#",
    },
    {
      title: "Emerging Voices in Contemporary Literary Fiction",
      publication: "Publishers Weekly",
      date: "2023",
      excerpt: "Ahmed joins a roster of authors reshaping the literary landscape...",
      link: "#",
    },
    {
      title: "TEDx Speaker Challenges Inherited Narratives",
      publication: "Speaking Circuit News",
      date: "2023",
      excerpt: "A powerful talk about identity, storytelling, and authoring new narratives...",
      link: "#",
    },
  ]

  const bookLinks = [
    { title: "Amazon", url: "https://www.amazon.com/Strangest-Fruit-Collected-Stories/dp/B0FRW1688Q" },
    {
      title: "Barnes & Noble",
      url: "https://www.barnesandnoble.com/w/the-strangest-of-fruit-sharbari-ahmed/1148333148",
    },
    { title: "ThriftBooks", url: "https://www.thriftbooks.com/w/the-strangest-of-fruit-collected-stories/56953199/" },
  ]

  return (
    <>
      <style jsx global>{`
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
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
      
      <div className="min-h-screen flex flex-col bg-[#0A0F29] text-white">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0A0F29] via-[#1A1F3C] to-[#0A0F29] overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#D4AF37]/10 to-transparent rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-l from-[#1E40AF]/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 bg-gradient-to-r from-[#D4AF37] via-[#F5D042] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
                Press & Recognition
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl animate-slide-up">
                Reviews, press coverage, and praise for my work as a writer, filmmaker, and speaker.
              </p>
            </div>

            {isClient && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-[#D4AF37] rounded-full mt-2 animate-pulse"></div>
                </div>
              </div>
            )}
          </section>

          {/* Praise Section */}
          <SectionContainer id="praise" className="bg-[#0A0F29]">
            <div className="space-y-12">
              <div className="text-center space-y-4 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">What Readers & Critics Say</h2>
                <p className="text-lg text-gray-400">Praise for The Strangest of Fruit & My Work</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {praise.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 bg-[#1A1F3C] rounded-lg border border-gray-800 hover:border-[#D4AF37] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#D4AF37]/10 animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="fill-[#D4AF37] text-[#D4AF37] animate-pulse"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg text-gray-300 leading-relaxed italic mb-4">
                      "{item.text}"
                    </blockquote>
                    <div className="text-sm border-t border-gray-800 pt-4">
                      <p className="font-medium text-[#D4AF37]">{item.author}</p>
                      <p className="text-gray-400">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionContainer>

          {/* Press Coverage */}
          <SectionContainer id="press" className="bg-[#1A1F3C]">
            <div className="space-y-12">
              <div className="text-center space-y-4 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Featured in the Press</h2>
                <p className="text-lg text-gray-400">Recent coverage and mentions</p>
              </div>

              <div className="space-y-6">
                {pressItems.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 border border-gray-800 rounded-lg hover:border-[#D4AF37] hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-300 group animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <p className="text-sm text-[#D4AF37] font-medium uppercase tracking-wider">
                          {item.publication}
                        </p>
                        <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-400">{item.date}</p>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{item.excerpt}</p>
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F5D042] transition-colors font-medium text-sm mt-2 group/link"
                      >
                        <span>Read More</span>
                        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionContainer>

          {/* Book Information */}
          <SectionContainer id="book" className="bg-[#0A0F29]">
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                {/* Book Cover */}
                <div className="md:col-span-1 animate-slide-in-left">
                  <div className="relative aspect-[9/12] bg-gradient-to-br from-[#1E40AF] via-[#1A1F3C] to-[#0A0F29] rounded-lg overflow-hidden shadow-2xl group hover:shadow-[#D4AF37]/20 transition-shadow duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent" />
                    <div className="relative h-full flex items-center justify-center p-8">
                      <div className="text-center space-y-4">
                        <p className="text-sm font-medium text-[#D4AF37] opacity-90">THE STRANGEST OF FRUIT</p>
                        <p className="font-serif text-3xl font-bold text-white">Collected Stories</p>
                        <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#1E40AF] mx-auto rounded-full" />
                      </div>
                    </div>
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>

                {/* Book Details */}
                <div className="md:col-span-2 space-y-8 animate-slide-in-right">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                      The Strangest of Fruit
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                      A collection of interconnected stories exploring identity, belonging, and the narratives we inherit.
                      Ahmed's prose is lyrical and unflinching, presenting characters at the intersection of cultures,
                      religions, and personal truth.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Published by Cheek Press, these stories challenge stereotypes and center voices often marginalized
                      in literary fiction.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-[#D4AF37] mb-2">Published by</h3>
                      <Link
                        href="https://www.cheek.press/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors font-medium group"
                      >
                        <span>Cheek Press</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>

                    <div>
                      <h3 className="font-medium text-[#D4AF37] mb-4">Purchase</h3>
                      <div className="flex flex-wrap gap-3">
                        {bookLinks.map((link, index) => (
                          <Link
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-gradient-to-r from-[#1E40AF] to-[#1A1F3C] text-white rounded-lg hover:from-[#D4AF37] hover:to-[#F5D042] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D4AF37]/20 font-medium animate-slide-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                          >
                            {link.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionContainer>

          {/* Additional Books */}
          <SectionContainer id="other-works" className="bg-[#1A1F3C]">
            <div className="space-y-12">
              <div className="text-center space-y-4 animate-fade-in">
                <h2 className="text-4xl font-serif font-bold text-white">Other Works</h2>
                <p className="text-lg text-gray-400">Explore more of my published works and film projects</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 border border-gray-800 rounded-lg space-y-4 bg-gradient-to-br from-[#0A0F29]/50 to-transparent hover:border-[#D4AF37] hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-300 group animate-slide-up">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#1E40AF] to-[#D4AF37] rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">O</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      Ocean & Mrs. Nagai
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    A collection of stories exploring relationships, cultural memory, and the ocean as metaphor.
                  </p>
                  <Link
                    href="https://www.amazon.com/Ocean-Mrs-Nagai-Stories-ebook/dp/B00CZKS2VW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F5D042] transition-colors font-medium text-sm mt-4 group/link"
                  >
                    <span>Read on Amazon</span>
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>

                <div className="p-8 border border-gray-800 rounded-lg space-y-4 bg-gradient-to-br from-[#0A0F29]/50 to-transparent hover:border-[#D4AF37] hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-300 group animate-slide-up delay-150">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#D4AF37] to-[#1E40AF] rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">F</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      Filmography & Adaptations
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    My work has been adapted for screen, including projects available on major streaming platforms.
                  </p>
                  <Link
                    href="/films"
                    className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F5D042] transition-colors font-medium text-sm mt-4 group/link"
                  >
                    <span>View Filmography</span>
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </SectionContainer>
        </main>

        <Footer />
      </div>
    </>
  )
}