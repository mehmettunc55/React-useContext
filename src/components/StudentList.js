import StudentItem from './StudentItem'

const StudentList = ({students, changeColor}) => {
    return (
        <>
        <h2 style={{textAlign:'center', color:'blue', fontSize:'1,5rem'}}>Students Lists</h2>
        {students.map((student)=>(
         <StudentItem key={student.name} student={student} changeColor={changeColor}/>  
         ))}  
        </>
    )
}

export default StudentList

