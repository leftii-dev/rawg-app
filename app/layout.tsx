import 'globals.css'
import { Bebas_Neue, Raleway } from 'next/font/google'

export const metadata = {
  title: 'RAWG App',
  description: 'Video game site utilizing RAWG API',
}

  // Set up fonts for use with tailwind
const bebas_neue = Bebas_Neue({
  weight: ['400'],
  subsets:['latin'],
  display: 'swap',
  variable: '--font-title',
});

const raleway = Raleway({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebas_neue.variable} ${raleway.variable}`}>
      <body className='font-body text-body bg-primary-100'>{children}</body>
    </html>
  )
}
