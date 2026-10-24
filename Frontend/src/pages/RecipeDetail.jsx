import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router";
import { getPublicRecipe } from "../api/recipe";

function RecipeDetail() {
  const { id } = useParams();

  const {
    data: recipe,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["public-recipe", id],
    queryFn: () => getPublicRecipe(id),
    enabled: Boolean(id),
  });

  if (isLoading) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-6xl items-center justify-center px-4 py-10">
        <div className="text-center">
          <span className="text-5xl" aria-hidden="true">
            🧁
          </span>
          <p className="mt-4 animate-pulse font-semibold text-pink-600">
            Retsept yuklanmoqda...
          </p>
        </div>
      </main>
    );
  }

  if (isError || !recipe) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-10 text-center">
        <span className="text-6xl" aria-hidden="true">
          🍰
        </span>
        <h1 className="mt-5 font-serif text-2xl font-extrabold text-[#653748] sm:text-3xl">
          {isError ? "Retseptni yuklab bo‘lmadi" : "Retsept topilmadi"}
        </h1>
        <p className="mt-3 max-w-lg break-words text-sm leading-6 text-[#987c88]">
          {isError
            ? error?.message || "Server bilan bog‘lanishda xatolik yuz berdi."
            : "Bu retsept mavjud emas yoki o‘chirilgan."}
        </p>
        <Link
          to="/recipes"
          className="pastel-button mt-6 inline-flex rounded-full bg-pink-500 px-6 py-3 font-bold text-white hover:bg-pink-600"
        >
          Retseptlarga qaytish
        </Link>
      </main>
    );
  }

  const image = recipe.imageUrl || recipe.image;
  const ingredients = Array.isArray(recipe.ingredients)
    ? recipe.ingredients
    : typeof recipe.ingredients === "string"
      ? recipe.ingredients
          .split(/\r?\n/)
          .map((item) => item.trim())
          .filter(Boolean)
      : [];
  const steps = Array.isArray(recipe.steps)
    ? recipe.steps
    : typeof recipe.steps === "string"
      ? recipe.steps
          .split(/\r?\n/)
          .map((item) => item.trim())
          .filter(Boolean)
      : [];
  const prepTime = recipe.prepTime ?? recipe.time;

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-3 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <Link
        to="/recipes"
        className="inline-flex max-w-full items-center gap-2 rounded-full border border-pink-100 bg-white/80 px-4 py-2.5 text-sm font-semibold text-pink-600 transition hover:bg-pink-50"
      >
        <span aria-hidden="true">←</span>
        Barcha retseptlar
      </Link>

      <article className="mt-5 min-w-0 overflow-hidden rounded-[24px] border border-pink-100 bg-white/90 shadow-[0_12px_40px_rgba(190,100,135,0.10)] sm:mt-7 sm:rounded-[30px]">
        <div className="grid min-w-0 lg:grid-cols-2">
          <div className="relative min-h-0 aspect-[4/3] overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 sm:aspect-[5/4] lg:aspect-auto lg:min-h-[420px]">
            {image ? (
              <img
                src={image}
                alt={recipe.title || "Shirinlik retsepti"}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-7xl">
                🧁
              </div>
            )}

            {recipe.category && (
              <span className="absolute left-3 top-3 max-w-[80%] truncate rounded-full border border-white/80 bg-white/90 px-3 py-2 text-xs font-bold text-pink-600 shadow-sm backdrop-blur sm:left-5 sm:top-5 sm:px-4 sm:text-sm">
                {recipe.category}
              </span>
            )}
          </div>

          <div className="flex min-w-0 flex-col justify-center p-4 sm:p-7 md:p-10 lg:p-12">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-pink-400 sm:text-sm sm:tracking-[0.2em]">
              ♡ Mazali retsept
            </span>

            <h1 className="mt-3 break-words font-serif text-2xl font-extrabold leading-tight text-[#653748] min-[480px]:text-3xl sm:text-4xl">
              {recipe.title || "Nomsiz retsept"}
            </h1>

            {recipe.description && (
              <p className="mt-4 break-words text-sm leading-7 text-[#987c88] sm:mt-5 sm:text-base">
                {recipe.description}
              </p>
            )}

            <div className="mt-5 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:mt-7">
              <div className="min-w-0 rounded-2xl bg-pink-50 p-3 sm:p-4">
                <span className="text-xl" aria-hidden="true">
                  🕒
                </span>
                <p className="mt-2 text-xs text-[#987c88]">Tayyorlash vaqti</p>
                <p className="mt-1 break-words text-sm font-bold text-[#653748]">
                  {prepTime
                    ? `${prepTime}${typeof prepTime === "number" ? " daqiqa" : ""}`
                    : "Ko‘rsatilmagan"}
                </p>
              </div>

              <div className="min-w-0 rounded-2xl bg-purple-50 p-3 sm:p-4">
                <span className="text-xl" aria-hidden="true">
                  👩‍🍳
                </span>
                <p className="mt-2 text-xs text-[#987c88]">Qiyinlik darajasi</p>
                <p className="mt-1 break-words text-sm font-bold text-[#653748]">
                  {recipe.difficulty || "Ko‘rsatilmagan"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid min-w-0 gap-8 border-t border-pink-100 p-4 sm:gap-10 sm:p-7 md:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
          <section className="min-w-0">
            <h2 className="font-serif text-xl font-extrabold text-[#653748] sm:text-2xl">
              <span className="mr-2" aria-hidden="true">
                🧺
              </span>
              Kerakli masalliqlar
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#987c88]">
              Retsept uchun kerak bo‘ladigan mahsulotlar.
            </p>

            {ingredients.length > 0 ? (
              <ul className="mt-5 space-y-3 sm:mt-6">
                {ingredients.map((ingredient, index) => (
                  <li
                    key={`${index}-${ingredient}`}
                    className="flex min-w-0 items-start gap-3 rounded-2xl border border-pink-100/80 bg-pink-50/60 px-3 py-3 text-sm leading-6 text-[#805968] sm:px-4"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-pink-200 text-xs font-bold text-pink-700">
                      {index + 1}
                    </span>
                    <span className="min-w-0 break-words">{ingredient}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-5 rounded-2xl bg-pink-50 p-4 text-sm text-[#987c88]">
                Masalliqlar hali kiritilmagan.
              </p>
            )}
          </section>

          <section className="min-w-0">
            <h2 className="font-serif text-xl font-extrabold text-[#653748] sm:text-2xl">
              <span className="mr-2" aria-hidden="true">
                📝
              </span>
              Tayyorlash bosqichlari
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#987c88]">
              Bosqichlarni ketma-ket bajaring va mazali natijadan bahramand
              bo‘ling.
            </p>

            {steps.length > 0 ? (
              <ol className="mt-5 space-y-5 sm:mt-6">
                {steps.map((step, index) => (
                  <li
                    key={`${index}-${step}`}
                    className="flex min-w-0 gap-3 sm:gap-4"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-rose-400 text-sm font-bold text-white shadow-md shadow-pink-200/60 sm:size-9">
                      {index + 1}
                    </span>
                    <p className="min-w-0 break-words pt-1 text-sm leading-7 text-[#805968] sm:text-base">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="mt-5 rounded-2xl bg-pink-50 p-4 text-sm text-[#987c88]">
                Tayyorlash bosqichlari hali kiritilmagan.
              </p>
            )}
          </section>
        </div>
      </article>

      <section className="mt-6 rounded-[24px] border border-pink-100 bg-gradient-to-r from-pink-100 via-rose-50 to-purple-100 p-5 text-center sm:mt-8 sm:rounded-[26px] sm:p-10">
        <span className="text-3xl" aria-hidden="true">
          💗
        </span>
        <h2 className="mt-3 font-serif text-xl font-bold text-[#653748] sm:text-2xl">
          Shirin lahzalar yarating
        </h2>
        <p className="mt-2 text-sm leading-6 text-[#987c88]">
          Yana ko‘plab mazali g‘oyalarni kashf eting.
        </p>
        <Link
          to="/recipes"
          className="pastel-button mt-5 inline-flex w-full items-center justify-center rounded-full bg-pink-500 px-6 py-3 font-bold text-white hover:bg-pink-600 sm:w-auto"
        >
          Boshqa retseptlar →
        </Link>
      </section>
    </main>
  );
}

export default RecipeDetail;
