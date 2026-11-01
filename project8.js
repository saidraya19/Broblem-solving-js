const examScores = [12, 18, 9, 15, 20, 7, 14, 16, 11, 15];
console.log("=== Exam Score Ranking ===")
console.log(examScores);
function linearSearch(arr, target)
{
	for(let i = 0; i < arr.length;i++)
	{
		if(arr[i] === target)
		{
			return i;
		}
	}
	return -1;
}
console.log("Find 15: ", examScores[linearSearch(examScores,15)]);
console.log("Find 5: ", linearSearch(examScores,5));
function countOccurrences(arr, target)
{
	let count = 0;
	for(let i = 0; i < arr.length;i++)
        {
                if(arr[i] === target)
                {
			count++;
		}
	}
	return count;
}
console.log("Count of 15: ", countOccurrences(examScores, 15))
function bubbleSortAscending(arr)
{
	let origine = [...arr]
	for(let i = 0; i < origine.length; i++)
	{
        for(let j = 0; j < origine.length - 1 - i; j++)
        {
                if(origine[j] > origine[j + 1])
                {
                       let t = origine[j]
			origine[j] = origine[j + 1] 
			origine[j + 1]  = t
                }
        }
}
	return origine;
}
console.log("Sorted ascending:", bubbleSortAscending(examScores))
console.log("Original unchanged:", examScores);
