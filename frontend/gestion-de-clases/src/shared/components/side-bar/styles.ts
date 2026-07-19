import { whenActiveStyles } from "@/shared/styles/active"

const activeStyles = {
    base: {
        backgroundColor: '#111A40' 
    },
    true: {
        position: 'absolute',
        width: {
            base: '100vw',
            md: '0'
        },
        height: '100vh'
    },
    false: {
        maxWidth: '250px'
    }
};

export const styles = (is: boolean) => whenActiveStyles(activeStyles)({ show: is });