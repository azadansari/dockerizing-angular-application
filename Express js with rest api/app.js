
let express = require("express");
let app = express();
let emp = {id:100,name:"Ravi",age:21};

//add middleware
app.use(express.json());    //Enable post json data from http request.


let employees = [
    {id:1,name:"Ajay",age:21},
    {id:2,name:"Ram",age:22},
    {id:3,name:"Vijay",age:23},
    {id:4,name:"Raju",age:24}
]



//http://localhost:9090/sayHello
//get the output in plain text format.
app.get("/sayHello",(req,res)=>{
    res.send(("Welcome to simple Rest ApI"))
})

// http://localhost:9090/sayJson
app.get("/sayJson",(req,res)=>{
    res.json({"msg":"Welcome simple json messege"});
})

// http://localhost:9090/sayInfo
app.get("/sayInfo",(req,res)=>{
    res.json(emp);         //automatically convert js object into json
})

// http://localhost:9090/allEmployees
app.get("/allEmployees",(req,res)=>{
    res.json(employees);
})

// http://localhost:9090/singleQueryParam?name=Azad
app.get("/singleQueryParam",(req,res)=>{
    //let name = req.query.name;
    let name = req.query["name"];
    res.send("Welcome user "+name);
})

// http://localhost:9090/multiQueryParam?name=Azad&pass=123
// http://localhost:9090/multiQueryParam?name=Azad&pass=1234
app.get("/multiQueryParam",(req,res)=>{
    //let name = req.query.name;
    let name = req.query["name"];
    let pass = req.query["pass"];
    if(name="Raj" && pass=="123"){
        res.send("Successfully Login");
    }else{
        res.send("Failure try once again");
    }
})

// http://localhost:9090/singlePathParam/Azad
app.get("/singlePathParam/:user",(req,res)=>{
    let user = req.params.user;
    res.send("Welcome to path param "+user);
})

// http://localhost:9090/multiPathParam/Azad/123
app.get("/multiPathParam/:user/:pass",(req,res)=>{
    let user = req.params.user;
    let pass = req.params.pass;
    if(user="Raj" && pass=="123"){
        res.send("Successfully Login with path Param");
    }else{
        res.send("Failure with path Param");
    }
})

// http://localhost:9090/storeEmployee
app.post("/storeEmployee",(req,res)=>{
    let emp = req.body;
    console.log(emp);
    res.send("Data Stored");
})

// http://localhost:9090/updateEmployeeSalary
app.patch("/updateEmployeeSalary",(req,res)=>{
    let emp = req.body;
    console.log(emp);
    res.send("employee salary update");
})


// http://localhost:9090/updateEmployee
app.put("/updateEmployee",(req,res)=>{
    let emp = req.body;
    console.log(emp);
    res.send("employee salary update");
})

// http://localhost:9090/deleteEmployeeInfo/123
app.delete("/deleteEmployeeInfo/:id",(req,res)=>{
    let id = req.params.id;
    res.send("Record delete successfully with id is "+id);
})


// app.listen(9090);

app.listen(9090,()=>console.log("Server Running on port number 9090"))