export interface QuestionProps {
  title?: string;
  inputProps?: any;
  titleBottom?: string;
  titleTop?: string;
  text?: string;
  formData: {
    [x: string]: string;
  };
}
