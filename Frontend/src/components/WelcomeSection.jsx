import { Link } from "react-router";

function WelcomeSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-6 overflow-hidden bg-neutral px-6 py-16 text-center text-neutral-content">
      <div className="absolute -left-24 -top-24 size-80 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-24 size-96 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <span className="badge badge-primary badge-lg font-medium uppercase tracking-widest">
          Xush kelibsiz
        </span>

        <h1 className="max-w-3xl font-serif text-5xl font-bold leading-tight md:text-7xl">
          Shirinliklar retseptlari jamlanmasi
        </h1>

        <p className="max-w-xl text-lg md:text-xl">
          Tortlar, pechenyelar, muzqaymoq va boshqa shirinliklar. Yangi
          retseptlarni birin-ketin ko'ring.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Link to="/recipes" className="btn btn-primary btn-lg">
            Boshlash
          </Link>
          <Link
            to="/dashboard"
            className="btn btn-outline btn-lg border-neutral-content text-neutral-content hover:border-neutral-content hover:bg-neutral-content hover:text-neutral"
          >
            Retsept qo'shish
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
