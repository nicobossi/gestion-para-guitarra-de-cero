import type { ActiveStyle } from "@/shared/styles/active";
import { cva } from "@styled-system/css";

export const sideBar: ActiveStyle = {
    base: {
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
                maxWidth: '250px'
            }
        }
    }
};

export const styles = (isActive: boolean) => cva(sideBar)({ show: isActive }); 