const express=require("express")
const Company=express()
const PORT=2000
Company.get("/company",(req,res)=>{
    const employee=[
        {
            EmployeeId:"101",
            EmployeeName:"Arpit Jain",
            EmployeePost:"Senior Head",
            EmployeeSalary:80000,
            EmployeeExperience:"4 Years",
            src:"https://i.postimg.cc/50DM2qqt/IMG-20240221-003305-204-removebg-preview.png"
        },{
            EmployeeId:"102",
            EmployeeName:"Karan Jadaun",
            EmployeePost:"Senior Developer",
            EmployeeSalary:1000000,
            EmployeeExperience:"5 Years",
            src:"https://i.postimg.cc/QMpY95tV/Karan.jpg"

        },{
            EmployeeId:"103",
            EmployeeName:"Ayush Goyal",
            EmployeePost:"HR",
            EmployeeSalary:90000,
            EmployeeExperience:"8 Years",
            src:"https://i.postimg.cc/jjSmSYmy/IMG-20240220-105822-removebg-preview-1.png"
        },{
            EmployeeId:"104",
            EmployeeName:"Tanishk Jain",
            EmployeePost:"Peon",
            EmployeeSalary:10000,
            EmployeeExperience:"15 Years",
            src:"https://i.postimg.cc/nLfryTW8/IMG-20240220-111228-removebg-preview.png"
        },{
            EmployeeId:"105",
            EmployeeName:"Hemant Bhargav",
            EmployeePost:"Service Man",
            EmployeeSalary:20000,
            EmployeeExperience:"1 Years",
            src:"https://i.postimg.cc/WpGcxsfq/hemant.png"
        }
    ]
    res.send(employee)
})
Company.listen("2000",()=>{console.log("the server is running on port number 2000")})
