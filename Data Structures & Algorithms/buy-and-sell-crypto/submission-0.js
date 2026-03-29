class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
          let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        // Update minimum price (best buying day so far)
        minPrice = Math.min(minPrice, prices[i]);

        // Calculate profit if selling today
        let profit = prices[i] - minPrice;

        // Update maximum profit
        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
    }
}
