"use client"

import Link from "next/link"
import { ArrowLeft, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function ArtPage() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; title: string } | null>(null)

  useEffect(() => {
    if (lightboxImage) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [lightboxImage])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxImage(null)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <main className="min-h-screen bg-background font-mono">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <Button variant="ghost" size="sm" asChild className="mb-6 text-foreground hover:bg-accent">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>

          <h1 className="text-4xl font-bold text-foreground mb-4 font-sans">Art</h1>
          <p className="text-lg text-slate-800 leading-relaxed">Here's a collection of my artwork:</p>
        </div>

        {/* Art Gallery Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="group cursor-pointer"
            onClick={() => setLightboxImage({ src: "/butterfly_watercolour.jpg", alt: "Butterfly watercolor painting", title: "Petals and Wings" })}
          >
            <div className="aspect-square bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg border border-border overflow-hidden">
              <img
                src="/butterfly_watercolour.jpg"
                alt="Butterfly watercolor painting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold text-foreground mt-3">"Petals and Wings"</h3>
            <p className="text-sm text-gray-400 italic">watercolour</p>
          </div>

          <div
            className="group cursor-pointer"
            onClick={() => setLightboxImage({ src: "/pondering_watercolour.jpg", alt: "Pondering watercolor painting", title: "Whispers in Red" })}
          >
            <div className="aspect-square bg-gradient-to-br from-red-100 to-pink-100 rounded-lg border border-border overflow-hidden">
              <img
                src="/pondering_watercolour.jpg"
                alt="Pondering watercolor painting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold text-foreground mt-3">"Whispers in Red" </h3>
            <p className="text-sm text-gray-400 italic">watercolour</p>
          </div>

          <div
            className="group cursor-pointer"
            onClick={() => setLightboxImage({ src: "/ceramic_painting.jpg", alt: "Koi fish and lotus flowers ceramic painting", title: "Koi Garden" })}
          >
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-slate-100 rounded-lg border border-border overflow-hidden">
              <img
                src="/ceramic_painting.jpg"
                alt="Koi fish and lotus flowers ceramic painting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold text-foreground mt-3">"Koi Garden"</h3>
            <p className="text-sm text-gray-400 italic">ceramic painting</p>
          </div>

          <div
            className="group cursor-pointer"
            onClick={() => setLightboxImage({ src: "/scenic_painting.jpg", alt: "Mediterranean coastal village scenic painting", title: "Reflections of Summer" })}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg border border-border overflow-hidden">
              <img
                src="/scenic_painting.jpg"
                alt="Mediterranean coastal village scenic painting"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold text-foreground mt-3">"Reflections of Summer"</h3>
            <p className="text-sm text-gray-400 italic">acrylic painting</p>
          </div>

          <div
            className="group cursor-pointer"
            onClick={() => setLightboxImage({ src: "/panda.jpg", alt: "Panda watercolour painting", title: "Bamboo Dreams" })}
          >
            <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg border border-border overflow-hidden">
              <img
                src="/panda.jpg"
                alt="Panda watercolour painting"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold text-foreground mt-3">"Bamboo Dreams"</h3>
            <p className="text-sm text-gray-400 italic">watercolour</p>
          </div>

          <div className="group cursor-pointer"></div>

          <div className="group cursor-pointer"></div>
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            More artwork coming soon! Feel free to reach out if you'd like to see more of my work.
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            aria-label="Close fullscreen view"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="flex flex-col items-center gap-4 max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.src || "/placeholder.svg"}
              alt={lightboxImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white/80 text-lg font-sans">{`"${lightboxImage.title}"`}</p>
          </div>
        </div>
      )}
    </main>
  )
}
