import { cva } from "@styled-system/css";
import type { SystemStyleObject } from "@styled-system/types";

export type ActiveStyle = {
    false: SystemStyleObject, 
    true: SystemStyleObject, 
    base?: SystemStyleObject
}

export const whenActiveStyles = (activeStyles: ActiveStyle) => cva({
    base: activeStyles.base,
    variants: {
        show: {
            false: activeStyles.false,
            true: activeStyles.true
        }
    }
});