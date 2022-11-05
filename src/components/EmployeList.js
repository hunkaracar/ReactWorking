import React from 'react'
import employees from '../data/Data'
import Employee from './Employee';

export default function EmployeList({ employees, setList,setSelectedEmploye}) {



    const handleClearAll = () => {

        setList([]);
    }

    const handleAllRemove = (Id) => {

        setList(employees.filter(emp => emp.Id !== Id))     
    };

    return (
        <div>

            <h2>Employe list {employees.length}</h2>

            
                {employees.map((emp, index) => (
                  
                    <Employee key ={index} employee = {emp} setList = {setList} handleAllRemove = {handleAllRemove} setSelectedEmploye={setSelectedEmploye}/>

                ))}
            <button onClick={handleClearAll}>ClearAll</button>


        </div>
    )
}
