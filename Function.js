function seq(arr){
  var count = arr[arr.length-1]
  return function() {
    count += (arr[1]-arr[0])
    return count;
  }
}

var s1 = seq([1,2,3])
var s2 = seq([3,6]);

console.log(s1());
console.log(s2());
console.log(s2());
console.log(s1());