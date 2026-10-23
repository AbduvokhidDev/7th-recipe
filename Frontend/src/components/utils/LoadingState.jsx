function LoadingState({ message = "Yuklanmoqda..." }) {
  return (
    <div className="flex min-h-[240px] flex-col items-center justify-center py-16">
      <div className="relative flex size-16 items-center justify-center">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-pink-100 border-t-pink-500" />
        <span className="text-2xl">🧁</span>
      </div>

      <p className="mt-5 font-medium text-[#805968]">{message}</p>

      <div className="mt-4 flex items-center gap-1.5">
        <span className="size-2 animate-bounce rounded-full bg-pink-400" />
        <span className="size-2 animate-bounce rounded-full bg-rose-400 [animation-delay:150ms]" />
        <span className="size-2 animate-bounce rounded-full bg-purple-400 [animation-delay:300ms]" />
      </div>
    </div>
  );
}

export default LoadingState;
