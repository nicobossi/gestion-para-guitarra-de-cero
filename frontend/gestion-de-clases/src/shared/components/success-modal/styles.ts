import type { ActiveStyle } from "@/shared/styles/active/active-variant";
import { css, cva, sva } from "@styled-system/css";
import { token } from "@styled-system/tokens";

const modal: ActiveStyle = {
    base: {
        position: 'absolute',
        left: 0,
        top: 0,
        display: 'grid',
        placeItems: 'center',
        width: '100vw',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(3px)',
    },
    variants: {
        show: {
            true: {
                animation: `fadeOut ${token("durations.medium")} forwards`
            },
            false: {
                animation: `fadeIn ${token("durations.medium")} forwards`
            }
        }
    }
};

const container = css.raw({
    display: 'grid',
    gridTemplateRows: '35% 45% 20%',
    width: '80%',
    maxWidth: '320px',
    height: '50%',
    bg: '#FFF',
    borderRadius: '10px',
});

const content = css.raw({
    display: 'grid',
    placeItems: 'center',
    placeSelf: 'center',
    width: '90%',
    height: '100%',
});

const modalStyles = (is: boolean) => cva(modal).raw({ show: is });

export const styles = (is: boolean) => sva({
    slots: ['modal', 'container', 'content'],
    base: {
        modal: modalStyles(is),
        container: container,
        content: content
    }
})

