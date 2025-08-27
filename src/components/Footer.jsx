import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react'
import logo from '../assets/logo.jpg'

const Footer = () => {
  const services = [
    "Imobiliário & Urbanístico",
    "Energia & Infraestrutura", 
    "Minerário",
    "Mercado de Capitais",
    "M&A & Private Equity",
    "ESG & Compliance"
  ]

  const companies = [
    "EA Brasil Soluções em Engenharia",
    "Inka Infraestrutura e Urbanismo",
    "Inkza Soluções Imobiliárias",
    "Viabilize",
    "Brasilloc"
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img src={logo} alt="EA Brasil" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold">EA Brasil Law & Strategy</h3>
                <p className="text-sm text-slate-400">Law With Vision. Strategy with purpose.</p>
              </div>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Consultoria jurídico-estratégica especializada em soluções complexas para empresas que buscam excelência e inovação.
            </p>

            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/ea-brasil-law-strategy/?fbclid=PAZXh0bgNhZW0CMTEAAacZ5a8CFJqMfWQlfxtR1jVK4xGuo-Y8anMxash1mMjNb2HM09Ti-yQpvR9Dvw_aem_DMjLsyNQf-T3yEkEFYaX0A" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/eabrasillawstrategy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Áreas de Atuação</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Group Companies */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Empresas do Grupo</h4>
            <ul className="space-y-3">
              {companies.map((company, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 text-sm">
                    {company}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-amber-400">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm">
                    Rua Viçosa, 835, Bairro São Pedro<br />
                    Belo Horizonte/MG - 30330-160
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <a href="tel:+5531999176110" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 text-sm">
                  (31) 9.9917-6110
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <a href="mailto:eduardo@eabrasil.com" className="text-slate-300 hover:text-amber-400 transition-colors duration-300 text-sm">
                  eduardo@eabrasil.com
                </a>
              </div>
            </div>

            <div className="mt-6 p-4 bg-slate-800 rounded-lg">
              <h5 className="font-semibold mb-2 text-amber-400">Horário de Atendimento</h5>
              <p className="text-slate-300 text-sm">
                Segunda a Sexta: 8h às 18h<br />
                Sábado: 8h às 12h
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 EA Brasil Law & Strategy. Todos os direitos reservados.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

