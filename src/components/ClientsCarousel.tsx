import React, { useEffect, useRef } from 'react'

const logos = ['Логотип 1','Логотип 2','Логотип 3','Логотип 4','Логотип 5','Логотип 6','Логотип 7']

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
          {logos.map((l, idx)=>(
            <div
             key={l}
              className={`shrink-0 w-40 h-24 rounded-xl border grid place-items-center bg-white transition-all`}
              aria-label={l}
            >
              <span className="text-sm">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
