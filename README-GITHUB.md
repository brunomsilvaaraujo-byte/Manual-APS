# Manual APS 3.0 — edição leve para GitHub Pages

**Base clínica:** Lote 91 (22/10/2026), com motor único de busca inteligente para Adultos, Gestantes e Pediatria e calculadoras pediátricas integradas aos cards. Evolução da calculadora: Lote 148 + lotes de integração pediátrica 01–37.

**Banco incorporado ao `index.html`:** 2.416 cards de Adultos, 382 de Gestantes e 554 de Pediatria (3.352 no total). Não depende de carregar um banco remoto.

**Arquivos essenciais:** `index.html`, `service-worker.js`, `manifest.webmanifest`, `icons/icon-192.png`, `icons/icon-512.png` e `.nojekyll`.

## Publicação

1. Descompactar este ZIP e copiar os arquivos e a pasta `icons` para a raiz do repositório GitHub. **Não enviar o ZIP fechado.**
2. Configurar `Settings` > `Pages` > `Deploy from a branch` > `main` e `/ (root)`.
3. Recarregar a página após a publicação; se o PWA mantiver a edição antiga, limpar dados/cache do site e reinstalar o aplicativo.

## Integridade e cautelas

Este pacote **não altera o código clínico, o motor de busca ou a calculadora** do Lote 91: apenas retira relatórios e arquivos de auditoria do ZIP original, mantendo os arquivos necessários para execução e PWA. A ausência dos relatórios não indica nova validação de dose. Antes de prescrever, conferir dose, indicação, via, apresentações, limites por idade, função renal e diretrizes aplicáveis. A verificação realizada para este pacote é estrutural/estática, não um teste clínico exaustivo em navegador.
