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

app.listen(PORT, () => {
    console.log(`server is runing on http://localhost:${PORT}`);
})


/**
* API Requset
* ======
* GET => show data
* POST => add data
* PATCH => id change
* PUT => all data edit
* DELETE => delete data
**/ 