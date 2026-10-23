import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createRecipe,
  deleteRecipe,
  getPublicRecipes,
  getRecipe,
} from "../api/recipe";

export const recipeKeys = {
  all: ["recipes"],
  lists: () => [...recipeKeys.all, "list"],
  list: () => [...recipeKeys.lists(), "all"],
  publicLists: () => [...recipeKeys.all, "public"],
};

export function useRecipes(options = {}) {
  return useQuery({
    ...options,
    queryKey: recipeKeys.list(),
    queryFn: getRecipe,
  });
}

export function usePublicRecipes(options = {}) {
  return useQuery({
    ...options,
    queryKey: recipeKeys.publicLists(),
    queryFn: getPublicRecipes,
  });
}

export function useCreateRecipe(options = {}) {
  const queryClient = useQueryClient();
  const { onSuccess, ...mutationOptions } = options;

  return useMutation({
    ...mutationOptions,
    mutationFn: createRecipe,
    onSuccess: async (...args) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: recipeKeys.lists() }),
        queryClient.invalidateQueries({ queryKey: recipeKeys.publicLists() }),
      ]);

      await onSuccess?.(...args);
    },
  });
}

export function useDeleteRecipe(options = {}) {
  const queryClient = useQueryClient();
  const { onSuccess, ...mutationOptions } = options;

  return useMutation({
    ...mutationOptions,
    mutationFn: deleteRecipe,
    onSuccess: async (...args) => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: recipeKeys.lists() }),
        queryClient.invalidateQueries({ queryKey: recipeKeys.publicLists() }),
      ]);

      await onSuccess?.(...args);
    },
  });
}
