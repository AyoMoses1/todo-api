const express = require("express");
const cors = require("cors");
const helmet = require("helmet")
const morgan = require("morgan")
require('dotenv').config()
require("./auth/passport") 

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

// middlewares
app.use(cors(corsOptions));
app.use(morgan("dev"))
app.use(express.json());
app.use(helmet())
app.use(express.urlencoded({ extended: true }));


// routers

const todosRouter = require("./routes/todosRouter");
const categoriesRouter = require("./routes/categoriesRouter")
const usersRouter = require("./routes/usersRouter")
const prioritiesRouter = require("./routes/priorityRouter")
const authRouter = require("./routes/auth")

app.use("/api/v1/todos", todosRouter);
app.use("/api/v1/categories", categoriesRouter);
app.use("/api/v1/users", usersRouter)
app.use("/api/v1/priorities", prioritiesRouter)
app.use("/api/v1", authRouter)

// testing api
app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
