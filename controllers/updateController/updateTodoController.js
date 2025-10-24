import Todo from "../../model/userSchema.js";

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { text, updateTodo } = req.body;

    // Find the todo by ID
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    // Update fields
    if (text !== undefined) todo.text = text;
    if (updateTodo !== undefined) todo.updateTodo = updateTodo;

    await todo.save();

    res.status(200).json({
      message: "Todo updated successfully",
      todo: todo,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export default updateTodo;
