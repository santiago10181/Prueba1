const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const ejs = require("ejs")


app.set("view engine","ejs")
app.use(bodyParser.urlencoded ({extended:true}))
app.use(express.static("public"))
const add = []
let select 
let item1
let item2
let item3
let toAdd
app.get("/",(req,resp)=>{
    resp.render("prueba",({add:add}))

})
app.post("/",(req,resp)=>{
    select = req.body.Nombre
    add.push(select)
    item1 = req.body.euismod = "op1"
    item2 = req.body.gravida = "op2"
    item3 = req.body.risusin = "op3"
    resp.redirect("result")
})
app.get("/result",(req,resp)=>{
    resp.render("result",({Nombre:select,item1:item1,item2:item2,item3:item3}))
})


app.listen(3000,()=>{
    console.log("funciona");
})
