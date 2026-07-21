import type { ActiveStyle } from "@/shared/styles/active";
import { cva } from "@styled-system/css";

const mainContainer: ActiveStyle = {
    base: {
        display: 'grid',
        width: '100vw',
        height: '100vh'
    },
    variants: {
        show: {
            true: {
                gridTemplateColumns: '100% 0',
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

export const styles = (isActive: boolean) => cva(mainContainer)({ show: isActive }); 