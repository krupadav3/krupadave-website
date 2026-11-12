import { Github, Twitter, Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background font-mono">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Profile Section */}
        <div className="text-center mb-12">
          <div className="mb-8">
            <img
              src="/krupa_restaurant.jpg"
              alt="Krupa's profile picture"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto border-2 border-border object-cover object-[55%_40%] aspect-square shadow-sm scale-110"
            />
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-4 font-sans">Hi I'm Krupa!</h1>

          <p className="text-lg mb-8 leading-relaxed text-slate-800">I like Math, Hardware &amp; Art</p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/krupadav3" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.linkedin.com/in/krupa-d/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://x.com/krupadav3" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="mailto:heyitskrupa@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://substack.com/@krupadave" target="_blank" rel="noopener noreferrer">
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812H22.54V24l-10.54-5.912L1.46 24V10.812zM22.539 0H1.46v2.836h21.08V0z" />
                </svg>
                Substack
              </a>
            </Button>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <Link href="/articles" className="group">
            <div className="p-4 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors text-center">
              <h2 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                {"Articles"}
              </h2>
              <p className="text-sm text-slate-800">{""}</p>
            </div>
          </Link>

          <Link href="/projects" className="group">
            <div className="p-4 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors text-center">
              <h2 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                Projects
              </h2>
              <p className="text-sm text-slate-800">{""}</p>
            </div>
          </Link>

          <Link href="/art" className="group">
            <div className="p-4 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors text-center">
              <h2 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                Art
              </h2>
              <p className="text-sm text-slate-800">{""}</p>
            </div>
          </Link>

          <Link href="/about" className="group">
            <div className="p-4 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors text-center">
              <h2 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                About Me
              </h2>
              <p className="text-sm text-slate-800">{""}</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
