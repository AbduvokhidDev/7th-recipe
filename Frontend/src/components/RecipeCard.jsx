import { Link } from "react-router";

function RecipeCard({ recipe }) {
  const image = recipe.imageUrl || recipe.image || "";

  const ingredients = Array.isArray(recipe.ingredients)
    ? recipe.ingredients.join(", ")
    : recipe.ingredients || "";

  const description =
    recipe.description ||
    (ingredients
      ? `Masalliqlar: ${ingredients}`
      : "Mazali shirinlik retsepti.");

  const time =
    recipe.time ||
    (recipe.prepTime ? `${recipe.prepTime} daqiqa` : "Vaqt ko‘rsatilmagan");

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[22px] border border-pink-100/80 bg-white/90 shadow-[0_8px_30px_rgba(190,100,135,0.08)] transition-all duration-300 sm:rounded-[26px] sm:hover:-translate-y-2 sm:hover:shadow-[0_18px_40px_rgba(190,100,135,0.18)]">
      <Link
        to={`/recipes/${recipe.id}`}
        className="flex h-full min-w-0 flex-col rounded-[inherit] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-pink-500"
        aria-label={`${recipe.title || "Nomsiz retsept"} retseptini ko‘rish`}
      >
        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-pink-50 sm:aspect-[5/4]">
          {image ? (
            <img
              src={image}
              alt={recipe.title || "Shirinlik retsepti"}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 sm:group-hover:scale-110"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          ) : null}

          {!image && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 text-5xl sm:text-6xl"
              aria-hidden="true"
            >
              🧁
            </div>
          )}

          {recipe.category && (
            <span className="absolute left-3 top-3 max-w-[75%] truncate rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-xs font-bold text-pink-600 shadow-sm backdrop-blur sm:left-4 sm:top-4">
              {recipe.category}
            </span>
          )}

          <span
            aria-hidden="true"
            className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/90 text-xl text-pink-500 shadow-sm sm:right-4 sm:top-4 sm:size-10"
          >
            ♡
          </span>
        </div>

        <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
          <h3 className="line-clamp-2 break-words font-serif text-lg font-bold leading-snug text-[#653748] transition-colors sm:text-xl sm:group-hover:text-pink-600">
            {recipe.title || "Nomsiz retsept"}
          </h3>

          <p className="mt-3 line-clamp-3 break-words text-sm leading-6 text-[#987c88]">
            {description}
          </p>

          <div className="mt-auto">
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-pink-100 pt-4 sm:mt-5">
              <span className="inline-flex min-w-0 items-start gap-2 text-sm font-medium text-[#987c88]">
                <span aria-hidden="true">🕒</span>
                <span className="break-words">{time}</span>
              </span>

              {recipe.difficulty && (
                <span className="max-w-full break-words rounded-full bg-rose-50 px-3 py-1.5 text-xs font-bold text-pink-600">
                  {recipe.difficulty}
                </span>
              )}
            </div>

            <div className="mt-4 flex items-center justify-between gap-2 font-semibold text-pink-600 sm:mt-5">
              <span className="text-sm">Retseptni ko‘rish</span>
              <span
                aria-hidden="true"
                className="shrink-0 transition-transform sm:group-hover:translate-x-1"
              >
                →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default RecipeCard;
