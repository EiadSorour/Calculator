const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/" , (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator" , (req , res)=>{
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req , res)=>{
    var hieght = Number(req.body.hieght);
    var wieght = Number(req.body.wieght);
    var bmi = (wieght / (hieght*hieght));

    res.send("Your BMI is " + bmi);
});

app.post("/" , (req,res)=>{
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2;
    res.send("Result is " + result);
});

app.listen(3000, ()=>{
    console.log("Server has started ... ");
});