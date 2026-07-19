import { whenActiveStyles } from "@/shared/styles/active"

export const activeStyles = {
    base: {
        color: '#FFF'
    },
    true: {
        display: {
            base: 'block',
            md: 'none'
        }
    },
    false: {
        display: {
            base: 'none',
            md: 'block'
        }
    }
}

export const styles = (isActive: boolean) => whenActiveStyles(activeStyles)({ show: isActive });