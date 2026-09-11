# 05 — Integração institucional (n8n + Hermes)

**Tipo:** Learning Object de integração  
**Fonte extraída:** Hermes Agent Tips (post 2063991688163704949, 08/jun/2026). ElevenLabs TTS/STT no Hermes (post 2070160352503857644) é apêndice opcional de acessibilidade, não núcleo.

## Tese

Separar encanamento de julgamento.

- **n8n (ou equivalente):** trigger, webhook, roteamento de dados (SIS, LMS, e-mail, calendário).
- **Hermes:** raciocínio e decisão, com modelo explícito (KR1).
- n8n chama Hermes via HTTP e recebe saída estruturada de volta.

Orquestrador permanece “burro de propósito”. Cérebro carrega o peso — e a política.

## Regras HE

Qualquer escrita que toque aluno, nota ou matrícula exige human-in-the-loop. Automação sem aprovação é fora de escopo deste LO.

Job no Hermes declara: modelo, porquê, custo esperado, número de revisão, evidência de qualidade. Herança de default global é regressão (KR1).

Memória entre workflows não é conversa do n8n. É artefato versionado (arquivo, LO promovido, skill).

## Apêndice: voz

TTS/STT no Hermes só entra se houver caso de acessibilidade ou tutoria oral. Config de vendor não é currículo de CTO.

## Critério de done

Diagrama: evento LMS → n8n → Hermes (modelo X) → JSON → fila humana → sistema de registro. Sem seta de escrita direta em nota/matrícula.
