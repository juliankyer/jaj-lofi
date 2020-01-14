import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';

// this gets passed everywhere
const theme = {
  text01: '#2d2926',
  text02: '#53565a',
  text03: '#cdcdcf',
  brand01: '#15c3d1',
  background01: '#ffffff',
  boxShadow: '0 2rem 5rem -2.5rem rgba(0,0,0,.25),0 .3rem .5rem -.4rem rgba(0,0,0,.4)',
  maxWidth: '1000px',
}

const StyledPage = styled.div`
  background: #ffffff;
  background: ${props => props.theme.background01};
  color: ${props => props.theme.text01};
`;

// TODO -- this should only be applied to non-parallax pages... probably
// at the very least, it should be different based on whether or not a page is parallax or store
// there should be a padded page for shop
const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat';
    font-size: 1.5rem;
    line-height: 2;
  }

  a {
    text-decoration: none;
    color: ${theme.text01};
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          {/* <Inner>{this.props.children}</Inner> */}
            <div>{this.props.children}</div>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;