import { css } from "@styled-system/css"

export type IconProps = {
    icon: string
}

const styles = css({
    height: '100%',
    display: 'grid',
    placeItems: 'center'
});

const Icon = ({icon}: IconProps) => {
    return (
        <figure className = {styles}>
            <img src = {icon} alt = "icono" />
        </figure>
    )
}

export default Icon;

