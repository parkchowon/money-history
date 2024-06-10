# 💸 Money History
<br/>

## 👩‍💻 프로젝트 소개
- 내일배움캠프 개인프로젝트
- 개발기간: 2024.05.22 ~ 2024.05.29 (4일간)
<br/>

## ✔️ 필수 요구 사항
 - ✅ **`styled-components`** 를 이용하여 스타일링 사용하기
 - ✅ **`props drilling`, `context-api`, `redux`** 3가지 방식으로 state 관리하기
 - ✅ **`react-router-dom`** 을 이용하여 페이지 전환하기
 - ✅ **`useState`, `useEffect`, `useRef`** 사용하기
 - ✅ **`uuid`** 라이브러리 이용하기

<br/>

## ❗이렇게 구현했어요

### 🗂️ src 폴더 구조
```
📦src
 ┣ 📂components
 ┃ ┣ 📂CreateHistory
 ┃ ┣ 📂Modal
 ┃ ┣ 📂MoneyHistoryList
 ┃ ┣ 📂MoneyItem
 ┃ ┣ 📂MonthItem
 ┃ ┣ 📂MonthList
 ┃ ┗ 📜Header.jsx
 ┣ 📂hooks
 ┃ ┣ 📜useInput.js
 ┃ ┗ 📜useRefInput.js
 ┣ 📂pages
 ┃ ┣ 📂DetailPage
 ┃ ┗ 📂MainPage
 ┣ 📂redux
 ┃ ┣ 📂reducers
 ┃ ┃ ┗ 📜money.reducer.js
 ┃ ┗ 📂stores
 ┃ ┃ ┗ 📜store.js
 ┣ 📂routes
 ┃ ┗ 📜router.jsx
 ┣ 📂styles
 ┣ 📜App.jsx
 ┗ 📜main.jsx
```

### 🛠️ 기능
- **필수요구사항**을 만족시켰어요!
- **localStorage**를 이용해서 state값을 저장했어요.
- useState, useRef를 사용해서 **custom Hook**을 만들었어요.
- **React Router v6**를 사용했어요.
- 삭제할 때 alert를 **모달**창을 이용해서 구현했어요.
- **조건부 스타일링**으로 월별 버튼 색을 바꿨어요.

### `props-drilling`
- App.jsx에 BrowserRouter, Routes, Route로 routing했어요.
- MainPage와 DetailPage에서 모든 state를 props로 내려주는 방식으로 관리했어요.

### `context-API`
- routes 폴더를 만들어 react router v6 방식으로 관리했어요.
- contexts 폴더에서 moneyContext.js를 만들어서 context를 만들었어요.
- app.jsx 파일에서 만든 moneyContext.Provider로 감쌌어요.
- state값이 필요한 컴포넌트 안에서 useContext를 사용해서 필요한 state를 사용했어요.

### `redux`
- 마찬가지로 react router v6 방식으로 routing했어요.
- redux-tookit을 사용했어요.
- redux 폴더안에 stores랑 reducers 폴더로 store.js랑 money.reducer.js파일로 전역상태관리를 했어요.
- action type으로 `ADD_MONEY_LIST`, `CHANGE_MONTH`, `UPDATE_MONEY_LIST`, `DELETE_MONEY_LIST`가 있어요.


## 🖥️ 구현 화면

<img src="https://github.com/parkchowon/moneyHistory/assets/70216263/6d552878-cec4-48a4-9c52-41f3a6bdc356" />

#### [🔼 돈 내역 생성]

![update_money](https://github.com/parkchowon/moneyHistory/assets/70216263/37d8d395-e204-4fa4-b5fe-e0ad1943ffb9)

#### [🔼 상세페이지 및 수정 기능]

![delete_money](https://github.com/parkchowon/moneyHistory/assets/70216263/7d7f1583-6b88-432d-a6cc-fdf09412cf7c)

#### [🔼 모달창 및 삭제 기능]

<br />
<br />

## 🗨️ 회고
> props drilling부터 context api, redux까지 다 공부해보니 상태 관리가 얼마나 중요하고 어떻게 component를 나눠야 되는지 계속 고심하며 최대한 불필요한 리렌더링이 없게 로직을 세워봤다. <br><br> 확실히 props drilling를 쓸 때, component들이 그렇게 깊게 생긴것이 아님에도 어떤 값을 다루는데에 자꾸 상위 컴포넌트를 확인하게 되고 가독성이 떨어지고 유지보수하기가 힘들었다. context api로 관리하니까 전역에서 값을 꺼내써서 편해졌지만 리렌더링이 계속된다는 단점때문에 app.jsx와 같은 최상단 컴포넌트에서 관리하기는 힘들 것 같다는 생각이 들었다. redux로는 store에서 값을 꺼내서 관리하게 되니까 불필요한 리렌더링이 확 줄어들게 되었고 state도 어떻게 관리되는지 한눈에 잘 들어온다는 생각이 들었다. <br><br> 상태 관리에 대해 좀 더 친숙해지는 프로젝트가 된 것 같다.
