## Contexto do Projeto
- Stack atual: `Next.js (App Router)`, `TypeScript (strict)`, `Tailwind v4`, `Radix UI`, `lucide-react`, `framer-motion`; sem camada backend própria (integrações client-side), sem testes configurados.
- Diretórios-chave: `src/app`, `src/components`, `src/components/ui`, `src/lib`, `src/services`, `src/types`, `src/constants`.

## Entregáveis
- Criar `/.trae/rules/project_rules.md` com regras oficiais: type-safety, Clean Code, SOLID, DDD, UI/UX responsivo, testes e validações, uso de MagicUI e Aceternity UI.
- Criar na raiz: `AGENTE.md`, `playbook.md`, `PROJECT_COMMANDS.md`, `USER_COMMANDS.md`.
- Adicionar checklists operacionais e de qualidade em cada documento.

## Regras de Código (project_rules.md)
- Type-safety: `noImplicitAny`, nunca usar `any`; preferir tipos precisos, `unknown` + refinamento, `enum`/`union`, `readonly`, `as const`, generics, `satisfies`.
- Validação: usar `zod` para schemas e `zod-form-data` quando aplicável; validações no boundary de entrada (server actions/APIs) e formulários.
- Clean Code: nomes descritivos, funções pequenas, side-effects isolados, evitar flags booleanas múltiplas, preferir composição a herança, remover dead code.
- SOLID: 
  - S: componentes e serviços com responsabilidade única.
  - O: aberto a extensão (slots/props), fechado a modificação de núcleo.
  - L: substituição segura com interfaces/contratos.
  - I: interfaces enxutas por contexto.
  - D: depender de abstrações (ports) e injetar implementações.
- DDD: 
  - Camadas: `domain` (entidades, value-objects, serviços de domínio), `application` (use-cases), `infrastructure` (adapters, repos), `interface` (UI/Next app).
  - Boundaries explícitos; `ports/adapters`; mapear `services/*` para `infrastructure` com `interfaces` em `domain`.
  - Proibir acesso direto UI→infra sem passar por `application` (quando aplicável).
- UI/UX Responsivo: 
  - Mobile-first, breakpoints Tailwind consistentes; grids flexíveis.
  - Acessibilidade: foco visível, ARIA adequada, contraste AA, navegação por teclado.
  - Feedback imediato: estados `loading/error/success`; transições sutis (motion) ≤200ms.
  - Conteúdo: tipografia consistente (`next/font`), espaços 4/8px.
- Bibliotecas de UI: 
  - MagicUI e Aceternity UI como catálogos de componentes avançados; integrar sem romper design system.
  - Continuar usando `Radix UI` para primitives (Dialog, Popover, etc.).
  - Criar camada `src/components/ui` para wrappers padronizados, evitando acoplamento direto à lib.
- Next.js: 
  - Preferir `Server Components`; `Client Components` apenas para interatividade.
  - Dados/efeitos: `server actions` ou `API routes` se adicionadas; nunca expor chaves em `NEXT_PUBLIC_*` se sensíveis.
  - Imagens via `next/image`; SEO com `metadata`, `robots.ts`, `sitemap.ts`.
- Erros e Logs: 
  - Tratamento central com tipos de erro (`Result`/`Either`), mensagens amigáveis.
  - Proibir `console.log` em produção; usar `logger` condicional.
- Env e Segurança: 
  - Todas variáveis `.env` tipadas via `zod` loader; cabeçalhos de segurança no `next.config.ts` mantidos; CSP avaliada ao introduzir scripts.

## Estrutura de Pastas DDD (proposta de evolução)
- `src/domain`: entidades (`Entity`), valores, `domain-services`, `errors`, `ports`.
- `src/application`: `use-cases` (sincronos/assíncronos), `dtos`, `validators`, orquestrações.
- `src/infrastructure`: `http`, `repositories`, `external` (Evolution API), mapeadores.
- `src/interface`: componentes página/seções; reutiliza `application`.
- `src/components/ui`: design system unificado (wrappers Radix/MagicUI/Aceternity UI).

## Testes e Validação
- Unitários: `Vitest` com `ts-node` e `@testing-library/react` para componentes; cobertura ≥85% para `domain/application`.
- Integração: testes de `use-cases` + adapters com `MSW` para mocks HTTP.
- E2E: `Playwright` cobrindo fluxos críticos (lead capture, vendas).
- Tipos: `tsc --noEmit` no CI; `eslint` com regras para TS/React/Accessibility.
- Formulários: `zod` + feedback de erro; máscaras e normalização em `lib`.

## UI/UX Responsivo (padrões adicionais)
- Layouts fluidos com `container` e `max-w` responsáveis; imagens responsivas e lazy.
- Gestos e toque: áreas de clique mínimas 44px; tap targets acessíveis.
- Temas: tokens CSS vars; dark mode respeitando `prefers-color-scheme`.

## Integração MagicUI e Aceternity UI
- Instalar libs e documentar componentes aprovados (cards animados, grids, spotlight/dock, etc.).
- Encapsular cada componente em `src/components/ui/*` com props tipadas, evitando lock-in.
- Garantir temas/styles alinhados a Tailwind; revisar performance ao usar animações.

## Documentação (arquivos a criar)
- `/.trae/rules/project_rules.md`: regras completas, exemplos e anti-padrões proibidos.
- `/AGENTE.md`: papel do agente, princípios, formato de respostas, padrões de prompts, políticas.
- `/playbook.md`: objetivos, descobertas, planejamento, execução, validação, documentação, resposta; ferramentas recomendadas; checklist completo por solicitação.
- `/PROJECT_COMMANDS.md`: comandos para dev/build/test/lint/e2e/análise de tipos e geração de sitemap/robots.
- `/USER_COMMANDS.md`: guia de uso para time de negócio: como rodar, testar, validar, abrir issues/PRs.

## Checklists
- Qualidade: tipos estritos, cobertura, acessibilidade, performance (`Lighthouse` ≥90), UX, i18n (se aplicável).
- PR: descrição clara, screenshots, testes verdes, `tsc` ok, `eslint` ok, `bundle` revisto.
- Release: versão, changelog, smoke tests (Playwright), envs validados.

## Ferramentas Recomendadas
- Dev/Qualidade: `Vitest`, `@testing-library/react`, `Playwright`, `MSW`, `zod`, `ESLint 9`, `Prettier`, `Husky`.
- UI: `MagicUI`, `Aceternity UI`, `Radix UI`, `tailwindcss-animate`, `framer-motion`.
- Acesso: `axe-core` para a11y, `Lighthouse` para performance.

## Comandos (planejamento)
- `dev`: `next dev --turbopack`
- `build`: `next build --turbopack`
- `start`: `next start`
- `lint`: `eslint .`
- `type-check`: `tsc --noEmit`
- `test:unit`: `vitest run`
- `test:e2e`: `playwright test`
- `test`: `vitest && playwright test`

## Critérios de Aceite
- Regras e playbook criados e versionados; checklists incorporados.
- Testes e ferramentas configuradas; CI passes (`tsc`, `eslint`, `vitest`, `playwright`).
- Componentes UI integrados via wrappers em `src/components/ui` com props tipadas.
- Documentação clara para devs e usuários (negócio) com comandos e fluxos.

## Passos de Implementação
1. Criar e popular `/.trae/rules/project_rules.md` com todas regras e exemplos.
2. Adicionar `AGENTE.md`, `playbook.md`, `PROJECT_COMMANDS.md`, `USER_COMMANDS.md` na raiz com conteúdo detalhado e checklists.
3. Introduzir `zod` e helpers de validação em `src/lib/validation.ts`.
4. Configurar `Vitest`, `@testing-library/react` e `Playwright`; criar testes iniciais.
5. Encapsular componentes de `MagicUI` e `Aceternity UI` em `src/components/ui` mantendo design system.
6. Ajustar `eslint`/`tsconfig` se necessário para `strict` total e regras anti-`any`.
7. Documentar padrões DDD e migração gradual de `services` para `infrastructure` + `application`.

## Verificação
- Rodar `tsc`, `eslint`, `vitest`, `playwright`; executar `Lighthouse` e `axe` em páginas principais.
- Validar responsividade (mobile/desktop) e acessibilidade; validar schemas `zod` nos formulários.

## Próximos Passos
- Após aprovação, implemento os arquivos e configurações, adiciono exemplos práticos e testes mínimos, e abro um resumo de verificação com resultados de `tsc`, `eslint`, `vitest` e `playwright`. 
