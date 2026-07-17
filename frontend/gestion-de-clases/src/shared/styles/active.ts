import { cva } from "@styled-system/css";

export type ActiveValue = 'block' | 'none'

export const activeStyles = (falseValue: ActiveValue, trueValue: ActiveValue) => cva({
    variants: {
        show: {
            true: {
                display: trueValue
            },
            false: {
                display: falseValue,
            }
        }
    }
});

export type ActiveStyles = typeof activeStyles;

export default activeStyles;