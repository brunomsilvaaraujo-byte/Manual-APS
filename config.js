// Manual APS 3.0: endereço do Worker que você publicou.
window.APS_API_BASE = 'https://manual-aps-api.brunomsilvaaraujo.workers.dev';

/* Correção de contraste do modo escuro, 26/10/2026.
   Preserva o modo claro, o banco clínico e a lógica das calculadoras. */
(function instalarCorrecaoContrasteEscuro() {
  if (document.getElementById('aps-dark-contrast-fix')) return;
  const style = document.createElement('style');
  style.id = 'aps-dark-contrast-fix';
  style.textContent = `
    [data-theme="dark"] .adult-integrated-card .peds-therapy-step:first-child {
      background:#19313d; color:#edf5f8; border-color:#426174;
    }
    [data-theme="dark"] .peds-therapy-step {
      background:#19313d; color:#edf5f8; border-color:#426174;
    }
    [data-theme="dark"] .peds-therapy-step > summary {
      background:#19313d; color:#edf5f8;
    }
    [data-theme="dark"] .peds-therapy-step[open] > summary {
      background:#234450;
    }
    [data-theme="dark"] .peds-step-head strong {color:#f1f7fa;}
    [data-theme="dark"] .peds-step-head small,
    [data-theme="dark"] .peds-step-chevron,
    [data-theme="dark"] .aps-foldable-card .aps-fold-chevron {color:#b8ced8;}
    [data-theme="dark"] .peds-step-body {border-top-color:#426174;}
    [data-theme="dark"] .adult-step-headline {color:#80e1d4;}
    [data-theme="dark"] .adult-note,
    [data-theme="dark"] .peds-therapy-explainer,
    [data-theme="dark"] .detail-meta {color:#bfd2dc;}
    [data-theme="dark"] .card-text,
    [data-theme="dark"] .card-text strong,
    [data-theme="dark"] .card-text b {color:#e8f2f5;}
    [data-theme="dark"] .condition-item .count,
    [data-theme="dark"] .search-match-preview,
    [data-theme="dark"] .side-foot,
    [data-theme="dark"] .list-meta,
    [data-theme="dark"] .peds-items-count {color:#b8ced8;}
    [data-theme="dark"] .condition-item .count em {
      color:#e0eff3; background:#294b5b;
    }
    [data-theme="dark"] .searchbox input::placeholder {
      color:#b8ced8; opacity:1;
    }
    [data-theme="dark"] .card-text a {color:#80e1d4;}
    [data-theme="dark"] .peds-therapy-step > summary:focus-visible {
      outline:3px solid #80e1d4; outline-offset:-3px;
    }
  `;
  document.head.appendChild(style);
})();
