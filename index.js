const myFirstArrray = [1,2,3,4,3,8,9,3,6,9,4];

// Progarm to find the distinct number form an array
function findDistinctNumberArray(arr) {
 const tempArr = [];
 for (let i = 0; i<arr.length; i++) {
    if(tempArr.indexOf(arr[i]) === -1) {
        tempArr.push(arr[i]);
    }
  }
 return tempArr;
}

const result = findDistinctNumberArray(myFirstArrray);
console.log(result);

