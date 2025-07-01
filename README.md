# 🛍️ Digital Store

**Digital Store** é uma aplicação de e-commerce desenvolvida com foco na venda de tênis. O projeto utiliza as principais tecnologias de Front-end como **ReactJS**, **HTML**, **CSS** e **JavaScript**, proporcionando uma experiência moderna, modular e eficiente para usuários que desejam navegar, filtrar e visualizar produtos de forma intuitiva.<br><br>
Projeto Baseado no projeto original da [Digital College](https://github.com/digitalcollegebr/projeto-digital-store)

## 📁 Estrutura de Pastas

O projeto foi organizado de forma a facilitar a escalabilidade e manutenção do código:

src/ <br>
├── components/<br>
│ ├── Header/<br>
│ ├── Footer/<br>
│ ├── Logo/<br>
│ ├── ProductListing/<br>
│ ├── ProductCard/<br>
│ ├── ProductOptions/<br>
│ ├── BuyBox/<br>
│ ├── Section/<br>
│ ├── FilterGroup/<br>
│ └── ProductDetails/<br>
├── pages/<br>
│ ├── HomePage/<br>
│ ├── ProductViewPage/<br>
│ └── ProductListingPage/<br>
├── App.jsx<br>
└── index.jsx<br>

---

## ⚙️ Funcionalidades por Componente

### 🔝 Header (`<Header />`)
- **Logo**: Exibe a logomarca da loja.
- **Campo de Busca**: Permite buscas com redirecionamento para `/products?filter=`.
- **Redirecionamentos**: Links para "Cadastre-se" e botão "Entrar".
- **Carrinho de Compras**: Ícone ilustrativo.
- **Navegação**: Links para Home, Produtos, Categorias e Meus Pedidos, com destaque de rota ativa.

### 🧱 Footer (`<Footer />`)
- **Logo**: Reutiliza o componente de logo em branco.
- **Descrição**: Texto institucional.
- **Redes sociais**: Ícones com links.
- **Informações**: Componente que recebe título e array de objetos para gerar links dinâmicos.
- **Direitos autorais**: `© 2024 Digital Store`

### 📦 ProductCard (`<ProductCard />`)
- Exibe imagem, nome, preço e preço com desconto se disponível.

### 📋 ProductListing (`<ProductListing />`)
- Recebe uma lista de produtos e renderiza vários `<ProductCard />`.

### 📑 Section (`<Section />`)
- Componente reutilizável com título, alinhamento e conteúdo interno dinâmico. Também pode conter link.

### 🖼️ Gallery (`<Gallery />`)
- Carrossel de imagens com miniaturas (opcional), setas de navegação, controle de estado e responsividade.

### 🎯 BuyBox (`<BuyBox />`)
- Exibe nome, referência, avaliação, preços, descrição, botão de compra e variações via `<ProductOptions />`.

### 🎨 ProductOptions (`<ProductOptions />`)
- Exibe variações de produtos (tamanho, cor), com opções de formato `square` ou `circle`.

### 🧪 FilterGroup (`<FilterGroup />`)
- Componente dinâmico para exibir grupos de filtros (radio/checkbox) com base em um array de opções.

---

## 🧭 Páginas

### 🏠 Home Page (`/`)
- **Galeria de Destaque**: Carrossel de imagens principais.
- **Coleções em Destaque**: Três imagens com bordas arredondadas.
- **Produtos em Alta**: Lista de 8 produtos usando `<Section />` e `<ProductListing />`.

### 📂 Listagem de Produtos (`/products`)
- **Filtro e Ordenação**: Campo "Ordenar por" e grupos de filtros.
- **Produtos**: Listagem com quantidade total exibida dinamicamente.

### 📝 Visualização de Produto (`/products/:id`)
- **Galeria do Produto**: Componente `<Gallery />` com miniaturas.
- **Informações do Produto**: Usando `<BuyBox />` e `<ProductOptions />`.
- **Produtos Recomendados**: Listagem de produtos com `<Section />`.

---

## 🔧 Tecnologias Utilizadas

- [ReactJS](https://reactjs.org/)
- HTML5
- CSS3
- JavaScript (ES6+)
- React Router DOM
- JSX

---

## Autor
Desenvolvido por: Victor da Silva Cruz<br>
📧 Contato: v.cruz00421@gmail.com<br>
🔗 [Linkedin](https://www.linkedin.com/in/victor-da-silva-cruz-709684351/) | [GitHub](https://github.com/VSCruzdev)

---

## 🚀 Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/VSCruzdev/projeto-store
```

## Observação
Esse projeto possui algumas coisas incompletas/pendentes. Aceito sugestões de melhorias!!!
