import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router";
import { createRecipe } from "../api/recipe";

const initialForm = {
  title: "",
  ingredients: "",
  steps: "",
  imageUrl: "",
  prepTime: "",
};

function CreateRecipe() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!form.title.trim() || !form.ingredients.trim() || !form.steps.trim()) {
      setError("Nom, masalliqlar va tayyorlash bosqichlarini kiriting.");
      return;
    }

    const prepTime = form.prepTime.trim() ? Number(form.prepTime) : null;

    if (prepTime !== null && (!Number.isInteger(prepTime) || prepTime <= 0)) {
      setError("Tayyorlash vaqti musbat butun son bo‘lishi kerak.");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        title: form.title.trim(),
        ingredients: form.ingredients.trim(),
        steps: form.steps.trim(),
        imageUrl: form.imageUrl.trim() || null,
        prepTime,
      };

      await createRecipe(payload);

      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ["recipes"] }),
        queryClient.invalidateQueries({ queryKey: ["public-recipes"] }),
      ]);

      setForm(initialForm);
      setSuccess("Retsept muvaffaqiyatli qo‘shildi!");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.response?.data?.error ||
          err.message ||
          "Retsept qo‘shishda xatolik yuz berdi.",
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "mt-2 w-full min-w-0 rounded-2xl border border-pink-100 bg-white/90 px-4 py-3 text-sm text-[#653748] outline-none transition placeholder:text-[#c0a6b0] focus:border-pink-300 focus:ring-4 focus:ring-pink-100/70 sm:text-base";

  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl min-w-0 px-3 py-7 sm:px-6 sm:py-12 lg:px-8">
      <section className="relative overflow-hidden rounded-[24px] border border-pink-100 bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 px-5 py-7 sm:rounded-[30px] sm:px-9 sm:py-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-12 size-40 rounded-full bg-pink-200/50 blur-3xl sm:size-52"
        />

        <div className="relative">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-pink-500 sm:text-sm">
            ♡ O‘z retseptingizni ulashing
          </span>

          <h1 className="mt-3 break-words font-serif text-3xl font-extrabold leading-tight text-[#653748] sm:text-4xl md:text-5xl">
            Yangi retsept qo‘shish
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#987c88] sm:text-base sm:leading-7">
            Sevimli shirinligingizni yozib qoldiring va retseptlar
            to‘plamingizni boyiting.
          </p>
        </div>
      </section>

      <form
        onSubmit={handleSubmit}
        className="mt-6 space-y-6 rounded-[24px] border border-pink-100/80 bg-white/90 p-4 shadow-[0_8px_30px_rgba(190,100,135,0.08)] sm:mt-8 sm:rounded-[30px] sm:p-8 md:p-10"
      >
        {error && (
          <div
            role="alert"
            className="break-words rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
          >
            {error}
          </div>
        )}

        {success && (
          <div
            role="status"
            className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm leading-6 text-green-700"
          >
            {success}
          </div>
        )}

        <div>
          <label
            htmlFor="title"
            className="text-sm font-bold text-[#653748] sm:text-base"
          >
            Retsept nomi *
          </label>
          <input
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Masalan, Shokoladli tort"
            maxLength={200}
            required
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="ingredients"
            className="text-sm font-bold text-[#653748] sm:text-base"
          >
            Masalliqlar *
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={form.ingredients}
            onChange={handleChange}
            placeholder={"Un — 200 g\nShakar — 100 g\nTuxum — 2 dona"}
            rows={5}
            required
            className={`${inputClass} resize-y leading-6`}
          />
          <p className="mt-2 text-xs leading-5 text-[#987c88]">
            Har bir masalliqni yangi qatordan yozishingiz mumkin.
          </p>
        </div>

        <div>
          <label
            htmlFor="steps"
            className="text-sm font-bold text-[#653748] sm:text-base"
          >
            Tayyorlash bosqichlari *
          </label>
          <textarea
            id="steps"
            name="steps"
            value={form.steps}
            onChange={handleChange}
            placeholder={
              "1. Masalliqlarni tayyorlang.\n2. Xamirni aralashtiring.\n3. Pechda pishiring."
            }
            rows={6}
            required
            className={`${inputClass} resize-y leading-6`}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="min-w-0">
            <label
              htmlFor="prepTime"
              className="text-sm font-bold text-[#653748] sm:text-base"
            >
              Tayyorlash vaqti (daqiqa)
            </label>
            <input
              id="prepTime"
              name="prepTime"
              type="number"
              min="1"
              step="1"
              value={form.prepTime}
              onChange={handleChange}
              placeholder="Masalan, 45"
              className={inputClass}
            />
          </div>

          <div className="min-w-0">
            <label
              htmlFor="imageUrl"
              className="text-sm font-bold text-[#653748] sm:text-base"
            >
              Rasm URL manzili
            </label>
            <input
              id="imageUrl"
              name="imageUrl"
              type="url"
              value={form.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/cake.jpg"
              className={inputClass}
            />
          </div>
        </div>

        {form.imageUrl.trim() && (
          <div className="overflow-hidden rounded-2xl border border-pink-100 bg-pink-50 p-2">
            <p className="px-2 py-2 text-sm font-semibold text-[#653748]">
              Rasm ko‘rinishi
            </p>
            <img
              src={form.imageUrl}
              alt="Retsept uchun rasm namunasi"
              className="max-h-72 w-full rounded-xl object-contain"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
              onLoad={(event) => {
                event.currentTarget.style.display = "block";
              }}
            />
          </div>
        )}

        <div className="flex flex-col-reverse gap-3 border-t border-pink-100 pt-5 sm:flex-row sm:justify-end sm:pt-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            disabled={loading}
            className="min-h-12 rounded-full border border-pink-200 bg-white px-6 py-3 text-sm font-bold text-pink-600 transition hover:bg-pink-50 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Ortga
          </button>

          <button
            type="submit"
            disabled={loading}
            className="pastel-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-pink-200/60 transition hover:from-pink-600 hover:to-rose-500 disabled:cursor-not-allowed disabled:opacity-60 sm:min-w-44"
          >
            {loading ? "Saqlanmoqda..." : "♡ Retseptni saqlash"}
          </button>
        </div>
      </form>
    </main>
  );
}

export default CreateRecipe;
