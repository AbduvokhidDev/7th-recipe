import { useMemo, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";

const recipes = [
  {
    id: "1",
    title: "Qulupnayli tort",
    category: "Tortlar",
    time: "60 daqiqa",
    difficulty: "O‘rtacha",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=85",
    description:
      "Yumshoq krem va yangi qulupnay bilan tayyorlangan mazali tort.",
  },
  {
    id: "2",
    title: "Shokoladli desert",
    category: "Desertlar",
    time: "30 daqiqa",
    difficulty: "Oson",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85",
    description: "Shokolad ta’mini sevuvchilar uchun ajoyib shirinlik.",
  },
  {
    id: "3",
    title: "Mazali kruassan",
    category: "Pishiriqlar",
    time: "45 daqiqa",
    difficulty: "O‘rtacha",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85",
    description: "Tashqi tomoni qarsildoq, ichi esa yumshoq va mayin.",
  },
  {
    id: "4",
    title: "Pushti kapkeyk",
    category: "Kekslar",
    time: "35 daqiqa",
    difficulty: "Oson",
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=800&q=85",
    description: "Bayram dasturxoni uchun nafis va chiroyli kapkeyklar.",
  },
  {
    id: "5",
    title: "Shokoladli pechenye",
    category: "Pechenyelar",
    time: "25 daqiqa",
    difficulty: "Oson",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=85",
    description: "Shokolad bo‘laklari bilan mazali uy pechenyesi.",
  },
  {
    id: "6",
    title: "Qulupnayli ichimlik",
    category: "Ichimliklar",
    time: "10 daqiqa",
    difficulty: "Oson",
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=85",
    description: "Yangi qulupnaydan tayyorlangan tetiklantiruvchi ichimlik.",
  },
];

const categories = [
  "Barchasi",
  "Tortlar",
  "Pechenyelar",
  "Kekslar",
  "Desertlar",
  "Ichimliklar",
  "Pishiriqlar",
];

function Recipes() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Barchasi");

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesSearch =
        `${recipe.title} ${recipe.category} ${recipe.description}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "Barchasi" || recipe.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <section className="relative mb-10 overflow-hidden rounded-[30px] border border-pink-100 bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 px-6 py-10 sm:px-10 sm:py-14">
        <div className="absolute -right-10 -top-16 size-48 rounded-full bg-pink-200/50 blur-3xl" />
        <div className="relative">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-pink-500">
            ♡ Mazali tanlov
          </span>
          <h1 className="mt-3 font-serif text-4xl font-extrabold text-[#653748] sm:text-5xl">
            Barcha retseptlar
          </h1>
          <p className="mt-4 max-w-2xl leading-7 text-[#987c88]">
            Sevimli shirinliklaringizni toping, yangi ta’mlarni sinab ko‘ring va
            oshxonangizda ajoyib lahzalar yarating.
          </p>
          <div className="mt-7 max-w-2xl">
            <SearchBar onSearch={setSearch} />
          </div>
        </div>
      </section>

      <section>
        <div className="mb-7">
          <h2 className="font-serif text-2xl font-bold text-[#653748]">
            Shirinlik turini tanlang
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`pastel-button rounded-full border px-5 py-2.5 text-sm font-semibold ${
                  activeCategory === category
                    ? "border-pink-500 bg-pink-500 text-white shadow-md shadow-pink-200/70"
                    : "border-pink-100 bg-white/90 text-[#805968] hover:border-pink-300 hover:bg-pink-50 hover:text-pink-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-[#987c88]">
            Topildi:{" "}
            <span className="font-bold text-pink-600">
              {filteredRecipes.length}
            </span>{" "}
            ta retsept
          </p>
          {(search || activeCategory !== "Barchasi") && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("Barchasi");
              }}
              className="text-sm font-semibold text-pink-600 hover:text-pink-700"
            >
              Tozalash ×
            </button>
          )}
        </div>

        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="rounded-[28px] border border-pink-100 bg-white/80 px-6 py-16 text-center shadow-sm">
            <span className="text-5xl">🍰</span>
            <h3 className="mt-4 font-serif text-2xl font-bold text-[#653748]">
              Retsept topilmadi
            </h3>
            <p className="mt-2 text-[#987c88]">
              Boshqa nom yoki shirinlik turini tanlab ko‘ring.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("Barchasi");
              }}
              className="pastel-button mt-6 rounded-full bg-pink-500 px-6 py-3 font-bold text-white hover:bg-pink-600"
            >
              Barcha retseptlar
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Recipes;
