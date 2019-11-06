console.log('- 시스템 정보 관련');

console.log(process.env);           // 컴퓨터 환경과 관련된 정보를 가진 객체

console.log(process.version);       // node.js의 버전

console.log(process.versions);      // node.js와 연관된 프로그램들의 버전을 가진 객체

console.log(process.arch);          // 프로세서의 아키텍처(arm/ia32/x64)

console.log(process.platform);      // 플랫폼(win32/linux/sunos/freebsd/darwin)

console.log(process.memoryUsage()); // 메모리 사용 정보를 가진 객체

console.log(process.uptime());      // 현재 프로그램이 실행된 시간


console.log('- 매개변수 정보 관련');

console.log('argv 속성의 파라미터 수 : ', + process.argv.length);

console.dir(process.argv);

process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});

/* node processExample.js 1 2 3 의 결과값

- 매개변수 정보 관련
argv 속성의 파라미터 수 :  5
[
  '/usr/local/Cellar/node/12.12.0/bin/node',
  '/Users/ael/Documents/Programming/1. Study/3. NodeJS/Node.js Programming/Ch02/Global Object/processExample.js',
  '1',
  '2',
  '3'
]
0: /usr/local/Cellar/node/12.12.0/bin/node
1: /Users/ael/Documents/Programming/1. Study/3. NodeJS/Node.js Programming/Ch02/Global Object/processExample.js
2: 1
3: 2
4: 3

** node 명령어와 프로그램의 경로 정보까지 포함하므로 추가된 매개변수는 2부터 시작해서 출력한다.

*/

console.log('- 프로그램 종료');

process.exit();


/* 시스템 정보 관련 결과값
- 시스템 정보 관련
{
  TERM_PROGRAM: 'Apple_Terminal',
  SHELL: '/bin/bash',
  TERM: 'xterm-256color',
  TMPDIR: '/var/folders/wm/0nwvg22x743_lt4w9h166q1m0000gn/T/',
  TERM_PROGRAM_VERSION: '433',
  TERM_SESSION_ID: 'DCBD8146-4A3E-45B3-A6C9-FC971CD05EE4',
  USER: 'ael',
  SSH_AUTH_SOCK: '/private/tmp/com.apple.launchd.nRFVMtmFgP/Listeners',
  PATH: '/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin',
  LaunchInstanceID: 'C4E18730-9995-4F00-9981-19C56E8AA034',
  PWD: '/Users/ael/Documents/Programming/1. Study/3. NodeJS/Node.js Programming/Ch02/Global Object',
  JAVA_HOME: '/Libraryk/Java/JavaVirtualMachines/jdk-12.0.2.jdk/Contents/Home',
  LANG: 'ko_KR.UTF-8',
  XPC_FLAGS: '0x0',
  XPC_SERVICE_NAME: '0',
  SHLVL: '1',
  HOME: '/Users/ael',
  LOGNAME: 'ael',
  SECURITYSESSIONID: '186a6',
  _: '/usr/local/bin/node',
  OLDPWD: '/Users/ael/Documents/Programming/1. Study/3. NodeJS/Node.js Programming/Ch02',
  __CF_USER_TEXT_ENCODING: '0x1F5:0x3:0x33'
}
v12.12.0
{
  node: '12.12.0',
  v8: '7.7.299.13-node.12',
  uv: '1.32.0',
  zlib: '1.2.11',
  brotli: '1.0.7',
  ares: '1.15.0',
  modules: '72',
  nghttp2: '1.39.2',
  napi: '5',
  llhttp: '1.1.4',
  http_parser: '2.8.0',
  openssl: '1.1.1d',
  cldr: '35.1',
  icu: '64.2',
  tz: '2019a',
  unicode: '12.1'
}
x64
darwin
{
  rss: 17625088,
  heapTotal: 4734976,
  heapUsed: 2464760,
  external: 809876
}
0.038150276
*/