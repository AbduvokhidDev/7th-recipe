import { useQuery } from "@tanstack/react-query";
import { getPublicRecipes } from "../api/recipe";
import RecipeCard from "./RecipeCard";

function RecipeGrid() {
  const {
    data: recipes = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["public-recipes"],
    queryFn: getPublicRecipes,
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-[22px] border border-pink-100 bg-white/80 sm:rounded-[26px]"
          >
            <div className="h-48 animate-pulse bg-pink-100 sm:h-56" />
            <div className="space-y-3 p-4 sm:p-5">
              <div className="h-5 w-3/4 animate-pulse rounded-full bg-pink-100" />
              <div className="h-4 w-full animate-pulse rounded-full bg-pink-50" />
              <div className="h-4 w-2/3 animate-pulse rounded-full bg-pink-50" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div
        role="alert"
        className="rounded-2xl border border-rose-200 bg-white/80 p-5 text-center"
      >
        <p className="font-semibold text-rose-600">
          Retseptlarni yuklashda xatolik yuz berdi.
        </p>
        <p className="mt-2 break-words text-sm text-[#987c88]">
          {error?.message || "Server bilan bog‘lanib bo‘lmadi."}
        </p>
      </div>
    );
  }

  if (!recipes.length) {
    return (
      <div className="rounded-2xl border border-pink-100 bg-white/80 px-4 py-10 text-center sm:py-12">
        <span className="text-4xl" aria-hidden="true">
          🧁
        </span>
        <h3 className="mt-3 font-serif text-xl font-bold text-[#653748]">
          Hozircha retseptlar yo‘q
        </h3>
        <p className="mt-2 text-sm leading-6 text-[#987c88]">
          Yangi shirinlik retseptlari shu yerda paydo bo‘ladi.
        </p>
      </div>
    );
  }

  return (
    <div className="grid min-w-0 grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-3 sm:gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeGrid;
