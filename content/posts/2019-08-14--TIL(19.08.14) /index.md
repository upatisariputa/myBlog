---
title: 2019.08.14 TIL
subTitle: node.js 기능 알아보기
menuTitle: TIL
date: "2019-08-14 00:00:00"
category: "Today I Learned"
cover: TIL.jpg
---



## 노드기능 알아보기

### module.exports와 exports 차이점

- module이란 특정한 기능을 하는 함수나 변수들의 집합 
- 보통 파일 하나가 모듈 하나가 됨

```javascript
const odd = '홀수'
const even = '짝수'

module.exports ={
  odd,
  even
}
```

위의 코드와 아래의 코드는 동일

```javascript
export.odd = '홀수'
export.even = '짝수'
```

#### module.exports와 export의 관계

- export가 call by reference로 module.exports를 바라보고 있고, 리턴되는 값은 항상 module.exports
- 위의 관계를 코드로 표현

```javascript
var module = {
  exports:{}
}
var exports = module.exports

return module.exports
```

- module.exports와 exports 모두 하나의 객체를 바라보고 있고, 최종적으로 return 되는 것은 무조건 module.exports

#### exports객체 사용시 주의점

- exports 객체 사용 시 module.exports와의 참조 관계가 깨지지 않도록 주의 **exports에는 반드시 객체처럼 속성명과 속성값을 대입**
- exports 사용 시에는 객체만 사용가능 하므로 module.exports에 함수를 대입한 경우에는 exports로 바꿀 수 없음
- module.exports와 exports를 함께 사용 하지 않는것이 좋음

[nodejs교과서]([https://www.inflearn.com/course/node-js-%EA%B5%90%EA%B3%BC%EC%84%9C#](https://www.inflearn.com/course/node-js-교과서#))

[감성프로그래밍 nodejs module.exports와 exports의 차이점](https://programmingsummaries.tistory.com/340)

