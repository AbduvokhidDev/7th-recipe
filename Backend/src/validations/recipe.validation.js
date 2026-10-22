const { z } = require("zod");
const createRecipeSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Nomi kamida 3 ta belgi bolsin")
    .max(100, "Nomi juda uzun"),
  ingredients: z.string().trim().min(5, "Ingredientlarni kiriting"),
  steps: z.string().trim().min(10, "Tayyorlash bosqichlarini kiriting"),
  imageUrl: z
    .string()
    .trim()
    .url("Rasm URL notogri")
    .optional()
    .or(z.literal("")),
  prepTime: z.coerce
    .number()
    .int()
    .positive("Vaqt musbat son bo'lsin")
    .max(1440)
    .optional(),
});

const updateRecipeSchema = z.object({
  title: z.string().trim().min(3).max(100).optional(),
  ingredients: z.string().trim().min(5).optional(),
  steps: z.string().trim().min(10).optional(),
  imageUrl: z.string().trim().url().optional().or(z.literal("")),
  prepTime: z.coerce.number().int().positive().max(1440).optional(),
});
const recipeIdSchema = z.object({
  id: z.coerce.number().int().positive("ID noto'g'ri"),
});

module.exports = { createRecipeSchema, updateRecipeSchema, recipeIdSchema };
