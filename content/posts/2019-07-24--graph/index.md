---
title: Graph
subTitle: Graph
menuTitle: codestates
date: "2019-07-25 00:00:00"
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
