"use client"

import { Button } from "@/components/ui/button"
import { Plane, MessageCircle, CheckCircle2, Clock } from "lucide-react"
import { translations } from "@/constants/translations"

export function ServicesSection({ lang = "tr" }: { lang: string }) {
  const t = translations[lang].services
  const whatsappNumber = "905446333107"

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch min-h-[550px]">
          
          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center relative z-10">
            <div className="flex items-center gap-3 text-orange-500 mb-6">
              <Plane className="w-8 h-8" />
              <span className="font-bold tracking-[0.2em] uppercase text-sm">{t.badge}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">{t.title}</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">{t.desc}</p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {[
                { tr: "Uçuş Takip Sistemi", en: "Flight Tracking", ru: "Отслеживание рейсов" },
                { tr: "7/24 Hizmet", en: "24/7 Service", ru: "24/7 Сервис" },
                { tr: "Ücretsiz Karşılama", en: "Free Meet & Greet", ru: "Бесплатная встреча" },
                { tr: "Bagaj Yardımı", en: "Luggage Assistance", ru: "Помощь с багажом" }
              ].map((item: any, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-200 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" /> {item[lang]}
                </li>
              ))}
            </ul>

            <Button 
              size="lg"
              className="bg-[#25D366] hover:bg-[#1ebd5b] text-white h-16 rounded-2xl text-lg font-bold gap-3 w-fit shadow-lg"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
            >
              <MessageCircle className="w-6 h-6" />
              {t.button}
            </Button>
          </div>

          <div className="lg:w-1/2 relative bg-slate-800/30 flex items-center justify-center p-8 lg:p-0 min-h-[400px]">
            <div className="absolute w-[400px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full z-0"></div>
            <img src="/car8.png" alt="VIP Transfer" className="relative z-10 object-contain w-full h-auto max-h-[350px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] transform -scale-x-1 lg:scale-125 lg:translate-x-10" />
            
            <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl hidden md:flex items-center gap-3 z-20">
               <div className="bg-orange-500 p-2 rounded-xl"><Clock className="w-6 h-6 text-white" /></div>
               <div>
                 <span className="text-orange-500 text-[10px] font-bold tracking-wider block uppercase">24/7</span>
                 <span className="text-white font-bold block">{lang === 'tr' ? 'Aktif' : lang === 'ru' ? 'Активно' : 'Active'}</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}