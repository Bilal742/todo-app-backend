import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import router from "./routers/todoRouter.js";
import cors from "cors";

dotenv.config();
const app = express();
import cors from "cors";
app.use(cors({
  origin: "*", // or ["http://localhost:5173"] for specific frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
}));


// Middleware
app.use(express.json());

// ✅ Route (order sahi kar diya)
app.get("/", (request, response) => {
  response.send("Server is running");
});

// ✅ Todo routes
app.use("/todo", router);

// ✅ Connect Database
connectDB();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
