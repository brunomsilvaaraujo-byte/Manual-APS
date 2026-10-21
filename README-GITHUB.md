# Manual APS 3.0 — Lote 148 · Sem calculadora

Esta versão mantém **exatamente o mesmo banco clínico (2.962 cards)** e a **mesma interface** dos módulos Adultos, Gestantes e Pediatria da versão leve recebida. Somente a aba, a tela e o arquivo da calculadora foram removidos.

## Publicar no GitHub Pages

1. Extraia este ZIP e envie os arquivos **extraídos** para a raiz do repositório, não o ZIP fechado.
2. Os arquivos necessários são `index.html`, `service-worker.js`, `manifest.webmanifest`, `.nojekyll` e a pasta `icons/`.
3. **Apague a pasta `legacy/` antiga do repositório**, se estiver presente, pois a calculadora não faz mais parte do aplicativo. Remova também arquivos `assets/` e `data/` antigos se vierem de versões anteriores.
4. Em **Settings > Pages**, selecione `Deploy from a branch`, branch `main`, diretório `/(root)`.
5. Caso a aba antiga continue no celular, atualize a página e, se necessário, limpe os dados do site ou reinstale o aplicativo instalado (PWA), para eliminar o cache antigo.

## Integridade dos dados

- Adultos: **2.026 cards**.
- Gestantes: **382 cards**.
- Pediatria: **554 cards**.
- Total: **2.962 cards**, incluídos no `index.html`.
- Pesquisa, filtros, favoritos, recentes e os três módulos são mantidos.
- Pode abrir `index.html` diretamente no navegador desktop; no GitHub Pages o PWA funciona por HTTPS.

**Nota clínica:** exclusão da calculadora, sem qualquer alteração de texto de cards ou nova auditoria farmacológica.
