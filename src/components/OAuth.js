const REST_API_KEY = "df7ca3c2c0f86cf4b849e955219ccbea";
const REDIRECT_URI = "http://localhost:3000/ttangtoto/kakaoLogin";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
