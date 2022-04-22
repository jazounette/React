const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3003

const fs = require('fs');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use(bodyParser.json());
app.use(cors());


const saveTodo = data => {
    fs.writeFileSync("todo.json", JSON.stringify(data));
};


const getTodos = () => {
    const contentTodoJson = fs.readFileSync("todo.json");
    const todos = JSON.parse(contentTodoJson);
    return todos;
};

app.get("/todo", (req, res) => {
    res.json(getTodos());
});


app.delete("/delete-todo/:id", (req, res) => {
    var result = " ";
    const long1 = getTodos().length;
    const todoNotDelete = getTodos().filter(
        todo => todo.id != req.params.id
    );
    saveTodo(todoNotDelete);
    const long2 = getTodos().length;
    if (long1 > long2) {
        result = "La tache a bien été supprimé";

    } else {
        result = "La tache n'a pas été supprimé";
    }

    return res.json({ msg: result });
});


app.post("/creation", (req, res) => {
    const long1 = getTodos().length;
    const todo = req.body;
    console.log(todo);
    var result = "c good";
    const listTodo = [...getTodos(), todo]
    saveTodo(listTodo);
    const long2 = getTodos().length;
    if (long1 < long2) {
        result = "Enregistrement ok";
    } else {
        result = "Enregistrement ko";
    }
    return res.json({ msg: result });
});



app.listen(port, () => {
    console.log(`Connexion sur le port ${port}`)
})