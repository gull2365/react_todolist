import React from "react";
import "./Template.css";

const Template = ({children, todolength}) => {
    return (
        <div className="Template">
            <div className="title">TODAY TODO({todolength})</div>
            <div>{children}</div>
        </div>
    );
};

export default Template;