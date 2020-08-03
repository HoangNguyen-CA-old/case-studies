import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
  padding: 1em;
  background-color: white;
  width: 80%;
  border-radius: 5px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #ecf0f1;
  }
`;

const Title = styled.h2`
  font-size: 1.2rem;
  text-align: center;
`;

const ProjectLink = (props) => {
  return (
    <Container onClick={props.clicked}>
      <Title>{props.children}</Title>
    </Container>
  );
};

export default ProjectLink;
