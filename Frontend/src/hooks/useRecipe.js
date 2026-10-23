import { useQuery } from "@tanstack/react-query";
import { getPublicRecipe } from "../api/recipe";

export const recipeDetailKeys = {
  all: ["recipe"],
  detail: (id) => [...recipeDetailKeys.all, id],
  publicDetail: (id) => [...recipeDetailKeys.all, "public", id],
};

export function useRecipe(id, options = {}) {
  return useQuery({
    ...options,
    queryKey: recipeDetailKeys.detail(id),
    queryFn: () => getRecipeById(id),
    enabled: Boolean(id) && (options.enabled ?? true),
  });
}

export function usePublicRecipe(id, options = {}) {
  return useQuery({
    ...options,
    queryKey: recipeDetailKeys.publicDetail(id),
    queryFn: () => getPublicRecipe(id),
    enabled: Boolean(id) && (options.enabled ?? true),
  });
}

async function getRecipeById(id) {
  const { getRecipeById: getById } = await import("../api/recipe");

  return getById(id);
}
