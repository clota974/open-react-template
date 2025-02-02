export const metadata = {
  title: 'Accueil — MySnack.re — Simplifiez la gestion de votre Snack Bar',
  description: 'Notre système connecté centré sur le client permet aux Snack Bars réunionnais de réaliser des économies de temps et une fidélisation du client',
  alternates: {
    canonical: 'https://mysnack.re',
  }
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
}
