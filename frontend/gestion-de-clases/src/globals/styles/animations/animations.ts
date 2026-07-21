import { defineKeyframes } from "@pandacss/dev";
import { fade } from "./fade";
import { slice } from "./slice";

export const animations = defineKeyframes({
    ...fade, ...slice
});