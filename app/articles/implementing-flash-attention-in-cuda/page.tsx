import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FlashAttentionPost() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <Button variant="ghost" size="sm" asChild className="mb-6 text-black">
            <Link href="/articles" className="flex items-center gap-2 text-black hover:text-gray-700">
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </Link>
          </Button>

          <h1 className="text-4xl font-bold text-foreground mb-4">Implementing Flash Attention in CUDA</h1>
        </div>

        <article className="prose prose-lg max-w-none">
          <div className="text-center py-16">
            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-xl text-gray-800 font-medium mb-0">Coming Soon :)</p>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}
