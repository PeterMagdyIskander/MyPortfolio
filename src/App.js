import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { BiArrowToTop } from "react-icons/bi";
import { BiArrowToBottom } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logicGate from "./files/logicgate.jpg";
import react from "./files/react.PNG";
import bot from "./files/twitchbot.PNG";
const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: #252325;
`;

const heightOfMenu = "70px";

const Menu = styled.div`
  height: ${heightOfMenu};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background:#00A36C;
`;

const MenuButtom = styled.button`
  width: 150px;
  height: 34px;
  border: 0;
  color: #000000;
  background: transparent;
  font-size: 16px;
  font-weight: 100;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
`;

const Burger = styled.button`
  position: absolute;
  z-index: 1;
  top: 10px;
  right: 10px;
  color: ${(p) => (p.isOpen ? "#00A36C" : "#00A36C")};
`;

const BurgerIcon = styled.span`
  font-size: 36px;
  cursor: pointer;
`;

const Content = styled.div`
  transform: translateY(${(p) => (p.isOpen ? 0 : `-${heightOfMenu}`)});
  transition: transform 0.45s;
`;

const Project = (props) => {
  return (
    <article className="card">
      <h3
        className="projectTitle"
        onClick={() => window.open(props.githubRepo, "_blank")}
      >
        {props.projectName}
        <span className="tooltiptext">github repo</span>
      </h3>
      <img className="imgContainer" src={props.src}  alt={props.meaning}/>
      <p className="description">{props.description}</p>
    </article>
  );
};

export const App = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Wrapper>
      <Burger isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
        <BurgerIcon class="material-icons">
          {isOpen ? <BiArrowToTop /> : <BiArrowToBottom />}
        </BurgerIcon>
      </Burger>
      <Content isOpen={isOpen}>
        <Menu>
          <MenuButtom onClick={() =>
              window.open("https://drive.google.com/file/d/1tm8OLaEUA12Cn11V-dy8Q8ApFs8SPLIU/view?usp=sharing", "_blank")
            }>CV</MenuButtom>
          <MenuButtom
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/peter-iskander-17b9501b1/",
                "_blank"
              )
            }
          >
            {" "}
            <FaLinkedin />
            Linkedin
          </MenuButtom>
          <MenuButtom
            onClick={() =>
              window.open("https://github.com/PeterMagdyIskander", "_blank")
            }
          >
            {" "}
            <FaGithub />
            Github
          </MenuButtom>
        </Menu>
        <div className="MainDiv">
          <h1 className="title"> Peter Iskander</h1>
          <section className="card-list">
            <Project
              projectName="Logic Gates Simulator"
              description="Used a customized binary tree which each node corresponds to a gate, and traversed in the binary tree using DFS "
              githubRepo="https://github.com/PeterMagdyIskander/LogicGateSimulator"
              src={logicGate}
              meaning="code snippit"
            ></Project>
            <Project
              projectName="Twitch Bot"
              description="Used Python to write in twitch chat using cmd"
              githubRepo="https://github.com/PeterMagdyIskander/TwitchBot"
              src={bot}
              meaning="code snippit"
            ></Project>
            <Project
              projectName="This Portofolio"
              description="Used ReactJS to create this website"
              githubRepo="https://github.com/PeterMagdyIskander/MyPortofolio"
              src={react}
              meaning="code snippit"
            ></Project>
          </section>
        </div>
      </Content>
    </Wrapper>
  );
};

export default App;
