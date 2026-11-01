const workoutMinutes = [35, 0, 49, 84, 63, 0, 21];
console.log("=== Week 1 Fitness Tracker ===");
console.log(workoutMinutes);
workoutMinutes.push(40)
console.log("After logging today: ", workoutMinutes);
 workoutMinutes.pop();
console.log("After correction: ",  workoutMinutes)
function totalMinutes(arr)
{
	let sum = 0
	for(let i = 0; i < arr.length; i++)
	{
		sum += arr[i]
	}
	return sum;
}
console.log("Total minutes: ", totalMinutes(workoutMinutes));
function classifyDay(minutes)
{
	if(minutes == 0)
	{
		return "Rest";
	}
	else if(minutes >= 1 && minutes <= 45)
	{
			return "Light";
	}
		else if(minutes > 45)
		{
			return "Intense"
		}
}for(let i = 0 ; i < workoutMinutes.length;i++)
{
	console.log(`Day ${i} : ${workoutMinutes[i]} min - ${classifyDay(workoutMinutes[i])}`);
	}
console.log("--- Enhanced review ---");
for(let j = 0; j < workoutMinutes.length;j++)
{
	if(workoutMinutes[j] > 80)
	{
		console.log(`Day ${j} : ${workoutMinutes[j]} min - New personal record! Stopping review.`);
		break;
	}
	else if(workoutMinutes[j] != 0)
	{
		console.log(`Day ${j} : ${workoutMinutes[j]} min - ${classifyDay(workoutMinutes[j])}`);
	}
}
function bestDayIndex(arr)
{
let max = 0;
	let index = 0;
	for(let k = 0; k < arr.length;k++)
	{
		if(max < arr[k])
		{
			max = arr[k];
			index = k;
		}
	}
	return index;
}
console.log(`Best day index: ${bestDayIndex(workoutMinutes)} with ${workoutMinutes[bestDayIndex(workoutMinutes)]} minutes`);

function countIntenseDays(arr)
{
	let c = 0;
	for(let l = 0; l < arr.length;l++)
	{
		if(arr[l] > 45)
		{
			c++
		}
	} return c;
}

console.log(`Intense days: ${countIntenseDays(workoutMinutes)}`);
function shortestNonRestDay(arr)
{
	let min = arr[0]
	for(let i = 0; i < arr.length; i++)
	{
		if(min > arr[i] && arr[i] != 0)
		{
			min = arr[i]
		}
	}
	return min;
}
console.log(`Shortest non-rest workout: ${shortestNonRestDay(workoutMinutes)}`)
function hasEnoughRestDays(arr, minRestDays)
{
	for(let i = 0; i < arr.length; i++)
	{
		if(arr[i] >= minRestDays)
		{
			return true;
		}
		else
		{
			return false
		}
	}
}
console.log("Meets rest requirement (2):" + hasEnoughRestDays(workoutMinutes, 2));
let classifyDayArrow = (minutes) => {
if(minutes == 0)
        {
                return "Rest";
        }
        else if(minutes >= 1 && minutes <= 45)
        {
                        return "Light";
        }
                else if(minutes > 45)
                {
                        return "Intense"
                }
}
console.log( " Arrow classify 0: " + classifyDayArrow(0));
console.log( " Arrow classify 30: " + classifyDayArrow(30));
console.log( " Arrow classify 90: " + classifyDayArrow(90));
