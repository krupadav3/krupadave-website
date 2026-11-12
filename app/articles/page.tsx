import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <h1 className="text-4xl font-bold text-foreground mb-4">Articles</h1>
          <p className="text-lg text-black">
            This is where I share what I'm learning, building, explaining, (or breaking):{" "}
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          <article className="group">
            <Link href="/articles/everything-about-transformers">
              <div className="p-6 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors">
                <h2 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  Everything About Transformers
                </h2>
                <p className="mb-4 leading-relaxed text-black">
                  A deep dive into everything about transformers (history + illustrations)
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2 text-black" />
                  <time className="text-black" dateTime="2024-01-15">
                    October 27, 2025
                  </time>
                </div>
              </div>
            </Link>
          </article>

          <article className="group">
            <Link href="/articles/implementing-flash-attention-in-cuda">
              <div className="p-6 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors">
                <h2 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  Implementing Flash Attention in CUDA
                </h2>
                <p className="mb-4 leading-relaxed text-black">
                  A hands-on guide to implementing memory-efficient attention mechanisms using CUDA kernels
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2 text-black" />
                  <time className="text-black" dateTime="2024-01-22">
                    TBD
                  </time>
                </div>
              </div>
            </Link>
          </article>

          {/* Placeholder for future posts */}
          <div className="text-center py-12">
            <p className="text-muted-foreground">More posts coming soon...</p>
          </div>
        </div>
      </div>
    </main>
  )
}
