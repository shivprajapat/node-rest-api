const express = require('express');
const res = require('express/lib/response');

const PORT = 5000;
const app = express();

app.use(express.json());

let todos = [
    { id: 1, text: "this is first todo" },
    { id: 2, text: "this is second todo" },
    { id: 3, text: "this is third todo" },
];

app.get('/', (req, res) => {
    res.json({ message: "Hello World" });
})

app.get('/todo', (req, res) => {
    res.json(todos);
})

// GET

app.get('/todo/:id', (req, res) => {
    const { id } = req.params;
    // console.log(id);

    const todo = todos.find((todo) => todo.id.toString() === id);

    if (!todo) {
        res.json({
            message: "Invalid ID"
        })
    }
    res.json(todo)
})

// POST

app.post('/todo', (req, res) => {
    const { text } = req.body;

    const newTodo = { id: todos.length + 1, text };
    todos.push(newTodo);

    res.json(newTodo);
    // message: "todo added"
})

// PATCH
app.patch('/todo/:id', (req, res) => {
    const { id } = req.params;

    const { text } = req.body;

    const todo = todos.find((todo) => todo.id.toString() === id);

    if (!todo) {
        res.json({
            message: "Invalid ID"
        })
    }

    todo.text = text;
    res.json(todo)
})

// DELETE
app.delete('/todo/:id', (req, res) => {
    const { id } = req.params;

    const todoIndex = todos.findIndex((todo) => todo.id.toString() === id);

    if (!todoIndex) {
        res.json({
            message: "Invalid ID"
        })
    }

    todos.splice(todoIndex, 1);
    res.json({ message: "todo is deleted " })
})

app.listen(PORT, () => {
    console.log(`server is runing on http://localhost:${PORT}`);
})