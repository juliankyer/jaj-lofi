import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  text01: '#2d2926',
  text02: '#53565a',
  text03: '#cdcdcf',
  brand01: '#15c3d1',
  boxShadow: '0 2rem 5rem -2.5rem rgba(0,0,0,.25),0 .3rem .5rem -.4rem rgba(0,0,0,.4)',
  maxWidth: '1000px',
}

const StyledPage = styled.div`
  background: #ffffff;
  color: #2d2926;
`;

// TODO -- this should only be applied to non-parallax pages... probably
// at the very least, it should be different based on whether or not a page is parallax or store
const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
`;

class Page extends Component {
  render() {
    return (
      <StyledPage>
        <Meta />
        <Header />
        <Inner>{this.props.children}</Inner>
      </StyledPage>
    );
  }
}

export default Page;