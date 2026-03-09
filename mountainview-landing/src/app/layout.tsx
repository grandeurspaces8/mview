import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mountain View – مشاريع عقارية فاخرة',
  description: 'اكتشف أفخم المشاريع العقارية مع Mountain View. وحدات سكنية فاخرة بأفضل المواقع.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
