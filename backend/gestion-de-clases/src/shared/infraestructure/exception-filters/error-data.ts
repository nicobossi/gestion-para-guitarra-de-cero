export interface ErrorData {
    title: string;
    message: string;
    cause: string;
    status: number;
    errors?: Motive[];
}

export interface Motive {
    field: string;
    motive: string;
}
