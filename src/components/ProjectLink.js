import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
  padding: 1em;
  background-color: #ccc;
`;

const ProjectLink = (props) => {
  return (
    <Container onClick={props.clicked}>
      <p>{props.children}</p>
    </Container>
  );
};

export default ProjectLink;
