import Link from "next/link"
import { Star } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionContainer } from "@/components/section-container"

export default function PressPage() {
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
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-accent/10 via-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">Press & Recognition</h1>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-2xl">
              Reviews, press coverage, and praise for my work as a writer, filmmaker, and speaker.
            </p>
          </div>
        </section>

        {/* Praise Section */}
        <SectionContainer id="praise" className="bg-background">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">What Readers & Critics Say</h2>
              <p className="text-lg text-foreground/70">Praise for The Strangest of Fruit & My Work</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {praise.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-lg border border-border hover:border-primary transition space-y-4"
                >
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-foreground/80 leading-relaxed italic">"{item.text}"</blockquote>
                  <div className="text-sm">
                    <p className="font-medium text-foreground">{item.author}</p>
                    <p className="text-foreground/60">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>

        {/* Press Coverage */}
        <SectionContainer id="press" className="bg-card">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Featured in the Press</h2>
              <p className="text-lg text-foreground/70">Recent coverage and mentions</p>
            </div>

            <div className="space-y-6">
              {pressItems.map((item, index) => (
                <div
                  key={index}
                  className="p-6 border border-border rounded-lg hover:border-primary hover:shadow-lg transition group"
                >
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <p className="text-sm text-accent font-medium uppercase tracking-wider">{item.publication}</p>
                      <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition">
                        {item.title}
                      </h3>
                      <p className="text-sm text-foreground/60">{item.date}</p>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">{item.excerpt}</p>
                    <Link
                      href={item.link}
                      className="inline-block text-primary hover:text-accent transition font-medium text-sm mt-2"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>

        {/* Book Information */}
        <SectionContainer id="book" className="bg-background">
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Book Cover */}
              <div className="md:col-span-1">
                <div className="aspect-[9/12] bg-gradient-to-br from-primary to-secondary rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                  <div className="text-center text-white p-6 space-y-2">
                    <p className="text-sm font-medium opacity-75">THE STRANGEST OF FRUIT</p>
                    <p className="font-serif text-2xl font-bold">Collected Stories</p>
                  </div>
                </div>
              </div>

              {/* Book Details */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="text-4xl font-serif font-bold text-foreground mb-4">The Strangest of Fruit</h2>
                  <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                    A collection of interconnected stories exploring identity, belonging, and the narratives we inherit.
                    Ahmed's prose is lyrical and unflinching, presenting characters at the intersection of cultures,
                    religions, and personal truth.
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Published by Cheek Press, these stories challenge stereotypes and center voices often marginalized
                    in literary fiction.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-medium text-foreground">Published by</h3>
                  <Link
                    href="https://www.cheek.press/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-accent transition font-medium"
                  >
                    Cheek Press →
                  </Link>
                </div>

                <div className="space-y-3">
                  <h3 className="font-medium text-foreground">Purchase</h3>
                  <div className="flex flex-wrap gap-3">
                    {bookLinks.map((link) => (
                      <Link
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-opacity-90 transition text-sm font-medium"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* Additional Books */}
        <SectionContainer id="other-works" className="bg-card">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold text-foreground text-center">Other Works</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-border rounded-lg space-y-4">
                <h3 className="text-xl font-serif font-bold text-foreground">Ocean & Mrs. Nagai</h3>
                <p className="text-foreground/80 leading-relaxed">
                  A collection of stories exploring relationships, cultural memory, and the ocean as metaphor.
                </p>
                <Link
                  href="https://www.amazon.com/Ocean-Mrs-Nagai-Stories-ebook/dp/B00CZKS2VW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-accent transition font-medium text-sm"
                >
                  Read on Amazon →
                </Link>
              </div>

              <div className="p-6 border border-border rounded-lg space-y-4">
                <h3 className="text-xl font-serif font-bold text-foreground">Filmography & Adaptations</h3>
                <p className="text-foreground/80 leading-relaxed">
                  My work has been adapted for screen, including projects available on major streaming platforms.
                </p>
                <Link
                  href="/films"
                  className="inline-flex items-center text-primary hover:text-accent transition font-medium text-sm"
                >
                  View Filmography →
                </Link>
              </div>
            </div>
          </div>
        </SectionContainer>
      </main>

      <Footer />
    </div>
  )
}
