import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import router from "./routers/todoRouter.js";
import cors from "cors";

dotenv.config();
const app = express();

// ✅ Proper CORS setup
app.use(cors);

// ✅ Body parser
app.use(express.json());

// ✅ Database connection
connectDB();

// ✅ Base route
app.get("/", (req, res) => {
  res.send("✅ Todo backend is running successfully!");
});

// ✅ Todo routes
app.use("/todo", router);

// ✅ Local run only (Vercel auto handles server)
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`✅ Server running locally at http://localhost:${PORT}`);
  });
}

// ✅ Export for Vercel
export default app;
