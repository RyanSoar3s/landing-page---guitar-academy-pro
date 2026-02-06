# 🎸 Guitar Academy Pro – Landing Page de Curso de Guitarra

Landing page responsiva e moderna para venda de um **curso completo de guitarra**, desenvolvida com **Vite + Vanilla JavaScript**, **HTML5** e **CSS3**, com foco em **conversão**, **clareza visual** e **experiência do usuário**.

O projeto simula uma página real de infoproduto, apresentando um **cronograma progressivo de aprendizado**, **avaliações de alunos**, **FAQ interativo** e uma **oferta com contador regressivo**, reforçando escassez e urgência.

---

## ✨ Visão Geral

A landing page utiliza uma identidade visual premium, com tema escuro, destaques em dourado e animações suaves.  
Cada seção foi pensada para conduzir o usuário de forma natural até a conversão.

O uso do **Vite** garante um ambiente de desenvolvimento rápido, simples e moderno, mesmo utilizando **JavaScript puro (Vanilla JS)**.

---

## 🚀 Funcionalidades

- 🎯 Hero section com headline de impacto e imagem imersiva  
- 🗺️ Cronograma do curso em formato de roadmap visual  
- ⭐ Seção de depoimentos com avaliações em estrelas  
- ❓ FAQ interativo com animações de abertura e fechamento  
- ⏱️ Timer regressivo digital que reinicia automaticamente  
- 💰 Seção de oferta com preço promocional e CTA animado  
- 📱 Layout totalmente responsivo  
- 🎨 CSS moderno com variáveis, efeitos de glassmorphism e animações  

---

## 🧠 Estrutura do Curso

O curso é apresentado em módulos progressivos:

1. **Introdução & Base**  
   Apresentação da guitarra, acordes básicos, leitura de cifras e fundamentos da teoria musical.

2. **Estrutura Harmônica**  
   Intervalos, escalas maior e menor, campos harmônicos, formação de acordes e sistema CAGED.

3. **Harmonia Sofisticada**  
   Inversões, acordes aumentados, suspensos, alterados, meio diminutos, diminutos, tensões e resoluções.

4. **Percepção Musical**  
   Função harmônica, identificação de tonalidades e desenvolvimento do ouvido musical.

5. **Técnica & Improviso (Popular)**  
   Arpejos, pentatônicas, penta blues, palhetadas, tapping, two hands, harmônicos e pedais.

6. **Escalas & Modos**  
   Escalas menor harmônica e melódica, com introdução estratégica aos modos para improvisação.

7. **Maestria Modal & Velocidade (Master)**  
   Campos harmônicos modais, música tonal vs modal, exercícios de velocidade e técnicas avançadas.

---

## 🛠️ Tecnologias Utilizadas

- **Vite**  
  Ferramenta de build e servidor de desenvolvimento rápido.

- **JavaScript (Vanilla JS)**  
  Manipulação do DOM, interatividade do FAQ e controle do timer.

- **HTML5**  
  Estrutura semântica da página.

- **CSS3**
  - Variáveis CSS (`:root`)
  - Flexbox e Grid Layout
  - Animações com `@keyframes`
  - Efeitos visuais modernos (blur, glassmorphism)

- **Google Fonts**  
  Fonte Montserrat.
  
---

## 📂 Estrutura do Projeto

```text
├── public
│   └── favicon.png
|
├── src
│   ├── assets
│   │   └── banner.jpg
│   ├── scripts
│   │   ├── components
│   │   │   ├── course-schedule/
│   │   │   ├── faq/
│   │   │   ├── footer/
│   │   │   ├── header/
│   │   │   ├── purchase-area/
│   │   │   └── reviews/
│   │   ├── core
│   │   │   └── dom.js
│   │   ├── events
│   │   │   └── event.js
│   │   └── index.js
│   ├── styles
│   │   ├── components
│   │   │   ├── course-schedule.css
│   │   │   ├── faq.css
│   │   │   ├── footer.css
│   │   │   ├── header.css
│   │   │   ├── purchase-area.css
│   │   │   └── reviews.css
│   │   ├── base.css
│   │   ├── style.css
│   │   └── utilities.css
│   └── index.html
├── main.js
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

O projeto segue uma arquitetura **modular em Vanilla JavaScript**, separando responsabilidades por **componentes**, **estilos**, **eventos** e **núcleo de manipulação do DOM**, utilizando **Vite** como bundler e servidor de desenvolvimento.

---

## ▶️ Instalação e Execução

1. Clone o repositório:

```bash
git clone https://github.com/RyanSoar3s/landing-page---guitar-academy-pro.git
```
2. Acesse a pasta do projeto:

```bash
cd landing-page---guitar-academy-pro
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento com Vite:
5. 
```bash
npm run dev
```

5. Acesse no navegador:

```bash
http://localhost:5173
```
---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE)
