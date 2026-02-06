import { qs, createElement } from "../../core/dom"

const renderReviews = () => {
  const main = qs("main")

  const comments = [
    { 
      name: "Marcos Silva", 
      image: "https://i.pravatar.cc/100?u=2", 
      rating: "★★★★★ 5.0", 
      comment: "\"O módulo de percepção foi um divisor de águas. Finalmente tiro músicas de ouvido!\"" 
    
    },
    { 
      name: "Ana Paula", 
      image: "https://i.pravatar.cc/100?u=4", 
      rating: "★★★★★ 5.0", 
      comment: "\"Melhor didática que já encontrei. O sistema CAGED ficou muito claro.\"" 

    },
    { 
      name: "Lucas Ramos", 
      image: "https://i.pravatar.cc/100?u=14", 
      rating: "★★★★★ 5.0", 
      comment: "\"As técnicas de velocidade do módulo 7 são sensacionais. Vale cada centavo.\"" 

    },
    { 
      name: "Felipe J.", 
      image: "https://i.pravatar.cc/100?u=19", 
      rating: "★★★★☆ 4.8", 
      comment: "\"Conteúdo riquíssimo. O suporte para dúvidas é excelente.\"" 

    }

  ]

  let content = `
    <h2 class="text-center">AVALIAÇÕES REAIS</h2>
    <div class="reviews-comments">
  `
  for (const comment of comments) {
    content += `
        <div class="reviews-comment flex flex-col">
          <span class="color-gold">${comment.rating}</span>
          <p>${comment.comment}</p>
          <div class="reviews-info">
            <img class="reviews-icon" src="${comment.image}" alt="${comment.name}"></img>
            <h3>${comment.name}</h3>
            
          </div>
        </div>

    `

  }

  content += `
    </div>
  `

  const classes = [ "reviews", "flex-center", "flex-col" ]

  createElement(main, "section", classes, content)

}

export default renderReviews
