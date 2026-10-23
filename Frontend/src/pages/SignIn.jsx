import { SignIn as ClerkSignIn } from "@clerk/react";
import { Link } from "react-router";

function SignIn() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-4 py-12 sm:py-16">
      <div className="grid w-full max-w-5xl items-center gap-10 lg:grid-cols-2">
        <section className="hidden lg:block">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 p-10">
            <div className="absolute -right-10 -top-10 size-48 rounded-full bg-pink-200/60 blur-3xl" />
            <div className="relative">
              <span className="text-6xl">🧁</span>
              <h1 className="mt-7 font-serif text-4xl font-extrabold leading-tight text-[#653748]">
                Shirinliklar olamiga qayting!
              </h1>
              <p className="mt-5 leading-8 text-[#987c88]">
                Sevimli retseptlaringizni kashf eting, yangi ta’mlarni sinab
                ko‘ring va shirin lahzalarni biz bilan yarating.
              </p>
              <div className="mt-8 flex gap-3 text-3xl">
                <span>🍓</span>
                <span>🍰</span>
                <span>🍪</span>
                <span>🍒</span>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center">
          <div className="mb-6 text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-pink-100 text-3xl shadow-sm">
              💗
            </div>
            <h2 className="mt-4 font-serif text-3xl font-extrabold text-[#653748]">
              Xush kelibsiz!
            </h2>
            <p className="mt-2 text-[#987c88]">
              Hisobingizga kiring va davom eting.
            </p>
          </div>

          <div className="w-full max-w-md overflow-hidden rounded-[28px] border border-pink-100 bg-white/90 p-3 shadow-[0_16px_50px_rgba(190,100,135,0.12)] sm:p-5">
            <ClerkSignIn
              routing="hash"
              signUpUrl="/sign-in"
              forceRedirectUrl="/dashboard"
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "w-full border-0 shadow-none bg-transparent",
                  headerTitle: "font-serif text-[#653748]",
                  headerSubtitle: "text-[#987c88]",
                  socialButtonsBlockButton:
                    "rounded-xl border-pink-100 hover:bg-pink-50",
                  formButtonPrimary: "rounded-xl bg-pink-500 hover:bg-pink-600",
                  formFieldInput:
                    "rounded-xl border-pink-100 focus:border-pink-400 focus:ring-pink-200",
                  footerActionLink: "text-pink-600 hover:text-pink-700",
                },
              }}
            />
          </div>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-pink-600 transition hover:text-pink-700"
          >
            <span>←</span> Bosh sahifaga qaytish
          </Link>
        </section>
      </div>
    </main>
  );
}

export default SignIn;
