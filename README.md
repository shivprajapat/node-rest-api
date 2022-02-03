
## API Reference with Node and Express js

* API Requset
* GET => show data
* POST => add data
* PATCH => id change
* PUT => all data edit
* DELETE => delete data

#### GET all items

```http
  /todo
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_id` | `string` | **Required**. Your API ID Address |
| `api_text` | `string` | **Required**. Your text Address |

```
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
```

#### POST item
```http
  POST /todo
```

```
app.post('/todo', (req, res) => {
    const { text } = req.body;

    const newTodo = { id: todos.length + 1, text };
    todos.push(newTodo);

    res.json(newTodo);
    // message: "todo added"
})
```
#### PATCH item
```http
  PATCH /todo/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_id` | `string` | **Required**. Your API ID Address |
| `api_text` | `string` | **Required**. Your text Address |

```
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
```
#### DELETE item
```http
  DELETE /todo/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_id` | `string` | **Required**. Your API ID Address |
| `api_text` | `string` | **Required**. Your text Address |

```
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
```