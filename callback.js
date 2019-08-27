function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}
var names = ["Alice", "Bob", "Waldo", "Winston"]
function actionWhenFound(i) {
      console.log("Found him, he is in number " + i);
}

findWaldo(names, actionWhenFound);