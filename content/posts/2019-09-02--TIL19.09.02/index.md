---
title: 2019.09.02 Git Flow
subTitle: Git Flow
menuTitle: codestates
date: "2019-09-02 00:00:00"
category: "Today I Learned"
cover: TIL.jpg
---

## Remote

### 	Git Remote 저장소

​		git remote 저장소는 인터넷이나 네트워크 어딘가에 있는 저장소를 말한다.

​		저장소를 clone 하면 origin이라는 리모트 저장소가 생긴다.

​		git remote -v를 하면 나의 local 폴더에서 연결된 remote 저장소를 볼 수 있다.

​		하나의 폴더에 여러개의 remote를 연결해 주었다면 아래와 같이 나오게 된다.

```zsh
$ cd grit
$ git remote -v
bakkdoor  git://github.com/bakkdoor/grit.git
cho45     git://github.com/cho45/grit.git
defunkt   git://github.com/defunkt/grit.git
koke      git://github.com/koke/grit.git
origin    git@github.com:mojombo/grit.git
```

​		위의 내용을 살펴보자면 grit이라는 local 저장소에 bakkdoor, cho45, defunkt, koke, origin이라는 이름의 remote가 연결 된 것이다.

​		upstream이라는 개념을 공부하다가 upstream이 무엇인지 알아보니 upstream은 remote의 이름일 뿐이었다.