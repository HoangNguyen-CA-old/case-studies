import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const MDContainer = styled.div`
  max-width: 75ch;
  line-height: 130%;
  font-size: 1rem;
  letter-spacing: 0.02em;

  width: 80%;
  margin: 2em auto;

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    margin: 1em 0;
    font-weight: 600;
  }
  & ul {
    padding-left: 40px;
  }

  & p {
    margin: 1em 0;
  }
`;

const Project = (props) => {
  return (
    <MDContainer>
      <ReactMarkdown source={props.markdown} escapeHtml={true}></ReactMarkdown>
    </MDContainer>
  );
};

export default Project;
