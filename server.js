const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "https://localhost:8081",
};

// middlewares
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// routers

const todosRouter = require("./routes/todosRouter");
const categoriesRouter = require("./routes/categoriesRouter")
const usersRouter = require("./routes/usersRouter")

app.use("/api/v1/todos", todosRouter);
app.use("/api/v1/categories", categoriesRouter);
app.use("/api/v1/users", usersRouter)

// testing api
app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
