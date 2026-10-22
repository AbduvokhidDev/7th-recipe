import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router";
import { getPublicRecipe } from "../api/recipe";

const toLines = (text) =>
  (text ?? "")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

function RecipeDetail() {
  const { id } = useParams();

  const {
    data: recipe,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["recipes", "public", id],
    queryFn: () => getPublicRecipe(id),
  });

  if (isPending) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="font-serif text-3xl font-bold">
          {error.status === 404 ? "Retsept topilmadi" : "Yuklab bo'lmadi"}
        </h1>
        <p>{error.message}</p>
        <Link to="/recipes" className="btn btn-primary">
          Retseptlarga qaytish
        </Link>
      </div>
    );
  }

  const ingredients = toLines(recipe.ingredients);
  const steps = toLines(recipe.steps);
  const date = recipe.createAt
    ? new Date(recipe.createAt).toLocaleDateString("uz-UZ", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <article className="mx-auto max-w-5xl px-6 py-8">
      <Link to="/recipes" className="btn btn-ghost btn-sm mb-6">
        ← Retseptlar
      </Link>

      <header className="overflow-hidden rounded-box bg-neutral text-neutral-content shadow-xl">
        {recipe.imageUrl ? (
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="h-64 w-full object-cover md:h-96"
          />
        ) : null}

        <div className="flex flex-col gap-4 p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-2">
            {recipe.prepTime ? (
              <span className="badge badge-primary badge-lg">
                {recipe.prepTime} daqiqa
              </span>
            ) : null}
            <span className="badge badge-outline badge-lg border-neutral-content text-neutral-content">
              {ingredients.length} ta ingredient
            </span>
            <span className="badge badge-outline badge-lg border-neutral-content text-neutral-content">
              {steps.length} bosqich
            </span>
          </div>

          <h1 className="font-serif text-4xl font-bold leading-tight md:text-6xl">
            {recipe.title}
          </h1>

          {date ? (
            <p className="text-sm opacity-90">Qo'shilgan: {date}</p>
          ) : null}
        </div>
      </header>

      <div className="mt-8 grid gap-6 md:grid-cols-5">
        <section className="card self-start bg-base-100 shadow md:sticky md:top-24 md:col-span-2">
          <div className="card-body">
            <h2 className="card-title font-serif text-2xl">Ingredientlar</h2>
            <ul className="mt-2 flex flex-col gap-3">
              {ingredients.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="card bg-base-100 shadow md:col-span-3">
          <div className="card-body">
            <h2 className="card-title font-serif text-2xl">Tayyorlash</h2>
            <ol className="mt-2 flex flex-col gap-5">
              {steps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-content">
                    {i + 1}
                  </span>
                  <p className="pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </article>
  );
}

export default RecipeDetail;
