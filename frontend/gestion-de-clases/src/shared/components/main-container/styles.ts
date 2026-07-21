import type { ActiveStyle } from "@/shared/styles/active";
import { css, cva } from "@styled-system/css";
import type { SystemStyleObject } from "@styled-system/types";

const mainContainer: ActiveStyle = {
    base: {
        display: 'grid',
        width: '100vw',
        height: '100vh'
    },
    variants: {
        show: {
            true: {
                gridTemplateColumns: {
                    base: '100% 0',
                    md: '20% 80%'
                },
            },
            false: {
                gridTemplateColumns: {
                    base: '20% 80%',
                    md: '0 100%'
                }
            }
        }
    }
}

const mainContainerStyles = (isActive: boolean) => cva(mainContainer).raw({ show: isActive });
export const styles = (isActive: boolean, colors: SystemStyleObject) => css(mainContainerStyles(isActive), colors)