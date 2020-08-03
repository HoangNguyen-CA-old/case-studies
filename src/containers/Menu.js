import React, { Component } from 'react';
import styled from 'styled-components';

import ProjectLink from '../components/ProjectLink';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export class Menu extends Component {
  handleRecipeOpen = () => {
    this.props.history.push('/0');
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
