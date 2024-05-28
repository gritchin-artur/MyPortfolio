"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[973],{8973:(n,e,t)=>{t.r(e),t.d(e,{default:()=>x});var i,s,a=t(2791),o=t(168),r=t(5867);const c=r.ZP.div(i||(i=(0,o.Z)(["\n  width: 100%;\n  height: 50px;\n  /* border: 1px solid red; */\n  border-radius: 5px;\n  box-sizing: border-box;\n    display: flex;\n    align-items: center;\n  position: fixed;\n  z-index: 1000;\n  justify-content: center;\n  margin-top: 10px;\n\n\n  .HeaderList {\n    display: flex;\n    list-style: none;\n    max-width: 500px;\n    margin: 0;\n    padding: 0;\n    justify-content: space-evenly;\n    color: white;\n    font-size: larger;\n     backdrop-filter: blur(8px);\n     -webkit-backdrop-filter: blur(10px);\n     border-radius: 20px;\npadding: 20px 40px;\n     gap: 30px;\n    @media only screen and (max-width: 768px) {\n      display: none;\n    }\n\n      @media only screen and (min-width: 768px) {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  }\n\n  .HeaderItem {\n    cursor: pointer;\n    transition: transform 0.3s ease;\n    &:hover {\n      transform: scale(1.1);\n    }\n  }\n\n  .HeaderItem.active {\n  color: black;\n}\n\n  .LinkToContainer {\n    text-decoration: none;\n    /* color: #fff; */\n\n    @media only screen and (max-width: 768px) {\n      font-size: 12px;\n    }\n  }\n\n  .BurgerMenu {\n    @media only screen and (max-width: 768px) {\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      width: 30px;\n      height: 20px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      cursor: pointer;\n      z-index: 1000;\n    }\n  }\n\n  .BurgerLine {\n    @media only screen and (max-width: 768px) {\n      width: 30px;\n      height: 4px;\n      background-color: white;\n      transition: transform 0.3s ease, opacity 0.3s ease, top 0.3s ease;\n\n      ","\n    }\n  }\n"])),(n=>{let{open:e}=n;return e&&"\n    &:nth-child(1) {\n      transform: rotate(45deg);\n            margin-top: 9px;\n            height: 200px;\n    }\n    &:nth-child(2) {\n      opacity: 0;\n    }\n    &:nth-child(3) {\n      transform: rotate(-45deg);\n      margin-bottom: 9px;\n      height: 200px;\n    }\n  "})),l=r.ZP.div(s||(s=(0,o.Z)(["\ndisplay: none;\n  @media only screen and (max-width: 768px) {\n    position: fixed;\n    top: 0;\n    right: 0;\n    width: 40%;\n    height: 100%;\n    backdrop-filter: blur(20px);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 100;\n    transition: transform 0.5s ease, visibility 0.5s ease;\n\n    transform: ",";\n    visibility: ",";\n\n    .HeaderList {\n      display: grid;\n      gap: 20px;\n    }\n\n    .HeaderItem {\n      font-size: 25px;\n      font-weight: 800;\n      text-align: center;\n      font-family: serif;\n    }\n  }\n"])),(n=>{let{open:e}=n;return e?"translateX(0)":"translateX(100%)"}),(n=>{let{open:e}=n;return e?"visible":"hidden"}));var d=t(4164),p=t(184);const m=document.querySelector("#modal-root");function x(){const[n,e]=(0,a.useState)(!1),[t,i]=(0,a.useState)(!1);(0,a.useEffect)((()=>{const n=n=>{"Escape"===n.code&&e(!1)},t=document.getElementById("root"),i=n=>{e(!1)};return document.addEventListener("keydown",n),t.addEventListener("click",i),()=>{document.removeEventListener("keydown",n),t.removeEventListener("click",i)}}),[n]);const s=n=>{document.getElementById("section-".concat(n)).scrollIntoView({behavior:"smooth"})};(0,a.useEffect)((()=>{const n=document.getElementById("section-portfolio"),e=new IntersectionObserver((n=>{n.forEach((n=>{n.isIntersecting?i(!0):i(!1)}))}),{threshold:.5});return n&&e.observe(n),()=>{n&&e.unobserve(n)}}),[]);const o=(0,a.useMemo)((()=>(0,d.createPortal)((0,p.jsx)(l,{open:n,children:(0,p.jsxs)("ul",{className:"HeaderList",children:[(0,p.jsx)("li",{className:"HeaderItem",onClick:()=>s("main"),children:"Main"}),(0,p.jsx)("li",{className:"HeaderItem",onClick:()=>s("aboutMe"),children:"About me"}),(0,p.jsx)("li",{className:"HeaderItem",onClick:()=>s("portfolio"),children:"Portfolio"}),(0,p.jsx)("li",{className:"HeaderItem",onClick:()=>s("hard-skils"),children:"Skils"}),(0,p.jsx)("li",{className:"HeaderItem",onClick:()=>s("contacts"),children:"Contacts"})]})}),m)),[n]);return(0,p.jsxs)(c,{open:n,children:[(0,p.jsxs)("div",{className:"BurgerMenu",onClick:()=>{e(!n)},children:[(0,p.jsx)("span",{className:"BurgerLine",style:{position:"relative",top:0}}),(0,p.jsx)("span",{className:"BurgerLine",style:{position:"relative",top:0}}),(0,p.jsx)("span",{className:"BurgerLine",style:{position:"relative",top:0}})]}),o,(0,p.jsxs)("ul",{className:"HeaderList",children:[(0,p.jsx)("li",{className:"HeaderItem ".concat(t?"active":""),onClick:()=>s("main"),children:"Main"}),(0,p.jsx)("li",{className:"HeaderItem ".concat(t?"active":""),onClick:()=>s("aboutMe"),children:"About me"}),(0,p.jsx)("li",{className:"HeaderItem ".concat(t?"active":""),onClick:()=>s("portfolio"),children:"Portfolio"}),(0,p.jsx)("li",{className:"HeaderItem ".concat(t?"active":""),onClick:()=>s("hard-skils"),children:"Skils"}),(0,p.jsx)("li",{className:"HeaderItem ".concat(t?"active":""),onClick:()=>s("contacts"),children:"Contacts"})]})]})}}}]);
//# sourceMappingURL=973.4ee277f5.chunk.js.map