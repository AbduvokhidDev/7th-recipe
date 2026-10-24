import { useEffect, useMemo, useState } from "react";
import { getPublicRecipes } from "../api/recipe";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function fetchRecipes() {
      try {
        setLoading(true);
        setError("");

        const response = await getPublicRecipes();

        const data = Array.isArray(response)
          ? response
          : Array.isArray(response?.data)
            ? response.data
            : Array.isArray(response?.recipes)
              ? response.recipes
              : Array.isArray(response?.data?.recipes)
                ? response.data.recipes
                : [];

        if (!cancelled) {
          setRecipes(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err.response?.data?.message ||
              err.message ||
              "Retseptlarni yuklashda xatolik yuz berdi.",
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchRecipes();

    return () => {
      cancelled = true;
    };
  }, []);

  const filteredRecipes = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();

    if (!query) return recipes;

    return recipes.filter((recipe) => {
      const ingredients = Array.isArray(recipe.ingredients)
        ? recipe.ingredients.join(" ")
        : recipe.ingredients || "";

      const steps = Array.isArray(recipe.steps)
        ? recipe.steps.join(" ")
        : recipe.steps || "";

      return [
        recipe.title,
        ingredients,
        steps,
        recipe.description,
        recipe.category,
      ]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase()
        .includes(query);
    });
  }, [recipes, search]);

  const cardRecipes = filteredRecipes.map((recipe) => ({
    ...recipe,
    image: recipe.imageUrl || recipe.image || "",
    time: recipe.prepTime
      ? `${recipe.prepTime} daqiqa`
      : recipe.time || "Ko‘rsatilmagan",
    description:
      recipe.description ||
      (recipe.ingredients
        ? `Masalliqlar: ${
            Array.isArray(recipe.ingredients)
              ? recipe.ingredients.join(", ")
              : recipe.ingredients
          }`
        : "Ushbu retsept haqida qo‘shimcha ma’lumot yo‘q."),
  }));

  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl min-w-0 px-3 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <section className="relative mb-7 overflow-hidden rounded-[24px] border border-pink-100 bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 px-4 py-7 sm:mb-10 sm:rounded-[30px] sm:px-8 sm:py-10 md:px-10 md:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-16 size-36 rounded-full bg-pink-200/50 blur-3xl sm:size-48"
        />

        <div className="relative min-w-0">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-pink-500 sm:text-sm sm:tracking-[0.2em]">
            ♡ Mazali tanlov
          </span>

          <h1 className="mt-3 break-words font-serif text-3xl font-extrabold leading-tight text-[#653748] min-[480px]:text-4xl sm:text-5xl">
            Barcha retseptlar
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#987c88] sm:mt-4 sm:text-base sm:leading-7">
            Bazaga qo‘shilgan shirinlik retseptlarini toping va ko‘rib chiqing.
          </p>

          <div className="mt-5 w-full max-w-2xl sm:mt-7">
            <SearchBar onSearch={setSearch} />
          </div>
        </div>
      </section>

      <section className="min-w-0">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 sm:mb-6">
          <h2 className="font-serif text-xl font-bold text-[#653748] sm:text-2xl">
            Retseptlar
          </h2>

          {!loading && !error && (
            <p className="text-xs text-[#987c88] sm:text-sm">
              Topildi:{" "}
              <span className="font-bold text-pink-600">
                {filteredRecipes.length}
              </span>{" "}
              ta
            </p>
          )}
        </div>

        {search.trim() && (
          <button
            type="button"
            onClick={() => setSearch("")}
            className="mb-4 rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-sm font-semibold text-pink-600 transition hover:bg-pink-50 sm:mb-5"
          >
            Qidiruvni tozalash ×
          </button>
        )}

        {loading ? (
          <div
            className="rounded-[24px] border border-pink-100 bg-white/80 px-4 py-12 text-center sm:rounded-[28px] sm:px-6 sm:py-16"
            role="status"
          >
            <span className="text-4xl" aria-hidden="true">
              🧁
            </span>
            <p className="mt-4 text-base font-semibold text-[#653748] sm:text-lg">
              Retseptlar yuklanmoqda...
            </p>
          </div>
        ) : error ? (
          <div
            className="rounded-[24px] border border-red-200 bg-white/90 px-4 py-8 text-center sm:rounded-[28px] sm:px-6 sm:py-12"
            role="alert"
          >
            <h3 className="font-serif text-lg font-bold text-red-600 sm:text-xl">
              Retseptlarni yuklab bo‘lmadi
            </h3>
            <p className="mt-3 break-words text-sm leading-6 text-gray-600">
              {error}
            </p>
            <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm">
              Backend manzili va API endpointini tekshiring.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="pastel-button mt-5 rounded-full bg-pink-500 px-5 py-3 text-sm font-bold text-white hover:bg-pink-600"
            >
              Qayta yuklash
            </button>
          </div>
        ) : cardRecipes.length > 0 ? (
          <div className="grid min-w-0 grid-cols-1 gap-5 min-[480px]:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {cardRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="rounded-[24px] border border-pink-100 bg-white/80 px-4 py-10 text-center shadow-sm sm:rounded-[28px] sm:px-6 sm:py-16">
            <span className="text-5xl" aria-hidden="true">
              🍰
            </span>
            <h3 className="mt-4 break-words font-serif text-xl font-bold text-[#653748] sm:text-2xl">
              {search.trim() ? "Retsept topilmadi" : "Hozircha retsept yo‘q"}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#987c88]">
              {search.trim()
                ? "Boshqa so‘z bilan qidirib ko‘ring."
                : "Bazaga retsept qo‘shilganda shu yerda ko‘rinadi."}
            </p>
            {search.trim() && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="pastel-button mt-5 rounded-full bg-pink-500 px-5 py-3 text-sm font-bold text-white hover:bg-pink-600"
              >
                Barcha retseptlarni ko‘rish
              </button>
            )}
          </div>
        )}
      </section>
    </main>
  );
}

export default Recipes;
