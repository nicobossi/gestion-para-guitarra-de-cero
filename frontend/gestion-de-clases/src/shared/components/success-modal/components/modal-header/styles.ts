import type { BackgroundColor } from "@/shared/styles/colors/colors";
import { css } from "@styled-system/css";

const header = css.raw({
    display: 'grid',
    placeItems: 'center',
    height: '20%',
    borderRadius: '20px 20px 0 0',
});

export const styles = (bg: BackgroundColor) => css(header, bg); 