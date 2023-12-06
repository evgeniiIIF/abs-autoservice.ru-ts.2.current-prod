export interface UIInputProps {
  type: 'phone' | 'text' | 'textarea' | 'tel';
  value: string;
  label?: string;
  errorMessage?: string;
}

export interface UIInputEmits {
  (event: 'onInput', value: string): string;
  (event: 'onChange', value: string): string;
}
