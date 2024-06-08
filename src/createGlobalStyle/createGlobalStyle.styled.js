import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
ul {
  list-style: none;
}

li {
  text-decoration: none;
}

ul,
h2,
h3,
p{
  margin: 0;
  padding: 0;
}

body {
  font-family: serif;
   font-family: "Gilroy", sans-serif;
box-sizing: border-box;
}

.NavLink,
button{
  cursor: pointer;
}

div[id="root"]{

}
`;

export default GlobalStyled;
