import type { ActiveStyle } from "@/shared/styles/active";
import { cva } from "@styled-system/css";

const activeStyles: ActiveStyle = {
    base: {
        width: '100%',
        backgroundColor: '#273678',
    },
    variants: {
        show: {
            true: {
                display: 'grid',
                placeItems: 'center',
                gap: '6px',
            },
            false: {

            }

        }
    }
}

export const styles = (isVisible: boolean) => cva(activeStyles)({ show: isVisible });