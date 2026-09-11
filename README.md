# CTO Agents Academy

Write-ups e working copies para formar **CTO de IA aplicada a Higher Education**. O modelo é commodity. O que compounda é harness, contrato de papel, rubrica, workflow e evidência pública.

Hermes é o harness de referência. O mapa oficial de objetos, paths e grafos vive no SoR:

**[cto-agents-learning-studio](https://github.com/brunaca7/cto-agents-learning-studio)** — [catálogo](https://github.com/brunaca7/cto-agents-learning-studio/blob/main/catalog/objects.yaml) · [path](https://github.com/brunaca7/cto-agents-learning-studio/blob/main/paths/cto-he-core.md) · [competências](https://github.com/brunaca7/cto-agents-learning-studio/blob/main/graphs/competency.md) · [conteúdo](https://github.com/brunaca7/cto-agents-learning-studio/blob/main/graphs/content.md)

## Mapa local (working copy)

| Pasta | Função | LO |
|---|---|---|
| [curriculum/00-espectro-e-contratos.md](curriculum/00-espectro-e-contratos.md) | Espectro e contratos | LO-010 |
| [curriculum/01-harness-e-politica-de-modelo.md](curriculum/01-harness-e-politica-de-modelo.md) | Harness e modelo | LO-011 |
| [curriculum/02-rubrica-grader-memoria.md](curriculum/02-rubrica-grader-memoria.md) | Rubrica e grader | LO-012 |
| [curriculum/03-workflows-dinamicos.md](curriculum/03-workflows-dinamicos.md) | Workflows | LO-013 |
| [curriculum/04-loops-e-rotinas.md](curriculum/04-loops-e-rotinas.md) | Loops | LO-014 |
| [curriculum/05-integracao-institucional.md](curriculum/05-integracao-institucional.md) | n8n + Hermes | LO-015 |
| [cases/kr1-roteamento-modelo-longevidade360.md](cases/kr1-roteamento-modelo-longevidade360.md) | Evidência de custo | suporte LO-011 |
| [labs/](labs/) | Exercícios | LO-011, LO-013 |
| [references/sources.md](references/sources.md) | Fontes extraídas | todos |
| [prompts/codex-followup.md](prompts/codex-followup.md) | Trabalho residual | — |

Sequência: LO-010 → 011 → 012 → 013 → 014 → 015.

## KR1 em uma linha

Job recorrente e estruturado não herda o modelo default. Custo estável por execução: US$ 0,113 → US$ 0,022 (**81%**).

## Como promover um LO

- **LO-001:** vault de staging sem `.git` → gate explícito → `scripts/promote_from_staging.sh --push` → branch `promote/...`, sem merge.
- **LO-010–015:** já catalogados no Studio como `draft-sor`. Texto aqui. Estado `promoted` só depois de gate humano.
