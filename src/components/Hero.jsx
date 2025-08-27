import { Button } from '@/components/ui/button'
import { ArrowRight, Scale, Target, Award } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent"></div>
        {/* Geometric patterns */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Consultoria Jurídico-Estratégica Premium</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Law With Vision.
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Strategy with purpose.
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Consultoria jurídico-estratégica especializada em infraestrutura, urbanismo, mineração, 
              mercado de capitais e ativos distressed. Transformamos desafios em soluções seguras, 
              eficientes e rentáveis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=5531999176110&text&type=phone_number&app_absent=0', '_blank')}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold px-8 py-4 text-lg"
              >
                Fale com Nossos Especialistas
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-700">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-amber-400 mb-1">25+</div>
                <div className="text-sm text-slate-400">Anos de Experiência</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-amber-400 mb-1">500+</div>
                <div className="text-sm text-slate-400">Casos de Sucesso</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-amber-400 mb-1">R$ 10B+</div>
                <div className="text-sm text-slate-400">Em Transações</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-700/50 rounded-xl p-6 text-center">
                  <Scale className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Expertise Jurídica</h3>
                  <p className="text-slate-400 text-sm">Soluções especializadas em direito empresarial</p>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-6 text-center">
                  <Target className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Visão Estratégica</h3>
                  <p className="text-slate-400 text-sm">Planejamento focado em resultados</p>
                </div>
              </div>
              
              <div className="mt-6 p-6 bg-gradient-to-r from-amber-500/20 to-blue-500/20 rounded-xl border border-amber-500/30">
                <h4 className="text-white font-semibold mb-2">Áreas de Especialização</h4>
                <div className="flex flex-wrap gap-2">
                  {['Infraestrutura', 'M&A', 'Project Finance', 'ESG', 'Compliance'].map((area) => (
                    <span key={area} className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

