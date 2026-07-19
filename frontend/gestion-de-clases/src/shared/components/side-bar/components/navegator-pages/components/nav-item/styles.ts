import type { ActiveStyle } from "@/shared/styles/active";
import { cva } from "@styled-system/css";

const activeStyles: ActiveStyle = {
    base: {
        display: 'grid',
        alignItems: 'center',
        height: '100%',
        width: {
            base: '50%',
            md: '100%'
        }
    },
    variants: {
        show: {
            true: {
                gridTemplateColumns: '50% 50%',
            },
            false: {
                gridTemplateColumns: {
                    base: '100% 0%',
                    md: '50% 50%'
                }
            }
        }
    }
}

export const styles = (isActive: boolean) => cva(activeStyles)({ show: isActive });