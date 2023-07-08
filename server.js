// boilerplate format for server.js
const express = require("express");

const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3001;


// middlewares
app.use(express.static('public'));
// creating req.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// forward all requests to routers in routes folder
app.use(routes);

app.listen(PORT, () => console.log(`Server listening on PORT http://localhost:${PORT}`));