---
title: 프로그래머스 level1 소수찾기
subTitle: Toy009
menuTitle: toy
date: "2019-11-26 00:00:00"
category: "Toy"
cover: toy.jpg
---

## 소수찾기

- 프로그래머스 level1

- 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

  소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
  (1은 소수가 아닙니다.)

### Javascript

- 효율성 테스트 실패

```javascript
function solution(n) {
  let primeNum = [2,3]
  if (n === 2){
    return 1
  }
  if(n === 3){
    return 2
  }
  if(n >3){ // 3이상인 n만 판별
    for(let k = 5; k<=n; k+=2){
      	// 기준 숫자를 소수들의 배열의 길이로 잡고
        let standardNum  = primeNum.length
      for(let i = 1; i<primeNum.length; i++){
        // k를 소수 배열의 요소로 나누었을 때 0이면 기준 숫자를 빼준다.
        if(k%primeNum[i] === 0){
          standardNum--
        }
      }
      // 기준숫자가 변경이 있으면 k를 소수배열에 넣어준다.
      if(standardNum === primeNum.length ){
        primeNum.push(k)
      }
    }
  }
  return primeNum.length
}
```

- 위의 코드에서 첫번째 반복문에서 k를 5부터 하므로 만일 n이 1000이면 계속 1000번 5부터 시작하므로 효율성이 떨어진다.

### Python

```python
def solution(s, n):
    answer = ''
    splitS = list(s)
    for i in splitS:
        if i == ' ':
            answer += ' '
        elif i.upper() == i:
            answer += chr(((ord(i) +n - 65) % 26) + 65)
        else:
            answer += chr(((ord(i) +n - 97) % 26) + 97)
    return answer
  ## chr은 아스키코드를 문자로 ord는 문자를 아스키코드로 변환 한다.
```

### 다른 사람의 풀이를 보고 고쳐야 할 점

- 두가지다 대문자를 판별 할 때 아스키코드가 90이하 이상으로 판별해도 된다.


[Sariputa의 Github Programmers Test 풀이](https://github.com/upatisariputa/programmersTest)