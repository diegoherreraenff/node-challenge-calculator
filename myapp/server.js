const express = require("express");
const app = express();

const mat = require("./matematica.js")



app.get("/", (req, res) => {
    res.send("hello server up")
})

//app.get("/restaurant/remove/:id
app.get("/add/:value1/:value2", (req, res) => {
    let value1 = parseInt(req.params.value1)
    let value2 = parseInt(req.params.value2)
    const result = mat.sumar(value1, value2)


    res.send(result.toString())
})

app.get("/substract/:value1/:value2", (req, res) => {
    let value1 = parseInt(req.params.value1)
    let value2 = parseInt(req.params.value2)
    const result = mat.resta(value1, value2)
    res.send(result.toString())
})
app.get("/multiplicar/:value1/:value2", (req, res) => {
    let value1 = parseInt(req.params.value1)
    let value2 = parseInt(req.params.value2)
    const result = mat.multiplicar(value1, value2)
    res.send(result.toString())
})



app.get("/dividir/:value1/:value2", (req, res) => {
    let value1 = parseInt(req.params.value1)
    let value2 = parseInt(req.params.value2)
    if (value2 === 0) {
        res.status(400).send("no se puede dividir entre 0")
    } else {
        const result = mat.dividir(value1, value2)
        res.send(result.toString())
    }

});
//suma con query 
app.get("/add", (req, res) => {
    let value1 = parseInt(req.query.value1)
    let value2 = parseInt(req.query.value2)
    const result = mat.sumar(value1, value2)


    res.send(result.toString())
})
//resta con query 
app.get("/substract", (req, res) => {
    let value1 = parseInt(req.query.value1)
    let value2 = parseInt(req.query.value2)
    const result = mat.resta(value1, value2)


    res.send(result.toString())
}) ;


//multiplicar con qeury 
app.get("/multiplicar", (req, res) => {
    let value1 = parseInt(req.query.value1)
    let value2 = parseInt(req.query.value2)
    const result = mat.multiplicar(value1, value2)
    res.send(result.toString())
})
//dividir query 
app.get("/dividir", (req, res) => {
    let value1 = parseInt(req.query.value1)
    let value2 = parseInt(req.query.value2)
    if (value2 === 0) {
        res.status(400).send("no se puede dividir entre 0")
    } else {
        const result = mat.dividir(value1, value2)
        res.send(result.toString())
    }

});





const myLogger = (req, res, next) => {
  const visitTime = new Date();
  console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
  next();
};
app.use(myLogger);

app.listen(3000, () => console.log("Listening on port 3000"));