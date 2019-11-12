console.log('함수를 정의하는 첫번째 방법.');

function add(a,b){
	return a+b;
}

var result = add(10,10);
console.log('더하기 결과값 : %d',result);


console.log('');
console.log('함수를 정의하는 두번째 방법');

var add = function(a,b){
	return a+b;
}

result = add(10,20);

console.log('더하기 결과값 : %d', result);

console.log('');
console.log('함수를 정의하는 세번째 방법');

Person = {};

Person.add = function(a,b){
	return a+b;
}

console.log('더하기 결과값 : %d', Person.add(10,30));

console.log('');
console.log('객체의 메소드로 정의하는 방법');

Calc = {};
Calc.add = Person.add;

console.log('더하기 결과값 : %d', Calc.add(10,40));

/*
결과값
함수를 정의하는 첫번째 방법.
더하기 결과값 : 20

함수를 정의하는 두번째 방법
더하기 결과값 : 30

함수를 정의하는 세번째 방법
더하기 결과값 : 40

객체의 메소드로 정의하는 방법
더하기 결과값 : 50
*/