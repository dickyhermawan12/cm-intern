import * as React from "react";
import {StyledCard} from "./style";

const Card: React.FC<cardInterface> = ({children}) => {

  return (
      <StyledCard>
        {children}
      </StyledCard>
  )
};

export default Card;