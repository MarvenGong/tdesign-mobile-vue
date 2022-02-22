/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdStepperProps } from './type';
import { PropType } from 'vue';

export default {
  /** 禁用全部操作 */
  disabled: Boolean,
  /** 禁用输入框 */
  disableInput: Boolean,
  /** 输入框宽度 */
  inputWidth: {
    type: Number,
  },
  /** 最大值 */
  max: {
    type: Number,
    default: 100,
  },
  /** 最小值 */
  min: {
    type: Number,
    default: 0,
  },
  /** 步长 */
  step: {
    type: Number,
    default: 1,
  },
  /** 组件风格 */
  theme: {
    type: String as PropType<TdStepperProps['theme']>,
    default: 'normal' as TdStepperProps['theme'],
    validator(val: TdStepperProps['theme']): boolean {
      return ['normal', 'grey'].includes(val!);
    },
  },
  /** 值 */
  value: {
    type: [String, Number] as PropType<TdStepperProps['value']>,
    default: undefined,
  },
  modelValue: {
    type: [String, Number] as PropType<TdStepperProps['value']>,
    default: undefined,
  },
  /** 值，非受控属性 */
  defaultValue: {
    type: [String, Number] as PropType<TdStepperProps['defaultValue']>,
    default: 0,
  },
  /** 输入框失去焦点时触发 */
  onBlur: Function as PropType<TdStepperProps['onBlur']>,
  /** 数值发生变更时触发 */
  onChange: Function as PropType<TdStepperProps['onChange']>,
  /** 数值超出限制时触发 */
  onOverlimit: Function as PropType<TdStepperProps['onOverlimit']>,
};
