function ErrorState({
  message = "Ma’lumotlarni yuklashda xatolik yuz berdi.",
  onRetry,
}) {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center justify-center rounded-[28px] border border-pink-100 bg-white/85 px-6 py-12 text-center shadow-[0_8px_30px_rgba(190,100,135,0.08)]">
      <div className="flex size-20 items-center justify-center rounded-3xl bg-rose-50 text-4xl">
        😔
      </div>

      <h2 className="mt-6 font-serif text-2xl font-bold text-[#653748]">
        Nimadir noto‘g‘ri ketdi
      </h2>

      <p className="mt-3 max-w-sm text-sm leading-6 text-[#987c88]">
        {message}
      </p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="pastel-button mt-6 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-7 py-3 font-bold text-white shadow-md shadow-pink-200/60 hover:from-pink-600 hover:to-rose-500"
        >
          Qayta urinish ↻
        </button>
      )}
    </div>
  );
}

export default ErrorState;
