import type { ActiveStyle } from "../../../../../../../../styles/active/active";
import { cva } from "@styled-system/css";

const activeStyles: ActiveStyle = {
    base: {
        display: 'grid',
        alignItems: 'center',
        width: '80%',
        maxWidth: '200px',
        md: {
            gridTemplateColumns: '50% 50%',
        }
    },
    variants: {
        show: {
            true: {
                gridTemplateColumns: '50% 50%',
            },
            false: {
                gridTemplateColumns: '100% 0%'
            }
        }
    }
}

export const styles = (isActive: boolean) => cva(activeStyles)({ show: isActive });