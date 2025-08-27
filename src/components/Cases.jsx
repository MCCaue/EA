import { Award, TrendingUp, Building, Zap, Users, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import teamMeeting from '../assets/team-meeting.png'
import infrastructure from '../assets/infrastructure.jpg'
import urbanPlanning from '../assets/urban-planning.jpg'

const Cases = () => {
  const cases = [
    {
      id: 1,
      title: "Reestruturação de Concessão de Infraestrutura",
      category: "Infraestrutura & Project Finance",
      value: "R$ 2,5 bilhões",
      description: "Assessoria completa na reestruturação de concessão rodoviária, incluindo renegociação de contratos, adequação regulatória e estruturação financeira.",
      image: infrastructure,
      icon: Zap,
      results: [
        "Redução de 30% nos custos operacionais",
        "Extensão do prazo de concessão por 15 anos",
        "Aprovação unânime dos órgãos reguladores"
      ],
      tags: ["Infraestrutura", "Regulatório", "Project Finance"]
    },
    {
      id: 2,
      title: "Desenvolvimento Urbano Sustentável",
      category: "Imobiliário & ESG",
      value: "R$ 1,8 bilhões",
      description: "Estruturação jurídica de projeto de desenvolvimento urbano sustentável, com foco em ESG e inovação tecnológica.",
      image: urbanPlanning,
      icon: Building,
      results: [
        "Certificação LEED Platinum",
        "Aprovação em tempo recorde (6 meses)",
        "Modelo replicado em 5 outras cidades"
      ],
      tags: ["Urbanismo", "ESG", "Sustentabilidade"]
    },
    {
      id: 3,
      title: "Fusão Estratégica no Setor Minerário",
      category: "M&A & Minerário",
      value: "R$ 3,2 bilhões",
      description: "Assessoria em operação de M&A complexa envolvendo duas grandes mineradoras, incluindo due diligence e estruturação societária.",
      image: teamMeeting,
      icon: TrendingUp,
      results: [
        "Criação da 3ª maior mineradora do país",
        "Sinergias de R$ 500 milhões anuais",
        "Aprovação do CADE em 8 meses"
      ],
      tags: ["M&A", "Minerário", "Societário"]
    }
  ]

  const stats = [
    { number: "R$ 50B+", label: "Em Transações Assessoradas" },
    { number: "200+", label: "Operações Complexas" },
    { number: "95%", label: "Taxa de Sucesso" },
    { number: "15", label: "Setores de Atuação" }
  ]

  return (
    <section id="cases" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            <span>Cases de Sucesso</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Resultados que 
            <span className="text-amber-600"> Transformam Negócios</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos mais relevantes que desenvolvemos para nossos clientes, 
            demonstrando nossa capacidade de entregar soluções inovadoras e resultados excepcionais.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="space-y-12">
          {cases.map((caseItem, index) => {
            const IconComponent = caseItem.icon
            const isEven = index % 2 === 0
            
            return (
              <div
                key={caseItem.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Content */}
                <div className={!isEven ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-amber-600 font-medium text-sm">
                      {caseItem.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {caseItem.title}
                  </h3>
                  
                  <div className="text-3xl font-bold text-amber-600 mb-4">
                    {caseItem.value}
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {caseItem.description}
                  </p>
                  
                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Principais Resultados:</h4>
                    <ul className="space-y-2">
                      {caseItem.results.map((result, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {caseItem.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => window.open('https://api.whatsapp.com/send/?phone=5531999176110&text&type=phone_number&app_absent=0', '_blank')}
                    variant="outline" 
                    className="border-amber-300 text-amber-700 hover:bg-amber-50"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                
                {/* Image */}
                <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={caseItem.image}
                      alt={caseItem.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Seu Projeto Pode Ser o Próximo Case de Sucesso
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para desenvolver soluções jurídicas inovadoras que transformem 
            seus desafios em oportunidades de crescimento e valor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=5531999176110&text&type=phone_number&app_absent=0', '_blank')}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold"
            >
              Discutir Meu Projeto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cases

