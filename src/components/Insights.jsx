import { Calendar, User, ArrowRight, BookOpen, TrendingUp, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import saneamentoArticle from '../assets/saneamento-article.png'
import esgMining from '../assets/esg-mining.png'
import infraestrutura5g from '../assets/5g-infrastructure.png'
import legalDocuments from '../assets/legal-documents.png'

const Insights = () => {
  const articles = [
    {
      id: 1,
      title: "Marco Legal do Saneamento: Oportunidades e Desafios para o Setor Privado",
      excerpt: "Análise completa das mudanças regulatórias e suas implicações para investidores e operadores do setor de saneamento básico.",
      category: "Regulatório",
      author: "Eduardo Almeida",
      date: "15 de Janeiro, 2025",
      readTime: "8 min",
      image: saneamentoArticle,
      featured: true
    },
    {
      id: 2,
      title: "ESG na Mineração: Compliance e Oportunidades de Investimento",
      excerpt: "Como as práticas ESG estão transformando o setor minerário e criando novas oportunidades de negócio.",
      category: "ESG",
      author: "Equipe Jurídica",
      date: "10 de Janeiro, 2025",
      readTime: "6 min",
      image: esgMining
    },
    {
      id: 3,
      title: "Infraestrutura Digital: Aspectos Jurídicos da Transformação 5G",
      excerpt: "Navegando pelos desafios regulatórios e oportunidades da implementação da tecnologia 5G no Brasil.",
      category: "Infraestrutura",
      author: "Eduardo Almeida",
      date: "5 de Janeiro, 2025",
      readTime: "10 min",
      image: infraestrutura5g
    },
    {
      id: 4,
      title: "Project Finance em Energia Renovável: Estruturas Inovadoras",
      excerpt: "Tendências e inovações na estruturação financeira de projetos de energia limpa no mercado brasileiro.",
      category: "Project Finance",
      author: "Equipe Jurídica",
      date: "28 de Dezembro, 2024",
      readTime: "7 min",
      image: legalDocuments
    }
  ]

  const categories = [
    { name: "Todos", count: 24, active: true },
    { name: "Regulatório", count: 8 },
    { name: "ESG", count: 6 },
    { name: "M&A", count: 5 },
    { name: "Infraestrutura", count: 5 }
  ]

  return (
    <section id="insights" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Insights & Análises</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Conhecimento que 
            <span className="text-amber-600"> Gera Valor</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Acompanhe nossas análises especializadas sobre as principais tendências e mudanças 
            regulatórias que impactam o mundo dos negócios.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 text-white">
                <div className="inline-flex items-center space-x-2 bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm font-medium mb-6">
                  <TrendingUp className="w-4 h-4" />
                  <span>Artigo em Destaque</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {articles[0].title}
                </h3>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                
                <div className="flex items-center space-x-6 mb-8 text-sm text-slate-400">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{articles[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{articles[0].date}</span>
                  </div>
                  <span>{articles[0].readTime} de leitura</span>
                </div>
                
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                  Ler Artigo Completo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              
              <div className="relative">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900/20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.slice(1).map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <span>{article.readTime}</span>
                </div>
                
                <button className="text-amber-600 text-sm font-medium hover:text-amber-700 transition-colors duration-300 flex items-center space-x-1">
                  <span>Ler mais</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Receba Nossos Insights
            </h3>
            
            <p className="text-slate-600 mb-8">
              Mantenha-se atualizado com as principais mudanças regulatórias e oportunidades 
              de negócio. Receba nossos insights diretamente em seu e-mail.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu e-mail profissional"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              />
              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold px-6">
                Inscrever-se
              </Button>
            </div>
            
            <p className="text-xs text-slate-500 mt-4">
              Enviamos apenas conteúdo relevante. Sem spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Insights

