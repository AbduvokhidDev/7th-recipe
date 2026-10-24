import { useState } from "react";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch?.(search.trim());
  };

  const handleClear = () => {
    setSearch("");
    onSearch?.("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className="flex w-full min-w-0 items-center gap-1.5 rounded-2xl border border-pink-100 bg-white/90 p-1.5 shadow-[0_8px_30px_rgba(190,100,135,0.08)] transition-all duration-300 focus-within:border-pink-300 focus-within:shadow-[0_8px_30px_rgba(237,91,145,0.15)] sm:gap-2 sm:rounded-full sm:p-2"
    >
      <span
        aria-hidden="true"
        className="shrink-0 pl-2 text-xl text-pink-400 sm:pl-3 sm:text-2xl"
      >
        ⌕
      </span>

      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Sevimli retseptingizni qidiring..."
        className="h-11 min-w-0 flex-1 bg-transparent px-1 text-sm text-[#653748] outline-none placeholder:text-xs placeholder:text-[#c0a6b0] sm:h-12 sm:px-2 sm:text-base sm:placeholder:text-sm"
        aria-label="Retsept qidirish"
      />

      {search.length > 0 && (
        <button
          type="button"
          onClick={handleClear}
          className="flex size-9 shrink-0 items-center justify-center rounded-full text-xl text-[#987c88] transition hover:bg-pink-50 hover:text-pink-600 focus-visible:outline-2 focus-visible:outline-pink-400 sm:size-10"
          aria-label="Qidiruvni tozalash"
          title="Qidiruvni tozalash"
        >
          ×
        </button>
      )}

      <button
        type="submit"
        className="pastel-button inline-flex min-h-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-rose-400 px-3 text-xs font-bold text-white shadow-md shadow-pink-200/60 transition duration-300 hover:scale-[1.02] hover:from-pink-600 hover:to-rose-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500 active:scale-95 min-[400px]:px-4 min-[400px]:text-sm sm:min-h-11 sm:rounded-full sm:px-6 sm:text-sm"
      >
        Qidirish
      </button>
    </form>
  );
}

export default SearchBar;
