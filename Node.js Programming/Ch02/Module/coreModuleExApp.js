
var os = require('os');

console.log('시스템의 hostname : %s ', os.hostname());

console.log('시스템의 메모리 : %d / %d ', os.freemem(), os.totalmem());

console.log('시스템의 CPU 정보 \n');
console.dir(os.cpus());

console.log('시스템의 네트워크 인터페이스 정보 \n');
console.dir(os.networkInterfaces());

/*
hostname() : 운영체제의 호스트 이름을 알려준다.
totalmem() : 시스템의 전체 메모리 용량을 알려준다.
freemem() : 시스템에서 사용 가능한 메모리 용량을 알려준다.
cpus() : CPU 정보를 알려준다.
networkInterfaces() : 네트워크 인터페이스 정보를 담을 배열 객체를 반환한다.
*/


var path = require('path');

//디렉토리 이름 합치기
var directories = ["users","mike","docs"];
var docsDirectory = directories.join(path.sep);
console.log('문서 디렉토리 : %s ', docsDirectory);

// 디렉토리 이름과 파일 이름 합치기
var curPath = path.join('/Users/mike', 'notepad.exe');
console.log('파일패스 : %s ', curPath);

var filename = "c://Users//mike//notepad.exe";
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);

console.log('디렉토리 : %s, 파일 이름 : %s, 확장자 : %s', dirname, basename, extname);

/*
join() : 여러 개의 이름들을 모두 합쳐 하나의 파일 패스로 만들어준다. 파일 패스를 완성할 때 구분자 등을 알아서 조정한다.
dirname() : 파일 패스에서 디렉토리 이름을 반환한다.
basename() : 파일 패스에서 파일의 확장자를 제외한 이름을 반환한다.	-> 예제에서는 왜 확장자가 같이 나옴?????
extname() : 파일 패스에서 파일의 확장자를 반환한다.
*/


/* 
path 결과값

문서 디렉토리 : users/mike/docs 
파일패스 : /Users/mike/notepad.exe 
디렉토리 : c://Users//mike/, 파일 이름 : notepad.exe, 확장자 : .exe
*/


/*
os 결과값

시스템의 hostname : LeeKWui-MacBookPro.local 
시스템의 메모리 : 7846936576 / 17179869184 
시스템의 CPU 정보 

[
  {
    model: 'Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz',
    speed: 2700,
    times: { user: 1528330, nice: 0, sys: 1197600, idle: 15338590, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz',
    speed: 2700,
    times: { user: 71280, nice: 0, sys: 75920, idle: 17916750, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz',
    speed: 2700,
    times: { user: 1250280, nice: 0, sys: 1630370, idle: 15183290, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz',
    speed: 2700,
    times: { user: 65100, nice: 0, sys: 59320, idle: 17939520, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz',
    speed: 2700,
    times: { user: 1573380, nice: 0, sys: 710380, idle: 15780180, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz',
    speed: 2700,
    times: { user: 67740, nice: 0, sys: 57570, idle: 17938620, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz',
    speed: 2700,
    times: { user: 709200, nice: 0, sys: 453840, idle: 16900900, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz',
    speed: 2700,
    times: { user: 72080, nice: 0, sys: 55620, idle: 17936240, irq: 0 }
  }
]
시스템의 네트워크 인터페이스 정보 

{
  lo0: [
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    },
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '::1/128',
      scopeid: 0
    },
    {
      address: 'fe80::1',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: 'fe80::1/64',
      scopeid: 1
    }
  ],
  en6: [
    {
      address: 'fe80::aede:48ff:fe00:1122',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: 'ac:de:48:00:11:22',
      internal: false,
      cidr: 'fe80::aede:48ff:fe00:1122/64',
      scopeid: 4
    }
  ],
  en0: [
    {
      address: 'fe80::1076:722f:a6f4:8f24',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '78:4f:43:6b:d1:19',
      internal: false,
      cidr: 'fe80::1076:722f:a6f4:8f24/64',
      scopeid: 5
    },
    {
      address: '192.168.25.35',
      netmask: '255.255.255.192',
      family: 'IPv4',
      mac: '78:4f:43:6b:d1:19',
      internal: false,
      cidr: '192.168.25.35/26'
    }
  ],
  awdl0: [
    {
      address: 'fe80::4832:f2ff:fed6:dc0e',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '4a:32:f2:d6:dc:0e',
      internal: false,
      cidr: 'fe80::4832:f2ff:fed6:dc0e/64',
      scopeid: 12
    }
  ],
  llw0: [
    {
      address: 'fe80::4832:f2ff:fed6:dc0e',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '4a:32:f2:d6:dc:0e',
      internal: false,
      cidr: 'fe80::4832:f2ff:fed6:dc0e/64',
      scopeid: 13
    }
  ],
  utun0: [
    {
      address: 'fe80::5adf:7b2a:6e05:f464',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      internal: false,
      cidr: 'fe80::5adf:7b2a:6e05:f464/64',
      scopeid: 14
    }
  ],
  utun1: [
    {
      address: 'fe80::630a:9f67:3542:fa94',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      internal: false,
      cidr: 'fe80::630a:9f67:3542:fa94/64',
      scopeid: 15
    }
  ],
  utun2: [
    {
      address: 'fe80::7834:319b:66c4:37e8',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      internal: false,
      cidr: 'fe80::7834:319b:66c4:37e8/64',
      scopeid: 16
    }
  ]
}
*/