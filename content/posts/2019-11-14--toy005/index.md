---
title: 프로그래머스 level1 2016년
subTitle: Toy005
menuTitle: toy
date: "2019-11-18 00:00:00"
category: "Toy"
cover: toy.jpg
---

## 약수의 합

- 프로그래머스 level1
- 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 `SUN,MON,TUE,WED,THU,FRI,SAT입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 TUE를 반환하세요.

### Javascript

```javascript
function solution(a, b){
  var answer = ''
  var week = ['THU','FRI','SAT','SUN','MON','TUE','WED']
  // 요일을 배열로 지정해서 answer에 정해준다.
  // 요일의 순서는 1월 1일을 기준으로 해서 1번 인덱스에 FRI를 넣어준다.
  var monthDay = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30]
  // 날짜를 1월 부터 더하여 1월 1일으로 부터 몇일이 지났는지 계산하기 위해 월별 총 일자를 배열로 만들어 준다. 배열의 0번째 인덱스에 0을 넣은 이유는 1월을 계산할 때는 1월 이전의 월이 없으므로 day만 더해주기 위함이다.
  var day = 0
  // 변수 day를 0으로 지정하고 월별 날짜를 더해준다.
  for(let i = 0; i < a; i++){
    day += monthDay[i]
  }
  day += b
  // 마지막으로 몇일인지를 더 해준다
  answer = week[day%7]
  // 거기서 day를 7로 나눈다. 1월 1일이 금요일이므로 1%7 = 1이 나온다. 그럼 week 배열에서 첫번째 인덱스를 가져오면 'FRI'이다.
  return answer;
}
```

### Python

```python
def solution(a, b):
  answer = ''
  week = ['THU','FRI','SAT','SUN','MON','TUE','WED']
  month_day = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30]
  day_cnt = 0
  for day in month_day[:a]: # 반복문에서 범위를 지정해주기 위해
    day_cnt += day
    
   day_cnt += b
  answer = week[day_cnt % 7]
  return answer
```

### 다른 사람의 풀이를 보고 고쳐야 할 점

- Javascript의 경우 Date 함수가 사용가능하다.
- Python의 경우 반복문을 사용하지 않고 sum 함수를 사용하여 풀어도 된다.

[Sariputa의 Github Programmers Test 풀이](https://github.com/upatisariputa/programmersTest)