import { sva } from "@styled-system/css";

const activeStyles = {
    slots: ['container', 'submenu'],
    base: {
        container: {
            backgroundColor: '#273678',
        },
        submenu: {
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            gap: '6px'
        }
    },
    variants: {
        show: {
            true: {
                container: {
                    display: 'flex',
                    justifyContent: 'end',
                    width: '100%',
                }
            },
            false: {

            }
        }
    }
}

export const slots = sva(activeStyles);