const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const path = require("path");
const fs = require("fs");

const app = express();

// body-parser middleware
app.use(express.json());

// connect to db
const db = config.get("MONGO_URI");
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected to database!`))
    .catch((err) => console.error(err));

// Use routes (redirect all api requests to routes file)
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
// redirect requests from /upload to public "uploads" folder then retrieve image
app.use("/uploads", express.static("uploads"));

// serve static assets if in production
if (process.env.NODE_ENV === "production") {
    // set static folder
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

// initialize port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port: ${port}`));
