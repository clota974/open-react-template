import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logo.png'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid  gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2" style={{
                height: '75px',
                width: '75px',
                padding: 10
              }}>
                {/* Logo */}
                <Link href="/" className="block" aria-label="Cruip">
                  <Image src={Logo} alt="Logo de MySnack.re" className='h-full object-contain' />
                </Link>
              </div>
              <div className="text-gray-400">MySnack.re est une Start-Up réunionnaise</div>
              <div className="text-gray-400">Retrouvez-nous sur Facebook</div>
              <div className="text-gray-400">0692 56 04 65</div>
            </div>


            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; Killian CLOTAGATIDE. Tous droits réservés.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
