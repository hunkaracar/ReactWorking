import { useState } from "react";

function EmployeAdd({ employees, setList }) {

    const [values, setValues] = useState({
        firstName: '',
        lastName: ''
    });

    const handleChange = (e) =>{
        setValues({
            ...values,
            [e.target.name] : e.target.value
        });
    };

    const handleClear = () =>{
        setValues({
            ...values,
            firstName:'',
            lastName:''
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        setList([
            ...employees, //bu ... operator dizi içinde dizi olmasını engelliyor.
            {
                Id: employees.length + 1,
                ...values
            },

            setValues({
                firstName:'',
                lastName:''
            })

        ]);

    



    };

    return (
        <div>

            <h1>EmployeAdd</h1>

            <form onSubmit={handleSubmit}>

                <p>
                    <input
                        id="firstName"
                        name="firstName"
                        placeholder="firstName"
                        type="text"
                        onChange = {handleChange}
                        value={values?.firstName} />

                </p>

                <p>
                    <input
                        id="LastName"
                        name="lastName"
                        placeholder="lastName"
                        type="text"
                        onChange = {handleChange}
                        value={values?.lastName} />
                </p>

                <button type="submit">Save</button>
                <button onClick={handleClear} type="button">Clear</button>
            </form>


        </div>

    )

};

export default EmployeAdd;
