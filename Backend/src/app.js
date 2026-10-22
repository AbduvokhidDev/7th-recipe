require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { clerkMiddleware, getAuth } = require("@clerk/express");
const { boolean, success } = require("zod");

const app = express();

app.use(morgan("dev"));
const allowedOrigns = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter(boolean);
app.use(
  cors({
    origin: allowedOrigns,
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware());

const recipeRoutes = require("./routes/recipe.routes");

app.get("/whoami", (req, res) => {
  const { userId, sessionId, sessionClaims } = getAuth(req);
  res.json({
    success: true,
    data: {
      userId,
      sessionId,
      hasClaims: !!sessionClaims,
      authOnReq: req.auth ?? null,
    },
  });
});
app.get("/health", (req, res) => {
  res.json({
    success: true,
    data: { status: "ok", timestamp: new Date().toISOString() },
  });
});
app.use("/recipes", recipeRoutes);
app.use((err, req, res, next) => {
  console.error(err);
  if (err.name === "ZodError") {
    return res.status(400).json({ success: false, error: err.issues });
  }
  res.status(err.status || 500).json({ success: false, error: err.message });
});

module.exports = app;
