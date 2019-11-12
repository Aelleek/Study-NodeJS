var User = [{name:'소녀시대', age:20}, {name:'걸스데이', age:21}, {name:'AOA', age: 22}, {name:'티아라', age:23}];

function print(User){
	console.log('User 배열의 length : %d', User.length);
	console.log('User 배열의 item');
	User.forEach(function(item, index){
	console.log(item.name);
	});	
};

console.log('delete 실행전의 User 배열 정보');
print(User);
/* 결과값
delete 실행전의 User 배열 정보
User 배열의 length : 4
User 배열의 item
소녀시대
걸스데이
AOA
티아라
*/

delete User[1];

console.log('delete 실행후의 User 배열 정보');
print(User);
User[1] = {name : '걸스데이' , age : 21};
/* 결과값
delete 실행후의 User 배열 정보
User 배열의 length : 4
User 배열의 item
소녀시대
AOA
티아라

1번 방에 있던 걸스데이의 데이터정보가 delete 됐지만 User의 length는 변하지 않았다.
그렇다는것은 데이터 자체는 지워졌지만 할당된 공간은 그대로 유지된다는 것.
그래서 delete를 사용하는 것보다는 splice() 메소드를 사용하는것이 권장된다.
*/

User.splice(1, 0 , {name:'에프터스쿨', age : 25});
console.log('splice()로 1번방에 새로운 데이터 추가');
print(User);
/*
splice()로 1번방에 새로운 데이터 추가
User 배열의 length : 5
User 배열의 item
소녀시대
에프터스쿨
걸스데이
AOA
티아라
*/

var Temp = [{name:'에프터스쿨', age:25}, {name:'아이유', age:18}];

User.splice(1, 0 , Temp);
console.log('splice()로 1번방에 배열 형태의 새로운 데이터 추가');
print(User);
console.log();
console.dir(User);
/*
splice()로 1번방에 배열 형태의 새로운 데이터 추가
User 배열의 length : 6
User 배열의 item
소녀시대
undefined
에프터스쿨
걸스데이
AOA
티아라

[
  { name: '소녀시대', age: 20 },
  [ { name: '에프터스쿨', age: 25 }, { name: '아이유', age: 18 } ],
  { name: '에프터스쿨', age: 25 },
  { name: '걸스데이', age: 21 },
  { name: 'AOA', age: 22 },
  { name: '티아라', age: 23 }
]

처음 생각했던 형태는 전달인자로 배열을 넘겨주면 배열의 데이터가 2개이므로 1번방과 2번방에 데이터가 들어갈거라고 생각했지만
자바스크립트의 유연성~으로 인해 데이터가 따로따로 들어가는게 아니라 배열 그 자체로 들어간다.
그래서 print() 메소드에서 구현했던대로 forEach구문으로 출력하려고하면 배열에는 name이 없기때문에 undefined로 뜨는것이고
console.dir() 메소드로 객체 정보를 확인하면 배열이 고대로 들어가있는것을 확인할 수 있다.

*/
