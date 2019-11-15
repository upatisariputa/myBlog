---
title: 프로그래머스 level1 K 번째 수
subTitle: Toy003
menuTitle: toy
date: "2019-11-14 00:00:00"
category: "Toy"
cover: toy.jpg
---

## 두 정수 사이의 합

- 프로그래머스 level1
- 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
- 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

### Javascript

```javascript
function solution(array, commands){
  var answer = [];
  for(let i = 0; i<commands.length; i++){
    answer.push(array.slice(com[i][0]-1, com[i][1])).sort((a,b)=> a-b)[com[i][2]-1]
  };
  // commands가 이중 배열이므로 이중배열을 제거할 반복문을 만든다. commands 배열 안의 배열은 길이가 3이므로 slice로 첫번째 요소부터 두번째 요소까지 잘라낸다.
  // sort 함수에서 정수가 내림차순으로 정렬이 되게하기 위해 (a, b) => a - b를 넣어준다.
  // slice 되고 sort 된 배열에서 세번째 요소의 자리에 있는 숫자를 answer에 push 한다.
  return answer;
}
```

### Python

```python
def solution(array, commands):
  answer = []
  # 풀이방식은 자바스크립트와 동일하다 파이썬의 경우 변수에 담아 보았다.
  for i in commands:
    slicedArr = array[i[0]-1 : i[1]]
    sortedArr = sorted(slicedArr)
    answer.append(sortedArr[i[2]-1])
  return answer
```



### 다른 사람의 풀이를 보고 고쳐야 할 점

- Javascript 경우 map을 사용하여 반복문과 push 사용을 없앨수 있음
- Python경우 lambda함수를 모르므로 다음 시간에 lambda에 대해 알아 보겠음



[Sariputa의 Github Programmers Test 풀이](https://github.com/upatisariputa/programmersTest)