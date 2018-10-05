// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

//create a storage array
// var parentNode = document.body;
//traverse over document nodes
//check if node classname exists in classList
// console.log(parentNode);
//if it does exist push it to storage
// But instead we're going to implement it from scratch:
//check if node has children
//if it does recursively call our function
//return the array

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, parentNode = document.body) {
  var nodeList = [];
  if (parentNode.classList.contains(className)) {
    nodeList.push(parentNode);
  }
  if (parentNode.hasChildNodes()) {
    var children = parentNode.children;
    for (var i = 0; i < children.length; i++) {
      nodeList = nodeList.concat(getElementsByClassName(className, children[i]));
    }
  }
  return nodeList;
};
