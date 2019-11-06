var circle = require('./module_exportsEx');
var myCircle = circle(4);

console.log('지름이 4인 원의 면적 : %d', myCircle.area());
console.log('지름이 4인 원의 둘레 : %d', myCircle.circumference());

/* 결과값

지름이 4인 원의 면적 : 50.26548245743669
지름이 4인 원의 둘레 : 25.132741228718345

*/