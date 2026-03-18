# shakers-projeto-integrado-vitrine-faq

# Meia Lovers - Loja de Meias Divertidas

Este projeto consiste no desenvolvimento de uma página de produto personalizada para uma loja de meias divertidas utilizando Shopify. O foco foi criar uma experiência moderna, interativa e funcional, com integração de metafields e manipulação dinâmica de variantes.

---

## Funcionalidades

### Página de Produto Customizada
- Exibição do produto principal com imagem destacada
- Slider de imagens secundárias
- Layout responsivo e organizado

### Seleção de Variantes
- Seleção de tamanho (P, M, G, etc.)
- Destaque visual da opção selecionada
- Atualização dinâmica do preço

### Adição ao Carrinho
- Botão "Adicionar ao carrinho"
- Integração com `/cart/add.js`
- Validação de seleção de variante antes da compra

### FAQ Dinâmico (Metafields)
- Integração com **metaobjetos**
- Exibição de perguntas e respostas relacionadas ao produto

---

## Como rodar localmente

### Instalar Shopify CLI

```bash
npm install -g @shopify/cli @shopify/theme
```

### Login na loja

```bash
shopify login
```

### Rodar ambiente de desenvolvimento

```bash
shopify theme dev
```

## Como configurar no Admin da Shopify:

### Produto Principal

1. Crie um produto no Admin

2. Adicione:

- Imagens

- Variantes (ex: cor, tamanho)

- Descrição
---

### Como criar o Metaobjeto de FAQ

1. Vá em: Settings > Custom Data > Metaobjects

2. Criar novo:

- Nome: faq_item

3. Campos:

- **pergunta** (text)

- **resposta** (rich text)

---

### Como criar o Metafield no Produto

1. Vá em: Settings > Custom Data > Products

2. Criar novo Metafield:

- Nome: FAQ

- Namespace/key: custom.custom_faq

- Tipo: Metaobject (lista)

- Referência: faq_item
---

### Como associar FAQ ao produto

1. Acesse um produto

2. Na seção de Metafields:

- Adicione pelo menos 3 FAQs

3. Salve

---

### Link do Pull request
https://github.com/LaisOli22/shakers-projeto-integrado-vitrine-faq/pull/1


