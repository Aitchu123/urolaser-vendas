# Regras Oficiais do Projeto Urolaser Vendas

## Objetivo
Garantir código sempre type-safe, limpo, escalável e com excelente UI/UX, sustentado por princípios SOLID e DDD, com validações robustas e cobertura de testes.

## Stack e Escopo
- Framework: Next.js (App Router) com TypeScript estrito.
- Estilo: Tailwind v4 com tokens e animações.
- Primitives: Radix UI.
- Componentes avançados: MagicUI e Aceternity UI.
- Testes: Vitest, Testing Library e Playwright.

## Type-Safety
- Nunca usar `any`. Preferir `unknown` com refinamento, `union`, `enum` e generics.
- `tsconfig`: `strict: true`, `noImplicitAny: true`, `exactOptionalPropertyTypes: true`, `noUncheckedIndexedAccess: true`.
- Usar `as const`, `readonly` e o operador `satisfies` para garantir tipos literais e contratos.
- Tipos de domínio devem ser imutáveis e declarados próximos ao contexto.

## Validação de Dados
- Validar toda entrada em boundaries com `zod` (APIs, server actions, formulários).
- Separar schema (`zod`) de mapeamento para DTOs e entidades.
- Exibir mensagens de erro claras ao usuário e logs seguros ao desenvolvedor.

## Clean Code
- Nomes descritivos e consistentes. Funções pequenas com responsabilidade única.
- Evitar parâmetros booleanos múltiplos e condicionais complexas sem motivo.
- Remover código morto e duplicado. Preferir composição a herança.
- Side-effects isolados. Separar pure functions de I/O.

## SOLID
- S: Cada módulo com responsabilidade única.
- O: Componentes e serviços abertos a extensão via props/slots, fechados à modificação de núcleo.
- L: Implementações devem obedecer contratos e ser substituíveis sem quebrar clientes.
- I: Interfaces segregadas por contexto; evitar interfaces inchadas.
- D: Depender de abstrações (ports) e injetar implementações.

## DDD
- Camadas: `domain` (entidades, value-objects, serviços), `application` (use-cases), `infrastructure` (adapters/repos), `interface` (UI/Next).
- Ports & Adapters: definir interfaces no domínio e adaptar implementações na infraestrutura.
- Fluxo: UI chama `application` que orquestra `domain` e usa `infrastructure` via ports.
- Proibir acesso direto UI→infra. Sempre passar por casos de uso.

## Next.js
- Preferir Server Components. Client Components apenas para interatividade.
- Dados: usar server actions ou rotas API. Não expor segredos em `NEXT_PUBLIC_*`.
- Imagens com `next/image`, metadados SEO, `robots.ts`, `sitemap.ts` atualizados.

## UI/UX Responsivo
- Mobile-first com breakpoints padronizados. Layouts fluidos (`container`, `max-w`).
- Acessibilidade: foco visível, ARIA correto, contraste AA, teclado completo.
- Feedback: estados `loading/error/success` com transições sutis ≤200ms.
- Tipografia consistente com `next/font`; espaçamento em escala 4/8.

## Bibliotecas de UI
- Radix UI para primitives (Dialog, Popover, etc.).
- MagicUI e Aceternity UI para componentes avançados. Encapsular em `src/components/ui` com props tipadas.
- Evitar lock-in: wrappers isolam implementação da biblioteca.

## Erros e Logging
- Usar tipos de resultado (`Result/Either`) para propagação segura.
- Mensagens amigáveis no UI; logs úteis em dev e silenciosos em produção.
- Sem `console.log` em produção; usar logger com níveis.

## Segurança e Env
- Cabeçalhos de segurança configurados; revisar CSP quando introduzir scripts.
- Carregar `.env` tipado com `zod`; falhar rápido em valores inválidos.
- Sanitizar entradas e evitar XSS/CSRF; não armazenar segredos no cliente.

## Performance
- Lighthouse ≥90 em Performance/Best Practices/SEO/A11y.
- `next/image` otimizado, cache adequado e `react` 19 features quando aplicável.
- Evitar re-renderizações; memorizar componentes quando necessário.

## Testes
- Unitários com Vitest e Testing Library: cobertura mínima 85% em `domain` e `application`.
- Integração com `MSW` para mocks HTTP.
- E2E com Playwright para fluxos críticos (lead capture, vendas).
- `tsc --noEmit` e `eslint` em CI obrigatórios.

## Convenções de Código
- Imports com alias `@/*`. Barrel files apenas quando ajudam.
- Padrões de nome: `PascalCase` para componentes, `camelCase` para funções/variáveis.
- Arquivos curtos e coesos. Evitar funções anônimas em handlers reutilizáveis.

## Estrutura de Pastas
- `src/domain`, `src/application`, `src/infrastructure`, `src/interface`, `src/components/ui`, `src/lib`, `src/types`.
- Módulos coesos por contexto de negócio; evitar pastas genéricas sem propósito.

## Checklist de PR
- Tipos estritos e sem `any`.
- Testes verdes com cobertura mínima.
- Acessibilidade validada e responsividade revisada.
- `tsc`, `eslint` e build passando.

## Glossário
- Domain: regras de negócio puras.
- Application: orquestra casos de uso.
- Infrastructure: integrações externas/IO.
- Interface: UI/Next.
