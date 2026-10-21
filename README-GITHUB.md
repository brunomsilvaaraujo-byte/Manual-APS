# Manual APS 3.0 — Lote 148 | GitHub Pages

Este ZIP é a versão **pronta para publicar no GitHub Pages**. O `index.html` fica na raiz.

## Publicar

1. Extraia o ZIP no computador.
2. No seu repositório do GitHub, envie os **arquivos e a pasta `icons` extraídos**, não o arquivo ZIP fechado. Mantenha `index.html` na raiz do repositório.
3. Abra **Settings → Pages** e selecione **Deploy from a branch → main → /(root)**. Salve.
4. Acesse a URL informada pelo GitHub Pages depois da publicação.

## Conteúdo

- `index.html` — aplicativo clínico Lote 148, sem dependências externas.
- `service-worker.js` e `manifest.webmanifest` — instalação e cache offline no GitHub Pages (o primeiro acesso precisa de internet).
- `icons/` — ícones do aplicativo.
- `AUDITORIA-CALCULADORA-LOTE-148.md` — relatório e limitações da auditoria.

As alterações desta embalagem são apenas de nome exibido na aba, metadados PWA e arquivos para publicação. Dados clínicos e fórmulas do Lote 148 foram preservados. Não houve revalidação clínica integral nesta etapa. Para editar/recompilar o projeto, use o ZIP separado do projeto dividido original.
