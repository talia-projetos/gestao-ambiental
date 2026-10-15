/* Identificadores operacionais e denominações aderentes ao contrato ITAIPU.
 * Os nomes são apresentados na interface sem alterar os IDs do Google Sheets.
 * Este arquivo não modifica dados pessoais, planejamento ou lançamentos.
 * Persistem mesmo quando Apps Script republicar data/dashboard_data.json.
 */
(function () {
  'use strict';
  const NOMES = Object.freeze({
    EQ01: 'UHI A · Áreas Verdes e Paisagismo',
    EQ02: 'UHI B · Áreas Verdes e Paisagismo',
    EQ03: 'UHI C · Áreas Verdes e Paisagismo',
    EQ04: 'RBV · Viveiro, Sementes e Mudas',
    EQ05: 'RBV · Manutenção e Conservação',
    EQ06: 'RBV · Jardinagem e Horticultura',
    EQ07: 'Ecomuseu · Áreas Verdes',
    EQ08: 'Mirantes · Paisagismo e Conservação'
  });

  window.GA_NOMES_EQUIPES = NOMES;
  window.GA_PADRONIZAR_EQUIPES = function (equipes) {
    if (!Array.isArray(equipes)) return [];
    return equipes.map(function (equipe) {
      const novoNome = NOMES[String(equipe.equipe_id || '').trim().toUpperCase()];
      if (!novoNome) return equipe;
      return Object.assign({}, equipe, {
        equipe: novoNome,
        frente_atuacao: novoNome
      });
    });
  };
})();
