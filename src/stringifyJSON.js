// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  let valueTypes = ["number", "boolean", "null"];
  if (valueTypes.includes(typeof obj)) {
    return "" + obj;
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    let jsonified = [];   
    obj.forEach(function(item) {
      jsonified.push(stringifyJSON(item));
    });
    return "[" + jsonified.join(',') + "]";
  } 

  if (typeof obj === 'object') {
    let jsonified = [];
    for (let key in obj) {
      if (typeof obj[key] === "function" || typeof obj[key] === "undefined") {
        continue;
      } 
      jsonified.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
    }
    return "{" + jsonified.join(',') + "}";
  }   
};
