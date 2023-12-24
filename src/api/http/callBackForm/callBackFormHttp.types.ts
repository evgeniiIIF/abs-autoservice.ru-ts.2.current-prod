export interface CallBackForm {
  text: string;
  title: string;
}

export interface CallBackFormResponse {
  data: CallBackForm;
}

export interface CallbackFormWithModal extends CallBackForm {
  titleModal?: string;
}

export interface CallBackFormData {
  name: string;
  phone: string;
  message?: string;
  form: 'call-back';
}
