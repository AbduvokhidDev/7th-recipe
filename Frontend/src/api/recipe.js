import client from "./client";
export const getRecipe = async () => {
  const response = await client.get("/recipes");
  return response.data.data;
};
export const createRecipe = async (data) => {
  const response = await client.post("/recipes", data);
  return response.data.data;
};
export const deleteRecipe = async (id) => {
  await client.delete(`/recipes/${id}`);
};
export const getPublicRecipes = async () => {
  const response = await client.get("/recipes/public");
  return response.data.data;
};

export const getPublicRecipe = async (id) => {
  const response = await client.get(`/recipes/public/${id}`);
  return response.data.data;
};
