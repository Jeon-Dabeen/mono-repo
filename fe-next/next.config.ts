import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Azure App Service 배포용: 실행에 필요한 최소 파일만 .next/standalone 에 생성
  output: "standalone",
};

export default nextConfig;
