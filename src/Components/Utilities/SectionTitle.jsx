import React from "react";
import "./SectionTitle.scss";

const SectionTitle = (props) => {
    return (
        <>
            <h2
                className={"naslov " + props.className}
                style={{ color: props.text === "black" ? "#000" : "#fff" }}
            >
                {props.children}
            </h2>
            <div
                className="underline"
                style={{
                    borderColor:
                        props.underline === "purple" ? "#795298" : "#00ffa3",
                }}
            ></div>
        </>
    );
};

export default SectionTitle;
