import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import router from "./routers/todoRouter.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());

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
