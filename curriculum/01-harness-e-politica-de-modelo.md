# 01 — Harness e política de modelo

**Tipo:** Learning Object de arquitetura  
**Evidência do projeto:** [KR1 Longevidade 360](../cases/kr1-roteamento-modelo-longevidade360.md)  
**Fontes extraídas:** Google harness engineering (guia ~9 páginas, circulado no post 2093220786089709664 em 28/ago/2026; versão canônica pública: *The Anatomy of Harness Engineering*, Google Developers Blog, 09/set/2026). Também DEV/Google AI: harness = componentes determinísticos em volta do LLM.

## Tese

O modelo é cérebro. O harness transforma previsão em tarefa concluída. Benchmarks E2E que sobem 2 pontos não explicam *por quê*. CTO avalia comportamento observável do harness.

Cinco peças mínimas do harness:

1. **Contexto** — o que o modelo vê a cada passo
2. **Roteamento de tools** — chamada, execução, retorno
3. **Subagentes** — fatia de trabalho, contexto limpo, merge
4. **Memória** — skills e regras em disco; sessão não basta
5. **Loops de verificação** — rodar, checar, devolver erro limpo

Mais duas de governança (KR1):

6. **Política de modelo por tarefa** — campo `model` explícito, nunca herança silenciosa
7. **Observabilidade** — custo, status, número que dispara revisão

## Evals comportamentais

Trate evals como testes de integração do harness:

1. Escolha **um** modo de falha recente (ex.: marcar LO pronto sem rodar a rubrica).
2. Transforme em asserção rápida e determinística.
3. Itere prompt/modelo/tooling só com essa rede de segurança.

Sem suite comportamental, trocar Sonnet por Haiku é um ato de fé. O KR1 mediu custo; o próximo passo é medir que a qualidade do job curto continuou aceitável.

## Tradução HE

| Tarefa campus | Harness deve |
|---|---|
| Feedback formativo contra rubrica | Grader em contexto separado; modelo proporcional |
| Geração de ementa | Skills de política acadêmica + humano no publish |
| Triagem de ticket SIS/LMS | Classificador barato; escalada explícita |
| Relatório de evasão | Fan-out + score em código; sem narrativa solta |

## Regra herdada do KR1

| Perfil | Modelo |
|---|---|
| Rotina curta, entrada estruturada | Barato e suficiente (Haiku-class) |
| Raciocínio intermediário | Default do harness (Sonnet-class) |
| Alto risco / ambíguo / raro | Modelo forte com justificativa escrita |

## Critério de done

Desenho de harness de um agente de feedback formativo com as 7 peças nomeadas, política de modelo e um eval comportamental que quebra se o agente pular a rubrica.
