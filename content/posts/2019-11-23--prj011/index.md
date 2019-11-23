---
title: 크롤러 프로토타입 모듈 - Youtube selenium 크롤링
subTitle: prj011
menuTitle: Project
date: "2019-11-23 00:00:00"
category: "Project"
cover: prj.jpg
---

## 크롤러 프로토타입 모듈 - Youtube selenium

- 우선적으로 크롤러 프로토타입 모듈을 만들어 어떠한 데이터들이 어떻게 받아지는지를 알아야 합니다.
- 이전 프로젝트 때 아프리카tv와 트위치는 api로 데이터를 받아 왔습니다.
- 이번에는 리팩토링을 하면서 각각을 OOP에 입각하여 만들겠습니다.

##Youtube Selenium

### 	비디오 주소 추출

- Afreeca TV, Twitch TV 와는 다르게 Youtube는 Selenium을 이용해서 만들었다. 
- Youtube도 API를 제공하지만 할당량이 정해져있어 조금만 사용해도 할당량을 전부 소모한다.
- [유튜브 크롤링 기본](https://upatisariputa.netlify.com/prj003/)에서 selenium을 다뤘기 때문에 그 이후를 진행 하겠다.
- 크리에이터의 각각의 비디오의 URL을 가져와서 그 URL을 사용해 비디오의 세부 데이터를 가져온다.

```python
# 크리에이터의 video 전체가 나오는 페이지를 연다.
driver.get('https://www.youtube.com/channel/크리에이터ID/videos?view=0&sort=dd&shelf_id=0')

# 스크롤을 몇번 내릴지를 해야 하는데 전체를 다 크롤링해오는건 현재로서는 의미가 없어서 10번을 하였다.
num_of_pagedowns = 10
while num_of_pagedowns:
    body.send_keys(Keys.PAGE_DOWN)
    time.sleep(1.5)
    num_of_pagedowns -= 1

html = driver.page_source
soup = BeautifulSoup(html, 'lxml')

# 비디오 태그를 추출한다.
video_list0 = soup.find('div', {'id': 'contents'})
video_list2 = video_list0.find_all('ytd-grid-video-renderer',{'class':'style-scope ytd-grid-renderer'})

base_url = 'http://www.youtube.com'
video_url = []

# 반복문을 실행시켜 비디오의 주소를 video_url에 넣는다.
for i in range(len(video_list2)):
    url = base_url+video_list2[i].find('a',{'id':'thumbnail'})['href']
    video_url.append(url)
```



### 제목, 게시일, 조회수, 좋아요, 싫어요, 댓글 추출

```python
# 반복문을 사용 video_url list에서 URL에 접속한다.
for i in range(len(video_url)):
    start_url = video_url[i]
    print(start_url)
    driver.implicitly_wait(delay)
    driver.get(start_url)
    driver.maximize_window()
    body = driver.find_element_by_tag_name('body')
    time.sleep(delay)

    # 페이지를 한 번 스크롤하는 이유는 페이지를 스크롤 하지 않으면 댓글수가 나오지 않기 때문이다.
    num_of_pagedowns = 1
    while num_of_pagedowns:
        body.send_keys(Keys.PAGE_DOWN)
        time.sleep(1.5)
        num_of_pagedowns -= 1

    html = driver.page_source
    soup = BeautifulSoup(html, 'lxml')

    # 각각의 태그들로 추출을 한다.
    video_title = soup.find('h1', 'title style-scope ytd-video-primary-info-renderer').string
    upload_date = soup.find('div', {'id' : 'date'}).find('yt-formatted-string', 'style-scope ytd-video-primary-info-renderer').string
    view_cnt = soup.find('span', 'view-count style-scope yt-view-count-renderer').string
    like_cnt = soup.find('yt-formatted-string',{'id':'text','class':'style-scope ytd-toggle-button-renderer style-text','aria-label':re.compile('좋아요')}).string
    unlike_cnt = soup.find('yt-formatted-string',{'id':'text','class':'style-scope ytd-toggle-button-renderer style-text','aria-label':re.compile('싫어요')}).string
    comment_cnt = soup.find('ytd-comments', {'id' : 'comments'}).find('yt-formatted-string', 'count-text style-scope ytd-comments-header-renderer').string
    print(video_title, upload_date, view_cnt, like_cnt, unlike_cnt, comment_cnt)


driver.close()
```



### Chrome Driver OPTION

- headless, image 등 Selenium 효율을 올리기 위해 여러가지 OPTION을 처리했다.

```python
options = webdriver.ChromeOptions()
# headless 옵션
options.add_argument('headless')
options.add_argument('window-size=1920x1080')
options.add_argument('disable-gpu')
options.add_argument('user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36')
options.add_argument('lang=ko_KR')
options.add_argument("--autoplay-policy=no-user-gesture-required")
# 이미지 없애기, popup 제거 
prefs = {'profile.default_content_setting_values': {'images' : 2, 'media_stream': 2, 'media_stream_mic':2, 'media_stream_camera':2, 'mixed_script': 2, 'protected_media_identifier':2, 'stylesheet' :2, 'notifications' :2, 'popups' :2, 'plugins' :2 , 'app_banner':2}}
options.add_experimental_option("prefs", prefs)
driver = webdriver.Chrome(path, chrome_options=options)

# 딜레이를 랜덤으로 두어 유튜브에서 Selenium 탐지를 어렵게 하기 위해서이다.
delay = random.randrange(3,6)
driver.implicitly_wait(delay)
# 플러그인 속성 업데이트
driver.execute_script("Object.defineProperty(navigator, 'plugins', {get: function() {return[1, 2, 3, 4, 5]}})")
# lanuages 속성을 업데이트해주기
driver.execute_script("Object.defineProperty(navigator, 'languages', {get: function() {return ['ko-KR', 'ko']}})")
driver.get('https://www.youtube.com/channel/크리에이터ID/videos?view=0&sort=dd&shelf_id=0')
driver.maximize_window()
```

- 여러가지를 찾아봤지만 동영상을 로드를 하지 않는 것을 찾기가 어려워서 아직 동영상 로드 처리를 하지 못 하였다. 



여기서 예외 및 오류 처리를 해야한다. 그리고 지금 현재는 한 명의 크리에이터의 데이터를 가져오는데 여러 크리에이터들의 데이터들을 받아오기 위해 여러개의 스크립트를 동시에 실행시켜 시간 단축 및 멀티프로세스, 멀티쓰레드 기능을 사용해 보겠다.