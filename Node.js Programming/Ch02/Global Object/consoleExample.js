
console.time('consoleExample.js action time');

console.log('숫자 : %d + %d = %d', 10, 20, 10+20);

console.log('문자열 : %s', 'Hello World');

console.log('JSON : %j', {name : 'NodeJS'});

console.log('문자열을', '연결할 수도 있다.');

console.timeEnd('consoleExample.js action time');

console.log('현재 실행한 파일의 이름 : %s', __filename);
console.log('현재 실행한 파일의 패스 : %s', __dirname);

/*

 결과값

숫자 : 10 + 20 = 30
문자열 : Hello World
JSON : {"name":"NodeJS"}
문자열을 연결할 수도 있다.
default: 6.422ms

*/