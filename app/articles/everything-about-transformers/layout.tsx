import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://krupadave.com'),
  title: 'Everything About Transformers',
  description:
    'A visual, intuitive deep dive into transformer architecture: history, design choices, and the why behind attention, masking, and positional encoding.',
  openGraph: {
    title: 'Everything About Transformers',
    description:
      'A visual, intuitive deep dive into transformer architecture: history, design choices, and the why behind attention, masking, and positional encoding.',
    url: '/articles/everything-about-transformers',
    siteName: 'Krupa Dave',
    type: 'article',
    images: [
      {
        url: '/og/v2thumb.png?v=3', // cache-busted
        width: 1200,
        height: 630,
        alt: 'Everything About Transformers — Visual Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Everything About Transformers',
    description:
      'Illustrated guide to how transformers actually work — and why they’re built this way.',
    images: ['/og/v2thumb.png?v=3'], // same image
  },
}

export default function TransformersArticleLayout({
  children,
}: { children: React.ReactNode }) {
  return children
}
