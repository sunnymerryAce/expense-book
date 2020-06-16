/**
 * min から max までの乱整数を返す関数 minとmaxは順不同
 * Math.round() を用いると非一様分布
 * @param min 最小値
 * @param max 最大値
 * @returns 乱整数
 */
const getRandomIntegerInRange = (min = 0, max = 0): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default getRandomIntegerInRange;
