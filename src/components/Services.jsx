import { Building, Zap, Mountain, TrendingUp, AlertTriangle, Cog, Users, Shield, Gavel, Calculator, CheckCircle, Leaf, Handshake, Search } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Imobiliário & Urbanístico",
      description: "Assessoria completa em desenvolvimento urbano, incorporações e projetos imobiliários complexos."
    },
    {
      icon: Zap,
      title: "Energia & Infraestrutura",
      description: "Especialização em projetos de energia renovável, transmissão e infraestrutura crítica."
    },
    {
      icon: Mountain,
      title: "Minerário",
      description: "Expertise em direito minerário, licenciamento ambiental e operações de mineração."
    },
    {
      icon: TrendingUp,
      title: "Mercado de Capitais & Project Finance",
      description: "Estruturação de operações financeiras complexas e captação de recursos no mercado."
    },
    {
      icon: AlertTriangle,
      title: "Special Situations & Ativos Distressed",
      description: "Reestruturação de dívidas, recuperação judicial e gestão de ativos em dificuldade."
    },
    {
      icon: Cog,
      title: "Operações Complexas",
      description: "Assessoria em transações multijurisdicionais e operações de alta complexidade."
    },
    {
      icon: Users,
      title: "Societário & Empresarial Contratual",
      description: "Estruturação societária, governança corporativa e contratos empresariais."
    },
    {
      icon: Shield,
      title: "Regulatório",
      description: "Navegação no ambiente regulatório e compliance com órgãos setoriais."
    },
    {
      icon: Gavel,
      title: "Contencioso Estratégico",
      description: "Litígios complexos com foco em estratégia empresarial e proteção de ativos."
    },
    {
      icon: Calculator,
      title: "Tributário",
      description: "Planejamento tributário, contencioso fiscal e estruturação de operações."
    },
    {
      icon: CheckCircle,
      title: "Compliance",
      description: "Programas de integridade, due diligence e gestão de riscos regulatórios."
    },
    {
      icon: Leaf,
      title: "ESG",
      description: "Assessoria em sustentabilidade, governança ambiental e responsabilidade social."
    },
    {
      icon: Handshake,
      title: "M&A & Private Equity",
      description: "Fusões, aquisições e operações de private equity com foco em valor."
    },
    {
      icon: Search,
      title: "White Collar & Investigação Corporativa",
      description: "Investigações internas, compliance penal e defesa em crimes empresariais."
    }
  ]

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Cog className="w-4 h-4" />
            <span>Áreas de Atuação</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Expertise Multidisciplinar
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Nossa equipe especializada oferece soluções jurídicas integradas para os desafios mais complexos do mercado, 
            combinando conhecimento técnico profundo com visão estratégica de negócios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 hover:border-amber-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <span className="text-amber-600 text-sm font-medium group-hover:text-amber-700 transition-colors duration-300">
                    Saiba mais →
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Precisa de uma solução personalizada?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para desenvolver estratégias jurídicas sob medida para seu negócio, 
              independentemente da complexidade do desafio.
            </p>
            <button 
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=5531999176110&text&type=phone_number&app_absent=0', '_blank')}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Fale com Nossos Especialistas
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

