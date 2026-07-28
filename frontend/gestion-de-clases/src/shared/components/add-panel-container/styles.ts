import type { BackgroundColor } from "@/shared/styles/colors/colors";
import { css} from "@styled-system/css";

const addPanelContainerStyles = css.raw({
    display: 'grid',
    placeItems: 'center',
    width: '100%',
    height: '100%',
});

export const styles = (background: BackgroundColor) => css(background, addPanelContainerStyles);