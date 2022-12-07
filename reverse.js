// Reverse the order of an array
const reverseOrder = function() {
  const reversedArray = [];
  for (let idx=this.length-1; idx>= 0; idx--) {
    reversedArray.push(this[idx]);
  }
  return reversedArray;
}

Array.prototype.reverseOrder = reverseOrder;

const arr = [1, 2, 3];
console.log("Original array:", arr)
const reversed = arr.reverseOrder();
console.log("Reversed array:", reversed);