import React from 'react'

export default function EmployeUpdate(
    employees,
    setList,
    selectedEmploye,
    setSelectedEmploye,
) {
  return (
    <div>
        <h3>EmployeUpdate</h3>
        <p>
            {JSON.stringify(selectedEmploye)}
        </p>

    </div>
  )
}
