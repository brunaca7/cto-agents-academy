# 03 — Workflows dinâmicos e seis padrões

**Tipo:** Learning Object de orquestração  
**Fontes extraídas:** Paweł Huryn (post 2064079508689358857, 08/jun/2026); paper interno Anthropic “A harness for every task: dynamic workflows in Claude Code” (Thariq Shihipar, Sid Bidasaria), citado no post. Relato de 113 agentes / 1,95M tokens é ilustração, não meta da academy.

## Tese

Quando o orquestrador é o modelo, pagamos routing, aparece preguiça (faz 35 de 50), viés de autoavaliação e goal drift. Quando o orquestrador é código (loops, filtros, sort), o modelo gasta token em julgamento. A cola é barata, rápida e determinística.

Subagente basta quando há uma rodada paralela e um merge. Workflow vale quando o estágio N decide o estágio N+1.

n8n conecta ferramentas conhecidas. Workflow dinâmico deixa o agente escrever o procedimento *desta* execução. SDK é para agente que você embarca num produto; workflow é para o agente com o qual você trabalha.

## Seis padrões

| Padrão | Quando | Exemplo HE |
|---|---|---|
| Classify-and-act | Um roteia por tipo | Ticket: acadêmico vs financeiro vs ruído |
| Fan-out-and-synthesize | Um agente por peça | 100 entrevistas de evasão |
| Adversarial verification | Juiz separado + rubrica | Red-team de política acadêmica |
| Generate-and-filter | Muitos candidatos, sobreviventes | Naming de trilha / ementa |
| Tournament | Julgamento comparativo | Duas estratégias de retenção |
| Loop-until-done | Stop condition explícita | Toda user story LMS passa em INVEST |

## Lab mínimo (sem vaidade de escala)

10 textos de feedback discente → extração barata → cluster de sinônimos (modelo) → score em código (frequência × importância × (5 − satisfação)) → 3 hipóteses. Ver `labs/lab-entrevistas-fanout.md`.

## Critério de done

O aprendiz escolhe um job semanal de campus, nomeia o padrão, diz o que vive em código vs. modelo, e define stop condition + cap de gasto.
