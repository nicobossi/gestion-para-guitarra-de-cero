import type { SystemStyleObject } from "@styled-system/types";

export type ActiveStyle = {
    base?: SystemStyleObject
    variants: {
        show: {
            true?: SystemStyleObject,
            false?: SystemStyleObject
        }
    }
}