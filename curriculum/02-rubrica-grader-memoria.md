# 02 — Rubrica, grader separado e memória destilada

**Tipo:** Learning Object de avaliação  
**Fonte extraída:** Lance Martin, Anthropic (post 2064397389189071163, 09/jun/2026), sobre loops de autocorreção e memória em modelos da classe Mythos / Fable 5. Detalhe em `references/sources.md`.

## Tese

Deixar o modelo “subir a colina” numa avaliação só funciona se o ambiente devolver feedback. Goal/rubric no harness é esse feedback.

Self-critique no mesmo contexto é fraco. O verificador precisa de **janela independente** (e, quando possível, modelo diferente). Outcomes / grader subagente existe por isso.

## Progressão de memória que importa

1. Fail — errou e documentou
2. Investigate — por que errou, antes de seguir
3. Verify — virar fato checado
4. Distill — virar regra geral
5. Consult — ler a regra na próxima sessão, não rederivar

Modelos mais fracos param no passo 1 (lista de palpites). O alvo institucional é 4 e 5.

## Tradução HE

- Rubrica do LO é arquivo versionado, não parágrafo no prompt.
- Policy Judge do Learning Studio é o grader em contexto separado.
- Memória permanente só aceita regra destilada após gate humano (mesmo princípio do `promote_from_staging.sh`).
- Avaliação de aluno ou de LO nunca é o mesmo agente que produziu o artefato, no mesmo contexto.

## Critério de done

Uma rubrica com critérios checáveis + desenho de subagente grader que não vê o rascunho de raciocínio do produtor + um exemplo de regra destilada após falha.
