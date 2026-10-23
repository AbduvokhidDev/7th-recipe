import { Link, useParams } from "react-router";

const recipes = [
  {
    id: "1",
    title: "Qulupnayli tort",
    category: "Tortlar",
    time: "60 daqiqa",
    difficulty: "O‘rtacha",
    servings: "8 kishilik",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=85",
    description:
      "Yumshoq biskvit, mayin krem va yangi qulupnay bilan tayyorlanadigan mazali tort.",
    ingredients: [
      "3 ta tuxum",
      "150 g shakar",
      "150 g un",
      "200 ml qaymoq",
      "250 g qulupnay",
      "1 choy qoshiq qabartma",
    ],
    steps: [
      "Tuxum va shakarni ko‘pirtirib, hajmi oshguncha aralashtiring.",
      "Un va qabartmani elab soling, ehtiyotkorlik bilan aralashtiring.",
      "Xamirni qolipga solib, 180°C da 25–30 daqiqa pishiring.",
      "Biskvit sovigach, qaymoqli krem surting.",
      "Qulupnay bilan bezatib, tortni muzlatkichda biroz tindiring.",
    ],
  },
  {
    id: "2",
    title: "Shokoladli desert",
    category: "Desertlar",
    time: "30 daqiqa",
    difficulty: "Oson",
    servings: "4 kishilik",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
    description:
      "Shokoladning boy ta’mi va mayin tuzilishi bilan yoqimli desert.",
    ingredients: [
      "200 g qora shokolad",
      "200 ml qaymoq",
      "2 osh qoshiq shakar",
      "1 choy qoshiq vanilin",
    ],
    steps: [
      "Shokoladni mayda bo‘laklarga bo‘ling.",
      "Qaymoqni isitib, shokolad ustidan quying.",
      "Bir xil massa hosil bo‘lguncha aralashtiring.",
      "Shakar va vanilin qo‘shing.",
      "Idishlarga solib, muzlatkichda sovuting.",
    ],
  },
  {
    id: "3",
    title: "Mazali kruassan",
    category: "Pishiriqlar",
    time: "45 daqiqa",
    difficulty: "O‘rtacha",
    servings: "6 dona",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85",
    description: "Tashqi tomoni qarsildoq, ichi esa yumshoq va mayin kruassan.",
    ingredients: [
      "300 g un",
      "150 ml sut",
      "40 g shakar",
      "7 g quruq xamirturush",
      "150 g sariyog‘",
      "1 ta tuxum",
    ],
    steps: [
      "Iliq sut, shakar va xamirturushni aralashtiring.",
      "Un qo‘shib, yumshoq xamir qoring.",
      "Xamirni tindirib, yoying va sariyog‘ bilan qatlamlang.",
      "Uchburchak shakllar kesib, kruassan qilib o‘rang.",
      "Ustiga tuxum surting va 190°C da tillarang bo‘lguncha pishiring.",
    ],
  },
  {
    id: "4",
    title: "Pushti kapkeyk",
    category: "Kekslar",
    time: "35 daqiqa",
    difficulty: "Oson",
    servings: "6 dona",
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1200&q=85",
    description: "Bayram dasturxoni uchun nafis kremli kapkeyklar.",
    ingredients: [
      "150 g un",
      "100 g shakar",
      "2 ta tuxum",
      "100 g sariyog‘",
      "1 choy qoshiq qabartma",
      "150 g krem",
    ],
    steps: [
      "Sariyog‘ va shakarni aralashtiring.",
      "Tuxumlarni bittadan qo‘shing.",
      "Un va qabartmani aralashtirib, xamirga qo‘shing.",
      "Qolipchalarga solib, 180°C da 20 daqiqa pishiring.",
      "Sovigach, krem bilan bezating.",
    ],
  },
  {
    id: "5",
    title: "Shokoladli pechenye",
    category: "Pechenyelar",
    time: "25 daqiqa",
    difficulty: "Oson",
    servings: "12 dona",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=85",
    description: "Shokolad bo‘laklari qo‘shilgan uy pechenyesi.",
    ingredients: [
      "200 g un",
      "100 g sariyog‘",
      "100 g shakar",
      "1 ta tuxum",
      "100 g shokolad",
      "1/2 choy qoshiq qabartma",
    ],
    steps: [
      "Yumshoq sariyog‘ va shakarni aralashtiring.",
      "Tuxum qo‘shib, yaxshilab ko‘pirtiring.",
      "Un va qabartmani soling.",
      "Shokolad bo‘laklarini aralashtiring.",
      "Pechenyelarni shakllantirib, 180°C da 12–15 daqiqa pishiring.",
    ],
  },
  {
    id: "6",
    title: "Qulupnayli ichimlik",
    category: "Ichimliklar",
    time: "10 daqiqa",
    difficulty: "Oson",
    servings: "2 kishilik",
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1200&q=85",
    description: "Yangi qulupnaydan tayyorlangan tetiklantiruvchi ichimlik.",
    ingredients: [
      "200 g qulupnay",
      "300 ml sut",
      "1 osh qoshiq asal",
      "Bir necha dona muz",
    ],
    steps: [
      "Qulupnaylarni yuving va tozalang.",
      "Blenderga qulupnay, sut va asal soling.",
      "Bir xil massa bo‘lguncha aralashtiring.",
      "Muz qo‘shib, stakanlarga quying.",
      "Yangi qulupnay bilan bezatib torting.",
    ],
  },
];

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find((item) => item.id === id);

  if (!recipe) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
        <span className="text-6xl">🍰</span>
        <h1 className="mt-5 font-serif text-3xl font-extrabold text-[#653748]">
          Retsept topilmadi
        </h1>
        <p className="mt-3 text-[#987c88]">
          Bu retsept mavjud emas yoki o‘chirilgan.
        </p>
        <Link
          to="/recipes"
          className="pastel-button mt-6 rounded-full bg-pink-500 px-6 py-3 font-bold text-white hover:bg-pink-600"
        >
          Retseptlarga qaytish
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <Link
        to="/recipes"
        className="inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white/80 px-4 py-2.5 text-sm font-semibold text-pink-600 transition hover:bg-pink-50"
      >
        <span>←</span> Barcha retseptlar
      </Link>

      <article className="mt-7 overflow-hidden rounded-[30px] border border-pink-100 bg-white/90 shadow-[0_12px_40px_rgba(190,100,135,0.10)]">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-72 overflow-hidden bg-pink-50 sm:min-h-96">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute left-5 top-5 rounded-full border border-white/80 bg-white/90 px-4 py-2 text-sm font-bold text-pink-600 shadow-sm backdrop-blur">
              {recipe.category}
            </span>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-pink-400">
              ♡ Mazali retsept
            </span>
            <h1 className="mt-3 font-serif text-3xl font-extrabold leading-tight text-[#653748] sm:text-4xl">
              {recipe.title}
            </h1>
            <p className="mt-5 leading-7 text-[#987c88]">
              {recipe.description}
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-pink-50 p-4">
                <span className="text-xl">🕒</span>
                <p className="mt-2 text-xs text-[#987c88]">Tayyorlash vaqti</p>
                <p className="mt-1 font-bold text-[#653748]">{recipe.time}</p>
              </div>
              <div className="rounded-2xl bg-purple-50 p-4">
                <span className="text-xl">👩‍🍳</span>
                <p className="mt-2 text-xs text-[#987c88]">Qiyinlik darajasi</p>
                <p className="mt-1 font-bold text-[#653748]">
                  {recipe.difficulty}
                </p>
              </div>
              <div className="col-span-2 rounded-2xl bg-rose-50 p-4">
                <span className="text-xl">🍽️</span>
                <span className="ml-3 text-sm font-bold text-[#653748]">
                  {recipe.servings}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-10 border-t border-pink-100 p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
          <section>
            <h2 className="font-serif text-2xl font-extrabold text-[#653748]">
              <span className="mr-2">🧺</span> Kerakli masalliqlar
            </h2>
            <p className="mt-2 text-sm text-[#987c88]">
              Retsept uchun kerak bo‘ladigan mahsulotlar.
            </p>
            <ul className="mt-6 space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li
                  key={ingredient}
                  className="flex items-start gap-3 rounded-2xl border border-pink-100/80 bg-pink-50/60 px-4 py-3 text-sm text-[#805968]"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-pink-200 text-xs font-bold text-pink-700">
                    {index + 1}
                  </span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-extrabold text-[#653748]">
              <span className="mr-2">📝</span> Tayyorlash bosqichlari
            </h2>
            <p className="mt-2 text-sm text-[#987c88]">
              Bosqichlarni ketma-ket bajaring va mazali natijadan bahramand
              bo‘ling.
            </p>
            <ol className="mt-6 space-y-5">
              {recipe.steps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-rose-400 font-bold text-white shadow-md shadow-pink-200/60">
                    {index + 1}
                  </span>
                  <p className="pt-1 leading-7 text-[#805968]">{step}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </article>

      <div className="mt-8 rounded-[26px] border border-pink-100 bg-gradient-to-r from-pink-100 via-rose-50 to-purple-100 p-7 text-center sm:p-10">
        <span className="text-3xl">💗</span>
        <h2 className="mt-3 font-serif text-2xl font-bold text-[#653748]">
          Shirin lahzalar yarating
        </h2>
        <p className="mt-2 text-sm leading-6 text-[#987c88]">
          Yana ko‘plab mazali g‘oyalarni kashf eting.
        </p>
        <Link
          to="/recipes"
          className="pastel-button mt-5 inline-flex rounded-full bg-pink-500 px-6 py-3 font-bold text-white hover:bg-pink-600"
        >
          Boshqa retseptlar →
        </Link>
      </div>
    </main>
  );
}

export default RecipeDetail;
