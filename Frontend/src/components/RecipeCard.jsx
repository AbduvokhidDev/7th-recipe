import { Link } from "react-router";

function RecipeCard({ recipe }) {
  return (
    <article className="group overflow-hidden rounded-[26px] border border-pink-100/80 bg-white/90 shadow-[0_8px_30px_rgba(190,100,135,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(190,100,135,0.18)]">
      <Link to={`/recipes/${recipe.id}`} className="block">
        <div className="relative h-56 overflow-hidden bg-pink-50">
          <img
            src={recipe.image}
            alt={recipe.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-xs font-bold text-pink-600 shadow-sm backdrop-blur">
            {recipe.category}
          </span>
          <span className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/90 text-xl text-pink-500 shadow-sm transition-transform duration-300 group-hover:scale-110">
            ♡
          </span>
        </div>

        <div className="p-5">
          <h3 className="font-serif text-xl font-bold text-[#653748] transition-colors group-hover:text-pink-600">
            {recipe.title}
          </h3>

          <p className="mt-3 min-h-12 text-sm leading-6 text-[#987c88]">
            {recipe.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-pink-100 pt-4">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-[#987c88]">
              <span>🕒</span>
              {recipe.time}
            </span>

            <span className="rounded-full bg-rose-50 px-3 py-1.5 text-xs font-bold text-pink-600">
              {recipe.difficulty}
            </span>
          </div>

          <div className="mt-5 flex items-center justify-between font-semibold text-pink-600">
            <span className="text-sm">Retseptni ko‘rish</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default RecipeCard;
