import { Outlet } from "react-router";
import Footer from "../Footer";
import Navbar from "../Navbar";

function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip text-[#653748]">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 size-[420px] rounded-full bg-pink-200/40 blur-[100px]" />
        <div className="absolute -right-40 top-1/3 size-[420px] rounded-full bg-purple-200/30 blur-[110px]" />
        <div className="absolute -bottom-40 left-1/3 size-[360px] rounded-full bg-rose-200/30 blur-[100px]" />
      </div>

      <Navbar />

      <main className="relative z-0 min-w-0 flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
