const prisma = require("../src/prisma");

async function seed() {
  const data = {
    name: "ali",
    id: "1",
    email: "ali@example.com",
  };
  const recipe = {
    id: "1",
    title: "osh",
    ingredients: "guruch,sabzi",
    steps: "togresz,qovuras,suvquyas,pishad",
    userId: data.id,
  };
  const cookLog = {
    id: "1",
    recipeId: recipe.id,
    userId: data.id,
  };
  await prisma.user.deleteMany();
  await prisma.user.create({ data });
  await prisma.recipe.deleteMany();
  await prisma.recipe.create({ data: recipe });
  await prisma.cookLog.deleteMany();
  await prisma.cookLog.create({ data: cookLog });
}
seed().catch((err) => console.log(err));
