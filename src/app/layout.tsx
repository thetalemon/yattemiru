import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'やってみる部',
  description: 'のんびり新しい何かにトライしてみる人々の集まりです。月に2回ぐらい「最近コレやってみました！」を報告するオンラインミーティングが主活動となっています。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
