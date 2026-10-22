import { SignInButton, UserButton, useAuth } from "@clerk/react";
import { Link } from "react-router";

function Navbar() {
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <header className="navbar sticky top-0 z-50 bg-neutral px-4 text-neutral-content shadow-md sm:px-6">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost px-2 font-serif text-xl font-bold sm:text-2xl"
        >
          Shirinliklar
        </Link>
      </div>

      <nav className="flex items-center gap-1 sm:gap-2">
        <Link to="/recipes" className="btn btn-ghost btn-sm sm:btn-md">
          Retseptlar
        </Link>

        {!isLoaded ? null : isSignedIn ? (
          <>
            <Link to="/dashboard" className="btn btn-ghost btn-sm sm:btn-md">
              Mening retseptlarim
            </Link>
            <div className="ml-1 flex items-center">
              <UserButton />
            </div>
          </>
        ) : (
          <SignInButton mode="modal">
            <button className="btn btn-primary btn-sm sm:btn-md">Kirish</button>
          </SignInButton>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
