const express = require("express")

const cors = require("cors")
const pool= require("./db")
const path = require("path")
const PORT = process.env.PORT || 5000;


const app=express()

//middleware
app.use(cors())
app.use(express.json()) // req.body

// app.use(express.static("./frontend/build"));

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"frontend/build")));
}


//routing

//create a todo
app.post("/todo",async(req,res)=>{
    try{
        const {description} = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",[description])
        res.json(newTodo.rows[0])
    }
    catch(err){
        console.log(err)
    }
})

//get all todo
app.get("/todo",async(req,res)=>{
    try {
        const allTodos= await pool.query("SELECT * FROM todo;")
        res.json(allTodos.rows)
    } catch (error) {
        console.log(err)
    }
})
//get a todo
app.get("/todo/:id",async(req,res)=>{
    try {
        const {id}=req.params
    const todo=await pool.query("SELECT * FROM todo WHERE todo_id=$1",[id])
    res.json(todo.rows[0])
    } catch (error) {
        console.log(err)
    }
})

//update a todo
app.put("/todo/:id",async(req,res)=>{
    try {
        const {id}=req.params
        const {description}=req.body
    const updateTodo=await pool.query("UPDATE todo SET description=$1 WHERE todo_id=$2",[description, id])
    res.json("Todo Updated")
    } catch (error) {
        console.log(err)
    }
})

//delete a todo
app.delete("/todo/:id",async(req,res)=>{
    try {
        const {id}=req.params
        const deleteTodo=await pool.query("DELETE FROM todo  WHERE todo_id=$1",[ id])
        res.json("Todo was deleted")
    } catch (error) {
        console.log(err)
    }
})

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend/build/index.html"));
})

app.listen(PORT,()=>{
    console.log("server has started at port PORT")
})