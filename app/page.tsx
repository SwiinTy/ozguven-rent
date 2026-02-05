"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FleetSection } from "@/components/fleet-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export default function Home() {
  // Varsayılan dili Türkçe ("tr") olarak başlatıyoruz.
  // Bu state değiştikçe tüm sayfa anında Rusça veya İngilizce olur.
  const [lang, setLang] = useState("tr")

  return (
    <main className="min-h-screen bg-white">
      {/* Header'a hem mevcut dili (lang) hem de dili değiştirecek 
        fonksiyonu (setLang) gönderiyoruz. 
      */}
      <Header lang={lang} setLang={setLang} />

      {/* Diğer tüm bölümlere sadece lang (mevcut dil) bilgisini 
        gönderiyoruz ki içindeki yazıları ona göre ayarlasınlar.
      */}
      <HeroSection lang={lang} />
      
      <div id="fleet">
        <FleetSection lang={lang} />
      </div>

      <div id="services">
        <ServicesSection lang={lang} />
      </div>

      <Footer lang={lang} />
    </main>
  )
}