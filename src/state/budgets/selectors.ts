/* eslint-disable @typescript-eslint/explicit-function-return-type */
import moment from "moment";
import { Budget, Budgets } from ".";

const selectors = {
  // 指定月の予算
  getSelectedBudget: (budgets: Budgets, id: string): Budget | null => {
    const res = Object.entries(budgets).find(([key]) => {
      return key === id;
    });
    return res ? res[1].budget : null;
  },
  // 指定月の予算のインデックス
  getSelectedBudgetIndex: (budgets: Budgets, id: string): number => {
    // TODO: 日付順にソートする必要？
    const index = Object.entries(budgets).findIndex(([key]) => {
      return key === id;
    });
    return index || 0;
  },
  // 年月(YYYY/MM表示)のリスト
  getMonths: (budgets: Budgets): Array<string> => {
    return Object.entries(budgets).map(([key]) => {
      return moment(key).format("YYYY/MM");
    });
  },
  // 指定月の全カテゴリ予算合計額
  getBudgetAmount: (budgets: Budgets, id: string): number => {
    const budget = budgets[id].budget;
    if (!budget) return 0;
    return Object.entries(budget).reduce(
      (accumulator: number, [key, value]) => {
        return accumulator + value.amount;
      },
      0
    );
  },
};

export default selectors;
