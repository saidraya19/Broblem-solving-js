function diagonalDifference(arr) {
    let left = 0;
    let right = 0;
         for(let i = 0; i < arr.length;i++)
    for(let j = 0; j < arr[i].length;j++)
    {
        if((i == 0 && j == 0) || (i == 1 && j == 1) || (i == 2 && j == 2))
        {
            left += arr[i][j];
        }
        else if((i == 0 && j == 2) || (i == 1 && j == 1) || (i == 2 && j == 0))
        {
            right += arr[i][j];
             
        }
    }
    let res = left - right
    return res;
    }
    console.log(diagonalDifference([[1,2,3],[4,5,6],[7,8,9]]))
