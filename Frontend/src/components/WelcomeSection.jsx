import { Link } from "react-router";

function WelcomeSection() {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-4 pb-12 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
      <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 px-6 py-12 shadow-[0_20px_60px_rgba(219,112,147,0.13)] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
        <div className="absolute -right-12 -top-12 size-52 rounded-full bg-pink-200/50 blur-3xl" />
        <div className="absolute -bottom-16 right-1/4 size-56 rounded-full bg-purple-200/50 blur-3xl" />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/75 px-4 py-2 text-sm font-semibold text-pink-600 shadow-sm">
              <span>🍓</span>
              Shirinliklar olamiga xush kelibsiz!
            </span>

            <h1 className="mt-6 font-serif text-4xl font-extrabold leading-tight tracking-tight text-[#653748] sm:text-5xl lg:text-6xl">
              Har bir shirinlikda
              <span className="mt-2 block text-pink-500">bir chimdim mehr</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#987c88] sm:text-lg">
              Eng mazali tortlar, pechenyelar va shirinliklar retseptlarini
              toping, saqlang va o‘z oshxonangizda ajoyib ta’mlar yarating.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/recipes"
                className="pastel-button inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-7 py-3.5 font-bold text-white shadow-lg shadow-pink-200/70 hover:from-pink-600 hover:to-rose-500"
              >
                Retseptlarni ko‘rish
                <span>→</span>
              </Link>

              <span className="text-sm font-medium text-[#987c88]">
                ♡ Mehr bilan tayyorlangan
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-4 top-8 z-10 flex size-16 rotate-[-12deg] items-center justify-center rounded-2xl border border-white bg-white/90 text-3xl shadow-lg sm:-left-6">
              🧁
            </div>

            <div className="absolute -right-3 top-12 z-10 flex size-14 rotate-[12deg] items-center justify-center rounded-2xl border border-white bg-white/90 text-2xl shadow-lg sm:-right-5">
              🍓
            </div>

            <div className="absolute -bottom-4 left-8 z-10 flex size-14 rotate-[8deg] items-center justify-center rounded-2xl border border-white bg-white/90 text-2xl shadow-lg">
              🍒
            </div>

            <div className="overflow-hidden rounded-[28px] border-8 border-white/80 bg-white shadow-2xl shadow-pink-200/50">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85"
                alt="Chiroyli shokoladli tort"
                className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-96"
              />
            </div>

            <div className="absolute -bottom-5 right-4 rounded-2xl border border-pink-100 bg-white/95 px-5 py-3 shadow-xl sm:right-0">
              <p className="text-sm font-bold text-pink-600">
                ♡ Shirin lahzalar
              </p>
              <p className="mt-1 text-xs text-[#987c88]">
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
