import React from "react";
import cx from "classnames";
import Ink from 'react-ink';
import PropTypes from 'prop-types';

const Button = ({ children, content, onClick, variant }) => {

    return <div className={cx("button", variant,)} onClick={onClick}>{children || content}<Ink /></div>
}

export default Button;

Button.propTypes = {
    variant: PropTypes.oneOf(["contained", "outlined", "text"]),
 }
 
 Button.defaultProps = {
     variant: "text"
 }