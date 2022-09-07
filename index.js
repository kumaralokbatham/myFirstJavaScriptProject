const myFirstArrray = [1,2,3,4,3,8,9,3,6,9,4];

// Progarm to find the distinct number form an array
function findDistinctNumberArray(arr) {
 const tempArr = [];
 for (let i = 0; i<arr.length; i++) {
    if(tempArr.indexOf(arr[i]) === -1) {
        tempArr.push(arr[i]);
    }
  }
 // console.log(tempArr);
 return tempArr;
}

findDistinctNumberArray(myFirstArrray);


//New Program 

const person = {
    firstName : "Alok",
    lastName : "Batham",
    set fullName (value) {
        const valueArr = value.split(' ');
        this.firstName = valueArr[0];
        this.lastName = valueArr[1];
    }
}
person.fullName = 'Alok KumarBatham';


// find rate after discount 
function getSum(discount, ...arguments) {
    let totalAmount = 0;
    for (let amount of arguments) {
        totalAmount = totalAmount + amount;
    }
  const amountToPay = totalAmount - (totalAmount * discount)/100;
  //console.log(amountToPay);
  return amountToPay;
}
getSum(10, 30, 20, 30, 50);



