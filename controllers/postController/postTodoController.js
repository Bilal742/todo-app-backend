import Todo from "../../model/userSchema.js";

const addTodo = async (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.json({ message: "required feild missing" })
        };

        const newTodo = new Todo({ text });
        await newTodo.save();
         res.json({
            message: "Todo added succesfully",
            newTodo
        });
    } catch (error) {
        res.status(400).json({ message: "server error", error: error.message })
    }


}

export default addTodo;

