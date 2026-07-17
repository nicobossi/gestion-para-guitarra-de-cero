import activeStyles, { type ActiveValue } from "@/shared/styles/active";
import { css, cx } from "@styled-system/css";

const routesColor = css({
    color: '#FFF'
})

export const routesStyles = (f: ActiveValue, t: ActiveValue, is: boolean) => 
    cx(routesColor, activeStyles(f, t)({show: is}))

export type RoutesStyles = typeof routesStyles;