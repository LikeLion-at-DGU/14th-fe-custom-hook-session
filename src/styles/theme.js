const font = {
  display: `"Archivo", "AppleSDGothicNeoB", sans-serif`,
  mono: `"DM Mono", "AppleSDGothicNeoM", ui-monospace, monospace`,
  body: `"AppleSDGothicNeoM", "Archivo", sans-serif`,
};

export const light = {
  font,

  bgColor: "#F5F0E6", // 따뜻한 종이색 배경
  cardColor: "#FFFDF8", // 카드 배경 (배경보다 아주 살짝 밝게)
  textColor: "#17120D", // 기본 글자색 (잉크 블랙)
  subTextColor: "#6B5F52", // 보조 글자색
  primaryColor: "#FF4D14", // 메인 오렌지 (형광 잉크 한 도수)
  primaryLight: "#FFE2D2", // 연한 오렌지 (배경용)
  primaryDark: "#C7300A", // 진한 오렌지 (hover용)
  borderColor: "#17120D", // 테두리 = 잉크선. 흐린 회색 대신 또렷한 검정을 씁니다
  shadowColor: "rgba(23, 18, 13, 0.12)", // 아주 가끔 쓰는 부드러운 그림자

  inkColor: "#17120D", // 하드 오프셋 그림자에 쓰는 잉크색
  paperColor: "#F5F0E6", // 종이색 (배경과 동일, 의미상 구분용)
  gridColor: "rgba(23, 18, 13, 0.05)", // 배경 모눈
  grainOpacity: 0.16, // 종이 질감(노이즈) 세기
};

export const dark = {
  font,

  bgColor: "#14100C",
  cardColor: "#1E1812",
  textColor: "#F7F1E6",
  subTextColor: "#A29483",
  primaryColor: "#FF6B33",
  primaryLight: "#3A241A",
  primaryDark: "#FF8A5C",
  borderColor: "#F7F1E6",
  shadowColor: "rgba(0, 0, 0, 0.35)",

  inkColor: "#000000",
  paperColor: "#14100C",
  gridColor: "rgba(247, 241, 230, 0.05)",
  grainOpacity: 0.1,
};
