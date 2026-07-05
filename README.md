
# Roteamento de modelo no Longevidade 360

Uma rotina diaria do Longevidade 360 expôs uma decisao pratica de governanca de IA: o modelo usado pelo agente precisa combinar com a tarefa.

Entre 01/jun/2026 e 26/jun/2026, a chave da API registrou **US$ 19** de uso porque o Hermes herdava Opus 4.6 como modelo padrao. Boa parte desse valor veio de dias de desenvolvimento e teste do pipeline. O cron em operacao, sozinho, custava centavos: o US$ 19 e o total da chave no mes, nao o custo da rotina. Em 29/jun/2026, o default do Hermes mudou para Sonnet 4.5 e o cron diario do Longevidade 360 passou a usar Haiku 4.5 de forma explicita.

O checkpoint de custo pos-troca fechou em 04/jul/2026. No regime estavel do mesmo job diario, o custo por execucao caiu de **US$ 0,113 (Opus) para US$ 0,022 (Haiku), uma reducao de 81%**. Base: 5 dias de Opus antes da troca e 4 dias de Haiku depois (01 a 04/jul), com volume de tokens praticamente igual. O dia 30/jun foi a primeira execucao em Haiku e saiu cerca de 3x mais pesada, entao fica fora da media comparavel.

Fonte: export de uso da API por dia e modelo, tabulado numa planilha interna de consumo por dia e modelo. Numero verificado por recalculo independente: formulas no LibreOffice e calculo em Python sobre o CSV bruto. Sem print sensivel.

## Escopo publico

Este write-up usa o Longevidade 360 como caso pessoal de governanca de custo em agentes. Os dados de saude, credenciais, telefones, paths sensiveis, configuracao completa do runtime e detalhes de infraestrutura foram omitidos.

O objetivo publico e documentar a decisao tecnica: quando uma tarefa e pequena, recorrente e bem delimitada, o harness deve escolher um modelo proporcional ao trabalho.

## Caso

O Longevidade 360 coleta sinais de wearables e gera um retrato diario para acompanhamento pessoal. O Hermes entra como camada de harness: ele recebe a saida estruturada de um script, interpreta o estado do dia e envia uma mensagem curta.

O cron diario tinha este perfil:

- entrada estruturada;
- tarefa recorrente;
- resposta curta;
- baixo espaco de decisao;
- necessidade de rastreio de custo.

Esse perfil pede um modelo barato e suficiente para a tarefa. A escolha anterior herdava o modelo default geral do Hermes.

## Antes e depois

| Item | Antes (Opus) | Depois (Haiku) |
|---|---|---|
| Janela comparada (regime estavel) | 5 dias em jun | 4 dias, 01 a 04/jul |
| Custo por execucao do cron | US$ 0,113 | US$ 0,022 |
| Reducao por execucao | | 81% |
| Default do Hermes | Opus 4.6 | Sonnet 4.5 |
| Modelo do cron Longevidade | Herdado do default | Haiku 4.5 explicito |
| Primeira execucao validada | Antes da troca | 30/jun/2026, 11h15, status ok |
| Evidencia tecnica | Heranca implicita do modelo | Campo `model` explicito no job |

O **US$ 19** citado antes e o total da chave da API no mes (01 a 26/jun), inflado por dias de desenvolvimento. A comparacao honesta e por execucao, em regime estavel: US$ 0,113 contra US$ 0,022.

## Diff sanitizado

O ajuste central no job diario foi a troca de heranca implicita por modelo explicito:

```diff
- "model": null
+ "model": "claude-haiku-4-5"
```

O default geral do Hermes tambem mudou:

```diff
- default_model: claude-opus-4-6
+ default_model: claude-sonnet-4-5
```

Os trechos acima sao sanitizados. Eles preservam a decisao tecnica e removem dados operacionais.

## Desenho arquitetural

![Desenho arquitetural sanitizado](assets/2026-07-04-model-routing-longevidade360.png)

O ponto principal do desenho e separar quatro camadas:

- caso de uso: Longevidade 360;
- harness: Hermes;
- politica de modelo: roteamento por tarefa;
- observabilidade: custo, status e revisao.

Essa separacao evita que todo agente herde o mesmo modelo por conveniencia.

## Decisao tecnica

O cron diario do Longevidade 360 passou a usar Haiku 4.5 porque a tarefa tem baixo grau de ambiguidade. O Hermes manteve Sonnet 4.5 como default geral para tarefas mais abertas.

Essa decisao cria uma regra simples:

| Perfil da tarefa | Modelo preferido |
|---|---|
| Rotina curta, recorrente, com entrada estruturada | Haiku |
| Trabalho geral do agente, com raciocinio intermediario | Sonnet |
| Tarefa rara, cara, ambigua ou de alto risco | Modelo mais forte, com justificativa explicita |

## O que muda na governanca

O custo deixa de ser uma surpresa de billing e vira parte do contrato do agente.

Cada rotina recorrente precisa declarar:

- qual modelo usa;
- por que aquele modelo cobre a tarefa;
- qual custo esperado;
- qual numero dispara revisao;
- qual evidencia mostra que a qualidade continuou aceitavel.

No caso do Longevidade 360, o numero que faltava para fechar a historia era o custo pos-troca. Esse checkpoint fechou: US$ 0,022 por execucao no Haiku, contra US$ 0,113 no Opus, 81% menos.

## Limites da evidencia

Este caso prova governanca de custo em um projeto pessoal. Ele nao prova producao com terceiro dependente, impacto financeiro corporativo ou maturidade completa de operacao agentica.

Para a CTO Agents Academy, o valor do caso esta em outro ponto: ele transforma um aprendizado de arquitetura em evidencia publica verificavel. O KR1 exige exatamente isso: um write-up tecnico publico, com numero e distribuicao.
