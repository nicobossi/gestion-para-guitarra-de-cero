import type { BackgroundColor } from "@/shared/styles/colors";
import { css } from "@styled-system/css";
import { token } from "@styled-system/tokens";

const studentColors: BackgroundColor = css.raw({
    backgroundColor: `${token("colors.studentColor")}`
});

export default studentColors;