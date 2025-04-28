import OOption from './option.vue'
import OOptionNested from './option-nested.vue'
import type { DefineComponent } from 'vue'
import OOptionGroup from './option-group.vue'

export type OOptionInstance = InstanceType<typeof OOption>
export type OOptionGroupInstance = InstanceType<typeof OOptionGroup>
export type OOptionNestedInstance = InstanceType<DefineComponent<typeof OOptionNested>>

export { OOption, OOptionGroup, OOptionNested }
