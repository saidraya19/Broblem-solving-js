const passengerName = "Yassine";
let weightKg = 27;
let isOversized = true;
let ticketClass = "affaires";
console.log("=== Calculateur de frais de bagages pour Yassine === ", weightKg, isOversized, ticketClass);
let fee = weightKg;
if(fee == 20)
{

	fee = 0;
}
else if(21 < weightKg < 32)
{
	fee = 15;
}
else if( weightKg > 32)
{
	fee = 40;
}
console.log("Frais de base :", fee);
if(isOversized)
{
	fee = 10;
	console.log("Frais après supplément bagage surdimensionné :", fee);
}
switch(ticketClass){
	case "économique":
		fee += 0;
		break;
	case "affaires":
		fee = 5;
		break;
	case "première":
		fee = 0;
		break;
}
console.log("Frais après ajustement de classe :", fee);
let isValidWeight;
if( 0 < weightKg < 100)
{
	isValidWeight = true;
}
console.log("Poids valide : ", isValidWeight);
console.log("Frais de bagage pour", passengerName, "(",weightKg,"kg",")", ":", fee, "MAD");
let isDiplomat = true;
if(isDiplomat)
{
	fee = 0;
}
console.log("Exonération diplomatique appliquée, nouveau frais: ", fee,"MAD");
if(fee == 0)
{

	console.log("Aucun frais");
}
else if(0 > fee > 20)
{
	console.log("Faible")
}
else if(fee > 20)
{
	console("Élevé");
}
