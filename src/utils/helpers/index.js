export const displayMoney = n => {
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
  });

  return format.format(n);
};

export const calculateTotal = (arr, applyBonus = false) => {
  if (!arr || arr.length === 0) return 0;

  const total = arr.reduce((acc, cur) => acc + cur, 0);
  const calculatedPercentage = total * 0.2;

  if (applyBonus) return total - calculatedPercentage;

  return total.toFixed(2);
};
