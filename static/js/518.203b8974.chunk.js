"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[518],{7358:(e,t,n)=>{n.r(t),n.d(t,{default:()=>J});var i,a,o=n(2791),r=n(4164),s=n(168),c=n(5867);const l=c.ZP.div(i||(i=(0,s.Z)(['\n  width: 100%;\n  padding: 50px 30px;\n  box-sizing: border-box;\n\n  .TitleMyProject {\n    margin-top: 20px;\n    text-align: center;\n    font-family: math;\n    font-weight: 900;\n    font-size: xxx-large;\n  }\n\n  .ProjectList {\n    display: flex;\n  }\n\n  .ProjectItem {\n    padding: 20px;\n    display: block;\n    background: linear-gradient(to bottom right, #8080804d, white);\n    border-radius: 10px;\n    width: 50%;\n    @media only screen and (min-width: 768px) {\n      display: grid;\n      grid-template-areas:\n        "t i"\n        "t i"\n        "t i"\n        "l l";\n    }\n  }\n\n  .TitleProject {\n    align-items: center;\n    font-family: math;\n    font-weight: 900;\n    font-size: 30px;\n  }\n\n  .PicturesContainer {\n    width: 100%;\n    @media only screen and (min-width: 768px) {\n      grid-area: t;\n    }\n  }\n\n  .Description {\n    margin-top: 10px;\n    max-height: 150px;\n    overflow: auto;\n    font-family: math;\n    font-weight: 900;\n    font-size: 12px;\n\n    @media only screen and (min-width: 768px) {\n      max-height: 250px;\n    }\n  }\n\n  .Img {\n    cursor: pointer;\n    border-radius: 10px;\n    width: 100%;\n\n    margin-top: 20px;\n    box-shadow: 0px 4px 8px rgba(0, 0, 0, 1);\n\n    transition: transform 0.3s ease;\n    &:hover {\n      transform: scale(1.02) rotate(-2deg);\n    }\n\n    @media only screen and (min-width: 768px) {\n      margin-top: 0px;\n      margin-left: 10px;\n    }\n  }\n\n  .Role {\n    font-family: Roboto, sans-serif;\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 1.2;\n\n    color: grey;\n    margin-top: 10px;\n    text-align: center;\n  }\n\n  .ImageContainer {\n    @media only screen and (min-width: 768px) {\n      grid-area: i;\n    }\n  }\n\n  .LinkList {\n    display: flex;\n    gap: 20px;\n    justify-content: center;\n    margin-top: 30px;\n  }\n\n  .LinkItem {\n    cursor: pointer;\n    display: flex;\n    gap: 5px;\n    align-items: center;\n\n    color: gray;\n    padding: 5px;\n    border: 2px solid grey;\n    border-radius: 10px;\n    text-decoration: none;\n\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 1.2;\n    transition: transform 0.3s ease;\n    &:hover {\n      transform: scale(1.1) rotate(-2deg);\n    }\n  }\n\n  .TechnologieList {\n    display: flex;\n    gap: 10px;\n    margin-top: 20px;\n\n    width: 100%;\n    flex-wrap: wrap;\n\n    @media only screen and (min-width: 768px) {\n      grid-area: l;\n    }\n  }\n\n  .TechnologieElement {\n    font-family: Roboto, sans-serif;\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 1.2;\n\n    border-radius: 10px;\n    border: solid 2px;\n    padding: 5px;\n    box-sizing: border-box;\n    white-space: nowrap;\n  }\n']))),d=c.ZP.div(a||(a=(0,s.Z)(["\n  position: fixed;\n  overflow-y: auto;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.3);\n  z-index: 1200;\n\n  .ModalDiv {\n    border-radius: 10px;\n    max-width: calc(100vw - 15%);\n    max-height: calc(100vh - 15%);\n  }\n"]))),h=n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 2024-05-03 \u0432 15.22.44.81c01c76c62e8edf7681.png",p=n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 2024-05-03 \u0432 15.25.42.7576b9f2d92e3d136ec4.png",g=n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 2024-05-03 \u0432 15.25.50.cfc3f6ab47638d82f430.png",m=n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 2024-05-03 \u0432 15.25.59.4ee075df9e55d68931d3.png",f=n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 2024-05-03 \u0432 15.26.06.7812ff97b523b00796ac.png",u=n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 2024-05-07 \u0432 20.20.19.3820356af5a3d2af29e2.png",b=n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 2024-05-07 \u0432 20.20.40.8a962351fe4b85c5be9c.png",w=n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 2024-05-07 \u0432 20.20.48.4fa57c9e9fb5314299d7.png",y=n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 2024-05-07 \u0432 20.20.53.ce70e70535d02fb895ad.png",x=n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 2024-05-07 \u0432 20.20.59.0c796a7f695bd634ebba.png",v=n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 2024-05-07 \u0432 21.05.26.616fc4e260f05c9371c7.png",T=n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 2024-05-07 \u0432 21.47.01.28fb750aca79e69b2bcd.png",j=n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 2024-05-07 \u0432 21.47.04.d5df7f364b9ae910d31b.png",k=n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 2024-05-07 \u0432 21.47.12.aae4b79dd7be2b85dde0.png",R=n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 2024-05-07 \u0432 21.47.25.4aed2c2a98461dd4a630.png",P=n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 2024-05-07 \u0432 21.47.50.6f9ee221c2cafea03151.png",I=[{project:"Read Journey",pictures:[h,p,g,m,f],linkToLivePage:"https://gritchin-artur.github.io/ReadJourney/",linktoProjectGit:"https://github.com/gritchin-artur/ReadJourney",description:"If the user is registered, he is taken to the \u201cHome\u201d page, which contains a list of recommended books as well as a form for sorting by book title and author. The user has the opportunity to add a book from the favorites list to their collection. There is also a \u201cMy library\u201d page on which there is also a list of recommended books, a form with which you have the opportunity to add your own book, as well as a list of your books. By clicking on one of your own books, you can go to the page for reading this book, this page has an input for entering the page number, and statistics on reading this book are shown!",role:"Own Project",technologies:["FORMIC","AXIOS","JAVA SCRIPT","REACT","REDUX","REACT-ROUTER"]},{project:"Vocab Builder",pictures:[u,b,w,y,x],linkToLivePage:"https://gritchin-artur.github.io/VocabBuilder/",linktoProjectGit:"https://github.com/gritchin-artur/VocabBuilder",description:"This is a three-page site with login and registration options. If the user is registered, he has the ability to add and remove favorites! In the \u201cDictionary\u201d section there is a list of your words with the ability to filter them, and you can also correct and delete words from your list. In the \u201cRecomend\u201d section there is a list of words that you can add to your list for study; there is also the ability to filter words, which will allow you to find words that are suitable for you. In the \u201cTraining\u201d section, you can test yourself on your knowledge of words from your list; you will be shown the percentage of words you have learned.",role:"Own Project",technologies:["FORMIC","AXIOS","JAVA SCRIPT","REACT","REDUX","REACT-ROUTER"]},{project:"Learn Lingo",pictures:[v],linkToLivePage:"https://gritchin-artur.github.io/LearnLingo/",linktoProjectGit:"https://github.com/gritchin-artur/LearnLingo",description:"This is a three-page site with Login and Registration capabilities. If the user is registered, the user has the ability to add and remove favorites! The Teachers section has the ability to filter teachers, allowing you to find the right teacher for you! Once you select a teacher you like, you can book a lesson.",role:"Own Project",technologies:["FORMIC","AXIOS","REACT","REDUX","REACT-ROUTER","FireBaseDb"]},{project:"Healthy Hub",pictures:[n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 2024-05-07 \u0432 22.17.34.c5dfb0739cff1d53fd6c.png",n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 2024-05-07 \u0432 22.20.05.2de83ebc236a1025a5a0.png",n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 2024-05-07 \u0432 22.20.18.2a007525f0958e5cb7f1.png",n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 2024-05-07 \u0432 22.20.26.4f03dfb4c7f99e3abd65.png",n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 2024-05-07 \u0432 22.20.32.79696c07e5fa5e9d83bb.png"],linkToLivePage:"https://songlad.github.io/HEALTH_EN/",linktoProjectGit:"https://github.com/SonGlad/HEALTH_EN",description:"The home page shows 5 small blocks where the user can monitor their daily water and calorie targets. There is also a view of a diary with meals and the ability to remove them. Additionally, the app has a function to create customized food suggestions tailored to the user's nutritional requirements. On the Dashboard page, the user can view their results and accomplishments month-by-month in the form of clear and user-friendly charts. The Settings page allows the user to set their main information likes name, age, weight, goals and many others. The user can also change their password. The page also has a function to update the avatar.",role:"Developer",technologies:["FORMIC","AXIOS","JAVA SCRIPT","REACT","REDUX","REACT-ROUTER"]},{project:"Tasty Treats",pictures:[T,j,k,R,P],linkToLivePage:"https://sheremeta-ivan.github.io/Project-JS-TastyTreats/",linktoProjectGit:"https://github.com/Sheremeta-Ivan/Project-JS-TastyTreats?tab=readme-ov-file",description:"This is a one-page application for those who love to cook delicious food. The application will help you find food according to your taste and preference, show you cooking recipes via video and in writing, and you also have the opportunity to sign up for cooking training! The application has light and dark themes.",role:"Developer",technologies:["LODASH","AXIOS","JAVA SCRIPT","NOTIFLIX","CSS","HTML"]}];var E,C=n(9705);function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},L.apply(null,arguments)}function z(e,t){let{title:n,titleId:i,...a}=e;return o.createElement("svg",L({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:12,height:12,viewBox:"0 0 512 512",ref:t,"aria-labelledby":i},a),n?o.createElement("title",{id:i},n):null,E||(E=o.createElement("path",{d:"M256 0C114.842 0 0 114.842 0 256s114.842 256 256 256 256-114.842 256-256S397.158 0 256 0zm-61.73 34.43c-10.879 10.942-20.817 25.328-29.403 43.945-6.558 14.217-12.228 30.589-16.964 46.343H67.21C97.373 81.395 142.101 49 194.27 34.43zM51.43 150.974h89.971c-6.111 28.882-9.67 60.39-10.408 91.897H26.607c1.791-32.82 10.543-63.015 24.823-91.897zM26.673 269.128h104.35c.8 32.82 4.418 64.328 10.6 91.897H51.98c-14.446-27.569-23.366-57.763-25.307-91.897zm41.26 118.154h80.266c4.676 17.067 10.245 31.772 16.666 45.693 8.413 18.238 18.206 32.647 28.936 43.817-51.55-14.516-95.806-46.187-125.868-89.51zm174.939 96.319c-24.944-8.623-51.007-42.493-67.465-96.319h67.465v96.319zm0-122.575H168.34c-6.236-26.256-10.214-57.764-11.062-91.897h85.593v91.897zm0-118.154h-85.613c.776-31.508 4.54-63.015 11.001-91.897h74.612v91.897zm0-118.154H175.26c3.898-11.815 8.174-24.25 13.232-35.216 15.353-33.288 34.687-54.59 54.38-61.13v96.346zm242.521 118.154H381.007c-.738-31.508-4.296-63.015-10.408-91.897h89.971c14.28 28.881 23.032 59.076 24.823 91.897zM444.79 124.718h-80.693c-4.737-15.754-10.405-31.996-16.963-46.213-8.524-18.481-18.091-33.049-28.51-43.962 51.787 14.689 96.175 48.165 126.166 90.175zM269.128 28.652c19.692 6.875 38.816 28.047 53.946 60.849 5.058 10.966 9.767 23.401 13.665 35.216h-67.612V28.652zm0 122.322h74.612c6.46 28.882 10.226 60.39 11.001 91.897h-85.613v-91.897zm0 118.154h85.593c-.848 34.133-4.826 65.641-11.062 91.897h-74.531v-91.897zm0 214.188v-96.034h67.465c-16.274 52.513-41.208 86.939-67.465 96.034zm50.46-6.791c10.013-11.117 19.234-25.659 27.546-43.68 6.421-13.921 11.99-28.496 16.666-45.563h80.266c-29.791 43.323-73.521 74.545-124.478 89.243zM460.02 361.026h-89.642c6.181-27.569 9.8-59.077 10.6-91.897h104.35c-1.942 34.133-10.862 64.327-25.308 91.897z"})))}const A=o.forwardRef(z);n.p;var O;function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},S.apply(null,arguments)}function M(e,t){let{title:n,titleId:i,...a}=e;return o.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",width:12,height:12,preserveAspectRatio:"xMinYMin meet",viewBox:"0 -3.5 256 256",ref:t,"aria-labelledby":i},a),n?o.createElement("title",{id:i},n):null,O||(O=o.createElement("g",{fill:"#161614"},o.createElement("path",{d:"M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"}),o.createElement("path",{d:"M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923m6.272 5.596c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65m4.304 7.159c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069m7.277 8.292c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258m9.403 2.8c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612m10.703 1.187c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86m10.514-.403c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"}))))}const N=o.forwardRef(M);n.p;var H=n(5986),D=(n(6497),n(6593),n(4277),n(3328),n(553),n(184));const X=document.querySelector("#modal-root");function J(){const[e,t]=(0,o.useState)(!1),[n,i]=(0,o.useState)([]);(0,o.useEffect)((()=>{const t=document.body;return t.style.overflow=e?"hidden":"auto",()=>{t.style.overflow="auto"}}),[e]);const a=e=>{e.target===e.currentTarget&&t(!1)},s=(0,o.useMemo)((()=>I.map(((e,n)=>{let{project:a,pictures:o,linkToLivePage:r,linktoProjectGit:s,description:c,role:l,technologies:d}=e;return(0,D.jsxs)(C.o5,{className:"ProjectItem",children:[(0,D.jsxs)("div",{className:"PicturesContainer",children:[(0,D.jsx)("h2",{className:"TitleProject",children:a}),(0,D.jsx)("p",{className:"Description",children:c})]}),(0,D.jsxs)("div",{className:"ImageContainer",children:[(0,D.jsx)("img",{className:"Img",alt:"pictures",src:o[0],onClick:()=>(e=>{t(!0),i(e)})(o)}),(0,D.jsxs)("p",{className:"Role",children:["Role: ",l]}),(0,D.jsxs)("ul",{className:"LinkList",children:[(0,D.jsx)("li",{children:(0,D.jsxs)("a",{className:"LinkItem",href:s,children:[(0,D.jsx)(N,{})," Git Hub"]})}),(0,D.jsx)("li",{children:(0,D.jsxs)("a",{className:"LinkItem",href:r,children:[(0,D.jsx)(A,{})," Live Page"]})})]})]}),(0,D.jsx)("ul",{className:"TechnologieList",children:d.map(((e,t)=>(0,D.jsx)("li",{className:"TechnologieElement",children:e},t)))})]},n)}))),[]),c=(0,o.useMemo)((()=>(0,r.createPortal)((0,D.jsx)(D.Fragment,{children:(0,D.jsx)(d,{onClick:a,children:(0,D.jsx)(C.tq,{style:{"--swiper-navigation-color":"grey","--swiper-pagination-color":"#fff"},pagination:{clickable:!0},navigation:!0,modules:[H.tl,H.W_],className:"ModalDiv",children:n.map(((e,t)=>(0,D.jsx)(C.o5,{children:(0,D.jsx)("img",{alt:e,src:e,width:"100%",height:"100%"})},t)))})})}),X)),[n]);return(0,D.jsxs)(l,{id:"section-portfolio",children:[(0,D.jsx)("h1",{className:"TitleMyProject",children:"My Project"}),(0,D.jsx)(C.tq,{style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:!0,modules:[H.lI,H.tl],className:"MySwiper",children:s}),e&&c]})}}}]);
//# sourceMappingURL=518.203b8974.chunk.js.map