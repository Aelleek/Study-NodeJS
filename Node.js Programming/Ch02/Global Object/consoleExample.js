
console.time('consoleExample.js action time');

console.log('숫자 : %d + %d = %d', 10, 20, 10+20);

console.log('문자열 : %s', 'Hello World');

console.log('JSON : %j', {name : 'NodeJS'});

console.log('문자열을', '연결할 수도 있다.');

console.timeEnd('consoleExample.js action time');

console.log('현재 실행한 파일의 이름 : %s', __filename);
console.log('현재 실행한 파일의 패스 : %s', __dirname);

console.dir(console);	// 파라미터로 보내진 객체가 가지고 있는 속성을 그대로 출력한다.

/*

 결과값

숫자 : 10 + 20 = 30
문자열 : Hello World
JSON : {"name":"NodeJS"}
문자열을 연결할 수도 있다.
consoleExample.js action time: 6.288ms
현재 실행한 파일의 이름 : /Users/ael/Documents/Programming/1. Study/3. NodeJS/Node.js Programming/Ch02/Global Object/consoleExample.js
현재 실행한 파일의 패스 : /Users/ael/Documents/Programming/1. Study/3. NodeJS/Node.js Programming/Ch02/Global Object

*/