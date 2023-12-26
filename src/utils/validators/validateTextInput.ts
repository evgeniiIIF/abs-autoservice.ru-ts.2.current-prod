const validateTextInput = (value: string) => {
  if (value.trim().length < 2) return 'Поле должно состоять из 2 или больше символов';
  if (value.trim().length > 200) return 'В Имени не должно быть больше 200 символов';

  return '';
};

export { validateTextInput };
