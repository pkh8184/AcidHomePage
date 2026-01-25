/**
 * AcidStudio 프로젝트 데이터 설정 파일
 * 
 * 이 파일에서 프로젝트를 추가/수정/삭제하세요.
 * index.html의 projectsData 배열에 이 데이터를 복사하여 사용합니다.
 */

const projectsData = [
    {
        id: 1,                              // 고유 ID (숫자, 중복 불가)
        title: "Sample Asset Pack",         // 프로젝트 제목
        category: "asset",                  // 카테고리: "asset" | "game" | "website"
        description: "Unity용 샘플 에셋 팩입니다.",  // 짧은 설명 (카드에 표시)
        fullDescription: "이 에셋 팩은 게임 개발에 필요한 다양한 리소스를 포함하고 있습니다. 3D 모델, 텍스처, 머티리얼 등이 포함되어 있어 빠른 프로토타이핑에 적합합니다.",  // 상세 설명
        thumbnail: "",                      // 썸네일 이미지 URL (비워두면 기본 플레이스홀더)
        projectUrl: "https://example.com",  // 프로젝트 링크
        
        // 약관 설정 - true/false로 사용 여부 선택
        legal: {
            termsOfService: true,           // 이용약관 사용
            privacyPolicy: true             // 개인정보 처리방침 사용
        }
    },
    {
        id: 2,
        title: "Puzzle Game",
        category: "game",
        description: "캐주얼 퍼즐 게임입니다.",
        fullDescription: "색다른 메카닉을 가진 퍼즐 게임입니다. 직관적인 조작법과 점진적인 난이도 상승으로 누구나 즐길 수 있습니다.",
        thumbnail: "",
        projectUrl: "https://example.com",
        legal: {
            termsOfService: true,
            privacyPolicy: true
        }
    },
    {
        id: 3,
        title: "Portfolio Website",
        category: "website",
        description: "포트폴리오 웹사이트 템플릿",
        fullDescription: "개발자와 디자이너를 위한 포트폴리오 웹사이트 템플릿입니다. 반응형 디자인과 다크 테마를 지원합니다.",
        thumbnail: "",
        projectUrl: "https://example.com",
        legal: {
            termsOfService: false,          // 이 프로젝트는 이용약관 미사용
            privacyPolicy: true
        }
    }
];

/**
 * 프로젝트 추가 예시:
 * 
 * {
 *     id: 4,
 *     title: "새 프로젝트",
 *     category: "game",
 *     description: "새로운 게임 프로젝트입니다.",
 *     fullDescription: "상세한 설명을 여기에 작성하세요.",
 *     thumbnail: "https://example.com/image.png",
 *     projectUrl: "https://play.google.com/store/apps/...",
 *     legal: {
 *         termsOfService: true,
 *         privacyPolicy: true
 *     }
 * }
 */

/**
 * 약관 내용 설정
 * legalContent 객체에서 이용약관과 개인정보 처리방침 내용을 수정하세요.
 */
const legalContent = {
    termsOfService: {
        title: "이용약관",
        lastUpdated: "2025년 1월 25일",
        content: `
            <h2>제1조 (목적)</h2>
            <p>본 약관은 AcidStudio(이하 "회사")가 제공하는 서비스의 이용조건 및 절차를 규정합니다.</p>
            
            <!-- 여기에 이용약관 내용을 HTML 형식으로 작성하세요 -->
        `
    },
    privacyPolicy: {
        title: "개인정보 처리방침",
        lastUpdated: "2025년 1월 25일",
        content: `
            <h2>1. 개인정보의 수집 및 이용 목적</h2>
            <p>회사는 서비스 제공을 위해 개인정보를 수집합니다.</p>
            
            <!-- 여기에 개인정보 처리방침 내용을 HTML 형식으로 작성하세요 -->
        `
    }
};

/**
 * 카테고리 설정
 */
const categories = [
    { id: 'all', name: '전체', icon: '🎯' },
    { id: 'asset', name: '에셋', icon: '📦' },
    { id: 'game', name: '게임', icon: '🎮' },
    { id: 'website', name: '홈페이지', icon: '🌐' }
];
