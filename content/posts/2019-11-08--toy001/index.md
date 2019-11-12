---
title: 프로그래머스 level1 가운데 글자 가져오기
subTitle: Toy
menuTitle: career
date: "2019-11-08 00:00:00"
category: "Toy"
cover: toy.jpg
---

## 가운데 글자 가져오기 

- 프로그래머스 level1
- 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어보세요, 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
- 제한사항 : s는 길이가 1이상, 100이하인 스트링입니다.
- 처음 시작하는 문제로 가장 쉬운 문제를 골라 보았다. 토이 문제들을 푼지가 조금 되어서 다시 처음부터 시작하는 마음으로 풀어 보았다. 그리고 파이썬은 아직 익숙치가 않아서 파이썬도 익숙해질겸 풀어 보았다.

### Javascript

```javascript
function solution(s){
  let lengthOfString = s.length // 스트링의 길이라고 변수 명을 정하고 s의 길이를 파악한다.
  if(lengthOfString%2){ // 만일 스트링의 길이가 2로 나누었을 때 나머지가 0이 아닐경우 아래의 값을 반환한다.
    return s[Math.floor(lengthOfString/2)]	// s라는 스트링에서 스트링의 길이를 2로 나누었을 때의 소수점을 제외한 정수값을 추출하여 s에서 Math.floor(lengthOfString/2)의 index의 값을 반환 한다.
  }else{ // 위의 경우가 아니라면 아래의 경우를 반환한다.
    return s[Math.floor(lengthOfString/2)-1]+s[Math.floor(lengthOfString/2)]
  }
}
```

### Python

```python
import math
def solution(s):
  answer = ''
  lengthOfString = len(s) #s의 길이를 구함
  if lengthOfString%2:
    answer = s[math.floor(lengthOfString/2)]
  else:
    answer = s[math.floor(lengthOfString/2)-1]+s[math.floor(lengthOfString/2)]
  return answer
```

- Python에서는 import math를 해주어 math클래스 안의 floor 함수를 사용해야 한다.



### 다른 사람의 풀이를 보고 고쳐야 할 점

- Javascript, Python 두 개의 풀이에서 math.floor(lengthOfString/2)를 반복해서 사용하였으므로 math.floor(lengthOfString/2)를 변수로 정하면 풀이가 더 간단해 질 수 있겠다.
- Javascript 경우 삼항 연산자를 사용해도 될 듯
- Python의 경우 if를 사용하지 않고 풀수 있음



[Sariputa의 Github Programmers Test 풀이](https://github.com/upatisariputa/programmersTest)