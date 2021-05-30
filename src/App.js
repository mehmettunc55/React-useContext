import {useState} from 'react'
import StudentItem from './components/StudentItem'

const data = [
  { id: 1, name: 'Jason Response', email: 'jason@mail.com', age: 23, color: 'lightcyan' },
  { id: 2, name: 'Benjamin Evalent', email: 'benjamin@mail.com', age: 20, color: 'honeydew' },
  { id: 3, name: 'Malcolm Function', email: 'malcolm@mail.com', age: 21, color: 'mistyrose' }
]



const App = () => {
  const [student, setStudent] = useState(data)

  return (
    <div className='App'>
    <header>
      <h1>welcome</h1>
      
    </header> 
    <StudentItem/> 
    </div>
  )
}

export default App



