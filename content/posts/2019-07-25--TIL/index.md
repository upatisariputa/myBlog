---
title: 2019.07.25 TIL
subTitle: Instantiation Patterns (인스턴스화 패턴)
menuTitle: TIL
date: "2019-07-25 00:00:00"
category: "Today I Learned"
cover: TIL.jpg
---

# Instantiation Patterns

- class(constructor가 나오기전 인스턴스화 패턴)

- 인스턴스화 패턴이란?
  인스턴스화 패턴은 JavaScript로 무언가를 만드는 방법.
  JavaScript는 객체를 만드는 네가지 방법을 제공

- 인스턴스화 패턴의 기능
  객체 생성
  객체의 메소드와 프로퍼티 생성

## Functional

- 함수를 이용하여 생성하는 방법
  함수를 이용하여 빈 객체를 만들고 속성과 메소드를 추가, 그 다음 객체를 반환
  함수가 호출 될 때마다 메소드에 접근 가능

```javascript
var Animal = function(species, name) {
  var obj = {};

  obj.species = species;

  obj.name = name;

  obj.makeSound = function() {};

  obj.eat = function() {};

  obj.sleep = function() {};

  return obj;
};

var tigher = Animal("tigher", "tigger");
tiger.eat();
tiger.makeSound();
```

- 장점 : 코드 읽기가 쉬움(모든 함수가 객체에 포함 되어 있음), 프로퍼티는 클로저 내에 포함 되므로 숨겨짐

- 단점 : 모든 메소드가 함수내에 포함되므로, 두번째 인스턴스를 생성하면 모든 프로퍼티와 메소드가 복사 됨, 새 객체를 만든 다음 메서드를 변경하고 새 인스턴스를 만들면 두 객체가 서로 다른 메서드를 참조함

### Functional Shered

- Functional Shered는 모든 객체간에 메소드를 공유함으로 새로운 객체를 만들때마다 메모리에 메소드를 복사하지 않아도 됨(메소드를 참조함)
- Functional과 마찬가지로 내부에 빈 객체가 있는 함수로 시작하여 함수 내에서 프로퍼티를 정의, 메소드는 다른 객체에 정의함(extend)

```javascript
var Animal = function(species, name) {
  var obj = {};
  obj.species = species;
  obj.name = name;

  extend(obj, objMethods);
  return obj;
};

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};

var objMethods = {
  makeSound: function() {},
  eat: function() {},
  sleep: function() {}
};

var tiger = Animal("tiger", "tigger");
tiger.eat();
tiger.makeSound();
```

- 장점 : 메서드 복제가 없어지므로 메모리 효율 향상

- 단점 : 메서드를 수정하면 기존 객체와 새로운 객체가 다른 메서드를 참조

## Prototypal

- Prototypal 인스턴스화는 프로토 타입 체인을 사용하여 객체를 생성
- 메서드는 Object.create 메서드를 사용하여 객체의 프로터 타입에 첨부 됨
- 함수 내부에 프로퍼티 정의 가능

```javascript
var Animal = function(species, name) {
  var obj = Object.create(objMethods);
  obj.species = species;
  obj.name = name;
  return obj;
};

var objMethods = {
  makeSound: function() {},
  eat: function() {},
  sleep: function() {}
};

var tiger = Animal("tiger", "tigger");
tiger.eat();
tiger.makeSound();
```

- 장점 : 메서드는 객체 내에서 반환되는 대신 객체의 프로토 타입에 연결 됨, 모든 메서드는 메모리에 메서드를 복제하지 않고 객체에서 사용가능

- 단점 : 메서드를 사용하려면 객체를 만들고 생성자 함수에서 객체를 반환해야함

## Pesudoclassical

- Pseudoclassical 인스턴스 생성은 프로토타입 체인을 사용
- new키워드를 사용하여 프로토타입 인스턴스화로 작성하는 대부분의 기능 제공
- 새로운 변수를 생성하고 Object.create()를 할당하는 대신, Pseudoclassical 인스턴스 생성은 'this'에 할당
- 새 함수를 만들고 'this'키워드를 사용하여 프로퍼티 생성
- 새로운 객체를 만드려면 new키워드 사용

```javascript
var Animal = function(species, name) {
  this.species = species;
  this.name = name;
};

Animal.prototype.makeSound = function() {};
Animal.prototype.eat = function() {};
Animal.prototype.sleep = function() {};

var tiger = new Animal("tiger", "tigger");
tiger.eat();
tiger.makeSound();
```

- 장점 : 객체 생성에 최적화

- 단점 : 읽기 어려움

[인스턴스화 패턴 참고](https://medium.com/dailyjs/instantiation-patterns-in-javascript-8fdcf69e8f9b)
