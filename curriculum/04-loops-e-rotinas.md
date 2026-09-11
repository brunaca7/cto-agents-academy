# 04 — Loops e rotinas

**Tipo:** Learning Object operacional  
**Fonte extraída:** reconstrução pública “THE HIVE” por Avid / @Av1dlive (post 2064292484856041558, 09/jun/2026), a partir de entrevistas e posts de Boris Cherny. Não é leak de dotfiles. Ler depois de 01 e 02: loop sem verificação é overnight de alucinação.

## Tese

O trabalho deixa de ser “promptar o modelo” e passa a ser escrever loops que promptam o modelo. Três camadas:

| Camada | Onde vive | Serve para |
|---|---|---|
| Tier 1 — loops de sessão | Contexto local, arquivos abertos | Trabalho enquanto o humano está na sessão |
| Tier 2 — rotinas | Clone fresco na nuvem / cron | Overnight, intervalo ≥ 1h |
| Tier 3 — swarm / batch | Worktrees isolados | Job grande demais para um contexto |

Composição: Tier 2 escreve arquivos no repo; Tier 1 lê. Swarm escreve achados; a próxima rotina consome. Distilação semanal de regras (equivalente a CLAUDE.md) só entra com aprovação humana.

## Cinco regras para trabalho longo sem supervisão

1. Permissões compatíveis com unattended — senão o agente dorme no clique
2. Workflows dinâmicos quando o job explode de escala
3. Goal / loop até critério, não até o primeiro “pronto” mole
4. Runtime que sobrevive ao laptop fechado
5. Verificação ponta a ponta no ambiente real (testes, LMS sandbox, render). Sem isso, o overnight é cara ou coroa.

## Tradução HE (não copiar babysit de PR)

- Loop: consistência de ementa vs. rubrica publicada
- Rotina noturna: digest de tickets LMS + fila de exceções
- Swarm: varredura de sílabos / acessibilidade em lote
- Skill de verificação: o investimento de maior ROI (Cherny/Anthropic)

## Quarentena de input não confiável

Ticket, página web, feedback de aluno: leitor read-only resume; ator privilegiado nunca vê o texto cru. Reduz injeção.

## Critério de done

Um loop + uma rotina + uma skill de verificação, com handoff por arquivo no repo e gate humano para promover regra.
