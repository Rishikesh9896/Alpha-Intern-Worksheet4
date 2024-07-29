// Function to determine profit or loss
function determineProfitOrLoss(costPrice, sellingPrice) {
    if (sellingPrice > costPrice) {
        // Profit case
        var profit = sellingPrice - costPrice;
        console.log("The seller has made a profit of: $" + profit.toFixed(2));
    } else if (sellingPrice < costPrice) {
        // Loss case
        var loss = costPrice - sellingPrice;
        console.log("The seller has incurred a loss of: $" + loss.toFixed(2));
    } else {
        // No profit, no loss
        console.log("There is no profit or loss. The selling price is equal to the cost price.");
    }
}

// Example usage
var costPrice = parseFloat(prompt("Enter the cost price of the item:"));
var sellingPrice = parseFloat(prompt("Enter the selling price of the item:"));

// Call the function with the provided cost price and selling price
determineProfitOrLoss(costPrice, sellingPrice);
