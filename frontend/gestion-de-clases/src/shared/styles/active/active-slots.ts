import type { SlotRecipeDefinition, SlotRecipeVariantRecord, SystemStyleObject } from "@styled-system/types"

export type ActiveStyleSlot<T extends string> = ActiveSlot<T> & SlotRecipeDefinition<T, SlotRecipeVariantRecord<T>> 

type ActiveSlot<T extends string> = {
    base?: Record<T, SystemStyleObject>
    variants: {
        show: {
            true?: Record<T, SystemStyleObject>,
            false?: Record<T, SystemStyleObject>
        }
    }
}