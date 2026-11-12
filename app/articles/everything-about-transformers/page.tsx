"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
// import { MathJax } from "mathjax-react"

function TransformerSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const slides = [
    {
      src: "/transformer_frame1.svg",
      alt: "High-level transformer view: Input 'I like cats' goes through Transformer to output 'J'aime les chats'",
      title: "High-level view of Input -> Transformer -> Output",
    },
    {
      src: "/transformer_frame2.svg",
      alt: "Transformer internal structure showing Encoding Block and Decoding Block",
      title: "Encoding and Decoding Components within Transformer",
    },
    {
      src: "/transformer_frame3.svg",
      alt: "Detailed transformer architecture with 6 encoder layers and 6 decoder layers",
      title: "N=6 Identical encoders and decoders",
    },
  ]

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [slides.length, isPaused])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  return (
    <div className="my-8 bg-white rounded-lg border border-gray-200 p-6">
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 flex justify-center">
              <img
                src={slide.src || "/placeholder.svg"}
                alt={slide.alt}
                className="max-w-full h-auto"
                style={{ imageRendering: "crisp-edges" }}
              />
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-purple-600 hover:text-white rounded-full p-2 shadow-md transition-all duration-200 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-purple-600 hover:text-white rounded-full p-2 shadow-md transition-all duration-200 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <button
          onClick={togglePause}
          className="absolute top-4 right-4 bg-white/80 hover:bg-purple-600 hover:text-white rounded-full p-2 shadow-md transition-all duration-200 cursor-pointer"
          title={isPaused ? "Resume slideshow" : "Pause slideshow"}
        >
          {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">{slides[currentSlide].title}</h3>
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                index === currentSlide ? "bg-purple-600" : "bg-gray-300 hover:bg-purple-400"
              }`}
            />
          ))}
        </div>
      </div>

      <p className="text-sm text-center text-gray-600 mt-2">
        Slide {currentSlide + 1} of {slides.length} - Progressive breakdown of transformer architecture
        {isPaused && " (Paused)"}
      </p>
    </div>
  )
}

export default function TransformersPost() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/articles">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Link>
          </Button>

          <h1 className="text-4xl font-bold text-foreground mb-6 leading-tight">Everything About Transformers</h1>

          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <time className="text-black" dateTime="2024-01-15">
                Last Updated: October 27, 2025
              </time>
            </div>
            <div className="flex items-center text-black">
              <Clock className="w-4 h-4 mr-2" />
              by: Krupa Dave
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="text-foreground space-y-6">
            <p className="leading-relaxed">
              The research paper "Attention is All You Need" is regarded as one of the most important &amp;
              groundbreaking publications in the realm of ML. The paper introduces the transformer architecture and the
              attention mechanism, yet many still struggle to wrap their head around it.
            </p>

            <p className="leading-relaxed">
              When I posted my{" "}
              <a
                href="https://x.com/krupadav3/status/1915780189528658082"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 underline"
              >
                progress update
              </a>{" "}
              on my encoder block written in CUDA (Python + Numba), a lot of responses echoed a similar theme:
              <strong> "I want to understand how transformers work from the ground up."</strong>
            </p>

            <p className="leading-relaxed">
              This got me thinking. What really helped ME understand the transformer? It was story-telling &
              illustrations. Every model in the history of language modeling was built to fix a problem the last one
              could not solve (which evolved into the transformer). I've also always learned best by looking at
              illustrations and dissecting complex ideas into visuals I can follow (Jay Allamar's{" "}
              <a
                href="https://jalammar.github.io/illustrated-transformer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 underline"
              >
                Illustrated Transformer
              </a>{" "}
              does a good job of this). So why not put these 2 ideas together, and tell the story of how we got to the
              transformer, and an illustrated break-down of the transformer architecture itself.
            </p>

            <p className="leading-relaxed">
              So, this article isn't a tutorial. It's a guide I wish I had when I first started out - a visual story of
              how transformers came to life. You'll find personal illustrations, simplified explanations, and links to
              the resources that helped me most. Whether you're here to build a transformer model from scratch, or fell
              curious how we got from neural nets to today's GPTs, I hope this gives you a place to start.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">A History Lesson </h2>
            <p className="leading-relaxed">
              A language model is a machine learning model that is trained to understand, predict and generate human
              <strong> language.</strong> Early attempts used simple feedforward networks which were good at recognizing
              fixed patterns, but couldn't handle sequences. They had NO memory of
              <em> order or </em>
              <strong>context</strong>.
            </p>

            <p className="leading-relaxed">
              This gap led to the creation of recurrent neural networks (RNNs). RNNs were the first real step toward
              giving models memory for sequential data. From there, researchers kept building new model variations (with
              tweaks), so that each one was created to fix the limitation of the last.
            </p>

            <p className="leading-relaxed">
              <strong>This progression of ideas</strong> eventually gave rise to the transformer in 2017. The timeline
              and chart below outline why each model was introduced, how it worked, and the drawbacks that led to the
              next improvement.
            </p>

            <div className="my-8">
              <img
                src="/nlp_timeline_new.png"
                alt="Timeline of NLP developments from 1950s to 2018+, showing the evolution from feedforward networks to transformers"
                className="w-full rounded-lg"
              />
              <p className="text-sm mt-2 text-center italic text-slate-600">
                Timeline of Key Language Model Architectures
              </p>
            </div>

            <div className="my-8">
              <img
                src="/svgchart.svg"
                alt="Evolution of language models: what each introduced and WHY the next was needed"
                className="w-full rounded-lg"
              />
              <p className="text-sm mt-2 text-center italic text-slate-600">
                Evolution of language models: what each introduced and WHY the next was needed
              </p>
            </div>

            <p className="leading-relaxed font-bold text-lg">TL;DR — Why Did Transformers Matter? </p>

            <p className="leading-relaxed font-medium italic">
              To summarize the above chart, what were old models missing exactly?
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>
                They struggled with remembering <strong>context</strong> over long sentences.
              </li>
              <li>
                When they tried, they either <strong>forgot</strong> too quickly or became <strong>unstable</strong>.
              </li>
              <li>
                Models that handled memory better were still slow and <strong>hard to scale</strong>.
              </li>
              <li>
                And <strong>compressing</strong> whole sequences into one chunk meant losing a lot of detail.
              </li>
            </ul>

            <div className="my-8 p-6 bg-purple-50 border-l-4 border-purple-400 rounded-r-lg">
              <p className="leading-relaxed font-medium text-purple-900">
                <strong>Then came a bold idea:</strong> Some Google Brain researchers asked: "What if we removed the
                whole idea of recurrence from RNNs and CNNs… and just used <strong>attention</strong> instead?" That
                simple shift led to the birth of the Transformer — captured perfectly in the title of their paper,
                "Attention Is All You Need."
              </p>
            </div>

            <p className="leading-relaxed font-bold text-lg">What the Transformer changed:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>
                It let models pay attention to all the words at once (<strong>self-attention</strong>).
              </li>
              <li>
                It trained much faster by processing sequences in <strong>parallel</strong>.
              </li>
              <li>
                It kept word order with <strong>positional encodings</strong>.
              </li>
              <li>
                And it <strong>scaled</strong> effortlessly — powering GPT, BERT, and today's foundation models.
              </li>
            </ul>

            {/* Transformer Architecture: A Thorough Breakdown */}
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">
              Transformer Architecture: A Thorough Breakdown
            </h2>

            <p className="leading-relaxed">
              The Transformer is comprised of <strong>2</strong> main building blocks:
            </p>
            <ol className="list-decimal pl-6 space-y-1 text-foreground mb-4">
              <li>
                <strong>Encoder</strong>
              </li>
              <li>
                <strong>Decoder</strong>
              </li>
            </ol>

            <p className="leading-relaxed">
              Inside these blocks, it relies on <strong>5</strong> core mechanisms that work together:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-foreground mb-6">
              <li>
                <strong>Attention</strong> (which comes in 4 main variants: self-attention, cross-attention, masked
                self-attention and multi-head attention)
              </li>
              <li>
                <strong>Feed-forward networks</strong>
              </li>
              <li>
                <strong>Layer normalization</strong>
              </li>
              <li>
                <strong>Positional encoding</strong> (plus the initial <em>input embeddings</em> that convert words into
                numbers)
              </li>
              <li>
                <strong>Residual connections</strong>
              </li>
            </ol>
            <p className="leading-relaxed">
              Below is the full original Transformer architecture from the paper Attention Is All You Need (2017). Think
              of this as a reference point. Don't worry if it looks overwhelming at first. In the rest of this article,
              I'll break down each component step by step and make sense of how it all fits together.
            </p>

            <div className="my-8 flex justify-center">
              <img
                src="/full_transformer_architecture.svg"
                alt="Full Transformer Architecture Diagram"
                className="max-w-xl w-full rounded-lg"
              />
            </div>

            <p className="text-sm mt-2 text-center italic text-slate-600">
              Transformer Architecture as illustrated in Attention is All You Need (2017). Encoder on the left &amp;
              Decoder on the right.
            </p>

            <p className="leading-relaxed">
              We can think of the Transformer as a black box: it takes an input sequence (eg. like a sentence "I like
              cats" in English) and produces an output sequence (like "J'aime les chats", the same sentence in French).
              Its power comes from the encoder–decoder structure: the encoder turns the input into a numerical
              representation, and the decoder uses that to generate the output one token at a time. In the original
              paper, both the encoder and decoder are shown as stacks of six layers (N=6). Below, I've illustrated this
              structure, breaking it down into the encoder, the decoder, and their repeating layers.
            </p>

            <TransformerSlideshow />

            {/* Attention Section */}
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Attention</h2>

            <p className="leading-relaxed">
              Now we've reached the mechanism that's been referenced throughout this article, and the one that powers
              the core of the Transformer architecture. Introducing...Attention.
            </p>

            <div className="my-6 p-6 bg-purple-50 border-l-4 border-purple-400 rounded-r-lg">
              <p className="leading-relaxed text-purple-900 mb-4">
                <strong>Before we talk about attention, here's what you need to keep in mind:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-purple-900 mb-4">
                <li>
                  You now understand how the Transformer turns input sequences into output sequences using encoder and
                  decoder stacks
                </li>
                <li>
                  Each token in the input becomes a vector (thanks to embeddings), and each layer refines those vectors.
                  (Note: If you aren't familiar with the terms "tokenization" or "word embeddings" then they are
                  explained in an Aside under "Self-Attention" in the article!)
                </li>
                <li>
                  Unlike older models (as illustrated in the evolution of language models chart), transformers do not
                  rely on memory flowing through time. Instead, they rely on direct connections between all tokens via
                  attention!
                </li>
              </ul>
              <p className="leading-relaxed text-purple-900 font-bold italic">
                Hence, Attention is a mechanism that determines the importance of each component in a sequence relative
                to every other component in that sequence.
              </p>
            </div>

            <p className="leading-relaxed">
              With that being understood, now we'll uncover attention in more detail (which is discussed as 3 different
              variants in the paper: Self-Attention, Multi-Head Attention, and Cross-Attention.
            </p>

            <p className="leading-relaxed mt-8 font-bold text-lg">1) Self-Attention </p>

            <p className="leading-relaxed mb-6">
              Say you're given the following sentence: <strong>"he swung the bat with incredible force"</strong>. On its
              own, the word "bat" could mean either an animal, or a baseball bat. However, the CONTEXT of the sentence
              is what tells us (and a computer) that it's the baseball bat. Attention helps minimize this ambiguity, by
              not treating the word (eg. bat) in isolation but by "paying attention" to other words in the sequence.
            </p>

            <div className="my-8 flex justify-center">
              <img
                src="/sentence.svg"
                alt="Full Transformer Architecture Diagram"
                className="max-w-xl w-full rounded-lg"
              />
            </div>

            <p className="text-sm mt-2 text-center italic text-slate-600">
              Attention uses context to resolve ambiguity. Here "bat" means baseball, not the animal.
            </p>

            <p className="leading-relaxed mb-6">
              Before Self-Attention, your input sequence must go through 2 steps: tokenization and token embedding.
            </p>

            <div className="my-6 p-4 bg-gray-50 border border-gray-300 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4">Aside on Tokenization & Word Embeddings</h3>

              <div className="space-y-4 text-foreground">
                <div>
                  <h4 className="font-medium mb-2">1) Tokenization</h4>
                  <p className="leading-relaxed mb-3">
                    Computers don't understand words, they understand numbers. So, the first step is to break down a
                    sentence into smaller units called tokens. There are different ways to tokenize text:
                  </p>

                  <div className="my-8 flex justify-center">
                    <img
                      src="/tokenization_types.svg"
                      alt="Different types of tokenization: breaking text into words, subwords or characters"
                      className="max-w-3xl w-full rounded-lg"
                    />
                  </div>

                  <p className="text-sm mt-2 text-center italic text-slate-600">
                    Different types of tokenization: breaking text into words, subwords or characters
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">2) Token Embeddings</h4>
                  <p className="leading-relaxed mb-3">
                    Then each of your tokens are mapped to a unique token ID from a pre-defined vocabulary. However,
                    transformers cannot process integers directly; they need vectors. That's where token embeddings come
                    in. An embedding matrix is a giant table:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li>
                      <strong>V: vocabulary size</strong> (the total number of unique tokens a model knows about, eg.
                      50,000)
                    </li>
                    <li>
                      <strong>d: embedding dimension</strong> (the length of the vector used to represent each token or
                      the number of "features" a token is represented by (eg. 512). It's a hyperparameter of the model.
                    </li>
                  </ul>

                  <div className="my-8 flex justify-center">
                    <img
                      src="/token_embedding.svg"
                      alt="Turning text into embeddings the model can understand"
                      className="max-w-4xl w-full rounded-lg"
                    />
                  </div>

                  <p className="text-sm mt-2 text-center italic text-slate-600">
                    Turning text into embeddings the model can understand
                  </p>

                  <p className="leading-relaxed mb-3">
                    Each row in this matrix is now a <strong>trainable vector</strong> representing a token: (example:
                    Transform → Token ID: 1231 → [0.1, 0.3, 0.4, 0.9, 0.8])
                  </p>
                  <p className="leading-relaxed mb-4">
                    Once each input ID is mapped to its embedding, the entire input sentence becomes a 2D tensor!
                  </p>

                  <p className="leading-relaxed italic">
                    The key takeaway is that once text is tokenized and mapped into embeddings, each token is now
                    represented as a vector that carries <strong>semantic meaning</strong>. Similar words or concepts
                    will have embeddings that are close together in this high-dimensional space (eg. bat, swung, hit,
                    ball). These embeddings are what the Transformer operates on.
                  </p>
                </div>
              </div>
            </div>

            <p className="leading-relaxed mb-4">
              Attention relies on 3 key inputs for each token (i.e. word in a sequence):
            </p>

            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>
                A <strong>Query Vector</strong> (Q): what this token wants to find out
              </li>
              <li>
                A <strong>Key Vector</strong> (K): what this token offers to others
              </li>
              <li>
                A <strong>Value Vector</strong> (V): the actual content this token can contribute to
              </li>
            </ul>

            <div className="my-6 p-6 bg-purple-50 border-l-4 border-purple-400 rounded-r-lg">
              <p className="leading-relaxed text-purple-900 mb-4">
                <strong>Here's an analogy to intuitively understand Q, K and V vectors: </strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-purple-900 mb-4">
                <li>
                  Picture doing a simple Google Search. The Query is what you type into the search bar (i.e. "how do
                  transformers work?"), the Key are the titles of webpages stored by the data engine, and the Value are
                  the actual content of those.
                </li>
              </ul>
            </div>

            <p className="leading-relaxed mb-4">
              In self attention, the Query, Key and Value matrices are all derived from the same input vector. They are
              calculated by a matrix multiplication of the input vector (X) and a learnt weight matrix (W) for each Q, K
              and V matrix. The weight matrix (W) is learnt on the loss function of the transformer during
              backpropagation.
            </p>

            <div className="my-8 flex justify-center">
              <img
                src="/self_attention.svg"
                alt="How Query, Key and Value matrices are derived"
                className="max-w-4xl w-full rounded-lg"
              />
            </div>

            <p className="text-sm mt-2 text-center italic text-slate-600">
              How Query, Key and Value matrices are derived
            </p>

            <p className="leading-relaxed mb-4">
              After you type something into Google, you want the search engine to match your query against page titles
              and keywords to find the most relevant results. In a transformer, this is exactly what happens when your
              query vector is compared against the key vectors...the model needs a way to measure which ones are most
              similar or relevant. This is done using a <strong>compatibility function</strong>, which is nothing other
              than the <strong>"dot-product"</strong> (a simple yet powerful way to check how aligned 2 of your vectors
              are). The results of these comparisons are laid out in a <strong>compatibility matrix</strong>, where
              higher dot product values indicate a stronger match between a query and a key.
            </p>

            <div className="my-8 flex justify-center">
              <img
                src="/compatibility.svg"
                alt="Compatibility matrix showing how aligned query and key vectors are"
                className="max-w-4xl w-full rounded-lg"
              />
            </div>

            <p className="text-sm mt-2 text-center italic text-slate-600">
              Compatibility matrix showing how aligned query and key vectors are. Every cell marked "high" is likely to
              score high in compatibility (i.e. higher dot-product value)
            </p>

            <p className="leading-relaxed mb-4">
              When working with very high-dimensional vectors, the dot products between queries and keys can become
              extremely large. This creates a problem during backpropagation: those large values cause the gradients to
              shrink down to very small numbers, a well-known issue called the{" "}
              <strong>vanishing gradient problem</strong>. To prevent this, the dot products are scaled down by dividing
              them with the square root of the <strong>key dimension (√dₖ)</strong>. This adjustment keeps the values at
              a manageable range and stabilizes training.
            </p>

            <p className="leading-relaxed mb-4">
              Once the dot products are scaled, the next step is to turn them into meaningful weights that reflect how
              much attention each token should get. To do this, the transformer applies a{" "}
              <strong>softmax function</strong> to the scaled values. Softmax normalizes the numbers so that they all
              fall between <strong>0 and 1</strong>, and ensures that the weights for each query sum up to 1. In other
              words, it transforms raw scores into a probability distribution across tokens. The result is what we call
              the attention weight matrix, shown below:
            </p>

            <div className="my-8 flex justify-center">
              <img
                src="/softmax.svg"
                alt="Compatibility matrix showing how aligned query and key vectors are"
                className="max-w-2xl w-full rounded-lg"
              />
            </div>

            <p className="text-sm mt-2 text-center italic text-slate-600">
              Softmax normalizes compatibility scores so they can be interpreted as attention weights.
            </p>

            <div className="my-8 flex justify-center">
              <img
                src="/heatmap_clean1.svg"
                alt="Self-attention heatmap and score matrix for the sentence 'He swung the bat with incredible force'"
                className="w-[66%] ml-16 rounded-lg"
              />
            </div>

            <p className="text-sm mt-2 text-center italic text-slate-600">
              A hypothetical self-attention heatmap and score matrix for the sentence "He swung the bat with incredible
              force." The numerical scores (matrix) are visualized as color intensities (heatmap). The weights are
              fabricated to illustrate how tokens might attend to one another in a Transformer layer. Note: darker cells
              indicate stronger attention.
            </p>

            <p className="leading-relaxed mt-6">
              The last step of the self-attention mechanism is multiplying the attention scores by the{" "}
              <strong>value matrix</strong>. This matrix carries the word embeddings for each token in the input
              sequence, holding the actual information each word contributes. Once the <strong>value matrix</strong> is
              multiplied by the softmax of the attention scores, the output becomes a new representation that captures
              both the <strong>meaning</strong> of each word and its <strong>context</strong> within the sequence.
            </p>

            <div className="my-8 flex justify-center">
              <img
                src="/attention_formula_clean.svg"
                alt="Formula for self-attention in transformers"
                className="max-w-3xl w-full rounded-lg"
              />
            </div>

            <p className="text-sm mt-2 text-center italic text-slate-600">Formula for self-attention in transformers</p>

            <p className="leading-relaxed mt-4 italic">And that's self-attention explained in a nutshell!</p>

            <p className="leading-relaxed mt-8 font-bold text-lg">2) Multi-Head Attention</p>

            <p className="leading-relaxed">
              So far, self-attention lets a model figure out which words in a sentence matter most to each other. But
              what if there's more than one kind of relationship worth noticing at once? For example, in "He swung the
              bat with incredible force," one relationship connects "swung" ↔ "bat" (the action and object), while
              another connects "incredible" ↔ "force" (description and intensity). Multi-headed attention lets the model
              look at all those <strong>relationships in parallel</strong>. Each head learns a slightly different way of
              paying attention. One might focus on grammar, another on meaning, another on emotion...and when you
              combine them, you get a much richer understanding of the sentence.
            </p>

            <p className="leading-relaxed">
              From a computational perspective, this happens by running multiple attention heads simultaneously (eight
              in the original Transformer paper), then <strong>concatenating</strong> their results and passing them
              through a final projection matrix, W0. This projection blends the insights from every head into a single,{" "}
              <strong>context-aware representation</strong>.
            </p>

            <div className="my-8 flex justify-center">
              <img
                src="/multi-head_attention_clean.svg"
                alt="Each attention head computes its own set of Q, K, and V projections, produces an attention output, and all heads are then concatenated and projected through W0 to form the final output"
                className="max-w-3xl w-full rounded-lg"
              />
            </div>

            <p className="text-sm mt-2 text-center italic text-slate-600">
              Each attention head computes its own set of Q, K, and V projections, produces an attention output, and all
              heads are then concatenated and projected through W0 to form the final output
            </p>

            <div className="my-8 p-6 bg-purple-50 border-l-4 border-purple-400 rounded-r-lg">
              <p className="leading-relaxed text-purple-900 mb-4">
                <strong>Why 8 Attention Heads?</strong>
              </p>
              <p className="leading-relaxed text-purple-900 mb-4">
                Eight isn't a fixed rule, it's a hyperparameter that balances expressiveness and efficiency. If the
                model's embedding size is 512 and you use 8 heads, each head gets 64 (512 ÷ 8) dimensions for its
                queries, keys, and values. That means every head operates on a lower-dimensional view of the input, and
                together they cover multiple subspaces that the model later recombines.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-purple-900 mb-4">
                <li>
                  <strong>Too few heads</strong> → each one must learn too many relationships at once, reducing
                  specialization.
                </li>
                <li>
                  <strong>Too many heads</strong> → each becomes too small to represent anything meaningful (and
                  inference gets slower and more compute-heavy).
                </li>
              </ul>
              <p className="leading-relaxed text-purple-900">
                In practice, 8 heads hits a good spot: diverse enough to learn multiple contextual patterns, yet large
                enough per head to retain useful capacity.
              </p>
            </div>

            <p className="leading-relaxed">
              Now that we understand how attention operates in a single layer, let's explore how it's used differently
              inside the encoder and the decoder. The encoder uses self-attention, while the decoder uses 2 stacked
              forms: masked self-attention and cross attention. I'll be explaining these 2 nuanced decoder attention
              mechanisms below:
            </p>

            <p className="leading-relaxed mt-8 font-bold text-lg">3) Masked Self-Attention (Decoder-Side)</p>

            <p className="leading-relaxed">
              In the decoder, the first attention layer is slightly modified, it's called: masked self-attention.
            </p>
            <p className="leading-relaxed">
              In regular self-attention, every token can "see" every other token in the sequence, which works perfectly
              for the encoder (since the entire input is known).
            </p>
            <p className="leading-relaxed">
              Here, the same self-attention mechanism applies, but with a twist: the model is forbidden from looking at{" "}
              <strong>future tokens</strong> when predicting the next word.
            </p>
            <p className="leading-relaxed">
              To enforce this, a <strong>look-ahead mask</strong> is applied to the scaled dot-product score matrix,
              setting all entries above the diagonal to <strong>negative infinity</strong> before softmax. This ensures
              that each token can only attend to previous ones, preserving the <strong>autoregressive</strong> property
              of language generation, so the model writes strictly left-to-right (just like we do).
            </p>

            <p className="leading-relaxed mt-4">
              <strong>Note:</strong> Why do we use negative infinity when masking? Because softmax turns those values
              into <strong>0</strong>! (You're basically telling the softmax function that these{" "}
              <strong>positions don't exist</strong>)
            </p>

            <div className="my-8 flex justify-center">
              <img
                src="/masked_self-attention_clean.svg"
                alt="Applying the look-ahead mask during masked self-attention. Future positions are set to −∞ before softmax, ensuring each token only attends to itself and prior tokens."
                className="max-w-2xl w-full rounded-lg"
              />
            </div>

            <p className="text-sm mt-2 text-center italic text-slate-600">
              Applying the look-ahead mask during masked self-attention. Future positions are set to −∞ before softmax,
              ensuring each token only attends to itself and prior tokens.
            </p>

            {/* Added purple pop-out box explaining what happens without masking */}
            <div className="my-8 p-6 bg-purple-50 border-l-4 border-purple-400 rounded-r-lg">
              <p className="leading-relaxed text-purple-900 mb-4">
                <strong>💭 What happens if we didn't have masking?</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-purple-900">
                <li>
                  The model would already see the correct future tokens when predicting the next word, so instead of
                  learning to anticipate what comes next, it would simply copy information it shouldn't know yet.
                </li>
                <li>
                  It would achieve a perfect training loss — since every prediction would be trivially correct — but it
                  would never actually learn how to generate text step-by-step.
                </li>
                <li>
                  During inference, it would completely collapse: without the ability to "think ahead" on its own, it
                  wouldn't know what to predict next.
                </li>
              </ul>
            </div>

            <p className="leading-relaxed mt-8 font-bold text-lg">4) Cross Attention (Decoder-Side)</p>

            <p className="leading-relaxed">
              After the decoder finishes attending to its own generated tokens through masked self-attention, it still
              needs a way to connect back to the input sentence the encoder processed. That's where cross-attention
              comes in. It acts as a bridge between the encoder and decoder, letting the decoder{" "}
              <strong>"look over"</strong> at the encoder's output to decide which parts of the input matter most for
              generating the next word.
            </p>

            <p className="leading-relaxed">There are actually two sequences involved:</p>

            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>
                <strong>Source sentence</strong> → processed by the encoder
              </li>
              <li>
                <strong>Target sentence</strong> → generated by the decoder
              </li>
            </ul>

            <p className="leading-relaxed">
              During training, the input to the decoder is the target sequence{" "}
              <strong>shifted one position to the</strong> right, starting with a special beginning-of-sentence token (
              <strong>&lt;start&gt;</strong>).
            </p>

            <p className="leading-relaxed">
              This ensures each output position only receives previous tokens, not the token at the same position.
            </p>

            <p className="leading-relaxed">
              That behavior is enforced by the <strong>shift + self-attention mask</strong> working together.
            </p>

            <p className="leading-relaxed">Mechanically:</p>

            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li>
                The encoder's output provides the key (K) and value (V) to the decoder's second multi-head attention
                layer.
              </li>
              <li>The query (Q) comes from the decoder's own hidden states (based on what's been generated so far).</li>
            </ul>

            <p className="leading-relaxed">
              So instead of attending within the same sequence like in self-attention, the decoder is now attending
              across sequences, aligning what it's generating with what the encoder understood.
            </p>

            <div className="my-8 flex justify-center">
              <img
                src="/cross-attention-clean.svg"
                alt="Each attention head computes its own set of Q, K, and V projections, produces an attention output, and all heads are then concatenated and projected through W0 to form the final output"
                className="max-w-3xl w-full rounded-lg"
              />
            </div>

            <p className="text-sm mt-2 text-center italic text-slate-600">
              During training, the encoder receives the source sentence, and the decoder receives the target sentence
              shifted one position to the right. This shift, along with masking, ensures the decoder predicts each word
              based only on previously seen tokens.
            </p>

            {/* Feed-Forward Neural Networks Section */}
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Feed-Forward Neural Networks</h2>

            <p className="leading-relaxed">
              Once attention has done its job capturing relationships between tokens and layering in contextual meaning,
              the Transformer passes that information through a Feed-Forward Neural Network (FFN).
            </p>

            <p className="leading-relaxed">
              You can think of the FFN as the processing unit of each layer. While attention tells the model what to
              focus on, the FFN decides what to do with that information. Every token in the sequence is passed through
              the same small neural network independently, applying non-linear transformations that help the model
              detect deeper and more abstract features.
            </p>

            <p className="leading-relaxed mt-8 font-bold text-lg">Architecture</p>

            <p className="leading-relaxed">
              The FFN in each encoder and decoder layer consists of two linear transformations with a non-linear
              activation function applied between them.
            </p>

            <div className="my-8 flex justify-center">
              <img
                src="/ffn_equation_clean.svg"
                alt="Feed-forward neural network equation"
                className="max-w-2xl w-full rounded-lg"
              />
            </div>

            <p className="text-sm mt-2 text-center italic text-slate-600">
              Mathematical form of the Feed-Forward Neural Network in each Transformer layer
            </p>

            <div className="my-8 flex justify-center">
              <img
                src="/FFN_pw_clean.svg"
                alt="Position-wise feed-forward network applied to each token independently"
                className="w-3/5 ml-16 rounded-lg"
              />
            </div>

            <p className="text-sm mt-2 text-center italic text-slate-600">
              Inside the Transformer's Feed-Forward Layer
            </p>

            <p className="leading-relaxed mt-8">
              <strong>1) Expansion:</strong> The first linear layer projects the input vector x from the model's
              embedding dimension (d_model) to a larger intermediate dimension (dff).
            </p>

            <p className="leading-relaxed">
              In the original Transformer paper, dff was set to 4 times the dimension as d_model (eg. 512 → 2048). This
              expansion allows the model to learn more complex features.
            </p>

            <p className="leading-relaxed mt-6">
              <strong>2) Non-linear Activation:</strong> An activation function is applied to the output of the first
              transformation. This step introduces non-linearity, which gives the model expressive power. Without it,
              stacking multiple Transformer layers would still behave like one big linear transformation, and limit the
              model's ability to capture complex relationships. Earlier transformer models used ReLU.
            </p>

            <p className="leading-relaxed mt-6">
              <strong>3) Contraction:</strong> The second linear transformation then "contracts" the expanded
              representation back to the original model dimension (d_ff → d_model). This ensures that the output has the
              same dimensionality as the input.
            </p>

            <div className="my-8 flex justify-center">
              <img
                src="/expansioncontractionv3_clean.svg"
                alt="Feed-Forward Network expansion and contraction visualization"
                className="max-w-3xl w-full rounded-lg"
              />
            </div>

            <p className="text-sm mt-2 text-center italic text-slate-600">
              Feed-Forward Network (FFN): Expands each token's vector (512 → 2048) through a linear layer, applies a
              non-linear activation (e.g. ReLU), and compresses it back (2048 → 512).
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Layer Normalization</h2>

            <p className="leading-relaxed">
              Training deep models like Transformers is hard. They contain billions of parameters, and gradients can
              easily <strong>explode</strong> or <strong>vanish</strong> as signals move through layers. To stabilize
              learning, Transformers use Layer Normalization.
            </p>
            <p className="leading-relaxed">
              Normalization helps by scaling activations so that their <strong>mean is 0</strong> and{" "}
              <strong>standard deviation is 1</strong>. This keeps every layer's outputs within a steady range,
              preventing some neurons from dominating while others fade out. In simple terms, it ensures that learning
              happens smoothly and consistently across ALL features.
            </p>

            <p className="leading-relaxed">
              Unlike Batch Normalization, which normalizes across a batch of examples, Layer Normalization works within
              each <strong>data point</strong>, where it normalizes across the features of a single token. That's why
              it's ideal for Transformers, where batch sizes or sequence lengths can vary!
            </p>

            <div className="my-8 flex justify-center">
              <img
                src="/layernorm_eq_clean.svg"
                alt="Layer normalization equation"
                className="max-w-3xl w-full rounded-lg"
              />
            </div>

            <p className="text-sm mt-2 text-center italic text-slate-600">
              Layer Normalization rescales each token's activations so that their mean is 0 and variance is 1. This
              keeps learning stable by preventing gradients from exploding or vanishing, while the learnable parameters
              (γ and β) let the model fine-tune how much to scale or shift the result
            </p>

            {/* Residual Connections Section */}
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Residual Connections</h2>

            <p className="leading-relaxed">
              We've now covered the following mechanisms: Attention for <strong>context</strong>, the FFN for deep{" "}
              <strong>feature transformation</strong>, and Layer Normalization for <strong>stability</strong>.
            </p>

            <p className="leading-relaxed">
              But think back to when we discussed the problem of <strong>vanishing gradients</strong> (the reason we
              scale the dot products in Attention). While Layer Normalization helps stabilize things, it doesn't fully
              solve the issue of building truly deep, stable models.
            </p>

            <p className="leading-relaxed">
              How do you make a model that's over ten to hundreds of layers deep, without the early layers forgetting
              how to learn? The answer is residual connections!
            </p>

            <p className="leading-relaxed">
              Imagine a pipeline where water has to flow through ten layers of filter paper. By the time it reaches the
              last layer, the pressure is incredibly low. Similarly, in a deep neural network, information (and the
              learning signal, the gradient) can degrade and fade as it passes through sequential layers. This can lead
              to 2 problems:
            </p>

            <ul className="list-none pl-6 space-y-2 text-foreground mb-6">
              <li>
                1) <strong>Vanishing Gradients</strong>: The learning signal dies before reaching the layers closest to
                the input.
              </li>
              <li>
                2) <strong>Identity Crisis</strong>: Each layer is forced to learn the entire complex function from
                scratch, which is incredibly difficult for the optimization algorithm
              </li>
            </ul>

            <p className="leading-relaxed">
              The solution is to create a <strong>direct</strong> bypass known as{" "}
              <strong>residual or "skip" connections</strong> around every sublayer (in a transformer, this is applied
              around both the Multi-head attention block and the Feed Forward Neural-Network block.
            </p>

            <div className="my-8 flex justify-center">
              <img
                src="/residualconnections_clean.svg"
                alt="Residual connections diagram showing Add & Norm mechanism"
                className="max-w-3xl w-full rounded-lg"
              />
            </div>

            <p className="text-sm mt-2 text-center italic text-slate-600">
              The Core Residual Mechanism: Add & Norm. The x bypasses the sub-layer F(x) and is added to its output,
              followed by Layer Normalization (LayerNorm). This crucial step stabilizes learning in deep Transformer
              stacks
            </p>

            {/* CHANGE: Adding explanation paragraph after residual connections caption */}
            <p className="leading-relaxed mt-6">
              This residual connection is is the line you see above running around the main block. It is a direct path
              that lets information and gradients flow smoothly through the network. This simple addition (
              <strong>x and sublayer F(x)</strong>) prevents information loss, keeps gradients stable during training,
              and helps the model converge faster! Without residual connections, Transformers simply wouldn't be
              trainable.
            </p>

            {/* CHANGE: Adding Positional Encoding section */}
            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Positional Encoding</h2>

            <p className="leading-relaxed">
              So far, we&#39;ve covered what the Transformer pays attention to, but not where.
            </p>

            <p className="leading-relaxed">
              Unlike RNNs, which process tokens sequentially, Transformers see the entire input at once. That
              parallelism is what makes them so fast...but it also means they lose any built-in{" "}
              <strong>sense of order</strong>.
            </p>

            <p className="leading-relaxed">
              To fix this, we inject <strong>positional encodings</strong>: extra signals that tell the model where each
              token is in the sequence. Each token's embedding is combined with a positional vector of the same
              dimension, giving the model two pieces of information:
            </p>

            <ul className="list-none pl-6 space-y-2 text-foreground mb-6">
              <li>
                1. What the token represents (its <strong>meaning</strong>), and
              </li>
              <li>
                2. Where it appears (its <strong>position</strong>).
              </li>
            </ul>

            <div className="my-8 flex justify-center">
              <img
                src="/positional_clean.svg"
                alt="Input embeddings combined with positional embeddings"
                className="max-w-3xl w-full rounded-lg"
              />
            </div>

            <p className="text-sm mt-2 text-center italic text-slate-600">
              Each input embedding is combined with a positional encoding to represent both meaning and sequence
            </p>

            {/* CHANGE: Moving this paragraph up to come right after the caption */}
            <p className="leading-relaxed mt-6">
              Each token position produces a wave-like pattern across <strong>embedding dimensions</strong>. Together,
              these overlapping <strong>sine and cosine functions</strong> form a unique "positional fingerprint" for
              every token.
            </p>

            {/* CHANGE: This paragraph now comes after the positional fingerprint explanation */}
            <p className="leading-relaxed mt-6">
              Each embedding dimension <strong>oscillates</strong> at a different frequency. Low-frequency waves capture
              broad, global structure (like "beginning vs end"), while high-frequency waves capture finer details ("next
              token vs previous one").
            </p>

            <p className="leading-relaxed">
              When added to token embeddings, these waves create unique signatures for each position. Since sine and
              cosine are continuous, the model can infer relative distances between tokens. This lets the Transformer
              generalize to sequences longer than any it saw during training.
            </p>

            <p className="leading-relaxed">
              To make this concrete, here's a smaller example with d = 4 showing how each token ("Transformers are
              cool") gets its own positional encoding vector:
            </p>

            <div className="my-8 flex justify-center">
              <img
                src="/positional_math_clean.svg"
                alt="Positional encoding example with d=4"
                className="max-w-3xl w-full rounded-lg"
              />
            </div>

            <p className="text-sm mt-2 text-center italic text-slate-600">
              Positional encoding with d=4: each position is represented by interleaved sine and cosine values at
              varying frequencies, allowing the model to infer relative and absolute position.
            </p>

            <p className="leading-relaxed mt-8 font-medium">
              And...that's it. That completes the full transformer architecture!
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-12 mb-6">Final Remarks! </h2>

            <p className="leading-relaxed">
              If you've made it this far, I hope you can now see how the Transformer came to life! From the long history
              of models that led up to it, and why every design choice exists the way it does. Every part of it:
              attention, feed-forward networks, layer normalization, came from fixing something the last generation
              couldn't.
            </p>

            <p className="leading-relaxed">
              Now that you understand the foundation, you can actually dive into the fun stuff. You'll be able to read
              about attention optimization techniques like FlashAttention, Sparse Attention, or Grouped Query Attention
              and know what they're improving. You'll understand how the FFN evolves into Mixture-of-Experts (MoE), and
              how newer models use Rotary Positional Embeddings (RoPE) instead of fixed sinusoids &amp; why that works.
            </p>

            <p className="leading-relaxed">
              All of this makes way more sense once you've built a solid mental picture of the original Transformer.
              That's what this piece was meant to do. It took me months to research, refine, and hand-illustrate, and I
              hope it gave you the kind of clear, visual understanding I once wished I had.
            </p>

            <p className="leading-relaxed">
              The Transformer isn't just a model. It's a story of small, clever ideas stacked over time - each one
              bringing us closer to teaching machines how to understand us. You now understand the foundation that
              powers almost every modern AI model. From here, the frontier's yours to explore :)))
            </p>

            <div className="mt-12 p-4 bg-gray-50 border-t border-gray-200 rounded-lg">
              <p className="text-sm text-center text-gray-600 italic">
                © All diagrams and illustrations in this article were hand-drawn and belong to Krupa Dave.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4">References</h3>
              <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
                <li>
                  Vaswani et al., "Attention Is All You Need."{" "}
                  <a
                    href="https://arxiv.org/abs/1706.03762"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 underline"
                  >
                    arXiv:1706.03762
                  </a>
                </li>
                <li>
                  Bahdanau et al., "Neural Machine Translation by Jointly Learning to Align and Translate."{" "}
                  <a
                    href="https://arxiv.org/abs/1409.0473"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 underline"
                  >
                    arXiv:1409.0473
                  </a>
                </li>
                <li>
                  He et al., "Deep Residual Learning for Image Recognition."{" "}
                  <a
                    href="https://arxiv.org/abs/1512.03385"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 underline"
                  >
                    arXiv:1512.03385
                  </a>
                </li>
                <li>
                  Jay Alammar, "The Illustrated Transformer."{" "}
                  <a
                    href="https://jalammar.github.io/illustrated-transformer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 underline"
                  >
                    jalammar.github.io
                  </a>
                </li>
                <li>
                  Alejandro Ito Aramendia, "Attention Is All You Need: A Complete Guide to Transformers."{" "}
                  <a
                    href="https://medium.com/@italojs/attention-is-all-you-need-a-complete-guide-to-transformers-8d3e6f9e5e0e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 underline"
                  >
                    Medium
                  </a>
                </li>
                <li>
                  StatQuest with Josh Starmer, "Transformers Explained Visually."{" "}
                  <a
                    href="https://www.youtube.com/watch?v=zxQyTK8quyY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 underline"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  Roy Swastik, "Transformer Tokenization and Vocabulary Creation."{" "}
                  <a
                    href="https://huggingface.co/blog/tokenization"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 underline"
                  >
                    Hugging Face Blog
                  </a>
                </li>
                <li>
                  Stack Overflow, "Transformer 'Attention Is All You Need' Encoder-Decoder Cross-Attention Explanation."{" "}
                  <a
                    href="https://stackoverflow.com/questions/62399162/transformer-attention-is-all-you-need-encoder-decoder-cross-attention-explana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 underline"
                  >
                    Stack Overflow Thread
                  </a>
                </li>
                <li>
                  AI Research Studies, "History of Large Language Models: From 1940 to 2023."{" "}
                  <a
                    href="https://ai-researchstudies.com/history-of-large-language-models/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 underline"
                  >
                    ai-researchstudies.com
                  </a>
                </li>
                <li>
                  DataCamp, "Feed-Forward Neural Networks Explained."{" "}
                  <a
                    href="https://www.datacamp.com/tutorial/feed-forward-neural-networks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 underline"
                  >
                    datacamp.com
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}
