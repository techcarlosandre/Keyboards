⌨️ TechKeyboards - Experience & Marketplace Showcase
Uma interface imersiva e funcional para explorar e colecionar o melhor do hardware mecânico.

📖 Sobre o Projeto
O TechKeyboards evoluiu de uma simples Landing Page para uma ferramenta de curadoria interativa. O projeto agora guia o usuário desde os conceitos básicos de switches mecânicos até a escolha do setup ideal (60%, TKL, Full-Size).

Além do foco em Experiência do Usuário (UX) visual, a aplicação agora conta com integração inteligente de pesquisa de mercado e persistência de dados local para que entusiastas possam montar sua "wishlist" de teclados.

🚀 Tecnologias Utilizadas
HTML5 Semântico: Estrutura modular preparada para SEO.

CSS3 Avançado:

Glassmorphism & Neumorphism: Combinação de efeitos de vidro e profundidade.

Responsive Design: Interface adaptativa para Mobile e Desktop.

Dynamic Indicators: Sistema de barras indicadoras que sincronizam com o slider.

JavaScript (Vanilla ES6+):

Lógica de Slider Circular: Transição infinita entre categorias.

Marketplace Deep Linking: Links dinâmicos que geram pesquisas de preço no Google automaticamente.

LocalStorage Integration: Sistema de coleção que salva as escolhas do usuário no navegador.

✨ Funcionalidades Destacadas
1. Curadoria Educativa (Slide 01)
O projeto não apenas vende uma ideia, ele educa. O primeiro slide é dedicado a explicar a anatomia de um teclado mecânico, elevando o valor percebido pelo usuário antes da navegação pelos produtos.

2. Comparador de Preços Dinâmico
Dentro de cada modal de categoria (Red Switch, Blue Switch, 60%, etc.), o usuário encontra duas recomendações premium. Cada recomendação possui um link que dispara uma busca em tempo real no Google Shopping, garantindo que o usuário sempre encontre o menor preço.

3. Sistema de Wishlist (Adicionar à Coleção)
Utilizando a API de localStorage, implementamos a funcionalidade de "Adicionar". O usuário pode marcar seus teclados favoritos, e esses dados são sincronizados com o módulo de coleção do portfólio, permitindo uma experiência personalizada.

4. Slider com Numeração Dinâmica
Implementação de um contador de estados no JavaScript que traduz o índice do array do slider para uma interface visual (01, 02, etc.), melhorando a orientação espacial do usuário na página.

🧠 Aprendizados e Evoluções
Nesta nova etapa do TechKeyboards, os principais desafios superados foram:

Sincronização de Dados: Garantir que o estado do slider (indicadores, número e imagens) permanecesse consistente durante navegações rápidas.

Segurança de Recursos Externos: Transição de links de imagens externas instáveis para um repositório local otimizado, eliminando erros de carregamento e CORS.

UX de Conversão: Transformar uma página de portfólio em uma ferramenta útil que ajuda o usuário na decisão de compra através de links externos.

🔧 Como Executar
Clone este repositório:

Bash
git clone https://github.com/techcarlosandre/keyboards.git
Certifique-se de que as imagens numeradas e nomeadas estão na pasta /img.

Abra o arquivo index.html no seu navegador.

📂 Estrutura de Pastas
Bash
/
├── img/             # Imagens otimizadas (Anivia, Vortex, Evolut, etc.)
├── index.html       # Estrutura modular com 7 slides e modais
├── styles.css       # Estilização global, indicadores e notificações
├── scripts.js       # Lógica do slider, modais e integração de coleção
└── README.md        # Documentação do projeto
