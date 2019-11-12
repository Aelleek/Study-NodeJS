var User = [{name:'소녀시대', age:20}, {name:'걸스데이', age:21}];

console.log('push() 전의 요소의 수 : %d', User.length);


User.push({name:'AOA', age:22});

console.log('push() 이후의 요소의 수 : %d', User.length);

User.forEach(function(item, index){
	console.log(item.name);
})


User.pop();
console.log('pop() 이후의 요소의 수 : %d', User.length);

User.forEach(function(item, index){
	console.log(item.name);
})

/*
결과값
push() 전의 요소의 수 : 2
push() 이후의 요소의 수 : 3
소녀시대
걸스데이
AOA
pop() 이후의 요소의 수 : 2
소녀시대
걸스데이
*/