---
title: 프로그래머스 level1 K 번째 수
subTitle: Toy004
menuTitle: toy
date: "2019-11-15 00:00:00"
category: "Toy"
cover: toy.jpg
---

## 약수의 합

- 프로그래머스 level1
- 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요

### Javascript

```javascript
function solution(n){
  let answer = 0;
  for(let i = 1; i <= n; i++){
    if(n%i === 0){
      answer =+ i
    }
  }
  // 1부터 n까지의 반복문을 실행해 n과 나누었을 때 0이 나오면 answer에 계속 더한다.
  return answer;
}
```

### Python

```python
def solution(n):
  answer = 0
  for i range(1, n+1): #range 함수로 정수 범위를 표현 해준다 
    if n%i == 0:
      answer += i
  return answer
```

### 다른 사람의 풀이를 보고 고쳐야 할 점

- n/2의 수들만 검사하여 성능을 향상시킬 수 있다.

[Sariputa의 Github Programmers Test 풀이](https://github.com/upatisariputa/programmersTest)