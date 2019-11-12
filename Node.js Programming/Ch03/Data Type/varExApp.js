var age = 29;
console.log('나이 : %d ', age);
console.log('나이 : %s ', age);

var name = '소녀시대';
console.log('이름 : %s ', name);
console.log('이름 : %d ', name);

/*
결과값
나이 : 29 
나이 : 29 		
이름 : 소녀시대 
이름 : NaN 		// 제대로된 문자열을 %d로 출력하면 에러는 나지 않고 NaN이 출력된다.

//숫자값을 %s로 출력해도 제대로 출력되고, var age = '29'처럼 숫자를 문자열로 할당한 후에 %d로 출력해도 제대로 출력된다.
*/

var Person = {};

Person.age = 29;
Person.name = '이경원';
Person['mobile'] = '010-9903-0582';

console.log('나이 : %d' , Person.age);
console.log('이름 : %s' , Person['name']);
console.log('번호 : %s' , Person.mobile);

/*
결과값
나이 : 29
이름 : 이경원
번호 : 010-9903-0582

객체에 속성값을 추가하는 방법.
Person.속성
Person['속성']

출력하는 방법도 동일.
*/