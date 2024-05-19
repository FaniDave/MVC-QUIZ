const express = require("express");
const BookRouter = require("./routes/BookRouter")

const app = express();

//MiddleWares
app.use(express.urlencoded());
app.use(express.json());
app.use(BookRouter);

//Error handling 
app.use((err, req, res, next) => {
     res.status(500).json({sucess: false, message: err.message})
})

//list on 3000 
app.listen(3000, () => console.log("Listen on 3000"));