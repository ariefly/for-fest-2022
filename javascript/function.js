//make a function slice the array
function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}

console.log(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3));
