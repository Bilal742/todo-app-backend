import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import router from "./routers/todoRouter.js";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());

// ✅ Database connect
connectDB();

// ✅ Base route
app.get("/", (req, res) => {
  res.send("✅ Todo backend is running on Vercel!");
});

// ✅ Todo routes
app.use("/todo", router);

// ❌ app.listen hata do (Vercel khud handle karega)
// ✅ Instead, export app
export default app;
