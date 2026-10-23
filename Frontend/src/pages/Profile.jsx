import { UserButton, useUser } from "@clerk/react";
import { Link } from "react-router";

function Profile() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="size-12 animate-spin rounded-full border-4 border-pink-200 border-t-pink-500" />
      </div>
    );
  }

  if (!user) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <span className="text-5xl">🌷</span>
        <h1 className="mt-4 font-serif text-3xl font-bold text-[#653748]">
          Profilingizga kiring
        </h1>
        <Link
          to="/sign-in"
          className="pastel-button mt-6 rounded-full bg-pink-500 px-6 py-3 font-bold text-white hover:bg-pink-600"
        >
          Kirish
        </Link>
      </main>
    );
  }

  const fullName =
    [user.firstName, user.lastName].filter(Boolean).join(" ") ||
    "Shirinlik ishqibozi";

  const email = user.primaryEmailAddress?.emailAddress || "Email mavjud emas";

  const joinedDate = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString("uz-UZ", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Ma’lumot mavjud emas";

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <section className="relative overflow-hidden rounded-[30px] border border-pink-100 bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 px-6 py-10 sm:px-10 sm:py-14">
        <div className="absolute -right-12 -top-12 size-56 rounded-full bg-pink-200/50 blur-3xl" />
        <div className="relative flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
          <div className="relative">
            <img
              src={user.imageUrl}
              alt={fullName}
              className="size-28 rounded-full border-4 border-white object-cover shadow-xl shadow-pink-200/60 sm:size-32"
            />
            <span className="absolute -bottom-1 -right-1 flex size-10 items-center justify-center rounded-full border-4 border-white bg-pink-500 text-lg text-white">
              ♡
            </span>
          </div>

          <div className="flex-1">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-pink-500">
              Shaxsiy sahifangiz
            </span>
            <h1 className="mt-2 font-serif text-3xl font-extrabold text-[#653748] sm:text-4xl">
              {fullName}
            </h1>
            <p className="mt-2 break-all text-[#987c88]">{email}</p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-sm font-semibold text-pink-600">
              <span>🌸</span>
              Shirinliklar olami a’zosi
            </div>
          </div>

          <div className="rounded-2xl border border-white/80 bg-white/80 p-3 shadow-sm">
            <UserButton />
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="rounded-[24px] border border-pink-100 bg-white/90 p-6 shadow-sm">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-pink-50 text-2xl">
            ✉️
          </div>
          <h2 className="mt-4 font-serif text-xl font-bold text-[#653748]">
            Email manzili
          </h2>
          <p className="mt-2 break-all text-sm leading-6 text-[#987c88]">
            {email}
          </p>
          <span className="mt-4 inline-flex rounded-full bg-pink-50 px-3 py-1.5 text-xs font-bold text-pink-600">
            {user.primaryEmailAddress?.verification?.status === "verified"
              ? "Tasdiqlangan"
              : "Tasdiqlanmagan"}
          </span>
        </div>

        <div className="rounded-[24px] border border-pink-100 bg-white/90 p-6 shadow-sm">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-purple-50 text-2xl">
            📅
          </div>
          <h2 className="mt-4 font-serif text-xl font-bold text-[#653748]">
            Ro‘yxatdan o‘tgan sana
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#987c88]">{joinedDate}</p>
        </div>
      </section>

      <section className="mt-8 rounded-[26px] border border-pink-100 bg-white/90 p-6 shadow-sm sm:p-8">
        <h2 className="font-serif text-2xl font-extrabold text-[#653748]">
          Hisobingiz
        </h2>
        <p className="mt-2 leading-7 text-[#987c88]">
          Profil va hisob xavfsizligi bilan bog‘liq sozlamalarni boshqaring.
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => user.openUserProfile()}
            className="pastel-button inline-flex items-center justify-center gap-2 rounded-full bg-pink-500 px-6 py-3 font-bold text-white shadow-md shadow-pink-200/60 hover:bg-pink-600"
          >
            Profilni tahrirlash <span>✎</span>
          </button>

          <Link
            to="/dashboard"
            className="pastel-button inline-flex items-center justify-center gap-2 rounded-full border border-pink-200 bg-white px-6 py-3 font-bold text-pink-600 hover:bg-pink-50"
          >
            Boshqaruv paneli <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Profile;
