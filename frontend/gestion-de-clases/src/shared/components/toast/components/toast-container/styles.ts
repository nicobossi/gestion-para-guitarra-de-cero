import type { ActiveStyle } from "@/shared/styles/active/active";
import type { BackgroundColor } from "@/shared/styles/colors/colors";
import { css, cva } from "@styled-system/css";

export const toastContainer: ActiveStyle = {
    base: {
        position: 'absolute',
        top: '68%',
        right: '9%',
        display: 'grid',
        placeItems: 'center',
        width: '265px',
        height: '146px',
        borderRadius: '20px'
    },
    variants: {
        show: {
            true: {
                display: 'none'
            },
        }
    }
};

const toastContainerStyles = (isActive: boolean) => cva(toastContainer).raw({ show: isActive });

export const toastSubContainer = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '90%',
    height: '90%',
    color: '#FFF'
});

export const toastStyles = (isActive: boolean, backgroundColor: BackgroundColor) => 
    css(toastContainerStyles(isActive), backgroundColor);
