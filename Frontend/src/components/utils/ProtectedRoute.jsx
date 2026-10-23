import { useAuth } from "@clerk/react";
import { Navigate } from "react-router";
import LoadingState from "./LoadingState";

function ProtectedRoute({ children }) {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="w-full max-w-md rounded-[28px] border border-pink-100 bg-white/85 px-8 py-10 text-center shadow-[0_8px_30px_rgba(190,100,135,0.08)]">
          <LoadingState message="Hisobingiz tekshirilmoqda..." />
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
}

export default ProtectedRoute;
