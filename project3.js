const weight1 = 4, distance1 = 60;
const weight2 = 15, distance2 = 80;
const weight3 = 30, distance3 = 50;
console.log("=== Package Shipping Cost Estimator ===" );
console.log(weight1 +  " " + distance1 + " " + weight2 + " " + distance2 + " " + weight3 + " " +  distance3);
function baseFee(weight)
{
        if(weight <= 5)
        {
                return 20;
        }
        else if(6 <= weight && weight <= 20)
        {
                return 50;
        }
        else if(weight > 20)
        {
                return 90;
        }
}
console.log("Base fee for package" + 1 + " " + baseFee(weight1));
console.log("Base fee for package" + 2 + " " + baseFee(weight2));
console.log("Base fee for package" + 3 + " " + baseFee(weight3));
function distanceSurcharge(distance)
{
        return distance * 0.5;
}
console.log("Distance surcharge for package" + 1 + " " + distanceSurcharge(distance1));
console.log("Distance surcharge for package" + 2 + " " + distanceSurcharge(distance2));
console.log("Distance surcharge for package" + 3 + " " + distanceSurcharge(distance3));
function totalCost(weight, distance)
{
        return  distanceSurcharge(distance) + baseFee(weight);
}
console.log("Total cost for package" + 1 + ": " + totalCost(weight1, distance1));
console.log("Total cost for package" + 2 + ": " + totalCost(weight2, distance2));
console.log("Total cost for package" + 3 + ": " + totalCost(weight3, distance3));
function isRealistic(weight, distance)
{
        if((weight > 0 && weight < 100) && distance > 0 && distance < 100)
        {
                return true;
        }
        else
        {
                return false;
        }
}
console.log("Package 1 valid: " + 1 + " " + isRealistic(weight1, distance1) )
console.log("Package 1 valid: " + 2 + " " + isRealistic(weight2, distance2) )
console.log("Package 1 valid: " + 3 + " " + isRealistic(weight3, distance3))
function estimateShipping(weight, distance)
{
        if(isRealistic(weight, distance))
        {
                return totalCost(weight, distance);
        }
}
console.log ("Estimate for package" +  1 + ":" + estimateShipping(weight1, distance1))
console.log ("Estimate for package" +  2 + ":" + estimateShipping(weight2, distance2))
console.log ("Estimate for package" +  3 + ":" + estimateShipping(weight3, distance3))
 let isLoyalCustomer = true;
let res = 0;
function applyLoyaltyDiscount(cost, isLoyalCustomer)
{
	if(isLoyalCustomer)
	{
		return cost - cost * 0.10;
	}
	else
	{
		return cost;
	}
}
console.log(`Package ${2} original cost: ${totalCost(weight2, distance2)} MAD`);
console.log(`Package ${2} discounted cost: ${applyLoyaltyDiscount(totalCost(weight2, distance2), isLoyalCustomer)}`);
let shippingTier = (cost) => {
	if(cost <= 60)
	{
		return "Standard"
	}
	else if(61 <= cost  && cost <= 100)
	{
		return "Express"
	}
	else if (cost > 100)
	{
		return "Premium"
	}
};
console.log(`Package ${1} tier: ${shippingTier((totalCost(weight1, distance1)))}`);
console.log(`Package ${2} tier: ${shippingTier((totalCost(weight2, distance2)))}`);
console.log(`Package ${3} tier: ${shippingTier((totalCost(weight3, distance3)))}`);
let baseFeeArrow = (cost) =>{

        if(cost <= 5)
        {
                return 20;
        }
        else if(6 <= cost && cost <= 20)
        {
                return 50;
        }
        else if(cost > 20)
        {
                return 90;
        }
}
console.log(`Arrow base fee package ${1} : ${baseFeeArrow(weight1)}`)
console.log(`Arrow base fee package ${2} : ${baseFeeArrow(weight2)}`)
console.log(`Arrow base fee package ${3} : ${baseFeeArrow(weight3)}`)
let insuranceRate = 0.1;
let insuranceFee = (cost) => {
	let result = cost * insuranceRate;
	return result;
};
console.log(`Insurance fee package ${1} : ${insuranceFee(totalCost(weight1, distance1))}`);
console.log(`Insurance fee package ${2} : ${insuranceFee(totalCost(weight2, distance2))}`);
console.log(`Insurance fee package ${3} : ${insuranceFee(totalCost(weight3, distance3))}`);
