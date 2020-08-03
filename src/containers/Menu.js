import React, { Component } from 'react';
import styled from 'styled-components';

import ProjectLink from '../components/ProjectLink';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0;
  background-color: #abb7b7;
  min-height: 100vh;
`;

export class Menu extends Component {
  handleRecipeOpen = () => {
    this.props.history.push('/projects/0');
  };

  render() {
    return (
      <Container>
        <ProjectLink clicked={this.handleRecipeOpen}>recipe-app</ProjectLink>
      </Container>
    );
  }
}

export default Menu;
