---
title: 프로그래머스 level1 문자열 내 마음대로 정렬하기
subTitle: Toy006
menuTitle: toy
date: "2019-11-21 00:00:00"
category: "Toy"
cover: toy.jpg
---

## 문자열 내 마음대로 정렬하기

- 프로그래머스 level1
- 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 [sun, bed, car]이고 n이 1이면 각 단어의 인덱스 1의 문자 u, e, a로 strings를 정렬합니다.

### Javascript

- 내가 풀었던 오답

```javascript
// 먼저 풀었던 풀이이지만 오답이 나왔다.
function solution(strings, n) {
  var answer = [];
  strings.sort() // 우선 strings에 있는 배열의 요소들을 정렬해준다.
  var indexS = strings.map(((item) => item[n])).sort() // 요소들의 n번째의 요소를 가져와서 배열로 만든다.
    for(let i = 0; i<indexS.length; i++){
      for(let k = 0; k<strings.length; k++){
        if(indexS[i] === strings[k][n]){ // n번째 요소와 strings배열의 n번째 요소가 일치하면 순서대로 answer에 넣어준다.
          answer.push(s[k])
          strings.splice(k, 1) // 중복으로 들어가는것을 방지하기 위해 이미 들어간 요소는 제거한다.
        }
      }
    }
  return answer // 기본으로 나와있는 테스트는 통과하지만 다른 테스트는 통과하지 못 했다. strings.sort()의 문제로 strings.sort()를 한다고 해도 내가 원하는 대로 정렬을 해주지 못 한다. 
}
```

### Python

```python
def solution(strings, n):
  return sorted(sorted(strings), key = lambda strings:strings[n])
	# 우선 strings를 먼저 sort 해준 다음, 정렬할 key를 lambda 함수를 이용해 strings[n]을 구해준다. 
```

### 다른 사람의 풀이를 보고 고쳐야 할 점

- sort()를 이용한 풀이 [문자열 내 마음대로 정렬하기 참고]([https://medium.com/@wooder2050/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%9E%90%EC%97%B4-%EB%82%B4-%EB%A7%88%EC%9D%8C%EB%8C%80%EB%A1%9C-%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0-javascript-f8f431cedee7](https://medium.com/@wooder2050/알고리즘-문자열-내-마음대로-정렬하기-javascript-f8f431cedee7))

```javascript
function solution(strings, n){
  // sort()를 이용하여 문제를 푼다. 문자열을 >, < 로 비교하여 true, false를 만들고 true, false를 빼기 하여 1 또는 -1이 나오게 하여 정렬한다.
  return  strings.sort(function(a, b){
    let front = a[n]
    let back = b[n]
    if( front === back){ // 같은 값이 나올경우 string 전체를 비교한다.
      return (a > b) - (a < b)
    } else{ // 아닌경우 n번째 인덱스를 비교하여 정렬한다.
      return (front > back) - (front < back)
    }
  })
}
```

- 이번 문제의 경우 sort()와 true, false값을 빼기를 하면 어떤 값이 나오는지를 몰라서 첫번째 형식대로 풀이를 했지만 실패를 하였다.

- python의 경우 lambda 함수에 대해서 알고 있어야 풀이가 수월 했다. [파이썬 문법 5 - 람다(lambda) 함수](https://offbyone.tistory.com/73) 이 블로그에서 나온 대로 공부를 해 보았다. lambda 함수는 런타임에 생성해서 사용할 수 있는 익명 함수 이다. lambda는 쓰고 버리는 일시적인 함수. 함수가 생성된 곳에서만 필요.

  ```python
  # 람다 함수의 사용
  >>> g = lambda x : x**2
  >>> print(g(8))
  64
  >>> def inc(n):
    		return lambda x : x + n
  >>> f = inc(2)
  >>> g = inc(4)
  >>> print(f(12))
  14
  >>> print(g(12))
  16
  >>> print(inc(2(12)))
  14
  ```

  

  

[Sariputa의 Github Programmers Test 풀이](https://github.com/upatisariputa/programmersTest)