var User = [{name:'소녀시대', age:20}, {name:'걸스데이', age:21}];

User.push({name:'티아라', age:19});

console.log('사용자 수 : %d ', User.length);

for(var i = 0 ; i < User.length; i++){
	console.log('이름 : %s ', User[i].name);
	console.log('나이 : %d ', User[i].age);
	console.log();
}

User.forEach(function(item, index){
	console.log('배열 요소 #' + index + ' : %s', item.name);
})
/*
결과값
배열 요소 #0 : 소녀시대
배열 요소 #1 : 걸스데이
배열 요소 #2 : 티아라
*/


User.forEach(function(index, item){
	console.log('배열 요소 #' + index + ' : %s', item.name);
})
/*
결과값
배열 요소 #[object Object] : undefined
배열 요소 #[object Object] : undefined
배열 요소 #[object Object] : undefined
*/

User.forEach(function(a, b){
	console.log('배열 요소 #' + b + ' : %s', a.name);
})