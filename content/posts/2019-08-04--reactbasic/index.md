---
title: React Basic
subTitle: React Basic And JSX
menuTitle: React
date: "2019-08-04 00:00:00"
category: "React"
cover: react.jpg
---

# React Basic

## React Basic

```react
import React, {Component} from 'react';
// 리액트 모듈이 설치 되어 있고 리액트를 불러와서 사용하겠다

class App extends Component {
  // 클래스를 통해 Component 생성
  render(){
    // 렌더 메소드, jxs 형태의 코드를 리턴해줘야함
    return (
      <div>
        <h1>안녕하세요, 리액트</h1>
      </div>
    );
  }
}

export default App;
```



## jxs란 ?

### 	javascript XML

- 내장형 XML, HTML과 유사하게 하게 정의된 구문 사용
- Javascript 언어의 확장
- JSX는 많은 개발자에게 친숙한 구문을 사용, 요소(구성요소)의 렌더링 구조를 지정하는 방법을 제공
- JSX는 컴파일을 하기에 최적하 되어 있음(속도)
- 컴파일을 하니 변환과정에 오류가 있을 경우 빌드 시 오류 생성



### 	jxs 예

```react
const element = <h1>Hello, World</h1>
```



### 	jxs 규칙

- 꼭 닫혀야 하는 태그

```react
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      // 아래 첫번째 input 태그를 HTML 처럼 쓴다면 닫혀있지 않으므로 오류 생성
      // 아래 두번째 input 태그 처럼 self closing 하거나 </input> 태그를 추가
      <div>
        <input type="text">
        <input type="text" />
      </div>
    );
  }
}

export default App;
```

- 감싸져 있는 앨리먼트

```react
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      // 아래의 div 태그처럼 앨리먼트가 감싸져 있지 않다면 오류 생성
      // 하나의 div 태그 안에 두개의 div 태그를 넣어 줘야 한다.
      <div>
        Hello
      </div>
      <div>
        Bye
      </div>
    );
  }
}

export default App;
```

- Fragment 사용

```react
import React, { Component, Fragment } from 'react';
// 두개의 앨리먼트를 사용하기 위해서는 Fragment를 사용하고
// 그 안에 div 태그를 넣어준다
class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          Hello
        </div>
        <div>
          Bye
        </div>
      </Fragment>
    );
  }
}

export default App;
```

- jsx 안에서 자바스크립트 값 사용하기

```react
import React, {Component} from 'react';

class App extends Component {
  render(){
    // name 변수 선언
    const name = 'react';
    return (
      // name을 사용하기 위해 name을 {}로 감싸준다
      <div>
      hello {name}!
        { 1 + 1 === 2
        	? '맞냐?'
         	: '틀리냐?'
        }
        {
          name === 'sitaruta' && <div>Godama Sitaruta</div>
        }
      </div>
		);
  }
}
```

- 조건부 렌더링

```react
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {
          // 삼항연산자 또는 앤드 연산자 사용, if문 사용 불가
          // 조건문은 JSX로직 밖에서 사용하는 것이 좋음 (switch문 사용 가능)
          1 + 1 === 2 
            ? (<div>맞아요!</div>)
            : (<div>틀려요!</div>)
        }
      </div>
    );
  }
}

export default App;
```

- style과 className

```react
import React, { Component } from 'react';

class App extends Component {
  render() {
    // 리액트에서는 스타일을 객체의 형태로 사용
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '36px'
    };
		// style에 {}를 넣어준다.
    return <div style={style}>안녕하세요!</div>;
  }
}

export default App;
```

- class 설정시 className을 사용

```css
.App {
  background : black;
  color: aqua;
  font-size:36px;
  padding: 1rem;
  font-weight: 600;
}
```

```react
import React, { Component } from 'react';
import './App.css'

class App extends Component {
  render() {
    return (
      {/*<div class="App">리액트 </div>가 아님*/}
      <div className="App">
        리액트
      </div>
    );
  }
}

export default App;
```







[누구든지 하는 리액트: 초심자를 위한 react 강좌](https://www.inflearn.com/course/react-velopert/)

[React](https://ko.reactjs.org/docs)

[누구든지 하는 리액트](http://react-anyone.vlpt.us/)







