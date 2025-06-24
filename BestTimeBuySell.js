var maxProfit = function (prices) {

    /**
    i
    7 6 4 3 1 4
    m
    0
     */

    let minP = prices[0];
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (minP > prices[i]) {
            minP = prices[i];
        }
        let newMaxProfit = prices[i] - minP;
        if (maxProfit < newMaxProfit) {
            maxProfit = newMaxProfit;
        }
    }

    return maxProfit;
};