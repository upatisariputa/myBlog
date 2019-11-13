---
title: 프로그래머스 level1 두 정수 사이의 합
subTitle: Toy002
menuTitle: career
date: "2019-11-13 00:00:00"
category: "Toy"
cover: toy.jpg
---

## 두 정수 사이의 합

- 프로그래머스 level1
- 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요
- 등차수열의 합을 사용하면 쉽게 풀리는데 고등학교를 졸업한지 오래된 나로서는 공식이 있다는것은 알았지만 공식을 몰라서 공식을 보고 풀이를 했다.

### Javascript

```javascript
function solution (a, b){
  var answer = 0
  if(a === b){ // a와 b가 같으면 a나 b 둘중 하나를 리턴해준다.
    return a
  }else if(a < b){ // b가 a보다 큰 경우 빼기를 하면 두 정수 사이의 차가 음수가 나오므로 두개의 자리를 바꿔준다.
    var c = a
    a = b
    b = c
  }
  answer = ((a - b + 1) * (a + b))/2
	// 등차수열의 공식을 사용하여 a부터 b까지의 합을 구한다.
  return answer
}
```

### Python

```python
def solution(s):
	answer = 0;
  if a > b : a, b = b, a 
# 파이썬에서는 a와 b를 바꿀 경우 앞과 같은 방식으로 변경한다.
  return sum(range(a, b+1)) 
# sum 함수는 반복가능한 객체의 요소 값의 합을 구해준다.
# range함수는 정수 범위를 표현 가능, a에서 b이전까지의 정수를 리스트로 만들어준다.
```



### 다른 사람의 풀이를 보고 고쳐야 할 점

- Javascript 경우 두 정수 사이의 차를 if문이 아닌 Math.abs를 사용하여 풀이를 해도 된다. 그러면 if문이 사라지고 등차수열 공식만 필요하게 된다.
- Python의 경우 sum, range함수를 알고 있으면 간단하게 풀수있음



[Sariputa의 Github Programmers Test 풀이](https://github.com/upatisariputa/programmersTest)