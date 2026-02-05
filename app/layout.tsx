import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // İŞTE BU SATIR SİLİNDİĞİ İÇİN SİTE ÇÖKTÜ!

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ÖzGüven Rent | Alanya Araç Kiralama & VIP Transfer",
  description: "Alanya ve Antalya'da ekonomik, güvenilir ve yeni model araç kiralama hizmetleri. 7/24 havalimanı transferi ve profesyonel hizmet için ÖzGüven Rent'i seçin.",
  keywords: ["Alanya araç kiralama", "Antalya havalimanı transfer", "Alanya car rental", "Antalya rent a car", "VIP transfer Alanya"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}