import * as React from "react";
import {StyledButton} from "./style";

export const SubmitButton: React.FC<submitButtonInterface> = ({text}) => {
  return (
    <input
      type="submit"
      value={text}
      style={{
        borderRadius: '4px',
        padding: '1rem',
        color: '#FEFEFE',
        backgroundColor: '#275DE9',
        width: 'fit-content',
        height: 'fit-content',
        marginLeft: '1rem',
        fontWeight: 500,
        fontSize: '20px',
        border: 0,
        fontFamily: 'Poppins',
        cursor: 'pointer'
      }}
    />
  )
};

const Button: React.FC<buttonInterface> = ({text, usage, background}) => {

  return (
    <div onClick={usage}>
      <StyledButton background={background}>
        {text}
      </StyledButton>
    </div>
  )
};

export default Button;