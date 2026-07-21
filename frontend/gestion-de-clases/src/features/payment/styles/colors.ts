import type { BackgroundColor } from "../../../shared/styles/colors/colors";
import { css } from "@styled-system/css";
import { token } from "@styled-system/tokens";

const paymentColors: BackgroundColor = css.raw({
    backgroundColor: `${token("colors.paymentColor")}`
});

export default paymentColors;