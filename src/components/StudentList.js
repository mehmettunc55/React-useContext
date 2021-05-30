import StudentItem from './StudentItem'
import {useContext} from 'react'
import {StudentContext} from '../context/StudentContext'

const StudentList = () => {
    const {students} = useContext(StudentContext)
    return (
        <>
        <h2 style={{textAlign:'center', color:'blue', fontSize:'1,5rem'}}>Students Lists</h2>
        {students.map((student)=>(
         <StudentItem key={student.name} student={student}/>  
         ))}  
        </>
    )
}

export default StudentList

