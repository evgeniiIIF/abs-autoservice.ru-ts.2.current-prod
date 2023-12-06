import SectionCostCalculationQuestion1 from './SectionCostCalculationQuestion1.vue';
import SectionCostCalculationQuestion2 from './SectionCostCalculationQuestion2.vue';
import SectionCostCalculationQuestion3 from './SectionCostCalculationQuestion3.vue';
import SectionCostCalculationQuestion4 from './SectionCostCalculationQuestion4.vue';

export const QUEST_ITEMS = [
  {
    component: SectionCostCalculationQuestion1,
    title: '1. Заполните информацию об автомобиле',
    inputProps: {
      value: '',
      type: 'text',
      name: 'auto',
      label: 'Марка и модель авто',
      placeholder: 'Введите данные автомобиля',
      maxlength: 128,
    },
  },
  {
    component: SectionCostCalculationQuestion2,
    title: '2. Опишите вашу проблему / что нужно сделать?',
    inputProps: {
      value: '',
      type: 'textarea',
      name: 'problem',
      label: 'Комментарий',
      placeholder: 'Опишите проблему',
      maxlength: 128,
    },
  },
  {
    component: SectionCostCalculationQuestion3,
    title: '3. Оставьте ваши контактные данные',
    inputProps: {
      inputName: {
        value: '',
        type: 'text',
        name: 'name',
        label: 'Имя',
        placeholder: 'Введите имя',
        maxlength: 32,
      },
      inputTel: {
        value: '',
        type: 'tel',
        name: 'phone',
        label: 'Телефон',
        pattern: /[^0-9+]/g,
      },
    },
  },
  {
    component: SectionCostCalculationQuestion4,
    titleTop: 'Спасибо!',
    titleBottom: 'Ваша заявка отправлена успешно.',
    text: 'Специалист свяжется с Вами в ближайшее время.',
  },
];
