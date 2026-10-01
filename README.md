# CT Ippon: protótipo do site

Site estático (HTML, CSS e JavaScript) do Centro de Treinamento CT Ippon, com divulgação das modalidades, planos, pré-matrícula por WhatsApp e simulador de viabilidade financeira.

## Estrutura

- `index.html`: conteúdo (textos, horários, planos, endereço)
- `style.css`: cores e layout (as cores ficam no início, em `:root`)
- `script.js`: número do WhatsApp, preços dos planos e cálculo do simulador
- `assets/logo.svg`: logo simplificada

## O que editar primeiro

1. `script.js`: troque `WHATSAPP` pelo número real e ajuste `PRECOS` se mudar as mensalidades.
2. `index.html`: atualize a tabela de horários, o endereço na seção "Onde estamos" e os custos iniciais do simulador (atributos `value`).

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie estes arquivos.
2. Vá em **Settings > Pages**.
3. Em **Source**, escolha **Deploy from a branch**, selecione `main` e a pasta `/ (root)`.
4. Em alguns minutos o site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

Depois disso, qualquer alteração feita no GitHub (ícone de lápis em cada arquivo) atualiza o site sozinha.
