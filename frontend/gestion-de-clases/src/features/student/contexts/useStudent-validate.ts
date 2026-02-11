import { useContext } from "react"
import StudentContext from "./student.context"


const useStudentContext = () => {

    const value = useContext(StudentContext)

    if(!value) {
        throw new Error("El componente no puede utilizar el context");
    }

    return value;
}

export default useStudentContext;