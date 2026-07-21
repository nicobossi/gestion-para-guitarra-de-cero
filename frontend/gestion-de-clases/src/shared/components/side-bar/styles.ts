import type { ActiveStyle } from "@/shared/styles/active";
import { cva } from "@styled-system/css";

export const sideBar: ActiveStyle = {
    base: {
        display: 'grid',
        gridTemplateRows: '20% 80%',
        backgroundColor: '#111A40' 
    },
    variants: {
        show: {
            true: {
                position: 'absolute',
                width: {
                    base: '100vw',
                    md: 0
                },
                height: '100vh'
            },
            false: {
                maxWidth: '260px'
            }
        }
    }
};

export const styles = (isActive: boolean) => cva(sideBar)({ show: isActive }); 