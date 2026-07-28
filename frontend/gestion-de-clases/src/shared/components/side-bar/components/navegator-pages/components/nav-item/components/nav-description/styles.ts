import type { ActiveStyle } from "../../../../../../../../styles/active/active-variant";
import { cva } from "@styled-system/css";

export const activeStyles: ActiveStyle = {
    base: {
        width: '100%',
        color: '#FFF'
    },
    variants: {
        show: {
            true: {
                display: 'block'
            },
            false: {
                display: 'none',
            }
        }
    }
};

export const styles = (isActive: boolean) => cva(activeStyles)({ show: isActive });