# Prompt para o Codex — continuação da academy

Cole o bloco abaixo no Codex com o repo `brunaca7/cto-agents-academy` aberto. **Não peça ao Codex para abrir x.com.** As fontes já estão extraídas em `references/sources.md`.

---

Você está no repositório `cto-agents-academy`.

Contexto do produto: formar CTO de IA aplicada a Higher Education. Hermes é o harness. KR1 (roteamento de modelo no Longevidade 360) vive em `cases/kr1-roteamento-modelo-longevidade360.md`. O currículo 00–05, labs e o pacote de fontes já foram commitados. O Learning Studio privado (`cto-agents-learning-studio`) só recebe LO promovido com gate humano; não faça push para lá sem ordem explícita.

Tarefas, nesta ordem:

1. Leia `README.md`, `curriculum/`, `cases/`, `labs/`, `references/sources.md`. Não invente fatos que não estejam nesses arquivos. Não busque tweets.

2. Normalize acentos e termos (governança, evidência, padrão) se ainda houver arquivo legado sem acento. Não altere números do KR1.

3. Crie `curriculum/rubrics/` com uma rubrica YAML ou Markdown por LO (00–05), critérios checáveis, nível esperado de CTO (não de influencer). Cada rubrica precisa de um campo `grader_must_not_see` listando o rascunho do produtor.

4. Crie `templates/role-contract.md` com o contrato owns / reads / returns / must not / done when, e um exemplo preenchido para equipe de Learning Objects de campus.

5. Crie `templates/agent-job-policy.md` com os campos do KR1: modelo, porquê, custo esperado, número que dispara revisão, evidência de qualidade, human-in-the-loop (sim/não e onde).

6. No README, acrescente uma seção “Como promover um LO” apontando a regra do Learning Studio: staging → gate do Bruno → `promote_from_staging.sh` → branch `promote/...` sem merge automático. Não copie secrets.

7. Se existir vault local `Claude-Pessoal` montado neste workspace, apenas liste paths candidatos a LO-001. Não promova. Não crie `.git` no vault.

8. Abra um arquivo `CHANGELOG.md` com a data de hoje e o resumo desta incorporação curricular (fontes S1–S8, exclusões).

Restrições:
- Não adicione dependência de URL do X.
- Não incorpore pagestorm, Z-Image-Turbo, Genspark promo, nem playbook de growth.
- Não escreva código de bot Telegram.
- Não altere o PNG/SVG em `assets/`.
- Commits pequenos e mensagens em inglês ou português, mas arquivos de currículo em português.

---

Se o Codex não tiver o Learning Studio clonado, ignore o item 7.
