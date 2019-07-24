---
title: 자료구조
subTitle: Graph, Tree, Hash Tables, Binary Tree(B-tree)
menuTitle: codestates
date: "2019-07-24 16:00:00"
category: "codestates"
cover: data.jpg
---

# 자료구조 Part2

## Graph

### Graph란?

- 노드(node)와 그 노드를 연결하는 간선(edge)을 하나로 모아 놓은 자료구조 (즉, 연결되어 있는 객체 간의 관계를 표현할 수 있는 자료구조)

- 비선형(non-linear) 자료구조이며 노드(node)와 엣지(edge)로 구성되어 있음
  노드는 꼭지점(vertex)로 표현, 엣지는 두 노드를 연결하는 선(line)으로 표현
  여기서 비선형구조란 자료들의 순서가 불규칙하고, 자료간의 연결이 여러 줄로 연결되는 자료 구조를 말하며, 자료간의 관계가 계층구조거나 망구조와 같이 복잡한 경우에 사용

### Graph 용어

- 정점(vertex): 위치라는 개념(node)
- 간선(edge): 위치 간의 관계. 즉, 노드를 연결하는 선(link, branch)
- 인접 정접(adjacent vertex): 간선에 의해 직접 연결된 정점
- 정점의 차수(degree): 무방향 그래프에서 하나의 정점에 인접한 정점의 수
  - 무방향 그래프에 존재하는 정점의 모든 차수의 합 = 그래프 간선 수의 2배
- 진입 차수(in-degree): 방향 그래프에서 외부에서 오는 간선의 수(내차수)
- 진출 사수(out-degree): 방향 그래프에서 외부로 향하는 간선의 수(외차수)
  - 방향 그래프에 있는 정점의 진입 차수 또는 진출 차수의 합 = 방향 그래프의 간선의 수(내차수 + 외차수)
- 경로 길이(path length): 경로를 구성하는 데 사용된 간선의 수
- 단순 경로(simple path): 경로 중에서 반복되는 정점이 없는 경우
- 사이클(cycle): 단순 경로의 시작 정점과 종료 정점이 동일한 경우

### Graph 특징

- 그래프는 네트워크 모델
- 2개 이상의 경로가 가능
  - 즉, 노드들 사이에 무방향/방향에서 양방향 경로를 가짐
- self-loop 뿐 아니라 loop/circuit 모두 가능
- 루트 노드 개념이 없음
- 부모-자식 관계라는 개념이 없음
- 순회는 DFS(깊이 우선 탐색)나 BFS(너비 우선 탐색)로 이루어짐
- 그래프는 순환 또는 비순환이다.
- 그래프는 크게 방향 그래프와 무방향 그래프가 있음
- 간선의 유무는 그래프에 따라 다름

### Graph의 종류

- 무방향 그래프, 방향 그래프
- 가중치 그래프
- 연결 그래프, 비연결 그래프(정점쌍 사이에 경로가 존재하지 않는 경우)
- 사이클, 비순환
- 완전 그래프

### Graph의 구현 2가지

1. 인접리스트

2. 인접행렬

### Graph 예

- 인물관계도, 먹이사슬, 지하철노선도, 전국도로망 등
- 네비게이션은 그래프를 활용하여 최단경로를 구함, 출발지와 도착지가 정해지면, 그 사이 가능한 이동 방법을 고려 짧은 경로를 추천

### Graph Psuedo Code

- 인맥 그래프

```javascript
friends = {
  Alice: ["Bob", "Diana", "Fred"],
  Bob: ["Alice", "Cynthia", "Diana"],
  Cynthia: ["Bob"],
  Diana: ["Alice", "Bob", "Fred"]
};
```

[graph 참조](https://www.playsw.or.kr/online/termsData/240)
[graph 참조](https://gmlwjd9405.github.io/2018/08/13/data-structure-graph.html)

## Hash Table(Hash map)

### Hash Talbe이란?

- 입력받은 데이터를 해시(해시 함수를 사용)하여 테이블 내의 주소를 계산하고 이 주소에 데이터를 담는것
- 키를 이용하여 값을 저장
- 검색 성능은 해시 함수의 성능과 해시 테이블의 크기에 좌우

- 해시테이블을 간단하게 객체로 구현

```javascript
menu = {
  "french fries": 0.75,
  hamberger: 2.5,
  "hot dog": 1.5,
  soda: 0.6
};
menu["french fries"]; // 0.75
```

- menu 객체의 키가 Hash Table의 키가 되고, menu 객체의 값이 Hash Table의 값이 된다고 아주 간략하게 생각하면 되겠다.
  보통은 Hash Table의 값은 Hash function에 의해 정해 진다.
  (질문 내용 Hash Table은 꼭 Hash function에 의해 값을 내야 하나요??)

### Hash Table 용어

- 해싱 : 키를 값으로 변환하는 과정
- 해시 함수 : 키를 특정 숫자로 변환하는데 사용한 코드
- 버킷 : 데이터가 저장된 장소
- 충돌 : 서로 다른 입력 값에 대해 동일한 해시 값, 즉 해시 테이블 내의 동일한 주소를 반환하는 것(정교한 알고리즘이라도 모든 입력값에 대해 고유한 해시값을 만들지 못 한다)
- 클러스터 : 일부 지역의 주소들을 집중적으로 반환 하는 결과로 데이터들이 한 곳에 모이는 문제
- 오버플로우 : 해시충돌이 버킷에 할당된 슬롯 수 보다 많이 발생하면 더이상 버킷에 값을 넣을 수 없는 현상

### Hash Table 속성

- 해싱된 키를 가지고 인덱스로 사용하기 때문에 삽입, 삭제, 검색이 매우 빠르다
- 해시 함수를 사용하는데 추가적 연산이 필요
- 적은 데이터 저장시 구현 방식에 따라 Linked List를 사용하는 경우 오버 헤드의 부담이 생기고, 캐시 효율이 떨어짐
- Hash Table의 크기가 유한적이고 해시 함수의 특성상 해시 충돌(Hash Collision)이 발생
- 충돌이 없거나 적으면 O(1)의 상수 시간에 가까워지고, 충돌이 발생하면 할수록 성능은 점점 O(N)에 가까워진다.

### Hash Table 알고리즘(해시 함수) 종류

- 나눗셈법 : 입력 값을 테이블의 크기로 나누고, 그 '나머지'를 테이블의 주소로 사용
- 자릿수 접기 : 숫자의 각 자릿수를 더해 해시 값을 만드는 것
- 이외에도 다수

### Hash Table 충돌 조정

- Hash Table은 다음 요인에 따라 효율성이 정해짐
  1. Hash Table에 얼마나 많은 데이터를 저장하는가
  2. Hash Table에서 얼마나 많은 셀을 쓸 수 있는가
  3. 어떤 해시 함수를 사용하는가

### Hahs Table 충돌 조정 방법

- Separate Chaining(Closed Addressing) 방식 : Linked List(연결 리스트) 사용하여 키에 매핑된 인덱스가 가리키는 Linked List에 Node를 추가하여 값을 추가한다.

- Open Addressing 방식 : Hash Table의 빈 버킷을 이용

- Coalesced Chaining(Coalesced hashing)방식 : Separate Chaining과 Open Addressing을 혼합 =

### Hash Table 예

- 블록체인

### Hash Table Psuedo Code

[hash table 참조](https://dev-kani.tistory.com/1)

## Binary Search Tree

### Binary Search Tree란?

- 이진탐색(binary search)와 연결리스트(Linked list)를 결합한 자료구조
- 이진탐색의 효율적인 탐색 능력을 유지하면서, 빈번한 자료입력과 삭제가 가능

### Binary Search Tree의 속성

- 완전이진 트리
- 각 노드의 왼쪽 서브트리에는 해당 노드의 값보다 작은 값을 지닌 노드
- 각 노드의 오른쪽 서브트리에는 해당 노드의 값보다 큰 값을 지닌 노드
- 룩업 연산(트리에 있는 특정 노드의 위치를 알아내는 연산)을 빠르게 처리 가능

### Binary Search Tree 용어

- 루트 : 가장 상위 노드(트리의 꼭대기)
- 부모 : 자식 노드에 비하여 상위 노드
- 자식 : 부모 노드에 비하여 하위 노드
- 레벨 : 루트에서 가장 마지막 자식까지 가는 단계

### Binary Search Tree 예

- 이진 암호화
- 데이터 베이스
- 파일 시스템

### Binary Search Tree Psuedo Code

- 검색

1. 노드의 값을 확인
2. 찾고 있는 값인지 확인
3. 찾고 있는 값이 현재 노드보다 작다면 왼쪽 하위 트리를 검색
4. 찾고 있는 값이 현재 노드보다 크면 오른쪽 하위 트리 검색

```javascript
function search(value, node) {
  // 기저 조건: 노드가 없거나
  // 찾고 있던 값이면
  if (node == undefined || node.value == value) {
    return node;
  }
  // 찾고 있는 값이 현재 노드 보다 작으면
  // 왼쪽 자식을 검색
  else if (value < node.value) {
    return search(value, node.leftChild);
  }
  // 찾고 있는 값이 현재 노드보다 크면
  // 오른쪽 자식을 검색
  else {
    // value > node.value
    return search(value, node.rightChlid);
  }
}
```

- 삽입

1. 루트부터 검색 시작
2. 넣어야할 값보다 큰지 작은지 확인
3. 넣을 값이 현재 노드 보다 작다면 왼쪽 하위 트리 검색
4. 넣을 값이 현재 노드 보다 크다면 오른쪽 하위 트리 검색
5. 넣을 값 아래에 자식이 없으면 값을 삽입

```javascript
function insert(value, node) {
  if (value < node.value) {
    // 왼쪽 자식이 없으면 왼쪽 자식으로서 값을 삽입
    if (node.leftChlid == undefined) {
      node.leftChild = TreeNode(value);
    } else {
      insert(value, node.leftChild);
    }
  } else if (value > node.value) {
    // 오른쪽 자식이 없으면 오른쪽 자식으로서 값을 삽입
    if (node.rightChild == undefined) {
      node.rightChild = TreeNode(value);
    } else {
      insert(value, node.rightChild);
    }
  }
}
```

- 삭제

1. 루트부터 검색 실행
2. 검색과 동일하게 실행
3. 자식이 없으면 값을 삭제
4. 자식이 하나 있으면 자식을 삭제 한 위치에 삽입
5. 자식이 둘 있으면 자식 중 삭제된 노드보다 큰 값 중 최소값을 후속자 노드로 대체
6. 후속자 노드에 오른쪽 자식이 있으면 후속자를 삭제된 자리에 넣은 후, 후속자 노드의 오른쪽 자식을 후속자 노드의 원래 부모의 왼쪽 자식으로 넣음

```javascript
function del(valueToDelete, node){
    // 트리 밑바닥에 도달해서 부모 노드에 자식이 없으면 기저 조건이다.
    if(node == undefined){
        return undefined
    }
    // 삭제하려는 값이 현재 노드보다 작거나 크면
    // 현재 노드의 왼쪽 혹은 오른쪽 하위 트리에 대한 재귀 호출의 반환값을
    // 왼쪽 혹은 오른쪽 자식에 할당
    else if(valueToDelete < node.value){
        node.leftChild = del(valueToDelete, node.leftChild)
        // 현재 노드(존재한다면 그 하위 트리)를 반환해서
        // 현재 노드의 부모의 왼쪽 혹은 오른쪽 자식의 새로운 값으로 쓰임
        return node
    }else if(valueToDelete > node.value){
        node.rightChild = delete(valueToDelte, node.rightChild)
        return node
    }
    // 현재 노드가 삭제하려는 노드인 경우
    else if(valueToDelete = node.value){
        // 현재 노드에 왼쪽 자식이 없으면,
        // 오른쪽 자식(존재한다면 그 하위 트리)을 반환함으로써 삭제하고,
        // 그 부모의 새 하위 트리가 될 수 있도록 함
        if(node.leftChild == undefined){
            return node.rightChild
            // (현재 노드에 왼쪽 또는 오른쪽 자식이 없으면, 이 함수 코드 첫 줄에 따라 undefined로 끝남)
        }else if(node.rightChild == undefined){
            return node.leftChild
        }
        // 현재 노드에 자식이 둘이면,
        // 현재 노드의 값을 후속자 노드의 값으로 바꾸는
        // (아래) lift 함수를 호출함으로써 삭제
        else{
            node.rightChild = lift(node.rightChild, node){
                return node
            }
        }
    }
}

function lift(node, nodeToDelete){
    // 이 함수의 현재 노드에 왼쪽 자식이 있으면,
    // 왼쪽 하위 트리로 계속해서 내려가도록 함수를 재귀적으로 호출함으로써
    // 후속자 노드를 찾는다
    if(node.leftChild){
        node.leftChild = lift(node.leftChild, nodeToDelte)
            return node
    }
    // 현재 노드에 왼쪽 자식이 없으면,
    // 이 함수의 현재 노드가 후속자 노드라는 뜻이므로
    // 현재 노드의 값을 삭제하려는 노드의 새로운 값으로 할당
    else{
        nodeToDelete.value = node.value
        // 후속자 노드의 오른쪽 자식이 부모의 왼쪽 자식으로 쓰일 수 있도록 반환한다.
        return node.rightChild
    }
}

```

### 이진탐색트리 참조

- 누구나 자료 구조와 알고리즘
- [이진 탐색 트리](https://idea-sketch.tistory.com/26)
- [이진 탐색 트리](https://gmlwjd9405.github.io/2018/08/12/data-structure-tree.html)

## Graph와 Tree 차이
