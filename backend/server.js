const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

const itemsRouter = require("./routes/api/items"); // import routes

// body-parser middleware
app.use(express.json());

// connect to db
const db = config.get("MONGO_URI");
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected to database!`))
    .catch((err) => console.error(err));

// Use routes (redirect all api requests to routes file)
app.use("/api/items", itemsRouter);

// initialize port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port: ${port}`));
