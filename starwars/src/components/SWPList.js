import React from 'react';
import styled from 'styled-components';

const Name = styled.h2`
  color: #1C59B8;
  border-top:1rem solid #0075F2;
  text-shadow:6px 6px  #444
  &:hover {
    transform: translateY(-5px) scale(1.3);
    color: #00F2F2;
  }
`;
const Height = styled.p`
  color: #FFFFFF;
  &:hover {
    transform: translateY(-5px) scale(1.05);
    color: #000000;

  }
`;
const Gender = styled.p`
  color: #FFFFFF;
  &:hover {
    transform: translateY(-5px) scale(1.05);
    color: #000000;

  }
`;
const Skin = styled.p`
  color: #FFFFFF;
  &:hover {
    transform: translateY(-5px) scale(1.05);
    color: #000000;

  }
`;
const Eyes = styled.p`
  color: #FFFFFF;
  &:hover {
    transform: translateY(-5px) scale(1.05);
    color: #000000;

  }
  
`;

const Container = styled.div`
width:44rem;
`;

const Div = styled.div `

  width: 140px;
  max-height: 400px;
  
  margin-bottom: 20px;
`;

const SWPList = props => {
    return (
    <Container>
        <Div className="Key " key={props.key}>
            <Name>{props.name}</Name>
            <Height>Height: {props.height}</Height>
            <Gender>Gender: {props.gender}</Gender>
            <Skin>Skin: {props.skin}</Skin>
            <Eyes>Eyes: {props.eyes}</Eyes>
        </Div>
    </Container>
      );
}

export default SWPList;