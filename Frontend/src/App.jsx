import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import RecipeDetail from "./pages/RecipeDetail";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
