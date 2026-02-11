import { Route, Routes } from "react-router"
import Student from "./features/student/Student"
import ServerErrorContainer from "./globals/pages/server-error/ServerError"
import { FEE_ROUTE, HOME_ROUTE, PAGE_NOT_FOUND_ROUTE, SERVER_ERROR_ROUTE, STUDENT_ROUTE } from "./infraestructure/routes/routes"
import PageNotFoundContainer from "./globals/pages/page-not-found/PageNotFound"
import Fee from "./features/fee/Fee"

function App() {
  return (
    <Routes>
      <Route path = {HOME_ROUTE} element = {<p>Home</p>} />
      <Route path = {STUDENT_ROUTE} element = {<Student />}/>
      <Route path = {FEE_ROUTE} element = {<Fee />} />
      <Route path = {SERVER_ERROR_ROUTE} element = {<ServerErrorContainer />}/>
      <Route path = {PAGE_NOT_FOUND_ROUTE} element = {<PageNotFoundContainer />} />
    </Routes>
  )
}

export default App
