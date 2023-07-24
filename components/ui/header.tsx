import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './mobile-menu'
import Logo from '@/public/images/logo.png'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrin mr-4 overflow-hidden" style={{
            height: '75px',
            width: '75px',
            padding: 10
            }}>
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image src={Logo} alt="Logo de MySnack.re" className='h-full object-contain'  />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="https://forms.gle/bnPEgwMvPGSvwyNW9" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                Rejoindre la liste privée
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
