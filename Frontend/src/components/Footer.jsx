import { Link } from "react-router";

function Footer() {
  return (
    <footer className="mt-auto border-t border-pink-100/80 bg-white/75 px-4 py-6 backdrop-blur-xl sm:px-6 sm:py-7 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:gap-5 sm:text-left">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 rounded-xl transition-transform duration-300 hover:scale-105"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-pink-400 to-rose-300 text-xl shadow-sm shadow-pink-200/60">
            🧁
          </span>
          <span className="font-serif text-lg font-bold tracking-wide text-pink-600 sm:text-xl">
            Shirinliklar
          </span>
        </Link>

        <p className="max-w-full break-words text-xs leading-5 text-[#987c88] sm:text-sm">
          Shirin lahzalar mehr bilan yaratiladi ✨
        </p>

        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="rounded-full px-3 py-2 text-sm font-semibold text-pink-600 transition-colors hover:bg-pink-50"
          aria-label="Sahifa boshiga qaytish"
        >
          Yuqoriga ↑
        </a>
      </div>

      <div className="mx-auto mt-5 max-w-7xl border-t border-pink-100/80 pt-4 text-center">
        <p className="text-xs text-[#987c88]">
          © {new Date().getFullYear()} Shirinliklar. Barcha huquqlar
          himoyalangan.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
