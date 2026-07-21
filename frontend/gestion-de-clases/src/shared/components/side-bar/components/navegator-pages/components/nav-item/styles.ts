import type { ActiveStyle } from "@/shared/styles/active";
import { cva } from "@styled-system/css";

const activeStyles: ActiveStyle = {
    base: {
        justifyItems: 'center',
        width: '100%',
        minHeight: '20%',
        padding: '10%',
    },
    variants: {
        show: {
            true: {
                background: 'linear-gradient(#273678, #111A40)',
            },
        }
    }
}

export const styles = (isActive: boolean) => cva(activeStyles)({ show: isActive });