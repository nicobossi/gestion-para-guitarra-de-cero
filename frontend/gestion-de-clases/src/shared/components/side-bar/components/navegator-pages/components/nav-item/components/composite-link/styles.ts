import { sva } from "@styled-system/css";

export const slots = sva({
    slots: ['container', 'submenu'],
    base: {
        container: {
            maxWidth: '120px'
        },
        submenu: {
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            gap: '6px',
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
                container: {
                    position: 'absolute',
                    left: '35%',
                    transform: 'translate(-15vw, -28%)',
                    display: 'flex',
                    justifyContent: 'end',
                    width: '35%',
                    minHeight: '120px',
                    borderRadius: '0 2vw 2vw 0',
                },
                submenu: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    borderRadius: '0 2vw 2vw 0',
                    background: 'linear-gradient(#273678, #111A40)',
                }
            }
        }
    }
})
