
console.log('null과 undefined를 동등연산자(==)로 비교했을 때의 결과');
console.log(null == undefined);

console.log('null과 undefined를 일치연산자(===)로 비교했을 때의 결과');
console.log(null === undefined);

/* 결과값
null과 undefined를 동등연산자(==)로 비교했을 때의 결과
true
null과 undefined를 일치연산자(===)로 비교했을 때의 결과
false

null과 undefined를 동등연산자로 비교하면 true 값이 나온다!

*/

var undefVar;

var nullVar = null;

console.log('\n undefVar의 타입');
console.log(typeof undefVar);
console.log('undefVar의 값');
console.log(undefVar);
console.log('undefVar와 undefined와 동등연산자와 일치연산자 비교 결과');
console.log(typeof undefVar == 'undefined');	// 이거 왜 문자열과 비교해야지 결과값이 true로 나오지?
console.log(typeof undefVar ==='undefined');
//console.log(typeof undefVar == undefined); // 이것의 결과값은 false

/* 결과값
undefVar의 타입
undefined
undefVar의 값
undefined
undefVar와 undefined와 동등연산자와 일치연산자 비교 결과
true
true
*/

console.log('\n nullVar의 타입');
console.log(typeof nullVar);
console.log('nullVar의 값');
console.log(nullVar);
console.log('nullVar의 값을 undefined와 null로 동등연산자 비교한 결과');
console.log(nullVar == undefined);
console.log(nullVar == null);

console.log('nullVar의 값을 undefined와 null로 일치연산자 비교한 결과');
console.log(nullVar === undefined);
console.log(nullVar === null);




/*
console.log(typeof undefVar == undefined);

console.log(typeof nullVar == null);

console.log(nullVar == null);
console.log(undefVar == undefined);
console.log(undefVar == null);

console.log(typeof undfVar);
*/