var circle = require('./exportsEx.js');		// == require('./exportsEx');

console.log('지름이 4인 원의 면적 : %d ' , circle.area(4));

console.log('지름이 4인 원의 둘레 : %d ' , circle.circumference(4));

/* 결과값

지름이 4인 원의 면적 : 50.26548245743669 
지름이 4인 원의 둘레 : 25.132741228718345 

*/

/* 

require() 메소드를 사용하여 임의의 이름으로 exportsEx 모듈을 import 한다. 모듈의 확장자는 생략할 수 있다.
하지만 exportsEx 모듈같은 경우 사용자가 정의한 내부모듈이기 때문에 Path를 생략할 수는 없다.

*/