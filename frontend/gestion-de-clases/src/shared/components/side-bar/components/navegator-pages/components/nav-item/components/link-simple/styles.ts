import { whenActiveStyles } from "@/shared/styles/active";

export const activeStyles = {
    base: {
        color: '#FFF'
    },
    true: {
        display: 'block'
    },
    false: {
        display: 'none'
    }
}

export const styles = (isVisible: boolean) => whenActiveStyles(activeStyles)({ show: isVisible });