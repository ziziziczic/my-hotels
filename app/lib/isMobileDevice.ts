// User-Agent 문자열을 기반으로 모바일 여부를 판단하는 헬퍼 함수
export const isMobileDevice = (userAgent: string) => {
  // 일반적인 모바일 기기 User-Agent 식별자들
  const mobileRegex =
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|rim)|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
  const tabletRegex = /android|ipad|playbook|silk/i; // 태블릿도 모바일로 간주할지 여부는 비즈니스 로직에 따라 다름

  return mobileRegex.test(userAgent) || tabletRegex.test(userAgent);
};
