# Fontes extraídas (pacote offline)

Codex e clones não devem depender de abrir x.com. Este arquivo guarda ID, autor, data, tese extraída e o que foi recusado.

## Incluídos no currículo

### S1 — Harness engineering (Google)
- Tweet ponte: 2093220786089709664 · @RoundtableSpace · 28/ago/2026
- Canônico público: Taylor Mullen e Christian Gunderman, *The Anatomy of Harness Engineering: How to Evaluate, Iterate, and Guard AI Coding Agents*, Google Developers Blog, 09/set/2026.
- Apoio: Shir Meir Lador, “What is harness engineering and why should I care?”, DEV/Google AI, 02/set/2026.
- Extraído: harness = camada determinística em volta do LLM; evals comportamentais como testes de integração; começar por um modo de falha; contexto, tools, subagentes, memória, verification loops.
- Entra em: `curriculum/01-harness-e-politica-de-modelo.md`

### S2 — Contratos de multi-agente (não media company)
- 2093330541177352217 · @VibeMarketer_ · 28/ago/2026
- Extraído: owns / reads / returns / must not / done when; cérebro compartilhado seletivo; handoff como registro; humano na fronteira editorial; loop ideia → pesquisa → ângulo → peça → distribuição → review → performance → playbook.
- Recusado: playbook de X growth, 5.8M impressions, seis bots de mídia.
- Entra em: `curriculum/00-espectro-e-contratos.md`

### S3 — Espectro chat → agente
- 2063985608381362576 · @AnatoliKopadze · 08/jun/2026
- Extraído: agente = tools + memória + loop; espectro chat / tools / workflow / autônomo.
- Recusado: tutorial Telegram + VPS “sem código” como núcleo HE.
- Entra em: `curriculum/00-espectro-e-contratos.md`

### S4 — THE HIVE / loops
- 2064292484856041558 · @Av1dlive · 09/jun/2026
- Extraído: “o trabalho é escrever loops”; 3 tiers; 5 regras de unattended (auto permissions, dynamic workflows, /goal ou /loop, runtime remoto, self-verification no ambiente real); skills de verificação como ROI; quarentena de input; destilação de regras com aprovação humana. Reconstrução, não leak.
- Entra em: `curriculum/04-loops-e-rotinas.md`

### S5 — Rubrica, grader, memória
- 2064397389189071163 · @RLanceMartin (Anthropic) · 09/jun/2026
- Extraído: hillclimb em eval; self-critique no mesmo contexto é fraco; verifier em janela independente; progressão fail → investigate → verify → distill → consult.
- Entra em: `curriculum/02-rubrica-grader-memoria.md`

### S6 — Dynamic workflows
- 2064079508689358857 · @PawelHuryn · 08/jun/2026
- Extraído: orquestrador em JS/código gasta zero token de modelo; 6 padrões; preguiça / self-preference / goal drift; n8n ≠ workflow dinâmico; lab de entrevistas em estágios.
- Não virar meta: 113 agents / 1.95M tokens / 12 min.
- Entra em: `curriculum/03-workflows-dinamicos.md`

### S7 — n8n + Hermes
- 2063991688163704949 · @HermesAgentTips · 08/jun/2026
- Extraído: n8n = plumbing; Hermes = thinking; HTTP in/out estruturado.
- Entra em: `curriculum/05-integracao-institucional.md`

### S8 — Voz no Hermes (apêndice)
- 2070160352503857644 · @ElevenLabsDevs · 25/jun/2026
- Extraído: TTS/STT é config de provider no Hermes.
- Só entra se houver caso de acessibilidade/tutoria oral.

## Excluídos do núcleo

| ID | Autor | Motivo |
|---|---|---|
| 2073855438593143269 | @HuggingModels | Modelo de livro de ficção (pagestorm 14B) |
| 2073870537873666169 | @HuggingModels | Promo T2I Z-Image-Turbo |
| 2064135812141482018 | @genspark_ai | Launch + crédito; conceito de Skill já coberto por S4 |
