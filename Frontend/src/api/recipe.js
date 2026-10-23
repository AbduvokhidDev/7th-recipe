import client from "./client";

const getResponseData = (response) => {
  if (response.data?.success === false) {
    throw new Error(response.data.message || response.data.error || "So‘rov bajarilmadi.");
  }

  return response.data?.data ?? response.data;
};

export const getRecipe = async () => {
  const response = await client.get("/recipes");
  return getResponseData(response);
};

export const createRecipe = async (data) => {
  const response = await client.post("/recipes", data);
  return getResponseData(response);
};

export const deleteRecipe = async (id) => {
  if (id === undefined || id === null || id === "") {
    throw new Error("Retsept ID si kiritilmagan.");
  }

  const response = await client.delete(`/recipes/${encodeURIComponent(id)}`);
  return getResponseData(response);
};

export const getPublicRecipes = async () => {
  const response = await client.get("/recipes/public");
  return getResponseData(response);
};

export const getPublicRecipe = async (id) => {
  if (id === undefined || id === null || id === "") {
    throw new Error("Retsept ID si kiritilmagan.");
  }

  const response = await client.get(
    `/recipes/public/${encodeURIComponent(id)}`,
  );

  return getResponseData(response);
};
