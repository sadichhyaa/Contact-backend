const express = require("express");
const errorHandler = require("./middleware/erroeHandler");
const connectdb = require("./config/dbConnection");
const dotenv = require('dotenv').config();

//calling function to connect to mongodb
connectdb();
const app = express();

const port = process.env.PORT || 5000;

//app.use is known as middleware
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});