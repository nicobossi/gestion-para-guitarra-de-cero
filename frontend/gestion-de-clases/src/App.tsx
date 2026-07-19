import { Route, Routes } from "react-router"
import Student from "./features/student/Student"
import ServerErrorContainer from "./shared/pages/server-error/ServerError"
import PageNotFoundContainer from "./shared/pages/page-not-found/PageNotFound"
import Fee from "./features/fee/Fee"
import { STUDENT_ROUTE } from "./globals/routes/student"
import { FEE_ROUTE } from "./globals/routes/fee"
import { SERVER_ERROR_ROUTE } from "./globals/routes/server-error"
import { PAGE_NOT_FOUND_ROUTE } from "./globals/routes/client-error"

function App() {
  return (
    <Routes>
      <Route index element = {<p>Home</p>} />
      <Route path = {STUDENT_ROUTE} element = {<Student />}/>
      <Route path = {FEE_ROUTE} element = {<Fee />} />
      <Route path = {SERVER_ERROR_ROUTE} element = {<ServerErrorContainer />}/>
      <Route path = {PAGE_NOT_FOUND_ROUTE} element = {<PageNotFoundContainer />} />
    </Routes>
  )
}

export default App
