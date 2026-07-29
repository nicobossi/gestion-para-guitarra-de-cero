export type Cause = 'INTERNAL_SERVER_ERROR' | ModelCause

export const ModelCause = {
    BadFormat: 'BAD_FORMAT',
    RepeatNumberPhone: 'REPEAT_NUMBER_PHONE',
    StudentWithSameName: 'STUDENT_WITH_SAME_NAME',
    FullNameNotExist: 'FULLNAME_NOT_EXIST',
    RepeatAmount: 'REPEAT_AMOUNT',
} as const 

export type ModelCause = (typeof ModelCause)[keyof typeof ModelCause];
