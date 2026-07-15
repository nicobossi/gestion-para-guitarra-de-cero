export interface CreateStudentResponse {
    id: number;
    name: string;
    surname: string;
    secondName?: string;
    phone: string;
    submissionDate: Date;
}
