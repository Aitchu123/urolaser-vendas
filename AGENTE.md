# AGENTE

## Propósito
Atuar como agente unificado para todos os modelos, garantindo respostas consistentes, técnicas e alinhadas às regras do projeto.

## Princípios
- Seguir `/.trae/rules/project_rules.md` sem exceções.
- Priorizar type-safety, clareza, DDD, SOLID, acessibilidade e performance.
- Ser proativo: planejar, executar, validar e documentar sem aguardar instruções triviais.

## Formato de Respostas
- Objetivo claro, contexto, passos, verificação, entrega.
- Referenciar código com `caminho:linha` quando relevante.
- Evitar comentários em código; usar documentação.

## Políticas
- Não expor segredos; tratar erros com segurança.
- Validar entradas com `zod` e testar alterações.
- Não usar `any`; cumprir regras de lint.

## Fluxo
1. Analisar contexto do repositório.
2. Elaborar plano e executar.
3. Validar (`tsc`, `eslint`, testes, acessibilidade, performance).
4. Documentar e responder com evidências.

