# Integrações UI (MagicUI / Aceternity UI)

## Objetivo
- Encapsular componentes das bibliotecas em wrappers próprios para manter type-safety e evitar lock-in.

## Diretrizes
- Criar wrappers em `src/components/ui/*` com props tipadas e estilos alinhados ao design system.
- Não importar diretamente da biblioteca em páginas; importar sempre dos wrappers locais.
- Validar acessibilidade e performance antes de adotar novos componentes.

## Componentes Sugeridos
- Spotlight/Dock (Aceternity UI), Cards/Grids animados (MagicUI), tooltips/popovers (Radix UI wrappers).

## Processo
- Selecionar componente → criar wrapper → tipar props → documentar uso → testar responsividade.

