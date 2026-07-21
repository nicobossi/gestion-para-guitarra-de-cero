import type { BackgroundColor } from "../../../shared/styles/colors/colors";
import { css } from "@styled-system/css";
import { token } from "@styled-system/tokens";

const feeColors: BackgroundColor = css.raw({
    backgroundColor: `${token("colors.feeColor")}`
});

export default feeColors;