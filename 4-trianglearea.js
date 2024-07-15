const s1=4;
const s2=6;
const s3=8;
//semi-perimeter of triangle
const perimeter =(s1+s2+s3)/2;
var area =Math.sqrt(perimeter*((perimeter-s1)*(perimeter-s2)*(perimeter-s3)));
console.log(area);
