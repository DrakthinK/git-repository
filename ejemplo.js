var outside=function (x) {
  var inside=function (y) {
     console.log( x + y);
  }
  return inside;
}

xd=outside('hola')('mundo');
console.log(xd)
