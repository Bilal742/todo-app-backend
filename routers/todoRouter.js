import express from "express"
import addTodo from "../controllers/postController/postTodoController.js";
import getTodo from "../controllers/getController/getTodosController.js";
import updateTodo from "../controllers/updateController/updateTodoController.js";
import deleteTodo from "../controllers/deleteController/deleteTodoController.js";

const router = express.Router();

router.post("/", addTodo);
router.get("/", getTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router
