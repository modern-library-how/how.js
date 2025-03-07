import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["dist"], // 빌드된 파일은 검사하지 않음
  },
  {
    files: ["**/*.{js,ts,jsx,ts}"], // JavaScript 및 TypeScript 파일 검사
    languageOptions: {
      ecmaVersion: 2020, // 최신 JavaScript 버전 사용
      globals: globals.browser, // 브라우저 환경에서 사용할 전역 변수
      parserOptions: {
        ecmaVersion: "latest", // 최신 ECMAScript 버전 사용
        sourceType: "module", // ES 모듈 사용
      },
    },
    rules: {
      ...js.configs.recommended.rules, // 기본 ESLint 권장 규칙 적용
      "no-unused-vars": "warn", // 사용되지 않는 변수는 경고
      "no-console": "warn", // console.log() 사용 경고
      "no-magic-numbers": ["warn", { ignore: [0, 1] }], // 매직 넘버 사용을 경고, 0과 1은 제외
      eqeqeq: "warn", // 일치 연산자(===, !==) 사용을 권장
    },
  },
];
