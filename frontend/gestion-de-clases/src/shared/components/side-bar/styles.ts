import type { ActiveStyle } from "@/shared/styles/active";
import { css, cva } from "@styled-system/css";
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
                    md: '20%'
                },
                height: '100%',
            },
            false: {
                width: {md: 0}
            }
        }
    }
};

export const animation: ActiveStyle = {
    variants: {
        show: {
            true: {
                animation: `sliceInX ${token("durations.medium")} forwards`
            },
            false: {
                animation: `sliceOutX ${token("durations.medium")} forwards`
            }
        }
    }
};

export const styles = (isActive: boolean) => css(
    cva(sideBar).raw({ show: isActive }),
    cva(animation).raw({ show: isActive }),
); 