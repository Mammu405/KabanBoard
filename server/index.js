// import express
const express=require('express')

// import cors
const cors=require('cors')

const logic=require('./services/logic')

// create a server application using the express
const serverApp=express()

//use cors and express
serverApp.use(cors({
    origin:'http://localhost:3000'
}))

serverApp.use(express.json())

//server listen
serverApp.listen(8000,()=>{
    console.log('server listing on port 8000');
})


//company registration api call
serverApp.post('/regCompanys',(req,res)=>{
    logic.regCompany(req.body.cid,req.body.cname,req.body.cemail,req.body.cpswd).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//get all company api calls
serverApp.get('/getCompanys',(req,res)=>{
    logic.getCompany().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//employee registration api call
serverApp.post('/regEmployeees',(req,res)=>{
    logic.regEmployee(req.body.companyid,req.body.fname,req.body.lname,req.body.destignation,req.body.country,req.body.age,req.body.salary).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})


//get all employeee details
serverApp.get('/getEmployeees',(req,res)=>{
    logic.getEmployee().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//delete an employee api call
serverApp.delete('/deleteEmployees/:id',(req,res)=>{
    logic.deleteEmployee(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//add task
serverApp.post('/taskadd',(req,res)=>{
    logic.addTask(req.body.companyid,req.body.title,req.body.desc,req.body.currentTime,req.body.deadline,req.body.statustask,req.body.selectemp).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//get task
serverApp.get('/gettask',(req,res)=>{
    logic.gettask().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//delete an Task api call
serverApp.delete('/deleteTask/:id',(req,res)=>{
    logic.deleteTasks(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//edit an Task api call
serverApp.post('/editTask/:id',(req,res)=>{
    logic.editTask(req.params.id,req.body.title,req.body.desc,req.body.deadline,req.body.currentTime,req.body.statustask,req.body.selectemp).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//contact task
serverApp.post('/contact',(req,res)=>{
    logic.contact(req.body.name,req.body.email,req.body.subject,req.body.feedback).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

