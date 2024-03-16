import { useState,useEffect } from 'react'
import './App.css'
import axios from "axios"

function App() {
const [employee,setuser]=useState([])
useEffect(()=>{
  axios.get("http://localhost:2000/company")
  .then((resdata)=>{setuser(resdata.data)})
  .catch((error)=>{console.log(error)})
})
  return (
    <>
    
    <div className="overflow-x-auto">
    <table className="table">
      <thead>
        <tr>
          <th>Employee Id</th>
          <th>Employee Name</th>
          <th>Employee Post</th>
          <th>Employee Salary</th>
          <th>Employee Experience</th>
        </tr>
      </thead>
      <tbody>
        {
          employee.map((userdata)=>{
            return(
              <>
              <tr>
                <td>{userdata.EmployeeId}</td>
                <td>
                  <div className="flex avatar">
                    <div className="w-12 rounded-full">
                      <img src={userdata.src} alt="" />
                    </div>
                  </div>
                  {userdata.EmployeeName}
                </td>
                <td>{userdata.EmployeePost}</td>
                <td>{userdata.EmployeeSalary}</td>
                <td>{userdata.EmployeeExperience}</td>
              </tr>
              </>
            )
          })
        }
     
      </tbody>
    </table>
    </div>
    </>  
  )
}
export default App


