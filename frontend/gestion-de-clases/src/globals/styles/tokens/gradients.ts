import { defineTokens } from "@pandacss/dev";

export const gradientsToken = defineTokens.gradients({
    payment: {
        value: {
            type: 'linear',
            placement: 'to right',
            stops: [
                '#bf932c 0%',
                '#f5d76e 20%',
                '#fff1a8 40%',
                '#f5d76e 60%',
                '#b89430 100%'
            ]
        }
    },
    student: {
        value: {
            type: 'linear',
            placement: 'to right',
            stops: [
                '#273678 2.72%',
                '#5D7BFF 96.57%'
            ]
        }
    }
});
