import { cva } from "@styled-system/css";

export const styles = cva({
    base: {
        width: '100vw',
        height: '100vh'
    },
    variants: {
        size: {
            false: {
                display: 'grid',
                gridTemplateColumns: '20% 80%',
            },
            true: {
                display: 'block'
            }
        }
    }
})