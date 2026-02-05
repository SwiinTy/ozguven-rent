"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Fuel, Settings2, Users, Search, MapPin, Navigation } from "lucide-react"
// Sözlüğü buraya da ekliyoruz
import { translations } from "@/constants/translations"

const cars = [
  { name: "Hyundai Bayon", fuel: "Benzin", gear: "Otomatik", capacity: "5 Kişi", image: "/car1.png" },
  { name: "Toyota CH-R", fuel: "Hybrid", gear: "Otomatik", capacity: "5 Kişi", image: "/car2.png" },
  { name: "Hyundai i20", fuel: "Benzin", gear: "Otomatik", capacity: "5 Kişi", image: "/car3.png" },
  { name: "Toyota Corolla", fuel: "Benzin", gear: "Otomatik", capacity: "5 Kişi", image: "/car4.png" },
  { name: "Renault Clio", fuel: "Benzin", gear: "Otomatik", capacity: "5 Kişi", image: "/car5.png" },
  { name: "Hyundai Accent Blue", fuel: "Benzin", gear: "Otomatik", capacity: "5 Kişi", image: "/car6.png" },
  { name: "Fiat Egea", fuel: "Benzin", gear: "Otomatik", capacity: "5 Kişi", image: "/car7.png" },
]

// lang prop'unu buraya ekledik
export function HeroSection({ lang = "tr" }: { lang: string }) {
  const [index, setIndex] = React.useState(0)
  const whatsappNumber = "905446333107"
  const googleMapsUrl = "https://share.google/Cr0ieLREKKv30v4BS"

  // Seçili dile göre çevirileri alıyoruz
  const t = translations[lang].hero

  const nextStep = React.useCallback(() => {
    setIndex((prev) => (prev === cars.length - 1 ? 0 : prev + 1))
  }, [])

  const prevStep = () => setIndex((prev) => (prev === 0 ? cars.length - 1 : prev - 1))

  React.useEffect(() => {
    const timer = setInterval(nextStep, 3000)
    return () => clearInterval(timer)
  }, [nextStep, index])

  return (
    <section className="relative w-full pt-28 pb-12 md:pt-40 md:pb-20 overflow-hidden min-h-[850px] flex items-center bg-white">
      
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img src="/hero-bg.jpg" alt="Background" className="w-full h-full object-cover opacity-80 filter blur-[0.5px] scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/60 to-white" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        
        {/* Üst Kısım - Dile göre değişir */}
        <div className="hidden md:flex justify-center mb-16">
          <div className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-xl border border-white/50 flex items-center gap-6 px-10">
            <div className="flex items-center gap-2 text-slate-500 border-r pr-6 border-slate-200 text-sm font-medium">
              <Search className="w-5 h-5 text-orange-500" />
              <span>{t.badge}</span> {/* "Antalya Havalimanı Teslim" çevirisi */}
            </div>
            <div className="text-sm font-bold text-slate-800 uppercase tracking-widest">{t.title}</div> {/* "Hemen Araç Rezerve Et" çevirisi */}
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-orange-600 shadow-md transition-all"
                 onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}>
              <ChevronRight className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="relative w-full lg:w-3/4 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -30 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="w-full flex flex-col items-center"
              >
                <div className="relative w-full max-w-2xl aspect-[16/9] mb-4 group flex items-center justify-center">
                  <img src={cars[index].image} alt={cars[index].name} className="w-[110%] h-auto object-contain relative z-10 drop-shadow-[0_25px_45px_rgba(0,0,0,0.18)]" />
                  <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[80%] h-10 bg-black/20 blur-[50px] rounded-[100%] z-0" />
                </div>

                <div className="text-center w-full mt-4">
                  <h2 className="text-4xl md:text-6xl font-medium text-slate-900 mb-8 tracking-tight drop-shadow-sm">
                    {cars[index].name}
                  </h2>

                  {/* Araç Özellikleri - Dile göre başlıklar değişir */}
                  <div className="flex items-center justify-center gap-4 md:gap-8 mb-4">
                    {[
                      { icon: Fuel, label: cars[index].fuel, title: t.fuel },
                      { icon: Settings2, label: cars[index].gear, title: t.gear },
                      { icon: Users, label: cars[index].capacity, title: t.capacity }
                    ].map((spec, i) => (
                      <div key={i} className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-sm">
                          <spec.icon className="w-5 h-5 text-orange-500" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] font-bold text-slate-400 tracking-widest uppercase">{spec.title}</span>
                          <span className="text-xs md:text-sm font-semibold text-slate-800">{spec.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button onClick={prevStep} className="absolute left-0 z-30 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-slate-100 hover:bg-orange-500 hover:text-white transition-all"><ChevronLeft size={24} /></button>
            <button onClick={nextStep} className="absolute right-0 z-30 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-slate-100 hover:bg-orange-500 hover:text-white transition-all"><ChevronRight size={24} /></button>
          </div>

          <div className="w-full lg:w-1/4 h-full flex items-center">
            <div className="w-full bg-white/60 backdrop-blur-2xl p-5 rounded-[32px] border border-white/80 shadow-2xl flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500 rounded-xl text-white shadow-md"><MapPin size={20} /></div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm">{lang === 'tr' ? 'Ofisimiz' : lang === 'ru' ? 'Наш офис' : 'Our Office'}</h4>
                  <p className="text-slate-500 text-xs font-medium">Antalya / Alanya</p>
                </div>
              </div>
              <div className="w-full h-48 rounded-2xl overflow-hidden border border-white/50 relative">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102357.75476906232!2d31.90806489379685!3d36.54133496929948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dca298f237f37f%3A0x6d091a4579c35d97!2sAlanya%2C%20Antalya!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" className="w-full h-full grayscale opacity-80" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
              </div>
              <button onClick={() => window.open(googleMapsUrl, '_blank')} className="w-full bg-slate-900 hover:bg-orange-500 text-white h-12 rounded-xl text-xs font-bold gap-2 flex items-center justify-center transition-all">
                <Navigation size={16} />
                {lang === 'tr' ? 'Yol Tarifi Al' : lang === 'ru' ? 'Проложить маршрут' : 'Get Directions'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}