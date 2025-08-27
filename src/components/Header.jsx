import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Instagram, Linkedin } from 'lucide-react'
import logo from '../assets/logo.jpg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Áreas de Atuação', href: '#services' },
    { name: 'Cases', href: '#cases' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contato', href: '#contact' }
  ]

  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="container mx-auto px-4">
        {/* Top bar - apenas redes sociais */}
        <div className="hidden md:flex justify-end items-center py-2 text-sm text-slate-300 border-b border-slate-800">
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/eabrasillawstrategy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/company/ea-brasil-law-strategy/?fbclid=PAZXh0bgNhZW0CMTEAAacZ5a8CFJqMfWQlfxtR1jVK4xGuo-Y8anMxash1mMjNb2HM09Ti-yQpvR9Dvw_aem_DMjLsyNQf-T3yEkEFYaX0A" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img src={logo} alt="EA Brasil" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">EA Brasil Law & Strategy</h1>
              <p className="text-sm text-slate-400">Law With Vision. Strategy with purpose.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=5531999176110&text&type=phone_number&app_absent=0', '_blank')}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold px-6 py-2"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-800">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=5531999176110&text&type=phone_number&app_absent=0', '_blank')}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold mt-4"
              >
                Fale Conosco
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

