import React from 'react'
import propType from 'prop-types'
import TxtField from '@mui/material/TextField';

const TextField = ({type, label, variant, Width, boxSize, inputRef}) => {
    return (
        <div>
         <TxtField style={{width: Width, resize: 13}} type={type} label={label} variant={variant} size={boxSize} inputRef={inputRef}/>
        </div>
    )
}

TextField.defaultProps = {
    type: 'text',
    label: 'text field',
    variant: 'outlined',
    Width: '100%',
    boxSize: 'normal'
}

TextField.propType = {
    type: propType.string,
    label: propType.string,
    variant: propType.string, 
    Width: propType.string 
}

export default TextField
