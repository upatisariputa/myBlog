---
title: 프로그래머스 level1 시저 암호
subTitle: Toy008
menuTitle: toy
date: "2019-11-23 00:00:00"
category: "Toy"
cover: toy.jpg
---

## 시저암호

- 프로그래머스 level1

- 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 AB는 1만큼 밀면 BC가 되고, 3만큼 밀면 DE가 됩니다. z는 1만큼 밀면 a가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

### Javascript

```javascript
function solution(s, n) {
  // 일일이 알파벳의 배열을 만들지 않기 위해 charCode(아스키코드를 썼다.)
  return s.split('').map(function(item){ // 입력된 문자열을 split으로 나누고 map 메소드를 쓴다음 join()으로 합친다.
    if(item === ' '){ // 만일 공백이면 공백을 그대로 리턴한다.
      return ' '
    }else if(item.toUpperCase() === item ){ // 대문자일 경우 
      return String.fromCharCode(((item.charCodeAt()+n-65) % 26) + 65) // 아스키코드로 바꾼다음 n개를 밀어 준다. 그 다음 A의 아스키코드인 65를 빼준다음 26으로 나눈 나머지 값에 A의 아스키코드인 65를 다시 더해준다.
    }else{
      return String.fromCharCode(((item.charCodeAt()+n-97) % 26) + 97)
    }
  }).join('')
}
```

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