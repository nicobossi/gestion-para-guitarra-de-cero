import { useContext } from "react"
import StudentContext from "./student.context"




const useStudentContext = () => {

    const context = useContext(StudentContext)

    if(!context) {
        throw new Error("El componente no puede utilizar el context");
    }

    return context;
}

export default useStudentContext;