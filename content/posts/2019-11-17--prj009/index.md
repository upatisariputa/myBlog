---
title: 크롤러 프로토타입 모듈 - Twitch 크리에이터 데이터 가져오기
subTitle: prj009
menuTitle: Project
date: "2019-11-17 00:00:00"
category: "Project"
cover: prj.jpg
---

## 크롤러 프로토타입 모듈

- 우선적으로 크롤러 프로토타입 모듈을 만들어 어떠한 데이터들이 어떻게 받아지는지를 알아야 합니다.
- 이전 프로젝트 때 아프리카tv와 트위치는 api로 데이터를 받아 왔습니다.
- 이번에는 리팩토링을 하면서 각각을 OOP에 입각하여 만들겠습니다.

### Twitch 크리에이터 데이터 가져오기

- 기본적으로 크리에이터의 데이터를 가져오는 module을 만든다.

```python
import requests
from clientID import client_id
from http_data import url, headers
from twitch_bj_id_data import bj_ids_datas
# 필요한 모듈들을 import 해준다.

def get_bj_fw_data(ids = bj_ids_datas): # bj id가 들어있는 list를 기본인자로 넣는다.
    bj_fw_data = []
    if isinstance(ids, list): # list인지 아닌지를 판별한다.
        for id in ids: # list 반복문을 실행시켜 id를 가져온다.
            res = requests.get(url + 'users/follows?to_id=' + id, headers=headers).json()
            if res == {'data': []} or res is None: # 가져온 데이터가 아무것도 없을 시에는 pass 한다.
                pass
            else: # 데이터가 있으면 변수에 데이터를 저장한다. DB가 만들어 지면 DB에 저장한다.
                fw_cnt = res['total']
                print(fw_cnt)
    else: # ids에 list가 아닐경우 실행
        res = requests.get(url + 'users/follows?to_id=' + ids, headers=headers).json()
        if res == {'data': []} or res is None:
            pass
        else:
            fw_cnt = res['total']
            print(fw_cnt)

# get_bj_fw_data()
```

- 이 모듈을 기본으로 크리에이터의 info, video, follower 데이터를 가져온다.