# Playbook Operacional

## Objetivos
- Entregar software escalável, seguro, responsivo e orientado a domínio, com alta qualidade.

## Descobertas
- Mapear requisitos, limites de domínio, dependências externas e riscos.

## Planejamento
- Definir casos de uso, contratos, integração e tarefas.
- Estimar impactos em `domain/application/infrastructure/interface`.

## Execução
- Implementar com type-safety, validações (`zod`), testes e UI/UX consistente.

## Validação
- `tsc --noEmit`, `eslint`, `vitest`, `playwright` (quando disponível), `axe`, `lighthouse`.

## Documentação
- Atualizar `AGENTE.md`, `PROJECT_COMMANDS.md`, `USER_COMMANDS.md` e READMEs contextuais.

## Resposta
- Relatar o que foi feito, artefatos, evidências de verificação e próximos passos.

## Ferramentas Recomendadas
- Vitest, Testing Library, Playwright, MSW, zod, ESLint, Prettier, Husky.
- UI: Radix UI, MagicUI, Aceternity UI, tailwindcss-animate, framer-motion.

## Checklist por Solicitação
- Tipos estritos e sem `any`.
- Schemas `zod` e mensagens de erro claras.
- Testes passando e cobertura mínima.
- Acessibilidade e responsividade verificadas.
- Performance revisada e sem regressões.

