"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe, Menu, Phone, X, MessageCircle } from "lucide-react"
// Çeviri dosyasını içeri aktarıyoruz
import { translations } from "@/constants/translations"

const languages = [
  { code: "tr", label: "Türkçe" },
  { code: "en", label: "English" },
  { code: "ru", label: "Pусский" },
]

// lang ve setLang proplarını buraya ekledik
export function Header({ lang, setLang }: { lang: string, setLang: (l: string) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Mevcut dile göre çevirileri alıyoruz
  const t = translations[lang]

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo - ÖzGüven Rent */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 group-hover:bg-orange-500 transition-colors">
              <span className="text-white font-bold text-lg">ÖG</span>
            </div>
            <span className="text-xl font-black text-slate-900 tracking-tighter uppercase">
              ÖzGüven <span className="text-orange-500">Rent</span>
            </span>
          </Link>

          {/* Masaüstü Navigasyon - Çeviriye bağlandı */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-orange-500 transition-colors">{t.nav.home}</Link>
            <Link href="#fleet" className="text-sm font-semibold text-slate-600 hover:text-orange-500 transition-colors">{t.nav.fleet}</Link>
            <Link href="#services" className="text-sm font-semibold text-slate-600 hover:text-orange-500 transition-colors">{t.nav.services}</Link>
            <Link href="#contact" className="text-sm font-semibold text-slate-600 hover:text-orange-500 transition-colors">{t.nav.contact}</Link>
          </nav>

          <div className="flex items-center gap-4">
            {/* Dil Seçici - setLang fonksiyonunu tetikler */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden sm:flex items-center gap-2 border border-slate-200 rounded-xl px-4">
                  <Globe className="h-4 w-4 text-orange-500" />
                  <span className="uppercase font-bold text-xs">{lang}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-xl border-slate-200">
                {languages.map((l) => (
                  <DropdownMenuItem
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`font-medium ${lang === l.code ? "text-orange-500 bg-orange-50" : ""}`}
                  >
                    {l.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* İletişim */}
            <Link
              href="tel:+905446333107"
              className="hidden lg:flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-orange-500 transition-colors"
            >
              <Phone className="h-4 w-4 text-orange-500" />
              +90 (544) 633 31 07
            </Link>

            <Button 
              className="hidden sm:flex bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 gap-2 shadow-lg"
              onClick={() => window.open('https://wa.me/905446333107', '_blank')}
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              {t.common.whatsapp}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobil Menü - Çeviriye bağlandı */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-in fade-in zoom-in duration-200">
            <nav className="flex flex-col gap-5">
              <Link href="/" className="text-base font-bold text-slate-700 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>{t.nav.home}</Link>
              <Link href="#fleet" className="text-base font-bold text-slate-700 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>{t.nav.fleet}</Link>
              <Link href="#services" className="text-base font-bold text-slate-700 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>{t.nav.services}</Link>
              <Link href="#contact" className="text-base font-bold text-slate-700 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</Link>
              
              <div className="flex flex-col gap-4 pt-6 border-t border-border">
                <div className="flex justify-between items-center px-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{lang === 'tr' ? 'DİL SEÇİN' : 'SELECT LANGUAGE'}</span>
                    <div className="flex gap-3">
                        {languages.map(l => (
                            <button key={l.code} onClick={() => {setLang(l.code); setIsMenuOpen(false)}} className={`text-xs font-bold ${lang === l.code ? 'text-orange-500 underline' : 'text-slate-600'}`}>
                                {l.code.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
                <Button 
                  className="w-full bg-[#25D366] hover:bg-[#1ebd5b] text-white py-6 text-lg rounded-xl gap-2 font-bold"
                  onClick={() => window.open('https://wa.me/905446333107', '_blank')}
                >
                  <MessageCircle className="w-6 h-6" />
                  {t.common.whatsapp}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}