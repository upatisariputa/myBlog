---
title: 프로그래머스 level1 모의고사
subTitle: Toy007
menuTitle: toy
date: "2019-11-22 00:00:00"
category: "Toy"
cover: toy.jpg
---

## 모의고사

- 프로그래머스 level1

- 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

  1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
  2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
  3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

  1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

### Javascript

```javascript
function solution(answers){
  var answer = []
  // 수포자들의 찍는 방식을 변수에 저장한다.
  let firstPerson = [1,2,3,4,5]
  let secondPerson = [2,1,2,3,2,4,2,5]
  let thirdPerson = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5,]
  let answerArr = [0,0,0]
  for(let i = 0; i<answers.length; i++){
    // answers가 길어질 경우를 위해 수포자들의 배열도 증가 시켜준다.
    firstPerson.push(firstPerson[i])
    secondPerson.push(secondPerson[i])
    thirdPerson.push(thirdPerson[i])
    // 정답과 수포자와 일치 하면 정답 배열의 요소도 증가시켜준다.
    if(firstPerson[i] === answers[i]){
      answerArr[0]++
    }
    if(secondPerson[i] === answers[i]){
      answerArr[1]++
    }
    if(thirdPerson[i] === answers[i]){
      answerArr[2]++
    }   
  }
  // 정답 배열에서 가장 큰수를 추출하여 인덱스 값을 정답 배열에 넣어준다.
  let maxItem = Math.max(...answerArr)
  console.log(maxItem)
  for (let k = 0; k<3; k++){
    if(answerArr[k] === maxItem){
      answer.push(k+1)
    }
  } 
  return answer;
}
```

### Python

```python
def solution(answers):
    answer = []
    firstPerson = [1,2,3,4,5]
    secondPerson = [2,1,2,3,2,4,2,5]
    thirdPerson = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5,]
    answerArr = [0,0,0]

    for i in range(len(answers)):
        if(firstPerson[i%5] == answers[i]):
            answerArr[0] += 1
        if(secondPerson[i%8] == answers[i]):
            answerArr[1] += 1
        if(thirdPerson[i%10] == answers[i] ):
            answerArr[2] += 1

    max_num = max(answerArr)

    for k in range(len(answerArr)):
        if(max_num == answerArr[k]):
            answer.append(k+1)

    return answer
```

### 다른 사람의 풀이를 보고 고쳐야 할 점

- Javascript의 경우 배열을 증가 시켜줄 필요는 없고 **firstPerson[i%5]**의 경우 처럼 i를 길이로 나눈 나머지를 구하여 그 인덱스를 반환 하면 된다.

- Python의 경우

- ```python
  for idx, s in enumerate(score):
          if s == max(score):
              result.append(idx+1)
  ```

  위와 같이 enumerate를 사용하였다.

- enumerate는 반복문 사용시 몇 번째 반복문인지 확인이 필요할 때 사용, 인덱스 번호와 컬렉션의 원소를 tuple형태로 반환

[Sariputa의 Github Programmers Test 풀이](https://github.com/upatisariputa/programmersTest)