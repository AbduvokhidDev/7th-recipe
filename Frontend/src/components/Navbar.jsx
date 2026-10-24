import { useAuth, UserButton } from "@clerk/react";
import { useState } from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  const { isLoaded, isSignedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `block rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? "bg-pink-100 text-pink-600 shadow-sm"
        : "text-[#805968] hover:bg-pink-50 hover:text-pink-600"
    }`;

  const closeMenu = () => setMenuOpen(false);

  const navLinks = (
    <>
      <NavLink to="/" end className={linkStyle} onClick={closeMenu}>
        Bosh sahifa
      </NavLink>
      <NavLink to="/recipes" className={linkStyle} onClick={closeMenu}>
        Retseptlar
      </NavLink>
      {isSignedIn && (
        <>
          <NavLink to="/dashboard" className={linkStyle} onClick={closeMenu}>
            Boshqaruv
          </NavLink>
          <NavLink to="/profile" className={linkStyle} onClick={closeMenu}>
            Profil
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-pink-100/80 bg-white/95 shadow-[0_4px_24px_rgba(219,112,147,0.07)] backdrop-blur-xl">
      <nav className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:min-h-20 sm:px-6 lg:px-8">
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex min-w-0 shrink items-center gap-2 rounded-xl"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 to-rose-300 text-xl shadow-md shadow-pink-200/60 transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110 sm:size-11 sm:text-2xl">
            🧁
          </span>
          <span className="truncate font-serif text-lg font-bold tracking-wide text-pink-600 sm:text-2xl">
            Shirinliklar
          </span>
        </Link>

        {isLoaded && (
          <>
            <div className="hidden items-center gap-1.5 md:flex lg:gap-2">
              {navLinks}
              {!isSignedIn && (
                <Link
                  to="/sign-in"
                  className="ml-1 rounded-full border-2 border-pink-300 px-5 py-2.5 text-sm font-bold text-pink-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-500 hover:bg-pink-50 hover:shadow-md hover:shadow-pink-200/50"
                >
                  Kirish
                </Link>
              )}
              {isSignedIn && (
                <div className="ml-1 rounded-full border border-pink-100 bg-pink-50 p-1">
                  <UserButton />
                </div>
              )}
            </div>

            <div className="flex shrink-0 items-center gap-2 md:hidden">
              {isSignedIn && (
                <div className="rounded-full border border-pink-100 bg-pink-50 p-1">
                  <UserButton />
                </div>
              )}

              {!isSignedIn && (
                <Link
                  to="/sign-in"
                  className="rounded-full border border-pink-300 px-3 py-2 text-sm font-bold text-pink-600 transition hover:bg-pink-50 sm:px-4"
                >
                  Kirish
                </Link>
              )}

              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}
                aria-expanded={menuOpen}
                className="flex size-10 items-center justify-center rounded-xl border border-pink-200 bg-pink-50 text-pink-600 transition hover:bg-pink-100 active:scale-95"
              >
                {menuOpen ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="size-5"
                  >
                    <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="size-5"
                  >
                    <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                  </svg>
                )}
              </button>
            </div>
          </>
        )}
      </nav>

      {isLoaded && menuOpen && (
        <div className="border-t border-pink-100 bg-white/98 px-4 pb-4 pt-3 shadow-lg shadow-pink-100/40 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1.5">
            {navLinks}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
