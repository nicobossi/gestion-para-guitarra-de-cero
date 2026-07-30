import { Link } from 'react-router';
import type { JSX } from 'react';
import type { SystemStyleObject } from '@styled-system/types';
import { button, styles } from './styles';
import { css } from '@styled-system/css';

type ModalFooterProps = {
    link?: (css: SystemStyleObject) => JSX.Element
    bg: SystemStyleObject
}

const ModalFooter = ({link, bg}: ModalFooterProps) => {

    const {footer, button: buttomHome, text} = styles(css.raw({ border: '0.5px solid #666' }))();
    const buttonParam = button

    return (
        <footer className = {footer}>
            <div className = {buttomHome}>
                <Link className = {text} to="/">Inicio</Link>
            </div>
            {link && link(css.raw(buttonParam, bg))}
        </footer>
    )
}

export default ModalFooter;