import { Route, Routes } from "react-router"
import Student from "./features/student/Student"
import ServerErrorContainer from "./globals/pages/server-error/ServerError"

function App() {
  return (
    <Routes>
      <Route path = "student" element = {<Student />}/>
      <Route path = "error-505" element = {<ServerErrorContainer />}/>
    </Routes>
  )
}

export default App
