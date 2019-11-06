const { PI } = Math;

exports.area = function(r){
	return PI * r * r;
}

exports.circumference = function(r){
	return 2 * PI * r;
}

/*
exportsEx.js는 독립적인 파일 스코프를 갖는 모듈이다.
이 모듈에서 area() 메소드와 circumference()메소드를 exports 객체의 메소드로 정의했다.
변수 PI는 exportsEx 모듈에서만 유효한 private 변수가 되는것이고 두 메소드는 외부의 공개한 public 메소드가 되는 것이다.


NodeJS는 Java와는 달리 명시적으로 private이나 public 같은 접근제어자를 작성하지 않지만,

exports를 이용하여 각 변수와 메소드들의 접근제어자를 정해줄 수 있는 것 같다.
*/