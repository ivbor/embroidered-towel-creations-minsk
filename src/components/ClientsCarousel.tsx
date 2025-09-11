import React, { useEffect, useRef } from 'react'

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
  useEffect(()=> {
    // simple auto-scroll ~3–4s per central item per brief :contentReference[oaicite:8]{index=8}
    const el = track.current
    if (!el) return
    let i = 0
    const id = setInterval(()=>{
      i = (i+1) % logos.length
      el.scrollTo({ left: i * 160, behavior: 'smooth'})
    }, 3500)
    return ()=>clearInterval(id)
  },[])

  return (
    
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Наши крупные клиенты</h2>
      <div className="relative">
        <div ref={track} className="flex gap-4 overflow-x-auto scroll-smooth pb-2">
          {images.map((image, idx)=>(
            <div
             key={idx}
              className={`shrink-0 w-40 h-24 rounded-xl border grid place-items-center bg-white transition-all`}
              aria-label={idx}
            >
              <img
                src={image}
                alt={`Logos showcase ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
