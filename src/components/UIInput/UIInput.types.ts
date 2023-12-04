export type UIInput = {
  title: string;
  type: 'phone' | 'text';
  modelValue: string;
  errorMessage?: string;
};

export type UIInputEmits = (event: 'update:modelValue', value: string) => string;
