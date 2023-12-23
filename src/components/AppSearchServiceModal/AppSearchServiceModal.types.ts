import type { UIModalEmits, UIModalProps } from '~/components/UIModal/UIModal.types';

export interface AppSearchServiceModalProps extends Omit<UIModalProps, 'position'> {}
export interface AppSearchServiceModalEmits extends UIModalEmits {}
