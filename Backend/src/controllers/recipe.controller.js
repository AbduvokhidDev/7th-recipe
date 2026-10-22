const prisma = require("../prisma");
// batcha recipelar
const getAll = async (req, res, next) => {
  try {
    const recipe = await prisma.recipe.findMany({
      where: { userId: req.userId },
      orderBy: { createAt: "desc" },
      include: {
        _count: { select: { cookLogs: true } },
      },
    });
    res.json({ success: true, data: recipe });
  } catch (error) {
    next(error);
  }
};
const getPublic = async (req, res, next) => {
  try {
    const recipes = await prisma.recipe.findMany({
      orderBy: { createAt: "desc" },
      select: {
        id: true,
        title: true,
        ingredients: true,
        steps: true,
        imageUrl: true,
        prepTime: true,
        createAt: true,
      },
    });
    res.json({ success: true, data: recipes });
  } catch (error) {
    next(error);
  }
};
const getPublicOne = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) {
      return res.status(400).json({ success: false, error: "ID noto'g'ri" });
    }
    const recipe = await prisma.recipe.findUnique({
      where: { id },
      select: {
        id: true,
        title: true,
        ingredients: true,
        steps: true,
        imageUrl: true,
        prepTime: true,
        createAt: true,
      },
    });
    if (!recipe) {
      return res
        .status(404)
        .json({ success: false, error: "recipe topilmadi" });
    }
    res.json({ success: true, data: recipe });
  } catch (error) {
    next(error);
  }
};
// yaratish
const create = async (req, res, next) => {
  try {
    const recipe = await prisma.recipe.create({
      data: {
        ...req.body,
        userId: req.userId,
      },
    });
    res.status(201).json({ success: true, data: recipe });
  } catch (error) {
    next(error);
  }
};
// yangilash
const update = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) {
      return res.status(400).json({ success: false, error: "ID notogri" });
    }

    const recipe = await prisma.recipe.findFirst({
      where: { id, userId: req.userId },
    });
    if (!recipe) {
      return res
        .status(404)
        .json({ success: false, error: "recipe topilmadi" });
    }

    const data = { ...req.body };
    if (data.imageUrl === "") data.imageUrl = null;

    const updated = await prisma.recipe.update({ where: { id }, data });
    res.json({ success: true, data: updated });
  } catch (error) {
    next(error);
  }
};
// ochurish
const remove = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const recipe = await prisma.recipe.findFirst({
      where: { id, userId: req.userId },
    });
    if (!recipe) {
      return res
        .status(404)
        .json({ success: false, error: "recipe topilmadi" });
    }
    await prisma.recipe.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
module.exports = { getAll, create, remove, getPublic, getPublicOne };
