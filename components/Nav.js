import Link from 'next/link';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 10px;

  a {
    color: #2d2926;
    text-decoration: none;
    text-transform: uppercase;
    margin: 10px;
    padding: 10px;
    font-weight: 700;
  }
`;

const Nav = () => (
  <StyledNav>
    <Link href='/'>
      <a>HOME</a>
    </Link>
    <Link href='/sell'>
      <a>SELL</a>
    </Link>
    <Link href='/about'>
      <a>ABOUT</a>
    </Link>
    <Link href='/process'>
      <a>PROCESS</a>
    </Link>
    <Link href='contact'>
      <a>CONTACT</a>
    </Link>
  </StyledNav>
);

export default Nav;