
const { Router } = require("express")
const { getTask, createTask, updateTask, deleteTask, findTaskByUserId } = require("../controllers/Task.controller")
const { findById } = require("../models/todo.schema")


const taskRoute = Router()

taskRoute.get("/", getTask)
taskRoute.get("/:id", findById)
taskRoute.post("/", createTask)
taskRoute.patch("/:id", updateTask)
taskRoute.delete("/:id", deleteTask)
taskRoute.get("/user/:userId",findTaskByUserId)

module.exports=taskRoute