import { useAuth, UserButton } from "@clerk/react";
import { Link, NavLink } from "react-router";

function Navbar() {
  const { isLoaded, isSignedIn } = useAuth();

  const linkStyle = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? "bg-pink-100 text-pink-600 shadow-sm"
        : "text-[#805968] hover:bg-pink-50 hover:text-pink-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-pink-100/80 bg-white/90 shadow-[0_4px_24px_rgba(219,112,147,0.07)] backdrop-blur-xl">
      <nav className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2 rounded-xl">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 to-rose-300 text-2xl shadow-md shadow-pink-200/60 transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110">
            🧁
          </span>
          <span className="font-serif text-xl font-bold tracking-wide text-pink-600 sm:text-2xl">
            Shirinliklar
          </span>
        </Link>

        {isLoaded && (
          <div className="flex items-center gap-2">
            {isSignedIn ? (
              <>
                <NavLink to="/" end className={linkStyle}>
                  Bosh sahifa
                </NavLink>
                <NavLink to="/recipes" className={linkStyle}>
                  Retseptlar
                </NavLink>
                <NavLink to="/dashboard" className={linkStyle}>
                  Boshqaruv
                </NavLink>
                <NavLink to="/profile" className={linkStyle}>
                  Profil
                </NavLink>
                <div className="ml-1 rounded-full border border-pink-100 bg-pink-50 p-1">
                  <UserButton />
                </div>
              </>
            ) : (
              <Link
                to="/sign-in"
                className="rounded-full border-2 border-pink-300 px-6 py-2.5 text-sm font-bold text-pink-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-500 hover:bg-pink-50 hover:shadow-md hover:shadow-pink-200/50"
              >
                Kirish
              </Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
