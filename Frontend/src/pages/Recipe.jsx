import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { getPublicRecipes } from "../api/recipe";
import RecipeSection from "../components/RecipeSection";

function Recipe() {
  const {
    data: recipes,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: getPublicRecipes,
  });

  if (isPending) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 px-6 text-center">
        <h2 className="font-serif text-3xl font-bold">
          Retseptlarni yuklab bo'lmadi
        </h2>
        <p>{error.message}</p>
        <button className="btn btn-primary" onClick={() => refetch()}>
          Qayta urinish
        </button>
      </div>
    );
  }

  if (recipes.length === 0) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 px-6 text-center">
        <h2 className="font-serif text-3xl font-bold">Hali retsept yo'q</h2>
        <p>Birinchi retseptni siz qo'shing.</p>
        <Link to="/dashboard" className="btn btn-primary">
          Retsept qo'shish
        </Link>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-4rem)] snap-y snap-mandatory overflow-y-auto">
      {recipes.map((recipe, index) => (
        <RecipeSection
          key={recipe.id}
          recipe={recipe}
          index={index}
          total={recipes.length}
        />
      ))}
    </div>
  );
}

export default Recipe;
