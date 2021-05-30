import React from 'react'

const StudentItem = ({ student, changeColor }) => {
    return (
        <div style = {{background:student.color, paddingBottom:'3rem', paddingTop:'2rem', marginBottom:'2rem', textAlign:'center'}}>
        <h2>{student.name}</h2>
        <p>{student.email}</p>
        <p>{student.age}</p>
        color: <input value={student.color} onChange={(e)=>changeColor(student.id, e.target.value)} />
            
        </div>
    )
}

export default StudentItem
