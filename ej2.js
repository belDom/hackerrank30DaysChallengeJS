/**
 * Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being 
 * added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, 
 * find and print the meal's total cost.
 */


/**
 * Print the total meal cost, where totalCost is the rounded integer result of the entire bill 
 * (mealCost with added tax and tip).
 * @param {Number} meal_cost the cost of the meal before tax and tip
 * @param {Number} tip_percent the percentage of mealcost being added as tip
 * @param {Number} tax_percent the percentage of mealcost being added as tax)
 */
function solve(meal_cost, tip_percent, tax_percent) {
    let tip = meal_cost * (tip_percent / 100);
    let tax = meal_cost * (tax_percent / 100);
    let total_cost = meal_cost + tip + tax;
    
    console.log(total_cost.toFixed(0));
}

var meal_cost = 12.00;
var tip_percent = 20;
var tax_percent = 8;

solve(meal_cost, tip_percent, tax_percent);
