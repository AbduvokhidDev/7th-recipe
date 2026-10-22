import { Link } from "react-router";

function RecipeSection({ recipe, index, total }) {
  const number = String(index + 1).padStart(2, "0");
  const count = String(total).padStart(2, "0");

  const ingredients = (recipe.ingredients ?? "")
    .split("\n")
    .filter(Boolean)
    .slice(0, 4)
    .join(", ");

  return (
    <section
      className="relative flex h-[calc(100vh-4rem)] snap-start flex-col bg-neutral bg-cover bg-center text-neutral-content"
      style={
        recipe.imageUrl
          ? { backgroundImage: `url(${recipe.imageUrl})` }
          : undefined
      }
    >
      {/* rasm ustidagi matn o'qilishi uchun qatlam */}
      <div className="absolute inset-0 bg-linear-to-t from-neutral/80 via-neutral/10 to-neutral/50" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col justify-between px-6 py-8">
        <div className="flex items-center justify-between text-sm font-medium uppercase tracking-widest">
          <span>
            {number} / {count}
          </span>
          <span>Yangi qo'shilgan</span>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6 rounded-box bg-base-100 p-8 text-base-content shadow-xl">
          <div className="min-w-0 flex-1 basis-96">
            {recipe.prepTime ? (
              <p className="text-sm font-bold text-primary">
                {recipe.prepTime} daqiqa
              </p>
            ) : null}
            <h2 className="mt-2 font-serif text-4xl font-bold leading-tight">
              {recipe.title}
            </h2>
            <p className="mt-3 line-clamp-2">{ingredients}</p>
          </div>

          <Link to={`/recipes/${recipe.id}`} className="btn btn-primary btn-lg">
            Retseptni ochish
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RecipeSection;
