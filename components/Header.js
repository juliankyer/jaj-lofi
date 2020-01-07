import Link from 'next/link';
import Nav from './Nav';
import styled from 'styled-components';
// import logo from '../static/ja-logo.png';

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
          {/* <img src={logo} alt='jennifer amy jewelry logo' /> */}
          <p>Logo</p>
        </a>
      </Link>
      <Nav />
    </StyledHeader>
  );
};

export default Header;