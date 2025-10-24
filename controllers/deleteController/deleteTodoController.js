import Todo from "../../model/userSchema.js";

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params; // ✅ URL se id nikal rahe hain
    const todo = await Todo.findByIdAndDelete(id); // ✅ ID se todo delete karo

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    const todos = await Todo.find().sort({ createdAt: -1 }); // ✅ updated list bhej do
    res.status(200).json({
      message: "Todo deleted successfully",
      todos: todos,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error while deleting todo",
      error: error.message,
    });
  }
};

export default deleteTodo;
