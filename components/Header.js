import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import Nav from "./Nav";
import styled from "styled-components";

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
  display: flex;
  justify-content: space-between;

  .header-logo {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 90px;
      margin-top: 4px;
    }
    margin: 0 20px;
  }

  @media only screen and (max-device-width: 500px) {
    background-color: rgba(255, 255, 255, 0.9);
    a {
      font-weight: 700;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link href="/">
        <a className="header-logo" title="Home">
          <img
            src="../static/images/ja-logo.png"
            alt="jennifer amy jewelry logo"
          />
        </a>
      </Link>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
