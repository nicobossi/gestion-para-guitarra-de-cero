import { defineKeyframes } from "@pandacss/dev";

export const slice = defineKeyframes({
    sliceInX: {
        '0%': { transform: 'translateX(-200%)' },
        '100%': { transform: 'translateX(0)' }
    },
    sliceOutX: {
        '0%': { transform: 'translateX(200%)' },
        '100%': { transform: 'translateX(0)' }
    }
})