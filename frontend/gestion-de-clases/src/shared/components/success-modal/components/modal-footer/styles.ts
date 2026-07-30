import { css, sva } from "@styled-system/css";
import type { SystemStyleObject } from "@styled-system/types";

const footer = css.raw({
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'start',
    height: '20%',
    borderRadius: '0 0 20px 20px'
});


export const button = css.raw({
    display: 'grid',
    placeItems: 'center',
    width: '40%',
    height: '40px',
    borderRadius: '20px',
    backgroundColor: 'var(--student-color)',
    transition: 'transform 0.2s ease',
    _hover: {
        boxShadow: '1px 2px 2px #DDD',
        transform: 'translateY(-4px)',
    },
    _active: {
        transform: 'translateY(1px)'
    }
});

const text = css.raw({
    display: 'block',
    width: '100%',
    textAlign: 'center',
    textDecoration: 'none',
})

export const styles = (border: SystemStyleObject) => sva({
    slots: ['footer', 'button', 'text'],
    base: {
        footer: footer,
        button: css.raw(button, border),
        text: text
    }
});
