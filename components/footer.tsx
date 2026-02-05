"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Car, Instagram, Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"
import { translations } from "@/constants/translations"

export function Footer({ lang = "tr" }: { lang: string }) {
  const t = translations[lang].footer
  
  const footerLinks = {
    kurumsal: [
      { label: lang === 'tr' ? "Hakkımızda" : lang === 'ru' ? "О нас" : "About Us", href: "#" },
      { label: lang === 'tr' ? "Kariyer" : lang === 'ru' ? "Карьера" : "Careers", href: "#" },
    ],
    hizmetler: [
      { label: lang === 'tr' ? "Araç Kiralama" : lang === 'ru' ? "Аренда авто" : "Car Rental", href: "#fleet" },
      { label: lang === 'tr' ? "Transfer" : lang === 'ru' ? "Трансфер" : "Transfer", href: "#services" },
    ],
    destek: [
      { label: lang === 'tr' ? "İletişim" : lang === 'ru' ? "Контакты" : "Contact", href: "#contact" },
      { label: "SSS / FAQ", href: "#" },
    ],
  }

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500"><Car className="h-6 w-6 text-white" /></div>
              <span className="text-xl font-bold text-white uppercase tracking-tighter">ÖzGüven Rent</span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm">{t.desc}</p>

            <div className="space-y-3">
              <Link href="tel:+905446333107" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors font-medium">
                <Phone className="h-4 w-4 text-orange-500" /> +90 (544) 633 31 07
              </Link>
              <Link href="mailto:hamzahasret07@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors font-medium">
                <Mail className="h-4 w-4 text-orange-500" /> hamzahasret07@gmail.com
              </Link>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-orange-500" /> <span className="font-medium">Alanya, Antalya, Türkiye</span>
              </div>
            </div>
          </div>

          <div><h4 className="font-semibold text-white mb-4 uppercase tracking-widest text-xs">{t.kurumsal}</h4>
            <ul className="space-y-3 text-sm">{footerLinks.kurumsal.map((link) => (<li key={link.label}><Link href={link.href} className="hover:text-orange-500">{link.label}</Link></li>))}</ul>
          </div>
          <div><h4 className="font-semibold text-white mb-4 uppercase tracking-widest text-xs">{t.hizmetler}</h4>
            <ul className="space-y-3 text-sm">{footerLinks.hizmetler.map((link) => (<li key={link.label}><Link href={link.href} className="hover:text-orange-500">{link.label}</Link></li>))}</ul>
          </div>
          <div><h4 className="font-semibold text-white mb-4 uppercase tracking-widest text-xs">{t.destek}</h4>
            <ul className="space-y-3 text-sm">{footerLinks.destek.map((link) => (<li key={link.label}><Link href={link.href} className="hover:text-orange-500">{link.label}</Link></li>))}</ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-8 border-y border-slate-800">
          <div className="flex w-full lg:w-auto gap-2">
            <Input type="email" placeholder={lang === 'tr' ? 'E-posta' : 'Email'} className="bg-slate-800 border-slate-700 text-white w-full lg:w-64 rounded-xl" />
            <Button className="bg-orange-500 text-white rounded-xl px-6"><Send className="h-4 w-4 mr-2" /> OK</Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-sm text-slate-500 font-medium">© {new Date().getFullYear()} ÖzGüven Rent. {t.rights}</p>
          <div className="flex items-center gap-4">
            <Link href="https://www.instagram.com/oz_guven_rent_a_car" target="_blank" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-orange-500 text-white shadow-lg"><Instagram className="h-5 w-5" /></Link>
            <Link href="https://wa.me/c/905446333107" target="_blank" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-[#25D366] text-white shadow-lg"><MessageCircle className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}