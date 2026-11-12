import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background font-mono">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/" className="flex items-center gap-2 text-foreground hover:text-accent">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>

          <h1 className="text-4xl font-bold text-foreground mb-4 font-sans">About Me</h1>
          <p className="text-lg text-muted-foreground">{""}</p>
        </div>

        {/* About Content */}
        <div className="prose prose-slate max-w-none">
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>Hi I'm Krupa, welcome to my side of the internet :)</p>

            <p>
              When I'm not diving deep into code or mathematical concepts, you'll find me creating art. I believe that
              creativity and technical thinking complement each other beautifully, and both inform my approach to
              problem-solving.
            </p>

            <div>
              <p className="mb-3">Currently I'm:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Interested in ML systems, hardware, optimization & kernels</li>
                <li>
                  Hosting{" "}
                  <a
                    href="https://www.merakiuoft.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Meraki
                  </a>{" "}
                  ⁂ (Toronto Socratica Node) sessions - A space for builders of all kinds, artists, filmmakers,
                  engineers, coders, learners, researchers, founders and designers
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-3">Previously I have:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Worked as an ML research intern at{" "}
                  <a
                    href="https://www.proximal.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Proximal
                  </a>
                  , where I was on the core team for{" "}
                  <a
                    href="https://frontierswe.com/blog/v2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    FrontierSWE v2
                  </a>{" "}
                  (a benchmark of long-horizon engineering tasks for frontier coding agents) and built FrontierHW, a
                  Verilog benchmark for evaluating LLM hardware code generation
                </li>
                <li>
                  Contributed to FPGA-based LLM inference research (
                  <a
                    href="https://arxiv.org/pdf/2503.01840"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    EAGLE
                  </a>
                  ) under researchers affiliated with the{" "}
                  <a
                    href="https://vectorinstitute.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Vector Institute
                  </a>
                </li>
              </ul>
            </div>

            <p>
              On this website I plan on sharing my learnings, projects, what I'm currently working on, or
              anything/anyone that inspire me. Feel free to reach out if you'd like to connect; I love making new
              friends.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
