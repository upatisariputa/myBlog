---
title: 크롤러 프로토타입 모듈 - Twitch 크리에이터 id 가져오기
subTitle: prj007
menuTitle: Project
date: "2019-11-16 00:00:00"
category: "Project"
cover: prj.jpg
---

## 크롤러 프로토타입 모듈

- 우선적으로 크롤러 프로토타입 모듈을 만들어 어떠한 데이터들이 어떻게 받아지는지를 알아야 합니다.
- 이전 프로젝트 때 아프리카tv와 트위치는 api로 데이터를 받아 왔습니다.
- 이번에는 리팩토링을 하면서 각각을 OOP에 입각하여 만드려고 하겠습니다.

### Twitch 크리에이터 Login ID로 Twitch id 받아오기

- Twitch에서는 크리에이터 Login ID와 Twitch api에서 사용하는 id가 다르므로 Login ID를 통해 Twitch API 에서 사용하는 id를 받아와야 한다.

```python
import requests
from clientID import client_id 
# 나의 Twitch Client ID가 있는곳에서 Client ID를 받아 온다.
from http_data import url, headers 
# http_data는 Twitch API를 받아오는 기본 주소와 header값이 저장되어 있다.
from twitch_bj_name_data import bj_names_datas
# 크리에이터의 이름이 list로 저장된 파일에서 크리에이터의 Login ID를 가져온다.

def get_user_id(names = bj_names_datas): 
#매개변수에 기본값을 정의하고 싶을 경우 '='을 사용하여 기본값을 정해준다.
    bj_ids = []
    if isinstance(names, list): 
    # 인자가 list인지 아닌지 판별하여 list 이면 반복문을 실행한다.
        for name in names:
            r = requests.get(url + 'users?login=' + name, headers=headers)
            bj_id = r.json()
            # print(name) 반복문이 제대로 실행 되고 있는지 확인하고 싶다면 주석을 제거
            if bj_id == {'data': []} or bj_id is None:
            # 받아온 데이터가 없을 경우 'none'을 입력한다. 추후에는 'none'인 크리에이터는 list에서도 삭제해야 할듯 하다
                bj_ids.append('none')
            else:
                id = bj_id['data'][0]['id']
                bj_ids.append(id)
    else:
    # 인자가 list가 아니라 개별 Login id가 들어올 경우 하나만 처리해준다.
        r = requests.get(url + 'users?login=' + names, headers=headers)
        bj_id = r.json()
        if bj_id == {'data': []} or bj_id is None:
            pass # if문에서 아무것도 안 하고 싶을 경우 pass를 사용한다.
        else:
            id = bj_id['data'][0]['id']
            bj_ids.append(id)
    print(bj_ids) # 저장된 id를 본다.




get_user_id()
```

- 크리에이터의 Login ID를 python script로 저장했지만 DB에 저장을 해야 하나?

```python
if bj_id == {'data': []} or bj_id is None:
            pass # if문에서 아무것도 안 하고 싶을 경우 pass를 사용한다.
        else:
            id = bj_id['data'][0]['id']
            bj_ids.append(id)
```

- 이 부분이 반복되므로 모듈화 시키는 것을 생각해 보기!!