import type { ActiveStyle } from "@/shared/styles/active";
import { cva } from "@styled-system/css";

export const activeStyles: ActiveStyle = {
    base: {
        color: '#FFF'
    },
    variants: {
        show: {
            true: {
                display: {
                    base: 'block',
                    md: 'none'
                }
            },
            false: {
                display: {
                    base: 'none',
                    md: 'block'
                }
            }
        }
    }
};

export const styles = (isActive: boolean) => cva(activeStyles)({ show: isActive });