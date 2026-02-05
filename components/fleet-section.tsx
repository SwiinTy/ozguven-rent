"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings2, Fuel, Users, MessageCircle } from "lucide-react"
import { translations } from "@/constants/translations"

const vehicles = [
  { id: 1, name: "Hyundai Bayon", category: "SUV", image: "/car1.png", transmission: { tr: "Otomatik", en: "Automatic", ru: "Автомат" }, fuel: { tr: "Benzin", en: "Petrol", ru: "Бензин" }, seats: 5 },
  { id: 2, name: "Toyota CH-R", category: "Hybrid", image: "/car2.png", transmission: { tr: "Otomatik", en: "Automatic", ru: "Автомат" }, fuel: { tr: "Hibrit", en: "Hybrid", ru: "Гибрид" }, seats: 5 },
  { id: 3, name: "Hyundai i20", category: "Ekonomik", image: "/car3.png", transmission: { tr: "Otomatik", en: "Automatic", ru: "Автомат" }, fuel: { tr: "Benzin", en: "Petrol", ru: "Бензин" }, seats: 5 },
  { id: 4, name: "Toyota Corolla", category: "Sedan", image: "/car4.png", transmission: { tr: "Otomatik", en: "Automatic", ru: "Автомат" }, fuel: { tr: "Benzin", en: "Petrol", ru: "Бензин" }, seats: 5 },
  { id: 5, name: "Renault Clio", category: "Ekonomik", image: "/car5.png", transmission: { tr: "Otomatik", en: "Automatic", ru: "Автомат" }, fuel: { tr: "Benzin", en: "Petrol", ru: "Бензин" }, seats: 5 },
  { id: 6, name: "Hyundai Accent Blue", category: "Sedan", image: "/car6.png", transmission: { tr: "Otomatik", en: "Automatic", ru: "Автомат" }, fuel: { tr: "Benzin", en: "Petrol", ru: "Бензин" }, seats: 5 },
]

export function FleetSection({ lang = "tr" }: { lang: string }) {
  const t = translations[lang].fleet
  const whatsappNumber = "905446333107"

  return (
    <section id="fleet" className="py-20 bg-slate-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-orange-100 text-orange-600 border-none px-4 py-1 uppercase font-bold tracking-widest">{t.title}</Badge>
          <h2 className="text-3xl md:text-5xl font-medium text-slate-900 mb-4 tracking-tight">{t.subtitle}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">{t.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="group overflow-hidden bg-white/70 backdrop-blur-md border-slate-100 shadow-xl shadow-slate-200/50 rounded-[32px] transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-56 flex items-center justify-center p-6 bg-gradient-to-b from-slate-50 to-white">
                <img src={vehicle.image} alt={vehicle.name} className="object-contain max-h-full drop-shadow-[0_15px_25px_rgba(0,0,0,0.1)] transition-transform duration-700 group-hover:scale-110" />
                <Badge className="absolute top-6 right-6 bg-white/80 backdrop-blur-md text-slate-900 border-none shadow-sm uppercase font-bold text-[10px]">{vehicle.category}</Badge>
              </div>

              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">{vehicle.name}</h3>
                
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {[
                    { icon: Settings2, label: vehicle.transmission[lang as keyof typeof vehicle.transmission] },
                    { icon: Fuel, label: vehicle.fuel[lang as keyof typeof vehicle.fuel] },
                    { icon: Users, label: `${vehicle.seats} ${lang === 'tr' ? 'Kişi' : lang === 'ru' ? 'Мест' : 'Seats'}` }
                  ].map((spec, i) => (
                    <div key={i} className="flex flex-col items-center p-3 bg-white/50 rounded-2xl border border-white shadow-sm">
                      <spec.icon className="h-4 w-4 text-orange-500 mb-2" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{spec.label}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full bg-[#25D366] hover:bg-[#1ebd5b] text-white h-14 rounded-2xl text-md font-bold gap-3 shadow-lg"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hello ÖzGüven Rent, info about ${vehicle.name}`, '_blank')}
                >
                  <MessageCircle className="w-5 h-5" />
                  {t.button}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}