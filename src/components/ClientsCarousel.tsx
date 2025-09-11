import React, { useEffect, useRef, useState } from "react"

const images = [
  '/lovable-uploads/Wildberries_Logo.png',
  '/lovable-uploads/dabrabyt-logo.png',
  '/lovable-uploads/logo-sber.png',
  '/lovable-uploads/ozon.png',
  '/lovable-uploads/riviera-logo.png',
  '/lovable-uploads/tsum_533_001_3.png',
  '/lovable-uploads/x5-logo.png'
]

export const ClientsCarousel: React.FC = () => {
  const track = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = track.current
    if (!el) return
    let i = 0
    const id = setInterval(() => {
      i = (i + 1) % images.length
      el.scrollTo({ left: i * 200, behavior: "smooth" }) // 200 ≈ avg width with padding
    }, 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Наши крупные клиенты</h2>
      <div className="relative">
        <div
          ref={track}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-2"
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="shrink-0 h-24 px-6 py-3 rounded-xl border bg-white flex items-center justify-center"
            >
              <img
                src={src}
                alt={`Logos showcase ${idx + 1}`}
                className="h-full w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

