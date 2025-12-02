import { z } from "zod"

export const envSchema = z.object({
  NEXT_PUBLIC_EVOLUTION_API_URL: z.string().url(),
  NEXT_PUBLIC_EVOLUTION_API_KEY: z.string().min(1),
})

export const parseEnv = (input: Record<string, string | undefined>) => {
  const result = envSchema.safeParse(input)
  if (!result.success) {
    const message = result.error.errors.map(e => `${e.path.join(".")}: ${e.message}`).join("; ")
    throw new Error(message)
  }
  return result.data
}

export const makeSchema = <T extends z.ZodTypeAny>(schema: T) => schema

export const validate = <T extends z.ZodTypeAny>(schema: T, data: unknown) => {
  const result = schema.safeParse(data)
  if (!result.success) {
    return { ok: false as const, error: result.error }
  }
  return { ok: true as const, data: result.data as z.infer<T> }
}

