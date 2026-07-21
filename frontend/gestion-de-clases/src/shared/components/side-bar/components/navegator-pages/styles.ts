import type { ActiveStyle } from "@/shared/styles/active";
import { cva } from "@styled-system/css";

const activeStyles: ActiveStyle = {
    base: {
        width: '100%',
    },
    variants: {
        show: {
            false: {
                md: {
                    display: 'none'
                }
            },
        }
    }
}

export const styles = (isActive: boolean) => cva(activeStyles)({ show: isActive });