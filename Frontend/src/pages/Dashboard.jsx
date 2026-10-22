import { useUser } from "@clerk/react";

function Dashboard() {
  const { user } = useUser();

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Dashboard
        </p>
        <h1 className="mt-1 font-serif text-4xl font-bold">
          {user?.firstName ? `Salom, ${user.firstName}` : "Mening retseptlarim"}
        </h1>
      </div>

      <div className="stats mb-8 w-full bg-base-100 shadow sm:w-auto">
        <div className="stat">
          <div className="stat-title">Mening retseptlarim</div>
          <div className="stat-value text-primary">0</div>
          <div className="stat-desc">Hozircha retsept qo'shilmagan</div>
        </div>
      </div>

      <div className="card bg-base-100 shadow">
        <div className="card-body items-center py-16 text-center">
          <h2 className="card-title font-serif text-2xl">Hali retsept yo'q</h2>
          <p className="max-w-md">
            Qo'shgan retseptlaringiz shu yerda ko'rinadi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
