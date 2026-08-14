var maxProfit = function (prices) {
  let minPrice = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    // if (prices[i] >= bestPriceToPurchase) {
    //   continue;
    // } else {
    //   bestPriceToPurchase = prices[i];
    // }
    // for (let j = i + 1; j < prices.length; j++) {
    //   if (prices[j] - prices[i] > profit) {
    //     profit = prices[j] - prices[i];
    //   }
    // }

    if (prices[i] - minPrice > profit) {
      profit = prices[i] - minPrice;
    }
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
  }
  return profit;
};

prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
