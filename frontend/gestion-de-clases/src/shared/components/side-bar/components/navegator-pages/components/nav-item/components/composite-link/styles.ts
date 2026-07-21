import { css, sva } from "@styled-system/css";
import { token } from "@styled-system/tokens";

const containerActive = css.raw({
    position: 'absolute',
    left: '35%',
    transform: 'translate(13vw, -28%)',
    display: 'flex',
    justifyContent: 'end',
    width: '120px',
    minHeight: '120px',
    borderRadius: '0 2vw 2vw 0',
});

const submenu = css.raw({
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: '0 2vw 2vw 0',
    background: 'linear-gradient(#273678, #111A40)',
});

export const slots = sva({
    slots: ['container', 'submenu'],
    base: {
        container: {
            maxWidth: '120px',
            animation: `fadeIn ${token("durations.medium")} forwards`
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
                    md: containerActive
                },
                submenu: {
                    md: submenu
                }
            },
            false: {
                container: containerActive,
                submenu: submenu
            }
        }
    }
});