const express = require('express');

const PORT = 5000;
const app = express();
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

app.listen(PORT, () => {
    console.log(`server is runing on http://localhost:${PORT}`);
})