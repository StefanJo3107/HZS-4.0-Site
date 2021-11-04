import React, { useState } from "react";
import SectionTitle from "./../Utilities/SectionTitle";
import "./Radionice.scss";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineSetting, AiOutlineHtml5, AiFillGithub } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import SingleTab from "./SingleTab";
import Radionica from "./Radionica";
import {
    FaJava,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaGitAlt,
    FaGithub,
} from "react-icons/fa";
import { SiPostman, SiSpring } from "react-icons/si";
import VisibilitySensor from "react-visibility-sensor";
import Pavle from "../../Assets/Images/Pavle.jpg";
import VladimirT from "../../Assets/Images/VladimirT.jpg";
import Dzeca from "../../Assets/Images/Dzeca.jpg";
import Mateja from "../../Assets/Images/Mateja.jpeg";

const Radionice = (props) => {
    const radioniceContent = [
        {
            nazivRadionice: "Back-end",
            opisRadionice:
                "Rad u programskom jeziku Java i njegovom framework-u Spring biće glavna tema ove radionice. Učesnicima će biti objašnjen rad sa bazom podataka i kreiranje API-ja.",
            imePredavaca: "Pavle Prica",
            oPredavacu:
                "Pavle je Cloud inženjer i deo Zühlke Global Delivery Centre-a. Bavi se aplikacijama baziranim na Cloud-u i fokus je na tehnologijama kao što su Java, Kotlin, Spring, Amazon Web Services. Pored toga, veliki je geek i voli da trenira.",
            slikaPredavaca: Pavle,
            icons: [
                <FaJava size={50} color="#f09218" />,
                <SiSpring size={50} color="#5cb230" />,
                <SiPostman size={50} color="#f76935" />,
            ],
        },
        {
            nazivRadionice: "Front-end",
            opisRadionice:
                "Radionica je osmišljena tako da učesnike uputi kako da dizajniraju i izrade svoje web stranice. Učesnici će imati priliku da se upoznaju sa HTML-om, CSS-om i JavaScript-om.",
            imePredavaca: "Vladimir Tomić",
            oPredavacu:
                "Vladimir je u kompaniji Zühlke Engineering od novembra 2016. godine, a trenutno radi na poziciji Advanced Software Engineer. Oblasti interesovanja su mu Spring ekosistem, React, Flutter, Solution Design, dok se u slobodno vreme bavi fotografijom. ",
            slikaPredavaca: VladimirT,
            icons: [
                <FaHtml5 size={50} color="#dd4b25" />,
                <FaCss3Alt size={50} color="#1a6fb4" />,
                <FaJs size={50} color="#efd81d" />,
            ],
        },
        {
            nazivRadionice: "Soft skills",
            opisRadionice:
                "Koliko je važno dobro kreirati softversko rešenje, toliko je bitno i znati prezentovati ga. Kroz iskustva drugih koji su kroz ovakva takmičenja prošli više puta, učesnici će saznati kako i o čemu sve treba da razmišljaju da bi predstavili svoje rešenje na pravi način.",
            imePredavaca: "Mateja Ivanović",
            oPredavacu:
                "Mateja je alumni član FONIS-a, apsolvent na Fakultetu organizacionih nauka i najviše se pronalazi u programiranju full stack aplikacija koristeći NodeJS i React. Voli da učestvuje na hakatonima i iza sebe ima osvojeno i prvo i drugo mesto na Fon Hakatonu. ",
            slikaPredavaca: Mateja,
        },
        {
            nazivRadionice: "Git",
            opisRadionice:
                "Cilj radionice je da upozna učesnike sa Git-om, najkorišćenijim distribuiranim sistemom za kontrolu verzije. Git uveliko olakšava timski rad na projektu, a popularnost je stekao i zato što je brz, besplatan i što podržava praćenje promena, lokalno i u zajedničkom okruženju.",
            imePredavaca: "Jelena Milev",
            oPredavacu:
                "Jelena je alumni član FONIS-a i već nešto više od godinu dana Junior Software Developer u kompaniji Levi9. Bavi se razvojem veb aplikacija korišćenjem Spring i Angular framework-a. U slobodno vreme prati ostvarenja sedme umetnosti i stand up nastupe naših komičara.",
            slikaPredavaca: Dzeca,
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
