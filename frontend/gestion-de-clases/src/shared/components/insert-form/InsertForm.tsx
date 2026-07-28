import FormContent from "./components/form-content/FormContent";
import GenericContainer from "./components/generic-container/GenericContainer";
import TitleContainer from "./components/title-container/TitleContainer";
import type { InsertFormProps } from "./insert-form";

function InsertForm<T> ({title, schema, inputsData, isLoading, onSubmit, styles}: InsertFormProps<T>) {
    return (
        <GenericContainer>
            <TitleContainer title = {title} />
            <FormContent
                schema = {schema}
                inputsData = {inputsData} 
                isLoading = {isLoading}
                onSubmit = {onSubmit} 
                styles = {styles}
            />
        </GenericContainer>
    )
}

export default InsertForm;