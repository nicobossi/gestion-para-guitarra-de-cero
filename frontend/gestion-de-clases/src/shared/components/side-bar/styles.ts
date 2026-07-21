import type { ActiveStyle } from "../../styles/active/active";
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
                position: {
                    base: 'absolute',
                    md: 'static'
                },
                width: '100%',
                height: '100%',
            },
        }
    }
};

export const slice: ActiveStyle = {
    variants: {
        show: {
            true: {
                animation: `sliceInX ${token("durations.medium")} forwards`
            },
            false: {
                animation: `sliceOutX ${token("durations.fast")} forwards`
            }
        }
    }
};

const sideBarStyles = (isActive: boolean)   => cva(sideBar).raw({ show: isActive })
const animationStyles = (isActive: boolean) => cva(slice).raw({ show: isActive })
export const styles = (isActive: boolean)   => css(sideBarStyles(isActive), animationStyles(isActive)); 