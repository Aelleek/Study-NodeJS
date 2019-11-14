// url 모듈을 사용하기 위해 require() 메소드 사용
var url = require('url');

// 주소 문자열을 URL 객체로 만들기
var curURL = url.parse("http://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty");

// URL 객체를 주소 문자열ㄹ 만들기.
var curStr = url.format(curURL);

console.log("주소 문자열 : %s", curStr);
console.dir(curURL);


/*
url.parse() 	: 주소 문자열을 파싱하여 URL 객체를 만든다.
url.format()	: URL 객체를 주소문자열로 반환한다.
*/

/* 결과값

주소 문자열 : http://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty

Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'm.search.naver.com',
  port: null,
  hostname: 'm.search.naver.com',
  hash: null,
  search: '?query=steve+jobs&where=m&sm=mtp_hty',
  query: 'query=steve+jobs&where=m&sm=mtp_hty',
  pathname: '/search.naver',
  path: '/search.naver?query=steve+jobs&where=m&sm=mtp_hty',
  href: 'http://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty'
}

*/