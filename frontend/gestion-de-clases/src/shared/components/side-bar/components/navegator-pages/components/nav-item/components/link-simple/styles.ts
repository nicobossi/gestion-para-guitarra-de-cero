import type { ActiveStyle } from "@/shared/styles/active";
import { cva } from "@styled-system/css";

export const activeStyles: ActiveStyle = {
    base: {
        color: '#FFF'
    },
    variants: {
        show: {
            true: {
                display: 'block'
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

export const styles = (isVisible: boolean) => cva(activeStyles)({ show: isVisible });