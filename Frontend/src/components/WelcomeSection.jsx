import { Link } from "react-router";

function WelcomeSection() {
  return (
    <section className="relative mx-auto w-full max-w-7xl overflow-hidden px-3 pb-8 pt-6 sm:px-6 sm:pb-16 sm:pt-10 lg:px-8 lg:pb-20 lg:pt-12">
      <div className="relative overflow-hidden rounded-[24px] border border-white/80 bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 px-4 py-8 shadow-[0_20px_60px_rgba(219,112,147,0.13)] min-[480px]:px-6 sm:rounded-[32px] sm:px-8 sm:py-12 md:px-12 lg:px-16 lg:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-12 size-40 rounded-full bg-pink-200/50 blur-3xl sm:size-52"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 right-1/4 size-44 rounded-full bg-purple-200/50 blur-3xl sm:size-56"
        />

        <div className="relative z-10 grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0 max-w-2xl">
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-pink-200 bg-white/75 px-3 py-2 text-xs font-semibold leading-5 text-pink-600 shadow-sm min-[480px]:text-sm sm:px-4">
              <span aria-hidden="true">🍓</span>
              <span>Shirinliklar olamiga xush kelibsiz!</span>
            </span>

            <h1 className="mt-5 break-words font-serif text-[2rem] font-extrabold leading-[1.15] tracking-tight text-[#653748] min-[400px]:text-4xl sm:mt-6 sm:text-5xl lg:text-6xl">
              Har bir shirinlikda
              <span className="mt-2 block text-pink-500">bir chimdim mehr</span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#987c88] sm:mt-6 sm:text-base md:text-lg">
              Eng mazali tortlar, pechenyelar va shirinliklar retseptlarini
              toping, saqlang va o‘z oshxonangizda ajoyib ta’mlar yarating.
            </p>

            <div className="mt-6 flex flex-col items-stretch gap-3 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:items-center sm:mt-8 sm:gap-4">
              <Link
                to="/recipes"
                className="pastel-button inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-200/70 transition-all hover:from-pink-600 hover:to-rose-500 min-[480px]:w-auto sm:px-7 sm:text-base"
              >
                Retseptlarni ko‘rish
                <span aria-hidden="true">→</span>
              </Link>

              <span className="text-center text-sm font-medium text-[#987c88] min-[480px]:text-left">
                ♡ Mehr bilan tayyorlangan
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-[calc(100%-12px)] min-w-0 max-w-md pb-5 pt-2 sm:w-[calc(100%-20px)] lg:w-full">
            <div
              aria-hidden="true"
              className="absolute -left-2 top-6 z-10 flex size-12 -rotate-12 items-center justify-center rounded-2xl border border-white bg-white/90 text-2xl shadow-lg min-[480px]:-left-4 min-[480px]:size-14 sm:size-16 sm:text-3xl"
            >
              🧁
            </div>

            <div
              aria-hidden="true"
              className="absolute -right-2 top-10 z-10 flex size-11 rotate-12 items-center justify-center rounded-2xl border border-white bg-white/90 text-xl shadow-lg min-[480px]:-right-4 min-[480px]:size-12 sm:size-14 sm:text-2xl"
            >
              🍓
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-1 left-5 z-10 flex size-11 rotate-8 items-center justify-center rounded-2xl border border-white bg-white/90 text-xl shadow-lg min-[480px]:size-12 sm:size-14 sm:text-2xl"
            >
              🍒
            </div>

            <div className="overflow-hidden rounded-[22px] border-4 border-white/80 bg-white shadow-2xl shadow-pink-200/50 sm:rounded-[28px] sm:border-8">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85"
                alt="Chiroyli shokoladli tort"
                loading="eager"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 sm:aspect-[5/4] sm:hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-1 right-0 z-20 max-w-[calc(100%-24px)] rounded-2xl border border-pink-100 bg-white/95 px-3 py-2.5 shadow-xl min-[480px]:right-0 min-[480px]:px-5 min-[480px]:py-3">
              <p className="text-xs font-bold text-pink-600 sm:text-sm">
                ♡ Shirin lahzalar
              </p>
              <p className="mt-1 text-[11px] text-[#987c88] sm:text-xs">
                Har kuni yangi ilhom
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
