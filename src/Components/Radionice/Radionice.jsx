import React from "react";
import SectionTitle from "./../Utilities/SectionTitle";
import "./Radionice.scss";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineSetting, AiOutlineHtml5, AiFillGithub } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import SingleTab from "./SingleTab";
import Radionica from "./Radionica";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiPostman } from "react-icons/si";

const Radionice = () => {
  return (
    <div className="radionice">
      <SectionTitle underline="green" text="white">
        radionice
      </SectionTitle>
        <div className="web-browser">
          <div className="top-bar">
            <div className="icons-bar">
              <div className="circle red"></div>
              <div className="circle yellow"></div>
              <div className="circle green"></div>
            </div>
            <div className="tab-bar">
              <SingleTab
                icon={<AiOutlineSetting size={20} />}
                title="Back-end"
                active={true}
              />
              <SingleTab
                icon={<AiOutlineHtml5 size={20} />}
                title="Front-end"
                active={false}
              />
              <SingleTab
                icon={<HiOutlineLightBulb size={20} />}
                title="Soft-skills"
                active={false}
              />
              <SingleTab
                icon={<AiFillGithub size={20} />}
                title="Git"
                active={false}
              />
            </div>
            <div className="new-tab">
              <BsPlusLg size={16} color="#c9d1d9" />
            </div>
          </div>
          <div className="radionica-content">
            <Radionica
              nazivRadionice="Back-end"
              opisRadionice="Ova radionica ce Vam pomoci da shvatite kako funkcionise rad sa bazom"
              slikaPredavaca="https://avatars.githubusercontent.com/u/53167193?v=4"
              imePredavaca="Pera Peric"
              oPredavacu="Pera Peric je nas najbolji predavac u fonisu. Pera Peric je nas najbolji predavac u fonisu. Pera Peric je nas najbolji predavac u fonisu."
              icons={[
                <FaNodeJs size={50} color="#7fae7b" />,
                <SiMongodb size={50} color="#51a74b" />,
                <SiPostman size={50} color="#f76935" />,
              ]}
            />
          </div>
        </div>
      <div className="visibility-line" style={{width: "3rem", height: "1rem", opacity: 0}}></div>
    </div>
  );
};

export default Radionice;
