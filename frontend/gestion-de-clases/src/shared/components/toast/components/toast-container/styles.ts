import type { BackgroundColor } from "@/shared/styles/colors/colors";
import { css } from "@styled-system/css";

const toastContainer = css.raw({
    position: 'absolute',
    width: '265px',
    height: '146px',
    borderRadius: '20px'
});

export const styles = (backgroundColor: BackgroundColor) => css(toastContainer, backgroundColor);