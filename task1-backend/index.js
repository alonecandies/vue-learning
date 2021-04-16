require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT||4000;
const connection = require("./models/db");
const routes = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

routes.authRoute(app);
routes.userRoute(app);

app.get('/', (req,res) => {
    res.json({
        message:"Hello"
    });
});
app.listen(PORT,() => {
    console.log("Listen on ",PORT);
})
