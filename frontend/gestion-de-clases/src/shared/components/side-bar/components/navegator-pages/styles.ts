import type { ActiveStyle } from "@/shared/styles/active";
import { cva } from "@styled-system/css";

const activeStyles: ActiveStyle = {
    base: {
        display: 'grid',
        placeItems: 'center',
        gridTemplateRows: 'repeat(5, 20%)',
        width: '100%',
        height: '90%',
    },
    variants: {
        show: {
            true: {
                display: {
                    base: 'grid',
                    md: 'none'
                }
            },
        }
    }
}

export const styles = (isActive: boolean) => cva(activeStyles)({ show: isActive });