import React from 'react'
import propType from 'prop-types'
import Btn from '@mui/material/Button';

const Button = ({color, text, variants, textColor, textSize, btnSize, btnWidth, clickHandler, onChangeHandler, endingIcon, startingIcon, btnComponent}) => {

    return (
        <div>
          <Btn startIcon={startingIcon} onChange={onChangeHandler} endIcon={endingIcon} onClick={clickHandler} component={btnComponent} style={{backgroundColor: color, width: btnWidth, color: textColor, fontSize: textSize, textTransform: 'none', fontFamily: 'apple-system' }} size={btnSize} variant={variants}>{text}</Btn>  
        </div>
    )
}

Button.defaultProps = {
    color: 'green',
    text: 'button',
    variants: 'text',
    textColor: 'blue',
    btnSize: 'medium',
}

Button.propType = {
    textColor: propType.string,
    color: propType.string,
    text: propType.string,
    variants: propType.string,
    btnSize: propType.string,
    clickHandler: propType.func
}
export default Button
