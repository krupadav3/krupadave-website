import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Twitter, Presentation } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <h1 className="text-4xl font-bold text-foreground mb-4">Projects</h1>
          <p className="text-lg text-black">A collection of things I've built, experimented with, and learned from.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="p-6 rounded-lg border border-border bg-card">
            <div className="mb-4">
              <img
                src="/transformer.png"
                alt="Transformer in CUDA Project"
                className="w-full h-48 object-cover rounded-lg border border-border"
              />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-3">Transformer in CUDA </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">{""}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">CUDA</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">{"Numba"}</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">GPU Programming </span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Neural Networks </span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Deep Learning </span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">AI Infrastructure </span>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/krupadav3/Encoder-Block-in-CUDA" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://x.com/krupadav3/status/1915780189528658082" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4 mr-2" /> {/* Changed from ExternalLink to Twitter icon */}
                  X/Twitter
                </a>
              </Button>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <div className="mb-4">
              <img
                src="/stack_tower_game.png"
                alt="Stack Tower FPGA VGA Game"
                className="w-full h-48 object-cover rounded-lg border border-border"
              />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-3">Stack Tower (FPGA VGA Game)</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">{""}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Verilog</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Digital Logic</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">FPGA</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">HDL</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">DE1-SoC</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">FSM Design</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">VGA</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">RTL Design</span>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/krupadav3/ECE241-Project---Stack-Tower" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.canva.com/design/DAG40rKUb10/3uPHsiK_aeO7x5tlnDf70g/edit?utm_content=DAG40rKUb10&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">
                  <Presentation className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </Button>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <div className="mb-4">
              <img
                src="/ast.png"
                alt="Task Management App"
                className="w-full h-48 object-cover rounded-lg border border-border"
              />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-3">Teeny Tiny Compiler </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">{""}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Python</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">C</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Bash</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Scripting</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Compiler Design</span>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/krupadav3/tiny-compiler" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://medium.com/@heyitskrupa/building-a-teeny-tiny-compiler-my-journey-dd08b1cf42c4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Article
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Open Source Contributions */}
        <div className="mt-16">
          <div className="space-y-4">{/* Contributions will be listed here */}</div>
        </div>
      </div>
    </main>
  )
}
