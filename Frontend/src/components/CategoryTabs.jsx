import { useState } from "react";

const categories = [
  { id: "all", label: "Barchasi", icon: "🍰" },
  { id: "cakes", label: "Tortlar", icon: "🎂" },
  { id: "cookies", label: "Pechenyelar", icon: "🍪" },
  { id: "cupcakes", label: "Kekslar", icon: "🧁" },
  { id: "desserts", label: "Desertlar", icon: "🍮" },
  { id: "drinks", label: "Ichimliklar", icon: "🍓" },
];

function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="mb-6 min-w-0 sm:mb-8">
      <div
        className="flex min-w-0 gap-2.5 overflow-x-auto overscroll-x-contain pb-3 sm:flex-wrap sm:gap-3 sm:overflow-visible sm:pb-0"
        role="group"
        aria-label="Shirinlik kategoriyalari"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={isActive}
              className={`pastel-button inline-flex shrink-0 items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors sm:px-5 sm:py-3 ${
                isActive
                  ? "border-pink-500 bg-pink-500 text-white shadow-lg shadow-pink-200/70"
                  : "border-pink-100 bg-white/80 text-[#805968] hover:border-pink-300 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              <span aria-hidden="true">{category.icon}</span>
              {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryTabs;
