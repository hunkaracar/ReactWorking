import React, { useState } from 'react'

export default function Employee({employee,handleAllRemove,setSelectedEmploye}) {

    const handleSelectedEmploye = (emp) =>{
        setSelectedEmploye(emp)
    }

      
  return (
    <div key={employee.Id}>

        {employee.firstName} {employee.lastName}

        <button onClick={() => handleAllRemove(employee.Id)}>Remove</button>
        <button onClick={() => handleSelectedEmploye(employee)}>Select</button>


    </div>
  )
}
