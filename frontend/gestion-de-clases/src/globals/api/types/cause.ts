export type Cause = 'INTERNAL_SERVER_ERROR' | ModelCause

export const ModelCause = {
    RepeatStudentPhone: 'Repeat Student Phone',
    RepeatAmount: 'Repeat Amount',
} as const 

export type ModelCause = (typeof ModelCause)[keyof typeof ModelCause];
