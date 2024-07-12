// src/components/common/Button.js

import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const CustomButton = ({
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  children,
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default CustomButton;
