/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Budget } from ".";

const selectors = {
  getSelectedBudget: (
    budgets: {
      [key: string]: Budget;
    },
    selectedId: string
  ): Budget | null => {
    const res = Object.entries(budgets).find(([key]) => {
      return key === selectedId;
    });
    return res ? res[1] : null;
  },
};

export default selectors;
