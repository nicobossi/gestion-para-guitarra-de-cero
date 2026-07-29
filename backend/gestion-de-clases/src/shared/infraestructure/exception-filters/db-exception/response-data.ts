import { ErrorData } from '../error-data';

export type FilterExceptionDbData = Omit<
    ErrorData,
    'title' | 'errors' | 'cause'
>;
