import React from "react";
import cx from "classnames";
import Ink from 'react-ink';
import PropTypes from 'prop-types';
import useStyles from "./styles"

const Button = ({ children, content, onClick, variant, disabled }) => {
    const classes = useStyles()

    const handleClick = React.useCallback(e => !disabled && onClick && onClick(e), [onClick, disabled]);

    return <button className={cx(classes.button, classes[`variant-${variant}`], { disabled })} onClick={handleClick}>
        {children || content}
        {!disabled && <Ink />}
    </button>
}

export default Button;

Button.propTypes = {
    variant: PropTypes.oneOf(["contained", "outlined", "text"]),
    disabled: PropTypes.bool
}

Button.defaultProps = {
    variant: "text",
    disabled: false
}