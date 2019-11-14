// url 모듈을 사용하기 위해 require() 메소드 사용
var url = require('url');

// 주소 문자열을 URL 객체로 만들기
var curURL = url.parse("http://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty");

// URL 객체를 주소 문자열ㄹ 만들기.
var curStr = url.format(curURL);


// querystring 모듈을 사용하기 위해 require() 메소드 사용
var querystring = require("querystring");
var param = querystring.parse(curURL.query);

console.log("요청 파라미터 중 query의 값 : %s", param.query);
console.log("원본 요청 파라미터 : %s", querystring.stringify(param));

console.dir(param);


/* 결과값

요청 파라미터 중 query의 값 : steve jobs
원본 요청 파라미터 : query=steve%20jobs&where=m&sm=mtp_hty

[Object: null prototype] {
  query: 'steve jobs',
  where: 'm',
  sm: 'mtp_hty'
}
*/