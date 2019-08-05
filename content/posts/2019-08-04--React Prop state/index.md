---
title: React Props And State
subTitle: React Basic
menuTitle: React
date: "2019-08-05 00:00:00"
category: "React"
cover: react.jpg
---

# props와 state

- 리액트 컴포넌트에서 다루는 데이터는 두개로 나뉨, props와 state
- props: 부모 컴포넌트가 자식 컴포넌트에게 주는 값 (자식 컴포넌트에서는 props를 받아오기만 하고, 받아온 props를 직접 수정은 불가)
- state: 컴포넌트 내부에서 선언 내부에서 값 변경 가능

## 새 컴포넌트 만들기

- src

```react
import React, { Component } from 'react';

// 같은 디렉토리에 Myname 컴포넌트 생성
class MyName extends Component {
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

export default MyName;
```

- App.js

```react
import React, { Component } from 'react';
 // MyName이란 파일을 import해 온다
import MyName from './MyName';

class App extends Component {
  render() {
    return (
      {/*name="리액트"로 속정을 설정해줌*/}
      <MyName name="리액트" />
    );
  }
}

export default App;
```

## defaultProps

- props의 기본값을 설정해 줄때

```react
import React, { Component } from 'react';

class MyName extends Component {
  // default값 설정
  static defaultProps = {
    name: '기본이름'
  }
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

export default MyName;
```

```react
import React, { Component } from 'react';

class MyName extends Component {
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}
{/*default값을 설정하는 다른 방법*/}
MyName.defaultProps = {
  name: '기본이름'
};

export default MyName;
```

## 함수형 컴포넌트

- 단순히 props만 받아와서 보여주기만 하는 컴포넌트의 경우 간편한 문법

```react
import React from 'react';

const MyName = ({ name }) => {
  return (
    <div>
      안녕하세요! 제 이름은 {name} 입니다.
    </div>
  );
};

export default MyName;
```

## state

- 동적데이터를 다룰때

```react
import React, { Component } from 'react';
//컴포넌트의 state를 정의할 때는 class filed 문법을 사용해서 정의
class Counter extends Component {
  state = {
    number: 0
  }

// 작성 메소드
// state에 있는 값을 바꾸기 위해서는, this.setState를 무조건 거쳐야함
// 리액트에선, 이 함수가 호출 되면 컴포넌트가 리렌더링 되도록 설계
  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  }

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
```

- setState

```react
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  }

	// setState에 객체 대신 함수 전달하기
	// 아래의 두가지 방법중 하나를 선택
  handleIncrease = () => {
    // (state) 가 ({number})가 되는 것을
    // 비구조화 할당이라 한다.
		({number}) => ({
      number : number + 1
    })
  }

  handleDecrease = () => {
  	const {number} = this.state;
    this.setState({
      number: number + 1
    });
  }

/*
  메소드에 화살표 함수가 아닌 일반 함수를 쓰고 싶은 경우
	컨스트럭터를 생성하고 메소드에 this를 bind 하여
	this가 component를 가리키도록 한다.
  constructor(props) {
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  handleIncrease() {
    this.setState({
      number: this.state.number + 1
    });
  };

  handleDecrease() {
    this.setState({
      number: this.state.number - 1
    });
  };
*/
```

## 이벤트 설정

```react
render() {
	return (
		<div>
			<h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
     </div>
    );
  }
}
```

- 리액트에서 이벤트 함수 설정시 주의점

  - 이벤트 이름은 camelCase로 설정 'onclick'은 'onClick', 'onmousedown'은 'onMouseDown'

  - 이벤트에 전달해 주는 값은 함수여야함 함수의 값이면 안 된다.

    {this.handleIncrease()} 이런식으로 하게 되면 렌더링 할 때마다 해당 함수가 호출

[누구든지 하는 리액트: 초심자를 위한 react 강좌](https://www.inflearn.com/course/react-velopert/)

[React](https://ko.reactjs.org/docs)

[누구든지 하는 리액트](http://react-anyone.vlpt.us/)
