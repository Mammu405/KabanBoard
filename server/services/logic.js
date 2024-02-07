//imprt db
const db=require('./db')

//registeration of company
const regCompany=(cid,cname,cemail,cpswd)=>{
    return db.Company.findOne({cid}).then((result)=>{
        if(result){
            return{
                statusCode:401,
                message:"Company already registered"
            }
        }
        else{
            const newCompany=db.Company({cid,cname,cemail,cpswd})
            newCompany.save()
            return{
                statusCode:200,
                message:"Company registered successfully"
            }
        } 
    })
}
//get all company...for login purpose
const getCompany=()=>{
    return db.Company.find().then((response)=>{
        if(response){
            return{
                statusCode:200,
                company:response
            }
        }
        else{
            return{
                statusCode:404,
                message:'no Company details found'
            }
        }
    })
}

//Adding employee details
const regEmployee=(companyid,fname,lname,destignation,country,age,salary)=>{
    return db.Employeee.findOne({fname,lname,destignation,country,age,salary}).then((result)=>{
        if(result){
            return{
                statusCode:401,
                message:"error"
            }
        }
        else{
            const newEmployee=db.Employeee({companyid,fname,lname,destignation,country,age,salary})
            newEmployee.save()
            return{
                statusCode:200,
                message:"Employee registered successfully"
            }
        }
    })
}

//get all employee details
const getEmployee=()=>{
    return db.Employeee.find().then((response)=>{
        if(response){
            return{
                statusCode:200,
                employee:response
            }
        }
        else{
            return{
                statusCode:404,
                message:"No employee is found"
            }
        }
    })
}

//delete an employeee from the datbase
const deleteEmployee=(id)=>{
    return db.Employeee.deleteOne({_id : id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:'Employee deleted Successfully'
            }
        }
        else{
            return{
                statusCode:401,
                message:'Employee not found'
            }
        }
    })
}

//Adding Task to database
const addTask=(companyid,title,desc,currentTime,deadline,statustask,selectemp)=>{
    return db.Task.findOne({title,desc,currentTime,deadline,statustask,selectemp}).then((result)=>{
        if(result){
            return{
                statusCode:401,
                message:"error"
            }
        }
        else{
            const newTask=db.Task({companyid,title,desc,currentTime,deadline,statustask,selectemp})
            newTask.save()
            return{
                statusCode:200,
                message:"Task Added successfully"
            }
        }
    })
}

const gettask=()=>{
    return db.Task.find().then((response)=>{
        if(response){
            return{
                statusCode:200,
                task:response
            }
        }
        else{
            return{
                statusCode:404,
                message:"No task is found"
            }
        }
    })
}

//delete an task from the datbase
const deleteTasks=(id)=>{
    return db.Task.deleteOne({_id : id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:'Task deleted Successfully'
            }
        }
        else{
            return{
                statusCode:401,
                message:'Task not found'
            }
        }
    })
}

const editTask=(_id,title,desc,deadline,currentTime,statustask,selectemp)=>{
    return db.Task.findOne({_id}).then((result)=>{
        if(result){
            result._id=_id,
            result.title=title,
            result.desc=desc,
            result.deadline=deadline,
            result.currentTime=currentTime,
            result.statustask=statustask,
            result.selectemp=selectemp
            result.save()
            return{
                statusCode:200,
                message:"Task Updated Successfully"
            }
        }
        else{
            return{
                statusCode:404,
                message:"Task not found"
            }
        }
    })
}

//Adding employee details
const contact=(name,email,subject,feedback)=>{
    return db.Contact.findOne({name,email,subject,feedback}).then((result)=>{
        if(result){
            return{
                statusCode:401,
                message:"error"
            }
        }
        else{
            const newEmployee=db.Contact({name,email,subject,feedback})
            newEmployee.save()
            return{
                statusCode:200,
                message:"Feedback is Sent "
            }
        }
    })
}


module.exports={
    regCompany ,
    getCompany,
    regEmployee,
    getEmployee,
    deleteEmployee,
    addTask,
    gettask,
    deleteTasks,
    editTask,
    contact
  
   

}