const express = require("express");
const router = express.Router();
const controller = require("../controllers/recipe.controller");
const validate = require("../middlewares/validate");
const { requireAuth } = require("../middlewares/auth.middleware");
const { createRecipeSchema } = require("../validations/recipe.validation");
router.get("/public", controller.getPublic);
router.get("/public/:id", controller.getPublicOne);

router.use(requireAuth);
router.get("/", controller.getAll);
router.post("/", validate(createRecipeSchema), controller.create);
router.delete("/:id", controller.remove);

module.exports = router;
