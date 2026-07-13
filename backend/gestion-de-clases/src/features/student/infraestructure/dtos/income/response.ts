export interface CreateStudentResponse {
    id: number;
    name: string;
    surname: string;
    secondName?: string;
    phone: number;
    submissionDate: Date;
}
