import type { ActiveStyle } from "@/shared/styles/active";
import { cva } from "@styled-system/css";
import { token } from "@styled-system/tokens";

export const sideBar: ActiveStyle = {
    base: {
        display: 'grid',
        gridTemplateRows: '20% 80%',
        backgroundColor: `${token("colors.secondary")}`, 
    },
    variants: {
        show: {
            true: {
                position: 'absolute',
                width: {
                    base: '100vw',
                    md: 0
                },
                height: '100vh',
                animation: `sliceInX ${token("durations.medium")} forwards`
            },
        }
    }
};

export const styles = (isActive: boolean) => cva(sideBar)({ show: isActive }); 