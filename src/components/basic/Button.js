import React from "react";
import propType from "prop-types";
import Btn from "@mui/material/Button";

const Button = ({
  color,
  text,
  borderStyle,
  borderRad,
  variants,
  textColor,
  textSize,
  btnSize,
  btnWidth,
  clickHandler,
  onChangeHandler,
  endingIcon,
  startingIcon,
  btnComponent,
  type
}) => {
  return (
    <div>
      <Btn
        type={type}
        startIcon={startingIcon}
        onChange={onChangeHandler}
        endIcon={endingIcon}
        onClick={clickHandler}
        component={btnComponent}
        style={{
          border: borderStyle,
          borderRadius: borderRad,
          backgroundColor: color,
          width: btnWidth,
          color: textColor,
          fontSize: textSize,
          textTransform: "none",
          fontFamily: "Arvo",
        }}
        size={btnSize}
        variant={variants}
      >
        {text}
      </Btn>
    </div>
  );
};

Button.defaultProps = {
  type:'',
  color: "green",
  text: "button",
  variants: "text",
  textColor: "blue",
  btnSize: "medium",
};

Button.propType = {
  type: propType.string,
  textColor: propType.string,
  color: propType.string,
  text: propType.string,
  variants: propType.string,
  btnSize: propType.string,
  clickHandler: propType.func,
};
export default Button;
