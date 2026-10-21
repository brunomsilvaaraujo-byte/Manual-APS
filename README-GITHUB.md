# Manual APS 3.0 — Lote 148 · Versão leve

Esta versão **não usa React nem CDN**. A interface foi refeita em HTML, CSS e JavaScript. O banco clínico (2.962 cards) está **dentro do próprio `index.html`** para eliminar falhas de carregamento. A calculadora original do Lote 148 permanece intacta no arquivo `legacy/calculadora.html`, com uma camada visual de enquadramento.

## Publicar no GitHub Pages

1. Extraia o arquivo ZIP (não faça upload do ZIP fechado).
2. Envie todo o conteúdo **extraído** para a raiz do repositório (incluindo `index.html`, `legacy/`, `icons/`, `service-worker.js`, `manifest.webmanifest` e `.nojekyll`).
3. Acesse **Settings > Pages > Deploy from a branch**, escolha `main` e `/(root)`.
4. **Apague arquivos antigos** da versão React antes de publicar, em especial as pastas `assets/` e `data/`. Estes arquivos não são necessários.
5. Se a versão anterior permanecer aparecendo no celular, atualize a página e limpe dados/cache do site ou reinstale o PWA. O novo service worker substitui o cache antigo.

## Testes e integridade

- Adultos: 2.026 cards / 407 condições.
- Gestantes: 382 cards / 71 condições.
- Pediatria: 554 cards / 146 condições.
- Calculadora: mantém o mecanismo original do Lote 148; nenhuma dose foi recalculada nesta mudança visual.
- Busca, lista, filtros, favoritos, recentes e alternância de módulos funcionam sem dependência de rede depois de carregados.
- Abrir `index.html` diretamente no navegador do computador também deve mostrar os 2.962 cards, mesmo sem servidor.

**Nota clínica:** atualização da interface, não equivale a nova auditoria farmacológica.
