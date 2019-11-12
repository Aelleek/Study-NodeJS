var Users = [{name:'소녀시대', age:18}, {name:'걸스데이', age:19}, {name:'티아라', age:20}, {name:'에프터스쿨', age:21}];
function print(User){
	console.log('User 배열의 length : %d', User.length);
	console.log('User 배열의 item');
	User.forEach(function(item, index){
	console.log(item.name);
	});	
};

var TempUsers = Users.slice(1,3);

print(Users);

console.log('Users 배열을 slice()한 TempUsers의 값');
print(TempUsers);

/*
User 배열의 length : 4
User 배열의 item
소녀시대
걸스데이
티아라
에프터스쿨

Users 배열을 slice()한 TempUsers의 값
User 배열의 length : 2
User 배열의 item
걸스데이
티아라

Users 배열에 slice() 메소드를 사용하여도 기존의 배열의 값은 변경되지 않는다.
*/

var TempUsers2 = Users.slice(1);
print(TempUsers2);
/* 
결과값
User 배열의 length : 3
User 배열의 item
걸스데이
티아라
에프터스쿨

Users의 1번방의 데이터부터 끝까지 복사되어 TempUsers2에 반환되었다.
*/