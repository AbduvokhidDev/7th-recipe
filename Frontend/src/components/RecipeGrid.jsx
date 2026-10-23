import RecipeCard from "./RecipeCard";

const recipes = [
  {
    id: "1",
    title: "Qulupnayli tort",
    category: "Tortlar",
    time: "60 daqiqa",
    difficulty: "O‘rtacha",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=85",
    description:
      "Yumshoq krem va yangi qulupnay bilan tayyorlangan mazali tort.",
  },
  {
    id: "2",
    title: "Shokoladli desert",
    category: "Desertlar",
    time: "30 daqiqa",
    difficulty: "Oson",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85",
    description: "Shokolad ta’mini sevuvchilar uchun ajoyib shirinlik.",
  },
  {
    id: "3",
    title: "Mazali kruassan",
    category: "Pishiriqlar",
    time: "45 daqiqa",
    difficulty: "O‘rtacha",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85",
    description: "Tashqi tomoni qarsildoq, ichi esa yumshoq va mayin.",
  },
  {
    id: "4",
    title: "Pushti kapkeyk",
    category: "Kekslar",
    time: "35 daqiqa",
    difficulty: "Oson",
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=800&q=85",
    description: "Bayram dasturxoni uchun nafis va chiroyli kapkeyklar.",
  },
  {
    id: "5",
    title: "Shokoladli pechenye",
    category: "Pechenyelar",
    time: "25 daqiqa",
    difficulty: "Oson",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=85",
    description: "Shokolad bo‘laklari bilan mazali uy pechenyesi.",
  },
  {
    id: "6",
    title: "Qulupnayli ichimlik",
    category: "Ichimliklar",
    time: "10 daqiqa",
    difficulty: "Oson",
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=85",
    description: "Yangi qulupnaydan tayyorlangan tetiklantiruvchi ichimlik.",
  },
];

function RecipeGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeGrid;
