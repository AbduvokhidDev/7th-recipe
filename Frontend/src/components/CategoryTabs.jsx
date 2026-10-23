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
    <div className="mb-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`pastel-button inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold ${
                isActive
                  ? "border-pink-500 bg-pink-500 text-white shadow-lg shadow-pink-200/70"
                  : "border-pink-100 bg-white/80 text-[#805968] hover:border-pink-300 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              <span>{category.icon}</span>
              {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryTabs;
