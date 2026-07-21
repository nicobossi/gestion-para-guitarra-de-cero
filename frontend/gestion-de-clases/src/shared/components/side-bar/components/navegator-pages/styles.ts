import type { ActiveStyle } from "../../../../styles/active/active";
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