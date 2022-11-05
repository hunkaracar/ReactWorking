import React,{useState} from 'react'
import employees from './data/Data';
import EmployeList from './components/EmployeList';
import EmployeAdd from './components/EmployeAdd';
import EmployeUpdate from './components/EmployeUpdate';


function App() {

  const [list, setList] = useState(employees);
  const [selectedEmploye,setSelectedEmploye] = useState({
    Id:0,
    firstName:'',
    lastName:''
  });

  return (

    <div>

      <h1>Employees App</h1>
      <EmployeList employees = {list} setList = {setList} setSelectedEmploye={setSelectedEmploye}/>
      <EmployeAdd employees = {list} setList = {setList}/>
      <EmployeUpdate employees = {list} setList = {setList}
      selectedEmploye={selectedEmploye} 
      setSelectedEmploye={setSelectedEmploye}/>
    </div>
  )
}

export default App;

