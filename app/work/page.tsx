import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WorkPage() {
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

          <h1 className="text-4xl font-bold text-foreground mb-4">Work</h1>
          <p className="text-lg text-muted-foreground">My professional journey, experiences, and achievements.</p>
        </div>

        {/* Work Experience */}
        <div className="space-y-8">
          <div className="p-6 rounded-lg border border-border bg-card">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Senior Software Engineer</h2>
                <p className="text-accent font-medium">Tech Company</p>
              </div>
              <span className="text-sm text-muted-foreground">2022 - Present</span>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Leading development of AI-powered applications and machine learning systems. Focused on transformer
              architectures and natural language processing solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Python</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">PyTorch</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Transformers</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">React</span>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Machine Learning Engineer</h2>
                <p className="text-accent font-medium">AI Startup</p>
              </div>
              <span className="text-sm text-muted-foreground">2020 - 2022</span>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Built and deployed machine learning models for production environments. Specialized in computer vision and
              deep learning applications.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">TensorFlow</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Computer Vision</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">AWS</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Docker</span>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Software Developer</h2>
                <p className="text-accent font-medium">Previous Company</p>
              </div>
              <span className="text-sm text-muted-foreground">2018 - 2020</span>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Full-stack development with focus on web applications and API design. Gained experience in modern
              JavaScript frameworks and backend technologies.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">JavaScript</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Node.js</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">MongoDB</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Vue.js</span>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Skills & Technologies</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-4 rounded-lg border border-border bg-card">
              <h3 className="font-semibold text-foreground mb-3">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-muted text-foreground text-sm rounded-full">Python</span>
                <span className="px-3 py-1 bg-muted text-foreground text-sm rounded-full">JavaScript</span>
                <span className="px-3 py-1 bg-muted text-foreground text-sm rounded-full">TypeScript</span>
                <span className="px-3 py-1 bg-muted text-foreground text-sm rounded-full">Go</span>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-border bg-card">
              <h3 className="font-semibold text-foreground mb-3">AI & ML</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-muted text-foreground text-sm rounded-full">PyTorch</span>
                <span className="px-3 py-1 bg-muted text-foreground text-sm rounded-full">TensorFlow</span>
                <span className="px-3 py-1 bg-muted text-foreground text-sm rounded-full">Transformers</span>
                <span className="px-3 py-1 bg-muted text-foreground text-sm rounded-full">Hugging Face</span>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Download */}
        <div className="mt-12 text-center">
          <Button asChild>
            <a href="#" className="inline-flex items-center">
              <ExternalLink className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </main>
  )
}
