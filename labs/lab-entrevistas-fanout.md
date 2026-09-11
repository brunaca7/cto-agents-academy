# Lab — Fan-out em feedback discente

Aplica módulo 03. Escala mínima de propósito: 10 textos, não 100.

## Pipeline

1. Extração (modelo barato): oportunidade, persona, verbatim.
2. Cluster de sinônimos (modelo de julgamento).
3. Score em código, sem modelo: frequência × importância × (5 − satisfação).
4. Três hipóteses de intervenção pedagógica.
5. Juiz separado confronta hipóteses com os verbatims.

## Done

Você sabe dizer o que rodou em código, o que rodou em modelo, o stop condition e o cap de tokens. Se o cluster fragmentar (11 necessidades virarem 30 nomes), o harness ganha um estágio de canonicidade — não um prompt “tente melhor”.
