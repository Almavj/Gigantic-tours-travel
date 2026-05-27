import type { AppProps } from 'next/app'
import { Inter, Poppins } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['700', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${poppins.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}
