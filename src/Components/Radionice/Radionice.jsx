import React from 'react'
import SectionTitle from './../Utilities/SectionTitle';
import './Radionice.scss'
import { BsPlusLg } from 'react-icons/bs'
import { AiOutlineSetting, AiOutlineHtml5, AiFillGithub } from 'react-icons/ai'
import { HiOutlineLightBulb } from 'react-icons/hi'
import SingleTab from './SingleTab';

const Radionice = () => {
  return (
    <div className="radionice">
      <SectionTitle underline="green" text="white">radionice</SectionTitle>
      <div className="web-browser">
        <div className="top-bar">
          <div className="icons-bar">
            <div className="circle red"></div>
            <div className="circle yellow"></div>
            <div className="circle green"></div>
          </div>
          <div className="tab-bar">
            <SingleTab icon={<AiOutlineSetting size={20} />} title="Back-end" active={true} />
            <SingleTab icon={<AiOutlineHtml5 size={20} />} title="Front-end" active={false} />
            <SingleTab icon={<HiOutlineLightBulb size={20} />} title="Soft-skills" active={false} />
            <SingleTab icon={<AiFillGithub size={20} />} title="Git" active={false} />
          </div>
          <div className="new-tab">
            <BsPlusLg size={16} color="#c9d1d9" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Radionice
