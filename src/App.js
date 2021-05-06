import {useState} from'react';
import styled from "styled-components";
import logo from './logo.svg';
import './App.css';
import { BiArrowToTop } from "react-icons/bi";
import { BiArrowToBottom } from "react-icons/bi";
import {FaGithub, FaLinkedin} from "react-icons/fa";

const Wrapper = styled.div`
  position: relative;
  overflow:hidden;
  width:100%;
  height:100%;
  background:#252325;
`;

const heightOfMenu ='70px';

const Menu=styled.div`
  height:${heightOfMenu};
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:row;
  background:#ffffff;
`;

const MenuButtom=styled.button`
  width:150px;
  height:34px;
  border:0;
  color: #45424d;
  background:transparent;
  font-size:16px;
  font-weight:100;
  &:hover { color:#8f44fd;}
`;

const Burger=styled.button`
  position:absolute;
  z-index:1;
  top:10px;
  left:10px;
  color:
  ${p=>p.isOpen ? "#45424d" : "#45424d"};
`;

const BurgerIcon=styled.span` font-size:36px;`;

const Content=styled.div`
  transform: translateY(${p=>p.isOpen ? 0 : `-${heightOfMenu}`});
  transition: transform 0.45s;
`;

export const NavBar = () =>{
  const [isOpen, setOpen]=useState(false);
  return(
    <Wrapper>
      <Burger 
      isOpen={isOpen}
      onClick={()=>
      setOpen(!isOpen)
        }
      >
        <BurgerIcon class="material-icons">
          {isOpen ? <BiArrowToTop /> : <BiArrowToBottom />}
        </BurgerIcon>
      </Burger>
      <Content isOpen={isOpen}>
        <Menu>
          <MenuButtom>My Work</MenuButtom>
          <MenuButtom>CV</MenuButtom>
          <MenuButtom onClick={()=> window.open("https://www.linkedin.com/in/peter-iskander-17b9501b1/", "_blank")}> <FaLinkedin />Linkedin</MenuButtom>
          <MenuButtom onClick={()=> window.open("https://github.com/PeterMagdyIskander", "_blank")}> <FaGithub />Github</MenuButtom>
        </Menu>
        <div className="App">
      <header className="App-header">
       
      </header>
    </div>
      </Content>
    </Wrapper>
  );
};

export default NavBar;