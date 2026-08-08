import { createGlobalStyle } from "styled-components";
import AppleSDGothicNeoL from "../assets/fonts/AppleSDGothicNeoL.ttf";
import AppleSDGothicNeoB from "../assets/fonts/AppleSDGothicNeoB.ttf";
import AppleSDGothicNeoM from "../assets/fonts/AppleSDGothicNeoM.ttf";

export const GlobalStyle = createGlobalStyle`
/* ---------- CSS Reset ---------- */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}

*[hidden] {
  display: none;
}

menu, ol, ul {
  list-style: none;
  padding-left: 0;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  box-sizing: border-box;
}

/* ---------- Fonts ---------- */
@font-face {
  font-family: "AppleSDGothicNeoL";
  src: url(${AppleSDGothicNeoL});
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "AppleSDGothicNeoM";
  src: url(${AppleSDGothicNeoM});
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "AppleSDGothicNeoB";
  src: url(${AppleSDGothicNeoB});
  font-weight: normal;
  font-style: normal;
}

/* ---------- Base ---------- */
*::selection {
  color: ${(props) => props.theme.paperColor};
  background: ${(props) => props.theme.primaryColor};
}

body {
  font-family: ${(props) => props.theme.font.body};
  line-height: 1.5;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;


  background-image: linear-gradient(
      to right,
      ${(props) => props.theme.gridColor} 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      ${(props) => props.theme.gridColor} 1px,
      transparent 1px
    );
  background-size: 72px 72px;
}


body::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: ${(props) => props.theme.grainOpacity};
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

a {
  color: inherit;
  text-decoration: none;
}


:focus-visible {
  outline: 2.5px solid ${(props) => props.theme.primaryColor};
  outline-offset: 3px;
}


@keyframes risoRise {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


@keyframes risoWipe {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;
