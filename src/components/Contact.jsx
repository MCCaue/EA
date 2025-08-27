import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, User, Building } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Criar o corpo do email
    const emailBody = `
Nome: ${formData.name}
Email: ${formData.email}
Empresa: ${formData.company}
Telefone: ${formData.phone}
Área de Interesse: ${formData.subject}

Mensagem:
${formData.message}
    `.trim()
    
    // Criar o link mailto
    const mailtoLink = `mailto:eduardo@eabrasil.com?subject=Contato do Site - ${formData.subject || 'Consulta'}&body=${encodeURIComponent(emailBody)}`
    
    // Abrir o cliente de email
    window.location.href = mailtoLink
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      details: ["Rua Viçosa, 835, Bairro São Pedro", "Belo Horizonte/MG - 30330-160"],
      action: "Ver no Mapa",
      link: "https://maps.google.com/?q=Rua+Viçosa,+835,+São+Pedro,+Belo+Horizonte,+MG"
    },
    {
      icon: Phone,
      title: "Telefone",
      details: ["(31) 9.9917-6110"],
      action: "Ligar Agora",
      link: "https://api.whatsapp.com/send/?phone=5531999176110&text&type=phone_number&app_absent=0"
    },
    {
      icon: Mail,
      title: "E-mail",
      details: ["eduardo@eabrasil.com"],
      action: "Enviar E-mail",
      link: "mailto:eduardo@eabrasil.com"
    },
    {
      icon: Clock,
      title: "Horário",
      details: ["Segunda a Sexta: 8h às 18h", "Sábado: 8h às 12h"],
      action: "Agendar Reunião",
      link: "https://api.whatsapp.com/send/?phone=5531999176110&text&type=phone_number&app_absent=0"
    }
  ]

  const services = [
    "Consultoria Estratégica",
    "Infraestrutura & Energia",
    "Mercado de Capitais",
    "M&A & Private Equity",
    "Compliance & ESG",
    "Contencioso Estratégico",
    "Outro"
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            <span>Contato</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Vamos Conversar Sobre 
            <span className="text-amber-600"> Seu Projeto</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Nossa equipe está pronta para entender seus desafios e desenvolver soluções jurídicas 
            personalizadas que agreguem valor ao seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Solicite uma Consulta
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      E-mail *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Empresa
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Telefone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Área de Interesse
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  >
                    <option value="">Selecione uma área</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                    placeholder="Descreva seu projeto ou necessidade..."
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold"
                >
                  Enviar Mensagem
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <div key={index} className="bg-slate-50 rounded-xl p-6 hover:bg-amber-50 transition-colors duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-600 text-sm mb-1">{detail}</p>
                      ))}
                      <a 
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-amber-600 text-sm font-medium hover:text-amber-700 transition-colors mt-2 inline-block"
                      >
                        {info.action} →
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white">
              <h4 className="font-semibold mb-4">Atendimento Imediato</h4>
              <p className="text-slate-300 text-sm mb-6">
                Para questões urgentes, entre em contato diretamente via WhatsApp.
              </p>
              <Button 
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=5531999176110&text&type=phone_number&app_absent=0', '_blank')}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <Phone className="mr-2 w-4 h-4" />
                Falar agora!
              </Button>
            </div>

            {/* Benefits */}
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h4 className="font-semibold text-slate-900 mb-4">Por que nos escolher?</h4>
              <ul className="space-y-3">
                {[
                  "Resposta em até 24 horas",
                  "Primeira consulta gratuita",
                  "Equipe especializada",
                  "Soluções personalizadas"
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-600" />
                    <span className="text-slate-700 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

