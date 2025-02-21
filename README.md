## ✨ 프로젝트 소개
**gyeomui**는 React UI library입니다.</br>
다양한 프로젝트를 진행하며 UI library를 사용하였을때 편리함을 느꼈습니다.</br>
그로 인해 나만의 라이브러리를 만들어보기 위하여 만든 프로젝트입니다.

- **프로젝트 개요** : 개인 프로젝트를 진행할때에 간편하게 UI를 생성을 하기 위함
- **목표** : 사용자가 간편하게 UI를 생성할 수 있는 환경 제공
- **기간** : 25.02.15 ~
</br>

## 사용 방법
```
npm i gyeomui
```
  </br>

</br>

## 🔗 STORYBOOK 배포 링크
### [moonUI Link](https://67b82b0ec2195b37ad6a0a16-bjqlpbtmww.chromatic.com/)
> chromatic으로 배포
> 
<img width="1679" alt="스크린샷 2025-02-21 오후 4 45 07" src="https://github.com/user-attachments/assets/38a3218a-8e74-4adb-b943-e22ea6827a57" />

</br>

## 🛠️ 기술 스택
react, typescript, jest, storybook, rollup, 

</br>

## 📁 폴더 구조
```
gyeomui
├─ src
│  ├─ color
      ├─ index.ts // color 모음 
│  ├─ components
│  │  ├─ Badge
│  │     └─ Badge.stories.ts // Badge Storybook
│  │     └─ Badge.tsx
│  │     └─ index.ts // import,export Badge
│  │  ├─ Button
│  │     └─ Button.stories.ts
│  │     └─ Button.test.tsx
│  │     └─ Button.tsx
│  │     └─ index.ts
  ...
│  │  ├─ index.ts // export {default as Badge} from "./Badge"; ... 
│  ├─ styles
│  │  └─ globals.css
│  ├─ index.ts // export components
├─ babel.config.js
├─ package.json
├─ postcss.config.js
├─ rollup.config.mjs
└─ tsconfig.json
```
