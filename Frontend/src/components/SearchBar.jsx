import { useState } from "react";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch?.(search.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full items-center gap-3 rounded-full border border-pink-100 bg-white/90 p-2 shadow-[0_8px_30px_rgba(190,100,135,0.08)] transition-all duration-300 focus-within:border-pink-300 focus-within:shadow-[0_8px_30px_rgba(237,91,145,0.15)]"
    >
      <span className="pl-3 text-xl text-pink-400">⌕</span>

      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Sevimli retseptingizni qidiring..."
        className="min-w-0 flex-1 bg-transparent py-3 text-sm text-[#653748] outline-none placeholder:text-[#c0a6b0] sm:text-base"
        aria-label="Retsept qidirish"
      />

      {search && (
        <button
          type="button"
          onClick={() => {
            setSearch("");
            onSearch?.("");
          }}
          className="rounded-full px-2 py-1 text-lg text-[#987c88] transition hover:bg-pink-50 hover:text-pink-600"
          aria-label="Qidiruvni tozalash"
        >
          ×
        </button>
      )}

      <button
        type="submit"
        className="pastel-button rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-5 py-3 text-sm font-bold text-white shadow-md shadow-pink-200/60 hover:from-pink-600 hover:to-rose-500"
      >
        Qidirish
      </button>
    </form>
  );
}

export default SearchBar;
