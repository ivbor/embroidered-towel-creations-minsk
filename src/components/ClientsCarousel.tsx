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

const BASE_W = 160  // px (your current w-40)
const BASE_H = 96   // px (your current h-24)
const MAX_SCALE = 1.6 // max allowed upscale for small logos before enlarging the box

function LogoBox({ src, alt }: { src: string; alt: string }) {
  const [box, setBox] = useState({ w: BASE_W, h: BASE_H, scale: 1 })
  const imgRef = useRef<HTMLImageElement>(null)

  function onLoad() {
    const img = imgRef.current
    if (!img || !img.naturalWidth || !img.naturalHeight) return
    const iw = img.naturalWidth
    const ih = img.naturalHeight

    // scale needed so the whole image fits inside the base box
    const fitScale = Math.min(BASE_W / iw, BASE_H / ih)

    if (fitScale >= 1) {
      // image is smaller than the box in at least one dimension -> upscale a bit
      if (fitScale <= MAX_SCALE) {
        setBox({ w: BASE_W, h: BASE_H, scale: fitScale })
      } else {
        // would need too much zoom -> grow the box instead, keep scale = 1
        setBox({ w: Math.round(iw * MAX_SCALE), h: Math.round(ih * MAX_SCALE), scale: 1 })
      }
    } else {
      // image is larger -> downscale inside fixed box
      setBox({ w: BASE_W, h: BASE_H, scale: fitScale })
    }
  }

  return (
    <div
      className="shrink-0 rounded-xl border bg-white grid place-items-center p-3 transition-all"
      style={{ width: box.w, height: box.h }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={onLoad}
        loading="lazy"
        decoding="async"
        className="max-w-full max-h-full object-contain"
        style={{ transform: `scale(${box.scale})`, transformOrigin: "center" }}
      />
    </div>
  )
}

export const ClientsCarousel: React.FC = () => {
  const track = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = track.current
    if (!el) return
    let i = 0
    const id = setInterval(() => {
      i = (i + 1) % images.length
      el.scrollTo({ left: i * (BASE_W + 16), behavior: "smooth" }) // 16 ≈ gap-4
    }, 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Наши крупные клиенты</h2>
      <div className="relative">
        <div ref={track} className="flex gap-4 overflow-x-auto scroll-smooth pb-2">
          {images.map((src, idx) => (
            <LogoBox key={idx} src={src} alt={`Logos showcase ${idx + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

