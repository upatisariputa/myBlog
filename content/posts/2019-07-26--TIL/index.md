---
title: javascript class
subTitle: class
menuTitle: codestates
date: "2019-07-26 00:00:00"
category: "codestates"
cover: javascript.jpg
---

# class

## javascript class 란?

- javascript class는 객체를 생성하고 상속을 다루는데 있어 더 단순하고 명확한 문법을 제공

## 1. class 정의

### class 선언과 class 표현이 있음

- class 선언

  ```javascript
  class Person {
    constructor(name, first, second) {
      this.name = name;
      this.first = first;
      this.second = second;
    }
    sum() {
      return this.first + this.second;
    }
  }

  var kim = new Person("kim", 10, 20);
  console.log("kim.sum()", kim.sum());
  ```

- class 표현

  - class 표현식은 class를 정의하는 또 다른 방법, class 표현식은 익명 클래스 또는 기명 클래스 생성 가능
  - class 표현식에 주어진 이름은 클래스의 body에 대해 local scope에 한해 유효

  ```javascript
  var Person = class {
    constructor(name, first, second) {
      this.name = name;
      this.first = first;
      this.second = second;
    }
    sum() {
      return this.first + this.second;
    }
  };

  var kim = new Person("kim", 10, 20);
  console.log("kim.sum()", kim.sum());
  ```


    ## 2. class body, constructor, Method

### class body

- class body는 중괄호로 {} 묶여있는 안쪽 부분이고, class method나 constructor와 같은 class member를 정의하는 곳

### constructor

- constructor 메소드는 class로 생성된 객체를 생성하고 초기화하기 위한 특수 메소드
- coustructor라는 이름을 가진 특수 메소드는 class 안에 한 개만 존재 가능

### Method

- 메소드는 class body안에 '함수명'(){}과 같이 선언

```javascript
var Person = class {
  constructor(name, first, second) {
    // 객체 생성
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    // 객체의 메소드
    return this.first + this.second;
  }
};
```

## 3. extends(객체의 상속)

    - extends 키워드는 클래스를 다른 클래스의 자식으로 만들기 위해 class 선언 또는 class 식에 사용 됨
    - extneds 키워드르 통하여 클래스를 상속 받아, 자식 클래스를 만들수 있음

```javascript
class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    return this.first + this.second;
  }
}
class PersonPlus extends Person {
  // Person을 부모로 하는 PersonPlus라는 class 생성
  avg() {
    // PersonPlus에 avg라는 메소드 추가
    return (this.first + this.second) / 2;
  }
}
```

##

##4. super

    - 부모 오브젝트의 함수  호출 시 사용
    - 생성자 메소드에서 supter 키워드를 통해 상위 클래스의 생성자 메소드 호출 가능

```javascript
class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    return this.first + this.second;
  }
}
class PersonPlus extends Person {
  constructor(name, first, second, third) {
    super(name, first, second);
    // super를 사용해서 부모 class를 상속 받고
    // Person의 name, first, second를 넘겨줌
    this.third = third; // super함수를 먼저 호출 한 다음 this 키워드 사용하여 추가
  }
  sum() {
    return super.sum() + this.third;
  }
  avg() {
    return (this.first + this.second + this.third) / 3;
  }
}
```

[MDN Class 정의](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)

[class](https://beomy.tistory.com/15)

[생활코딩 OOP](https://opentutorials.org/module/4047)
