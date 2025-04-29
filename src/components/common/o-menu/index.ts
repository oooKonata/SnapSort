import OOption from './option.vue'
import OOptionGroup from './option-group.vue'
import type { DefineComponent } from 'vue'
import OMenu from './menu.vue'

export type OOptionInstance = InstanceType<typeof OOption>
export type OOptionGroupInstance = InstanceType<typeof OOptionGroup>
export type OMenuInstance = InstanceType<DefineComponent<typeof OMenu>>

export { OOption, OOptionGroup, OMenu }
