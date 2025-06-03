/** @type {import('next').NextConfig} */ // JSDoc을 사용하여 타입 힌트를 얻을 수 있습니다.
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_BASE_URL:
      process.env.NODE_ENV === 'production'
        ? 'https://your-app-domain.com'
        : 'http://localhost:3000',
  },
};

module.exports = nextConfig; // CommonJS 방식으로 내보내기 (가장 일반적)
