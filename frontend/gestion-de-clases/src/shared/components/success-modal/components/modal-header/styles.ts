import type { BackgroundColor } from "@/shared/styles/colors/colors";
import { css, sva } from "@styled-system/css";

const header = css.raw({
    display: 'grid',
    placeItems: 'center',
    height: '100%',
    borderRadius: '10px 10px 0 0',
});

const container = css.raw({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '90%',
});

const title = css.raw({
    width: '90%',
    fontFamily: 'Inter',
    fontStyle: 'italic',
    fontWeight: 600,
    lineHeight: '24px',
    textAlign: 'center',
    letterSpacing: '-0.1px',
    color: '#FFF'
});

const closeIcon = css.raw({
    display: 'grid',
    placeItems: 'center',
    width: '10%',
    alignSelf: 'start',
    justifySelf: 'center',
    cursor: 'pointer',
});

export const styles = (bg: BackgroundColor) => sva({
    slots: ['header', 'container', 'title', 'closeIcon'],
    base: {
        header: css.raw(header, bg),
        container: container,
        closeIcon: closeIcon,
        title: title
    }
});