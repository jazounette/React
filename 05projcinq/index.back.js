const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require ('body-parser');
const port = 3003;

const fs = require ('fs');

app.use((req, res, next ) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', "GET, POST, PUT, OPTIONS");
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

app.use(cors());
app.use(bodyParser.json());


app.listen(port, () => {
    console.log(`Connexion au port : ${port}`)
});

const getTodos = () => {
    const contentTodoJson = fs.readFileSync("todo.json");
    const todos = JSON.parse(contentTodoJson);
    return todos;
}

app.get("/todo", (req, res) => {
    res.json(getTodos());
})


