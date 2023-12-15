import { ref } from 'vue';
import { defineStore } from 'pinia';

import { calculatorBlockHttp } from '~/api/http';

import type { CalculatorBlock } from '~/api/http/calculatorBlockHttp/calculatorBlockHttp.types';

const DEFAULT_STATE: CalculatorBlock = {} as CalculatorBlock;

export const calculatorBlockStore = defineStore('CalculatorBlock', () => {
  const state = ref(DEFAULT_STATE);

  const setCalculatorBlock = (data: CalculatorBlock) => (state.value = data);

  const fetchCalculatorBlock = async () => {
    try {
      const response = await calculatorBlockHttp.fetchCalculatorBlock();

      const data = response.data.value?.data;
      if (data) setCalculatorBlock(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchCalculatorBlock,
    },
  };
});
