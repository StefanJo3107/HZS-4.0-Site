import React, { useState } from "react";
import SectionTitle from "./../Utilities/SectionTitle";
import "./Radionice.scss";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineSetting, AiOutlineHtml5, AiFillGithub } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import SingleTab from "./SingleTab";
import Radionica from "./Radionica";
import {
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaGitAlt,
    FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiPostman } from "react-icons/si";
import VisibilitySensor from "react-visibility-sensor";

const Radionice = (props) => {
    const radioniceContent = [
        {
            nazivRadionice: "Back-end",
            opisRadionice:
                "Ova radionica ce Vam pomoci da shvatite kako funkcionise rad sa bazom",
            imePredavaca: "Zuhlke radnik 1",
            oPredavacu:
                "Zuhlke radnik 1 je nas najbolji predavac van fonisa. Zuhlke radnik 1 je nas najbolji predavac van fonisa. ",
            slikaPredavaca:
                "https://avatars.githubusercontent.com/u/53167193?v=4",
            icons: [
                <FaNodeJs size={50} color="#7fae7b" />,
                <SiMongodb size={50} color="#51a74b" />,
                <SiPostman size={50} color="#f76935" />,
            ],
        },
        {
            nazivRadionice: "Front-end",
            opisRadionice:
                "Ova radionica ce Vam pomoci da shvatite kako mozete dizajnirati web stranice i postici veliku interaktivnost sa krajnjim korisnicima",
            imePredavaca: "Vladimir Lazarevic",
            oPredavacu:
                "Vladimir Lazarevic je nas najbolji predavac u fonisu. Vladimir Lazarevic je nas najbolji predavac u fonisu. ",
            slikaPredavaca:
                "https://avatars.githubusercontent.com/u/53167193?v=4",
            icons: [
                <FaHtml5 size={50} color="#dd4b25" />,
                <FaCss3Alt size={50} color="#1a6fb4" />,
                <FaJs size={50} color="#efd81d" />,
            ],
        },
        {
            nazivRadionice: "Soft skills",
            opisRadionice:
                "Ova radionica ce Vam pomoci da shvatite kako funkcionise rad sa bazom",
            imePredavaca: "Boris Vajagic",
            oPredavacu:
                "Boris Vajagic je nas najbolji predavac u fonisu. Boris Vajagic je nas najbolji predavac u fonisu.",
            slikaPredavaca:
                "https://media-exp1.licdn.com/dms/image/C4E03AQEESt2TxgcwDQ/profile-displayphoto-shrink_400_400/0/1618985618779?e=1640822400&v=beta&t=HKCgmxGh9u-kN0MY08vGHXp2uLEXrFOxYMWiTJkbuww",
        },
        {
            nazivRadionice: "Git",
            opisRadionice:
                "Ova radionica ce Vam pomoci da shvatite kako funkcionise rad sa bazom",
            imePredavaca: "Jelena Milev",
            oPredavacu:
                "Jelena Milev je nas najbolji predavac u fonisu. Jelena Milev je nas najbolji predavac u fonisu.",
            slikaPredavaca:
                "https://avatars.githubusercontent.com/u/36775292?v=4",
            icons: [
                <FaGitAlt size={50} color="#e84e31" />,
                <FaGithub size={50} color="#1a1e22" />,
            ],
        },
    ];

    const [helperOneVisible, setHelperOneVisible] = useState(false);
    const [helperTwoVisible, setHelperTwoVisible] = useState(false);
    const [radioniceWrapperVisible, setRadioniceWrapperVisible] =
        useState(false);

    const [slideIndex, setSlideIndex] = useState(0);

    const radioniceWrapperStyle = {
        radioniceVisibleStyle: { position: "fixed", top: "4rem" },
        radioniceFixedBottom: { position: "absolute", bottom: "5rem" },
        radioniceFixedTop: { position: "initial" },
    };

    return (
        <div className="radionice" ref={props.section}>
            <VisibilitySensor
                onChange={(isVisible) => {
                    setHelperOneVisible(isVisible);
                    setSlideIndex(0);
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
                                    active={slideIndex === 0}
                                />
                                <SingleTab
                                    icon={<AiOutlineHtml5 size={20} />}
                                    title="Front-end"
                                    active={slideIndex === 1}
                                />
                                <SingleTab
                                    icon={<HiOutlineLightBulb size={20} />}
                                    title="Soft-skills"
                                    active={slideIndex === 2}
                                />
                                <SingleTab
                                    icon={<AiFillGithub size={20} />}
                                    title="Git"
                                    active={slideIndex === 3}
                                />
                            </div>
                            <div className="new-tab">
                                <BsPlusLg size={16} color="#c9d1d9" />
                            </div>
                        </div>
                        <div className="radionica-content">
                            <Radionica
                                nazivRadionice={
                                    radioniceContent[slideIndex].nazivRadionice
                                }
                                opisRadionice={
                                    radioniceContent[slideIndex].opisRadionice
                                }
                                slikaPredavaca={
                                    radioniceContent[slideIndex].slikaPredavaca
                                }
                                imePredavaca={
                                    radioniceContent[slideIndex].imePredavaca
                                }
                                oPredavacu={
                                    radioniceContent[slideIndex].oPredavacu
                                }
                                icons={radioniceContent[slideIndex].icons}
                            />
                        </div>
                    </div>
                </VisibilitySensor>
            </div>
            <div className="time-line">
                <div className="line-v line-1 line"></div>
                <VisibilitySensor
                    onChange={(isVisible) => {
                        if (isVisible) {
                            setSlideIndex(0);
                        }
                        return;
                    }}
                    delayedCall
                    partialVisibility
                >
                    <div className="line-h line-2 line"></div>
                </VisibilitySensor>
                <div className="line-v line-3 line"></div>
                <VisibilitySensor
                    onChange={(isVisible) => {
                        if (isVisible) {
                            setSlideIndex(1);
                        }
                        return;
                    }}
                    delayedCall
                    partialVisibility
                >
                    <div className="line-h line-4 line"></div>
                </VisibilitySensor>
                <div className="line-v line-5 line"></div>
                <VisibilitySensor
                    onChange={(isVisible) => {
                        if (isVisible) {
                            setSlideIndex(2);
                        }
                        return;
                    }}
                    delayedCall
                    partialVisibility
                >
                    <div className="line-h line-6 line"></div>
                </VisibilitySensor>
                <div className="line-v line-7 line"></div>
                <VisibilitySensor
                    onChange={(isVisible) => {
                        if (isVisible) {
                            setSlideIndex(3);
                        }
                        return;
                    }}
                    delayedCall
                    partialVisibility
                >
                    <div className="line-h line-8 line"></div>
                </VisibilitySensor>
                <div className="line-v line-9 line"></div>
            </div>
            <VisibilitySensor
                onChange={(isVisible) => {
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
