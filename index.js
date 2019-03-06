function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var array = [1, 2, 3];
  array.forEach(callback);
  return array;
}