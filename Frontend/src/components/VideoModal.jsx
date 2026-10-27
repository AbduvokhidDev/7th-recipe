import { useRef } from "react";

function VideoModal({ src = "/VideoModal.mp4", label = "Videoni ko'rish" }) {
  const dialogRef = useRef(null);
  const videoRef = useRef(null);

  const handleOpen = () => {
    dialogRef.current?.showModal();
    videoRef.current?.play();
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const closeDialog = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-pink-300 bg-white/75 px-5 py-3.5 text-sm font-bold text-pink-600 transition-all hover:border-pink-500 hover:bg-pink-500 hover:text-white min-[480px]:w-auto sm:px-7 sm:text-base"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-5 fill-current"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
        {label}
      </button>

      <dialog
        ref={dialogRef}
        onClose={handleClose}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeDialog();
        }}
        className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none items-center justify-center bg-black/90 p-4 backdrop:bg-black/70 open:flex sm:p-8"
      >
        <button
          type="button"
          onClick={closeDialog}
          aria-label="Yopish"
          className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full bg-white/90 text-pink-600 shadow-lg transition-all hover:bg-pink-500 hover:text-white sm:right-8 sm:top-8"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-6 fill-none stroke-current"
            strokeWidth="2.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <video
          ref={videoRef}
          src={src}
          controls
          playsInline
          className="max-h-full w-full max-w-6xl rounded-2xl bg-black shadow-2xl"
        />
      </dialog>
    </>
  );
}

export default VideoModal;
