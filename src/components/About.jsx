import { Award, Users, Globe, Target, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Visão Estratégica",
      description: "Combinamos expertise jurídica com visão de negócios para entregar soluções que geram valor real."
    },
    {
      icon: Award,
      title: "Excelência Técnica",
      description: "Padrão de qualidade internacional em todas as nossas entregas e relacionamentos com clientes."
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais com formação nas melhores instituições e experiência em grandes escritórios."
    },
    {
      icon: Globe,
      title: "Alcance Global",
      description: "Rede de parceiros internacionais para operações transfronteiriças e multijurisdicionais."
    }
  ]

  const achievements = [
    { number: "25+", label: "Anos de Experiência" },
    { number: "500+", label: "Casos de Sucesso" },
    { number: "R$ 10B+", label: "Em Transações" },
    { number: "50+", label: "Profissionais" }
  ]

  const companies = [
    "EA Brasil Soluções em Engenharia",
    "Inka Infraestrutura e Urbanismo",
    "Inkza Soluções Imobiliárias",
    "Viabilize",
    "Brasilloc"
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Sobre Nós</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Transformando Desafios em 
              <span className="text-amber-600"> Soluções Estratégicas</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              A EA Brasil Law & Strategy é uma consultoria jurídico-estratégica especializada em infraestrutura, 
              urbanismo, mineração, mercado de capitais e ativos distressed. Nossa missão é transformar desafios 
              complexos em soluções seguras, eficientes e rentáveis.
            </p>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Com uma abordagem multidisciplinar e foco em resultados, oferecemos assessoria jurídica de alto 
              nível para empresas que buscam excelência e inovação em suas operações.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=5531999176110&text&type=phone_number&app_absent=0', '_blank')}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold"
              >
                Falar com Especialista
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Nossos Valores</h3>
              <div className="space-y-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-slate-900" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{value.title}</h4>
                        <p className="text-slate-300 text-sm">{value.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            
            {/* Floating achievement card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl border border-slate-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">R$ 10B+</div>
                <div className="text-sm text-slate-600">Em Transações Assessoradas</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Números que Falam por Si
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Nossa trajetória de sucesso é refletida nos resultados que entregamos para nossos clientes.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-slate-300 text-sm md:text-base">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Group Companies */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            Empresas do Grupo
          </h3>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-6 text-center hover:bg-amber-50 hover:border-amber-200 border border-slate-200 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">
                    {company.split(' ')[0].charAt(0)}
                  </span>
                </div>
                <h4 className="font-semibold text-slate-900 text-sm">
                  {company}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-20 bg-slate-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Nosso Escritório
              </h3>
              <p className="text-slate-600 mb-6">
                Localizado estrategicamente em Belo Horizonte, atendemos clientes em todo o Brasil 
                e no exterior através de nossa rede de parceiros.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-600" />
                  <span className="text-slate-700">Rua Viçosa, 835, São Pedro, Belo Horizonte/MG</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-600" />
                  <span className="text-slate-700">Telefone/WhatsApp: (31) 9.9917-6110</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-600" />
                  <span className="text-slate-700">E-mail: eduardo@eabrasil.com</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-slate-900 mb-4">Agende uma Consulta</h4>
              <p className="text-slate-600 text-sm mb-6">
                Entre em contato conosco para discutir como podemos ajudar seu negócio.
              </p>
              <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

