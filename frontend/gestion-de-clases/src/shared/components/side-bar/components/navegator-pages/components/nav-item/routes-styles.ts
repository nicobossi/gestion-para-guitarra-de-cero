import { cva } from "@styled-system/css";

export const routesStyles = cva({
    base: {
        color: '#FFF'
    },
    variants: {
        show: {
            on: {
                base: {
                    display: 'block'
                },
            },
            off: {
                base: {
                    display: 'none'
                },
                md: {
                    display: 'block'
                }
            }
        }
    }
});

export type RoutesStyles = typeof routesStyles;