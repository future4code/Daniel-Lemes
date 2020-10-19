import styled from "styled-components"

export const NavBar = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
min-width:100%;
min-height:20vh;
background-color:#8d6ad9;


@media screen and (min-width: 200px) and (max-width:766px) {
   flex-wrap:wrap;
   justify-content:center
  }
`

export const MenuNavBar = styled.div`

display:flex;
justify-content:space-evenly;
align-items:center;
width:60%;
`
export const MenuNavBarBack = styled.div`

display:flex;
justify-content:right;
align-items:center;

`

export const Text = styled.p`
display:flex;
align-items:center;
margin-right:5vw;
cursor:pointer;
color:#ffff;
&:hover {
    color:#000000; 
    transition: 0.7s; 
    transform: scale(1.2);
}
`
export const TextBack = styled.p`
display:flex;
align-items:center;

cursor:pointer;
color:red;
&:hover {
    color:#000000; 
    transition: 0.7s; 
    transform: scale(1.2);
}
`
