const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const path = require("path");
const fs = require("fs");

const app = express();

// body-parser middleware
app.use(express.json());
// Use routes (redirect all api requests to routes file)
app.use("/api/posts", require("./routes/api/posts"));
// redirect requests to /upload to public "uploads" folder then retrieve image
app.use("/uploads", express.static("uploads"));



// connect to db
const db = config.get("MONGO_URI");
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected to database!`))
    .catch((err) => console.error(err));

// initialize port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port: ${port}`));
