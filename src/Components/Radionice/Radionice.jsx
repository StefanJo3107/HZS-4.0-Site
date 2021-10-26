import React, { useState } from "react";
import SectionTitle from "./../Utilities/SectionTitle";
import "./Radionice.scss";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineSetting, AiOutlineHtml5, AiFillGithub } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import SingleTab from "./SingleTab";
import Radionica from "./Radionica";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiPostman } from "react-icons/si";
import VisibilitySensor from "react-visibility-sensor";

const Radionice = () => {
    const [helperOneVisible, setHelperOneVisible] = useState(false);
    const [helperTwoVisible, setHelperTwoVisible] = useState(false);
    const [radioniceWrapperVisible, setRadioniceWrapperVisible] =
        useState(false);

    const radioniceWrapperStyle = {
        radioniceVisibleStyle: { position: "fixed", top: "4rem" },
        radioniceFixedBottom: { position: "absolute", bottom: "7rem" },
        radioniceFixedTop: { position: "initial" },
    };

    return (
        <div className="radionice">
            <VisibilitySensor
                onChange={(isVisible) => {
                    console.log("helperOneVisible " + isVisible);
                    setHelperOneVisible(isVisible);
                    return;
                }}
                delayedCall
                partialVisibility
            >
                <div className="helper-line helper-1"></div>
            </VisibilitySensor>

            <div
                className="radionice-wrapper"
                style={
                    radioniceWrapperVisible &&
                    !helperOneVisible &&
                    !helperTwoVisible
                        ? radioniceWrapperStyle.radioniceVisibleStyle
                        : helperOneVisible && !helperTwoVisible
                        ? radioniceWrapperStyle.radioniceFixedTop
                        : radioniceWrapperStyle.radioniceFixedBottom
                }
            >
                <SectionTitle underline="green" text="white">
                    radionice
                </SectionTitle>
                <VisibilitySensor
                    onChange={(isVisible) => {
                        console.log("radioniceWrapperVisible " + isVisible);
                        setRadioniceWrapperVisible(isVisible);
                        return;
                    }}
                    offset={{ top: 10 }}
                    delayedCall
                    partialVisibility
                >
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
                </VisibilitySensor>
            </div>

            <div className="time-line">
                <div className="line-v line-1 line"></div>
                <div className="line-h line-2 line"></div>
                <div className="line-v line-3 line"></div>
                <div className="line-h line-4 line"></div>
                <div className="line-v line-5 line"></div>
                <div className="line-h line-6 line"></div>
                <div className="line-v line-7 line"></div>
                <div className="line-h line-8 line"></div>
                <div className="line-v line-9 line"></div>
                <div className="line-h line-10 line"></div>
            </div>
            <VisibilitySensor
                onChange={(isVisible) => {
                    console.log("helperTwoVisible " + isVisible);

                    setHelperTwoVisible(isVisible);

                    return;
                }}
                delayedCall
                partialVisibility
            >
                <div className="helper-line helper-2"></div>
            </VisibilitySensor>
        </div>
    );
};

export default Radionice;
