var User = [{name:'소녀시대', age:20}, {name:'걸스데이', age:21}];

User.push({name:'티아라', age:19});

console.log('사용자 수 : %d ', User.length);

for(var i = 0 ; i < User.length; i++){
	console.log('이름 : %s ', User[i].name);
	console.log('나이 : %d ', User[i].age);
	console.log();
}

/*
결과값
사용자 수 : 3 
이름 : 소녀시대 
나이 : 20 

이름 : 걸스데이 
나이 : 21 

이름 : 티아라 
나이 : 19 

*/

var add = function(a,b){
	return a+b;
}

User.push(add);

console.log(User[3].name);

console.log(Object.name);

console.log(Object.age);

/*
결과값
add					// User[3]은 add라는 함수인데 name을 출력하면 함수의 이름이 출력된다.
Object				// Object 객체의 name 이라는 프로퍼티가 있는듯
undefined			// age라는 정의되지 않은 프로퍼티를 출력하려고 하면 undefined가 출력된다.
*/