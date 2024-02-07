// node+ mongo db connection

const mongoose=require('mongoose')

// connect mongodb
mongoose.connect('mongodb://localhost:27017/MainProject')

// create a model and schema for the mongoose.Collectio
const Company=mongoose.model('Company',{
    cid:Number,
    cname:String,
    cemail:String,
    cpswd:String,
})

const Employeee=mongoose.model('Employeee',{
    companyid:Number,
    fname:String,
    lname:String,
    destignation:String,
    country:String,
    age:Number,
    salary:Number
})

const Task=mongoose.model('Task',{
    companyid:Number,
    title:String,
    desc:String,
    currentTime:Date,
    deadline:Date,
    statustask:String,
    selectemp:Array
})

const Contact=mongoose.model('Contact',{
    name:String,
    email:String, 
    subject:String, 
    feedback:String,  
})
module.exports={
    Company,
    Employeee,
    Task,
    Contact
}