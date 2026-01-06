const express = require("express");
const dotenv = require("dotenv");
const connectToDB = require("./database/db");
const router = require("./routes/book-routes");
dotenv.config();
const app = express();

//connect to database
connectToDB();

//middleware
app.use(express.json());

app.use("/api/books",router)


app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on PORT ${process.env.PORT || 3000} and this link = https://localhost:${process.env.PORT || 3000}`);
});
