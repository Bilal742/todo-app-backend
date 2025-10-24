import Todo from "../../model/userSchema.js"

const getTodo = async (req, res) => {
    try {
        const todos = await Todo.find();
        await res.json({
            message: "get users succesfully",
            todos
        });
    }
    catch (error) {
        res.status(400).json({ eror: "Server error", error: error.message });
    }
}

export default getTodo;