import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';
import styled from 'styled-components';
// import logo from '../static/images/ja-logo.png';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.5);
  display:flex;
  justify-content: space-between; 

  .header-logo {
    height: 90px;
    margin: 0 20px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link href='/'>
        <a className='header-logo'>
          {/* TODO -- add logo */}
          {/* <img src={logo} alt='jennifer amy jewelry logo' /> */}
          <p>Logo</p>
        </a>
      </Link>
      <Nav />
    </StyledHeader>
  );
};

export default Header;