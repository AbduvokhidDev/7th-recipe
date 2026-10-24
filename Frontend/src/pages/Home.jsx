import { Link } from "react-router";
import CategoryTabs from "../components/CategoryTabs";
import RecipeGrid from "../components/RecipeGrid";
import WelcomeSection from "../components/WelcomeSection";

function Home() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <WelcomeSection />

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-pink-400 sm:text-sm sm:tracking-[0.2em]">
              ♡ Mazali g‘oyalar
            </span>

            <h2 className="mt-2 break-words font-serif text-2xl font-extrabold leading-tight text-[#653748] min-[480px]:text-3xl sm:text-4xl">
              Shirinliklar olami
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#987c88] sm:text-base sm:leading-7">
              O‘zingizga yoqqan retseptni tanlang va oshxonangizda sehr
              yarating.
            </p>
          </div>

          <Link
            to="/recipes"
            className="pastel-button inline-flex w-full items-center justify-center gap-2 self-start rounded-full border border-pink-200 bg-white/80 px-5 py-3 text-sm font-bold text-pink-600 hover:bg-pink-50 sm:w-fit sm:self-auto"
          >
            Barcha retseptlar <span aria-hidden="true">→</span>
          </Link>
        </div>

        <CategoryTabs />
        <RecipeGrid />
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="relative overflow-hidden rounded-[24px] border border-pink-100 bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 px-4 py-8 text-center sm:rounded-[28px] sm:px-8 sm:py-12 md:px-12 md:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-16 size-36 rounded-full bg-pink-200/50 blur-3xl sm:size-44"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -left-10 size-36 rounded-full bg-purple-200/50 blur-3xl sm:size-44"
          />

          <div className="relative mx-auto max-w-2xl">
            <span className="text-3xl sm:text-4xl" aria-hidden="true">
              🍰
            </span>

            <h2 className="mt-4 break-words font-serif text-xl font-extrabold leading-snug text-[#653748] min-[480px]:text-2xl sm:text-3xl">
              Shirinlik tayyorlashga tayyormisiz?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#987c88] sm:text-base sm:leading-7">
              Sevimli retseptlaringizni toping va yaqinlaringizga shirin
              lahzalar ulashing.
            </p>

            <Link
              to="/recipes"
              className="pastel-button mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-pink-500 px-6 py-3 font-bold text-white shadow-lg shadow-pink-200/70 hover:bg-pink-600 sm:w-auto sm:px-7"
            >
              Retseptlarni topish <span aria-hidden="true">♡</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
