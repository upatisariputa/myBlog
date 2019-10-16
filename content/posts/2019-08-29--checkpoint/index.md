---
title: 2019.08.29 Check Point Review
subTitle: Check Point Review
menuTitle: codestates
date: "2019-08-29 00:00:00"
category: "codestates"
cover: TIL.jpg
---

## 01

what is the value of x after running the code below?

NOTE! we are asking for x not the reuslt (문제는 x의 값을 묻고 있습니다)

```js
var x = 30;
function get(x){
  return x
}
function set(value){
  x = value
}

set(10)
var result = get(20)
```

- 여기서 원하는 javascript의 개념은 scope이고, x의 값이 어떻게 변하는가에 대한 문제이다.
- x의 변화를 알기 위해선 get 함수와 set 함수의 실행에 x의 변화를 따라가면 된다.
- 여기서 x값의 변화는 set 함수에 의해 변하게 되는데 set(10)을 해주었으므로 x === 10이 된다.

## 02

what is the value of result after running the code below?

```js
var x = 10

function outer(){
  var x = 20;
  function inner(){
    x = x +10
    return x
  }
  inner()
}

outer()
var result = x
```

- 02 문제도 스코프에 관한 문제이다.
- 답을 30이라고 생각 하였는데 inner() 안에서 x가 변한다고 생각하였으나 inner()안의 x는 outer() 안의 x이므로 전역에 있는 x는 변하지 않으므로 result = 10이 된다.

## 11

what is the Big O time complexity for retrieving the value at a specific index in a liked list

- 정답은 O(n)이나 O(1)이라고 답을 하였다. 그 이유는 linked list가 직접 노드에 접근 한다고 착각하였다. 그러므로 O(n)이 되는 이유는 linked list는 논리적 저장순서와 물리적 저장순서가 이맃 하지 않기 때문에 검색, 삽입, 삭제의 과정을 거친다.

## 15

after running the code below what message will be eventually be alerted and after how long?

```js
var name = 'Window'
var alice = {
  name: "Alice",
  sayHi:function(){
    alert(this.name + " say hi")
  }
};
var bob = {name: "Bob"}
setTimeout(alice.sayHi.call(bob), 1000)
```

- 정답은 Bob says hi가 즉시 출력되는것이나, 1초후에 실행 된다고 생각하였다. 틀린 이유는 bind와 call의 차이인데 bind는 객체와 묶어주기만 하는것이고, call은 bind한 후 바로 실행 한다.

## 17

After the following code runs and all setTimeout callbacks run, what will be the value of result?

```javascript
function foo() {
  var data = 10;

  bar(function(players) {
    data = players;
  });

  return data;
}

function bar(callback) {
  setTimeout(callback, 0);
}

var result = foo();
```

- 답은 10이나 undefined라고 생각 하였다. setTimeout이 0초후 실행 되더라도 동기적으로 함수가 실행 된후 data는 undefined로 출력된 후 setTimeout이 실행된다고 생각했다.

## 19

After the following code runs, what will be the value of player.score?

```javascript
var player = { score: 3 };
function doStuff(obj) {
  obj.score = 2;
  obj = undefined;
}
doStuff(player);
```

- 답은 2이나 3이라 생각했다. doStuff가 player객체를 인자로 받아서 player객체의 score값을 변경해준다.