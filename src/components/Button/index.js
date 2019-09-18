import React from "react";
import cx from "classnames";
import Ink from 'react-ink';

const Button = ({ children, content, onClick, variant }) => {

    return <div className={cx("button", variant,)} onClick={onClick}>{children || content}<Ink /></div>
}

export default Button;