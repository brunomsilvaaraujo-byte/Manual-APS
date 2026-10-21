# Manual APS 3.0 — Auditoria da Calculadora, Lote 148

**Base:** Lote 147. **Data:** 21/10/2026. **Escopo:** confirmação de função renal em 10 regimes pediátricos e segurança em lactentes para oseltamivir.

## Correções implementadas

1. Foi incluído no painel da Calculadora um seletor de contexto renal com estados **Não avaliada** (padrão), **Preservada, confirmada clinicamente** e **Alterada, LRA, DRC ou diálise**. Não foi incluído um cálculo automático de TFGe: peso e idade cronológica não bastam para isso; a escolha do estado depende de avaliação clínica adequada.
2. Os seguintes dez registros foram marcados com `renalAssessmentRequired=true`: `levetiracetam`, `gabapentina-ped`, `fluconazol`, `cefazolina-osteomielite-ped`, `aciclovir-gengivo-ped`, `aciclovir-zoster`, `cefixima-ped`, `oseltamivir-ped-2026`, `nitrofurantoina-ped`, `metformina-adol`. **Somente nos regimes assinalados**, função desconhecida ou comprometida bloqueia a emissão automática da dose padrão. Função confirmada preservada permite utilizar a fórmula preexistente; isto NÃO valida a dose para outras comorbidades.
3. Foi adicionado seletor de informação sobre prematuridade (`não informado`, `a termo confirmado`, `prematuro`). Em crianças com menos de 12 meses, a ficha de `oseltamivir-ped-2026` bloqueia cálculo se nascimento a termo não for confirmado. Prematuros exigem idade pós-menstrual e protocolo neonatal apropriado.
4. O botão **Limpar** redefine ambos os contextos, além de peso e idade, evitando herdar informações de um paciente para o seguinte. Os seletores recalculam imediatamente as fichas visíveis.
5. **Nenhuma posologia, teto, concentração, indicação numérica ou fórmula foi modificada**. As restrições são da ferramenta de cálculo e não devem ser interpretadas como contraindicações universais ou justificativa para atrasar tratamento de emergência.

## Testes

- Base recompilada com `python build.py` e idêntica ao Lote 147 antes das alterações.
- Dois blocos JavaScript inline aprovados pelo `node --check` após a alteração.
- **56/56 verificações dirigidas** aprovadas em Chromium, incluindo estados renais dos dez registros, prematuridade em quatro idades, liberação ao selecionar nascimento a termo, UI de cefazolina, reset e regressão de fichas não abrangidas.
- **1.015 cenários** de regressão (203 registros × cinco combinações de idade/peso): 628 resultados liberados, 387 bloqueados, **zero exceções JavaScript** e zero valores não finitos.
- Comparação SHA-256: alterações limitadas a `data/grande-02-drugs.json`, `src/10-corpo-da-pagina.html`, `src/js/07-dosesafety.js`, `src/js/08-appenddrugchunk.js` e `saida/index.html`. Demais arquivos idênticos byte a byte.
- Preservação: Adultos **430 arquivos / 2.026 cards**, Gestantes **71 / 382**, Pediatria **150 / 554**.

## Referências usadas

- DailyMed, levetiracetam — ajustes em disfunção renal e recomendações por idade: https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=591dd9f1-3681-4b2f-b096-7536826e3648
- DailyMed, gabapentina — comprometimento renal em crianças abaixo de 12 anos não estudado adequadamente: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f1eda6cc-d9b2-4df4-a09b-20eebded760f
- DailyMed, fluconazol — ajuste de manutenção de doses repetidas conforme depuração renal: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b00ead0c-c3fc-43a0-bc85-86c6c155635e
- CDC, orientações de antiviral na influenza com doses específicas por idade pós-menstrual no prematuro: https://www.cdc.gov/flu/hcp/antivirals/summary-clinicians.html

## Limitações e próximos passos

A confirmação por seletor não mede função renal, não substitui cálculo apropriado de TFGe ou juízo clínico e não cobre todos os fármacos que exigem ajustes. Os bloqueios preventivos de dez regimes são conservadores para evitar que doses padrão sejam usadas em DRC, LRA ou diálise. **Não há emissão automática de dose alternativa para esses casos**. Testes offline/PWA, dispositivos físicos, validade da seleção de função preservada, prematuridade em outros esquemas, apresentações brasileiras e validação farmacológica completa dos 203 regimes seguem pendentes. Os testes computacionais não representam homologação clínica.
