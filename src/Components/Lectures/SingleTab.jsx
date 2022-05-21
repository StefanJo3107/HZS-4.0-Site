import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./SingleTab.scss";

const SingleTab = (props) => {
    return (
        <div className={props.active ? "browser-tab active" : "browser-tab"}>
            <div className="title-wrapper">
                {props.icon}
                <h4 className="tab-title">{props.title}</h4>
            </div>
            <AiOutlineClose />
        </div>
    );
};

export default SingleTab;
