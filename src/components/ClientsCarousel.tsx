import React, { useEffect, useRef } from 'react'

// const logos = ['Логотип 1','Логотип 2','Логотип 3','Логотип 4','Логотип 5','Логотип 6','Логотип 7']

export const ClientsCarousel: React.FC = () => {
  // const track = useRef<HTMLDivElement>(null)
  // useEffect(()=> {
  //   // simple auto-scroll ~3–4s per central item per brief :contentReference[oaicite:8]{index=8}
  //   const el = track.current
  //   if (!el) return
  //   let i = 0
  //   const id = setInterval(()=>{
  //     i = (i+1) % logos.length
  //     el.scrollTo({ left: i * 160, behavior: 'smooth'})
  //   }, 3500)
  //   return ()=>clearInterval(id)
  // },[])

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Наши крупные клиенты</h2>
      <TowelCarousel images={[
        "/lovable-uploads/Wildberries_Logo.png",
        "/lovable-uploads/dabrabyt-logo.png",
        "/lovable-uploads/logo-sber.png",
        "/lovable-uploads/ozon.png",
        "/lovable-uploads/riviera-logo.png",
        "/lovable-uploads/tsum_533_001_3.png",
        "/lovable-uploads/x5-logo.png"
      ]} />
    </section>
  )
}
