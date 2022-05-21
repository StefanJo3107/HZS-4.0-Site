import React, { useState } from "react";
import SectionTitle from "../Utilities/SectionTitle";
import "./Lectures.scss";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineSetting, AiOutlineHtml5, AiFillGithub } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import SingleTab from "./SingleTab";
import Lecture from "./Lecture";
import VisibilitySensor from "react-visibility-sensor";
import { lecturesContent } from "./lecturesData";

const Lectures = (props) => {
  const [helperOneVisible, setHelperOneVisible] = useState(false);
  const [helperTwoVisible, setHelperTwoVisible] = useState(false);
  const [lecturesWrapperVisible, setRadioniceWrapperVisible] = useState(false);

  const [slideIndex, setSlideIndex] = useState(0);

  const lecturesWrapperStyle = {
    lecturesVisibleStyle: { position: "fixed", top: "4rem" },
    lecturesFixedBottom: { position: "absolute", bottom: "5rem" },
    lecturesFixedTop: { position: "initial" },
  };

  return (
    <div className="lectures" ref={props.section}>
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
        className="lectures-wrapper"
        style={
          lecturesWrapperVisible && !helperOneVisible && !helperTwoVisible
            ? lecturesWrapperStyle.lecturesVisibleStyle
            : helperOneVisible && !helperTwoVisible
            ? lecturesWrapperStyle.lecturesFixedTop
            : lecturesWrapperStyle.lecturesFixedBottom
        }
      >
        <SectionTitle underline="green" text="white">
          lectures
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
            <div className="lecture-content">
              <Lecture
                lectureTitle={lecturesContent[slideIndex].lectureTitle}
                opisRadionice={lecturesContent[slideIndex].opisRadionice}
                lecturerPhoto={lecturesContent[slideIndex].lecturerPhoto}
                lecturerName={lecturesContent[slideIndex].lecturerName}
                aboutLecturer={lecturesContent[slideIndex].aboutLecturer}
                icons={lecturesContent[slideIndex].icons}
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

export default Lectures;
