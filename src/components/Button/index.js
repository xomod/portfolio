import React from "react";
import cx from "classnames";

const Button = ({ children, content, onClick }) => {

    return <div className={cx("button")} onClick={onClick}>{children || content}</div>
}

export default Button;