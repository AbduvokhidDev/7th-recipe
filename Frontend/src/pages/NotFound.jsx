import { Link } from "react-router";

function NotFound() {
  return (
    <main className="flex min-h-[75vh] items-center justify-center px-4 py-12">
      <section className="relative w-full max-w-2xl overflow-hidden rounded-[32px] border border-pink-100 bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 px-6 py-12 text-center shadow-[0_16px_50px_rgba(190,100,135,0.12)] sm:px-12 sm:py-16">
        <div className="absolute -right-12 -top-12 size-48 rounded-full bg-pink-200/50 blur-3xl" />
        <div className="absolute -bottom-12 -left-12 size-48 rounded-full bg-purple-200/50 blur-3xl" />

        <div className="relative">
          <div className="mx-auto flex size-28 items-center justify-center rounded-[30px] border border-white/80 bg-white/80 text-6xl shadow-lg shadow-pink-200/40">
            🧁
          </div>

          <p className="mt-8 font-serif text-7xl font-extrabold tracking-tight text-pink-500 sm:text-8xl">
            404
          </p>

          <h1 className="mt-4 font-serif text-3xl font-extrabold text-[#653748] sm:text-4xl">
            Voy, sahifa topilmadi!
          </h1>

          <p className="mx-auto mt-4 max-w-md leading-7 text-[#987c88]">
            Bu sahifa mavjud emas yoki manzil noto‘g‘ri kiritilgan. Keling,
            shirinliklar olamiga qaytamiz!
          </p>

          <Link
            to="/"
            className="pastel-button mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-8 py-3.5 font-bold text-white shadow-lg shadow-pink-200/70 hover:from-pink-600 hover:to-rose-500"
          >
            <span>←</span>
            Bosh sahifaga qaytish
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
