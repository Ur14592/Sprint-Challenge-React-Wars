import React from 'react';
import styled from 'styled-components';

const Name = styled.h2`
  color: #3B3B64;
  
`;
const Height = styled.p`
  color: #3B3B64;
  
`;
const Gender = styled.p`
  color: #3B3B64;
  
`;
const Skin = styled.p`
  color: #3B3B64;
  
`;
const Eyes = styled.p`
  color: #3B3B64;
  
`;

const SWPList = props => {
    return (
        <div className="Key " key={props.key}>
            <Name>{props.name}</Name>
            <Height>{props.height}</Height>
            <Gender> {props.gender}</Gender>
            <Skin>{props.skin}</Skin>
            <Eyes>{props.eyes}</Eyes>
        </div>
      );
}

export default SWPList;