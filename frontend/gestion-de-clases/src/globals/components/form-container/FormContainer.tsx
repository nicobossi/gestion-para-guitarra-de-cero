import FormContent from "../form-content/FormContent";
import TitleContainer from "../title-container/TitleContainer";
import type { FormContainerProps } from "./form-container"
import './form-container.css'

const FormContainer = ({title, inputsData, onSubmit} : FormContainerProps) => {

    return (
        <div className = "form-container">
            <TitleContainer title = {title} />
            <FormContent inputsData = {inputsData} onSubmit = {onSubmit} />
        </div>
    )
}


export default FormContainer;