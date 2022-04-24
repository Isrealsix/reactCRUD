import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Student from './pages/Student';
import AddStudent from './pages/Student';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Student />} />
        <Route path="/add-student" element={<AddStudent />} />
      </Routes>
    </Router>
  )
}

export default App