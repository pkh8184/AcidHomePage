# AcidStudio Portfolio Website

레퍼런스(Dustyroom)를 참고하여 제작된 포트폴리오 홈페이지입니다.

## 🚀 시작하기

### 로컬에서 실행
```bash
# 프로젝트 폴더로 이동
cd acidstudio-portfolio

# 간단한 로컬 서버 실행 (Python 3)
python -m http.server 8000

# 또는 Node.js 사용시
npx serve
```

브라우저에서 `http://localhost:8000` 접속

### GitHub Pages 배포
1. GitHub 저장소 생성
2. 파일 업로드
3. Settings > Pages > Source를 `main` 브랜치로 설정

## 📁 파일 구조

```
acidstudio-portfolio/
├── index.html      # 메인 홈페이지 (모든 코드 포함)
├── config.js       # 설정 파일 가이드 (참고용)
└── README.md       # 사용 설명서
```

## ✏️ 프로젝트 추가/수정하기

`index.html` 파일 내의 `projectsData` 배열에서 프로젝트를 관리합니다.

### 새 프로젝트 추가 예시

```javascript
{
    id: 4,                              // 고유 ID (중복 불가)
    title: "새 프로젝트",                // 프로젝트 제목
    category: "game",                   // 카테고리: "asset" | "game" | "website"
    description: "짧은 설명",            // 카드에 표시되는 설명
    fullDescription: "상세 설명...",     // 상세 페이지 설명
    thumbnail: "이미지URL",              // 썸네일 (비워두면 기본 표시)
    projectUrl: "https://...",          // 프로젝트 링크
    legal: {
        termsOfService: true,           // 이용약관 표시 여부
        privacyPolicy: true             // 개인정보처리방침 표시 여부
    }
}
```

### 카테고리 종류
- `asset` - 에셋 (초록색)
- `game` - 게임 (핑크색)
- `website` - 홈페이지 (보라색)

## 📋 약관 수정하기

`index.html` 파일 내의 `legalContent` 객체에서 약관 내용을 수정합니다.

```javascript
const legalContent = {
    termsOfService: {
        title: "이용약관",
        lastUpdated: "2025년 1월 25일",
        content: `
            <h2>제1조 (목적)</h2>
            <p>내용...</p>
        `
    },
    privacyPolicy: {
        title: "개인정보 처리방침",
        lastUpdated: "2025년 1월 25일",
        content: `...`
    }
};
```

## 🎨 디자인 커스터마이징

### 색상 변경
`index.html` 상단의 CSS 변수를 수정:

```css
:root {
    --bg-primary: #0a0a0f;          /* 메인 배경색 */
    --accent-primary: #00ff88;       /* 강조색 (초록) */
    --accent-secondary: #ff3366;     /* 강조색 (핑크) */
    --accent-tertiary: #6c5ce7;      /* 강조색 (보라) */
}
```

### 로고 변경
`.logo-section` 부분에서 로고 이미지를 추가하거나 텍스트를 변경

### 디스코드 링크 변경
`social-links` 섹션에서 Discord 초대 링크 수정:
```html
<a href="https://discord.gg/your-invite-code" ...>
```

## 🖼️ 썸네일 이미지 추가

### 방법 1: 외부 URL 사용
```javascript
thumbnail: "https://imgur.com/your-image.png"
```

### 방법 2: 같은 폴더에 이미지 추가
```javascript
thumbnail: "./images/project1.png"
```
※ `images` 폴더를 만들고 이미지 파일을 넣어야 합니다.

### 방법 3: GitHub에 이미지 업로드
```javascript
thumbnail: "https://raw.githubusercontent.com/username/repo/main/images/project1.png"
```

## 📱 반응형 지원

- 데스크톱: 사이드바 고정, 그리드 레이아웃
- 태블릿: 좁은 사이드바
- 모바일: 세로 레이아웃

## 🔧 기술 스택

- HTML5
- CSS3 (CSS Variables, Grid, Flexbox)
- React 18 (CDN)
- 순수 JavaScript

## 📝 라이센스

MIT License

---

Made with ❤️ by AcidStudio
