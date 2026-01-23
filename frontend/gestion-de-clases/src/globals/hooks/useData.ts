import { useForm, type FieldValues } from "react-hook-form";




function useData<T extends FieldValues>() {
    return useForm<T>();
}

export default useData;