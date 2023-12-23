import type { UIModalEmits, UIModalProps } from '~/components/UIModal/UIModal.types';
import type { CallBackFormProps } from '../CallbackForm/CallbackForm.types';

export type CallbackFormModalProps = Omit<UIModalProps, 'position'> & CallBackFormProps;
export interface CallbackFormModalEmits extends UIModalEmits {}
