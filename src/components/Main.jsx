import React , { useState }from "react";
import Greet from "./Greet";
import "../styles/main.css"

const students = [
    {id: 1, firstName: 'Maria', lastName: 'SurName 1'},
    {id: 2, firstName: 'Jenna', lastName: 'SurName 2'},
    {id: 5, firstName: 'Rodrigo', lastName: 'SurName 4'},
    {id: 3, firstName: 'Carlie', lastName: 'SurName 3'},
    {id: 4, firstName: 'Chole'}
]

function Main() {
    const [studentList, setStudentList] = useState(students)
    const handleClick = () => {
        const rodrigo = { id: 6, firstName: 'Rodrigo'}
        setStudentList([...students, rodrigo])
        document.querySelector('button').style.display = 'none'
    }
    // even if we leave the button, when we click on it again, the state of the list didn't change
    // because on the first click, we already changed it, to keep clicking does nothing
    return (
        <main>
            <button onClick={handleClick}>Add Rodrigo</button>
            { studentList.map( student => { 
                // the KEY has to go in the first tag inside the return. 
                // ex:  <section key={student.id}>
                //          <p>blah</p>
                //          <Greet firstName={student.firstName}/>
                //      </section>

                    return (
                        <Greet 
                            key={student.id} 
                            firstName={student.firstName}
                            lastName={student.lastName} 
                        /> 
                    )
                }) 
            }
        </main>
    )
}

export default Main