import type { ActiveStyle } from "@/shared/styles/active/active-variant";
import { cva } from "@styled-system/css";

const modal: ActiveStyle = {
    base: {
        position: 'absolute',
        left: 0,
        top: 0,
        display: 'grid',
        placeItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    variants: {
        show: {
            true: {
                display: 'none',
            },
        }
    }
};

export const styles = (is: boolean) => cva(modal)({ show: is });

