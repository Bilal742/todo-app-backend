import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import router from "./routers/todoRouter.js";
import cors from "cors";

dotenv.config();
const app = express();

// ✅ Use CORS properly
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());

// ✅ Database connect
connectDB();

// ✅ Base route
app.get("/", (req, res) => {
  res.send("✅ Todo backend is running!");
});

// ✅ Todo routes
app.use("/todo", router);

// ✅ For local testing only:
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

export default app;
