# 💸 Money History
<br/>

## 👩‍💻 프로젝트 소개
- 내일배움캠프 개인프로젝트
- 개발기간: 2024.06.10 ~ 2024.06.14 (4일간)
- 사이트 방문하기: [money history](https://money-history.vercel.app/)
<br/>

## ✔️ 필수 요구 사항
 - ✅ **`회원가입/로그인/로그아웃`** 으로 유저 정보 다루기
 - ✅ **`json-server`** 를 이용해 지출 데이터 CRUD 구현
 - ✅ **`Axios`** 을 이용하여 api 다루기
 - ✅ **`TanStack Query`** 사용해서 전역상태 관리하기

<br/>

## ❗이렇게 구현했어요

### 🗂️ src 폴더 구조
```
📦src
 ┣ 📂api
 ┣ 📂components
 ┃ ┣ 📂CreateHistory
 ┃ ┣ 📂Header
 ┃ ┣ 📂Layout
 ┃ ┃ ┣ 📂AuthLayout
 ┃ ┃ ┗ 📂BaseLayout
 ┃ ┣ 📂Loading
 ┃ ┣ 📂Login
 ┃ ┣ 📂Modal
 ┃ ┣ 📂MoneyHistoryList
 ┃ ┣ 📂MoneyItem
 ┃ ┣ 📂MonthItem
 ┃ ┣ 📂MonthList
 ┃ ┣ 📂SelectBox
 ┃ ┗ 📂SignUp
 ┣ 📂hooks
 ┣ 📂images
 ┣ 📂pages
 ┃ ┣ 📂DetailPage
 ┃ ┣ 📂MainPage
 ┃ ┗ 📂MyPage
 ┣ 📂routes
 ┣ 📂styles
 ┣ 📂zustand
 ┣ 📜App.jsx
 ┗ 📜main.jsx
```

### 🛠️ 기능
- #### 회원가입/로그인/로그아웃
- #### 프로필 수정
- #### 지출내역 CRUD

<br/>

## 🗨️ 회고
> supabase와 같은 클라우드 서비스가 아닌 json server로 직접 api를 다루게 되어서 axios에 대해 잘 알게 된 것 같다. 또한 api의 값을tanstack query로 사용하게 되니까 상태를 관리하는게 정말 쉬워져서 클라이언트에서 상태를 관리하는 것이 거의 없어서 편리했다. 또한 zustand를 사용해서 간단하게 관리해보니까 redux보다 덜 복잡하고 사용하는 법도 비슷해서 조금 얼떨떨하게 이것만 하면되나? 몇번을 확인했다. auth 쪽 api와 지출관리하는 api가 호출하는 곳이 달라서 프로필을 업데이트하면 지출 목록에 반영이 안되는 것이 아쉽다.
