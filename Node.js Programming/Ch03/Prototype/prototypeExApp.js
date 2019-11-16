function Person(name, age){
	this.name = name;
	this.age = age;
}

Person.prototype.walk = function(speed){
	console.log(speed + 'km 속도로 걸어갑니다.');
}

var person1 = new Person('소녀시대',20);
var person2 = new Person('걸스데이',21);


console.log(person1.name + '의 walk() 메소드를 호출');
person1.walk(10);


console.log(person2.name + '의 walk() 메소드를 호출');
person2.walk(15);


person1.walk = function(speed){
	console.log(speed + 'km 속도로 뛰어갑니다.');
}

console.log(person1.name + '의 walk() 메소드를 호출');
person1.walk(10);


console.log(person2.name + '의 walk() 메소드를 호출');
person2.walk(15);

person1.read = function(book){
	console.log(this.name + '은 '+ book + '을 보고있습니다.');
}

person1.read('바람');

//person2.read('바람바람');

/* 결과값
소녀시대의 walk() 메소드를 호출
10km 속도로 걸어갑니다.
걸스데이의 walk() 메소드를 호출
15km 속도로 걸어갑니다.
소녀시대의 walk() 메소드를 호출
10km 속도로 뛰어갑니다.
걸스데이의 walk() 메소드를 호출
15km 속도로 걸어갑니다.
소녀시대은 바람을 보고있습니다.
*/