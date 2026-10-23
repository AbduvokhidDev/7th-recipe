import { useUser } from "@clerk/react";
import { Link } from "react-router";

const stats = [
  { label: "Retseptlar", value: "6", icon: "🍰", color: "bg-pink-50" },
  { label: "Kategoriyalar", value: "6", icon: "🍓", color: "bg-purple-50" },
  {
    label: "Sevimli mashg‘ulot",
    value: "Shirinliklar",
    icon: "🧁",
    color: "bg-rose-50",
  },
];

function Dashboard() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="size-12 animate-spin rounded-full border-4 border-pink-200 border-t-pink-500" />
      </div>
    );
  }

  const name = user?.firstName || "Shirinlik ishqibozi";

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <section className="relative overflow-hidden rounded-[30px] border border-pink-100 bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 px-6 py-10 sm:px-10 sm:py-14">
        <div className="absolute -right-12 -top-12 size-56 rounded-full bg-pink-200/50 blur-3xl" />
        <div className="absolute -bottom-16 left-1/3 size-48 rounded-full bg-purple-200/50 blur-3xl" />

        <div className="relative flex flex-col justify-between gap-7 sm:flex-row sm:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-pink-500">
              ♡ Shaxsiy boshqaruv paneli
            </span>
            <h1 className="mt-3 font-serif text-3xl font-extrabold text-[#653748] sm:text-5xl">
              Salom, {name}! 🎀
            </h1>
            <p className="mt-4 max-w-xl leading-7 text-[#987c88]">
              Shirinliklar olamingizga xush kelibsiz. Bugun yangi retsept kashf
              etish uchun ajoyib kun!
            </p>
          </div>

          <div className="flex size-24 shrink-0 items-center justify-center rounded-[28px] border border-white/80 bg-white/80 text-5xl shadow-lg shadow-pink-200/40 sm:size-32 sm:text-6xl">
            🧁
          </div>
        </div>
      </section>

      <section className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[24px] border border-pink-100/80 bg-white/90 p-6 shadow-[0_8px_30px_rgba(190,100,135,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span
                className={`flex size-14 items-center justify-center rounded-2xl ${stat.color} text-2xl`}
              >
                {stat.icon}
              </span>
              <span className="text-xl text-pink-300">♡</span>
            </div>
            <p className="mt-5 text-sm font-medium text-[#987c88]">
              {stat.label}
            </p>
            <h2 className="mt-1 font-serif text-2xl font-extrabold text-[#653748]">
              {stat.value}
            </h2>
          </div>
        ))}
      </section>

      <section className="mt-10">
        <div className="mb-5">
          <h2 className="font-serif text-2xl font-extrabold text-[#653748] sm:text-3xl">
            Tezkor havolalar
          </h2>
          <p className="mt-2 text-[#987c88]">
            Kerakli bo‘limga bir zumda o‘ting.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Link
            to="/recipes"
            className="group flex items-center gap-5 rounded-[24px] border border-pink-100 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-lg"
          >
            <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-pink-100 text-3xl transition-transform duration-300 group-hover:scale-110">
              🍰
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-serif text-xl font-bold text-[#653748]">
                Retseptlar
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#987c88]">
                Barcha shirinliklar va tayyorlash usullarini ko‘ring.
              </p>
            </div>
            <span className="text-xl font-bold text-pink-500 transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            to="/profile"
            className="group flex items-center gap-5 rounded-[24px] border border-pink-100 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-lg"
          >
            <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-purple-100 text-3xl transition-transform duration-300 group-hover:scale-110">
              🌷
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-serif text-xl font-bold text-[#653748]">
                Mening profilim
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#987c88]">
                Shaxsiy ma’lumotlaringiz va hisob sozlamalarini boshqaring.
              </p>
            </div>
            <span className="text-xl font-bold text-pink-500 transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>

      <section className="mt-10 rounded-[26px] border border-pink-100 bg-gradient-to-r from-pink-50 to-purple-50 p-7 text-center sm:p-10">
        <span className="text-4xl">💗</span>
        <h2 className="mt-3 font-serif text-2xl font-bold text-[#653748]">
          Har bir retsept — yangi taassurot
        </h2>
        <p className="mx-auto mt-3 max-w-xl leading-7 text-[#987c88]">
          Yangi shirinliklarni sinab ko‘ring va oshxonangizni yoqimli hidlarga
          to‘ldiring.
        </p>
        <Link
          to="/recipes"
          className="pastel-button mt-6 inline-flex rounded-full bg-pink-500 px-7 py-3 font-bold text-white shadow-md shadow-pink-200/60 hover:bg-pink-600"
        >
          Boshlash ♡
        </Link>
      </section>
    </main>
  );
}

export default Dashboard;
