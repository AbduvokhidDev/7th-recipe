import CategoryTabs from "../components/CategoryTabs";
import RecipeGrid from "../components/RecipeGrid";
import WelcomeSection from "../components/WelcomeSection";

function Home() {
  return (
    <div className="min-h-screen">
      <WelcomeSection />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-pink-400">
              ♡ Mazali g‘oyalar
            </span>
            <h2 className="mt-2 font-serif text-3xl font-extrabold text-[#653748] sm:text-4xl">
              Shirinliklar olami
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-[#987c88]">
              O‘zingizga yoqqan retseptni tanlang va oshxonangizda sehr
              yarating.
            </p>
          </div>

          <a
            href="/recipes"
            className="pastel-button inline-flex w-fit items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-5 py-3 text-sm font-bold text-pink-600 hover:bg-pink-50"
          >
            Barcha retseptlar <span>→</span>
          </a>
        </div>

        <CategoryTabs />
        <RecipeGrid />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] border border-pink-100 bg-gradient-to-r from-pink-100 via-rose-50 to-purple-100 px-6 py-10 text-center sm:px-12 sm:py-14">
          <div className="absolute -right-10 -top-16 size-44 rounded-full bg-pink-200/50 blur-3xl" />
          <div className="absolute -bottom-16 -left-10 size-44 rounded-full bg-purple-200/50 blur-3xl" />

          <div className="relative">
            <span className="text-4xl">🍰</span>
            <h2 className="mt-4 font-serif text-2xl font-extrabold text-[#653748] sm:text-3xl">
              Shirinlik tayyorlashga tayyormisiz?
            </h2>
            <p className="mx-auto mt-3 max-w-xl leading-7 text-[#987c88]">
              Sevimli retseptlaringizni toping va yaqinlaringizga shirin
              lahzalar ulashing.
            </p>
            <a
              href="/recipes"
              className="pastel-button mt-6 inline-flex items-center gap-2 rounded-full bg-pink-500 px-7 py-3 font-bold text-white shadow-lg shadow-pink-200/70 hover:bg-pink-600"
            >
              Retseptlarni topish <span>♡</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
