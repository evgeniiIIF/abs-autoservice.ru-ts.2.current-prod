import { storeToRefs } from 'pinia';
import { calculatorBlockStore } from './calculatorBlock';

export const useCalculatorBlockStore = () => {
  const { actions, effects } = calculatorBlockStore();
  const { state } = storeToRefs(calculatorBlockStore());

  return {
    calculatorBlockState: state,
    calculatorBlockActions: actions,
    calculatorBlockEffects: effects,
  };
};
