import Link from 'next/link';
import StyledNav from './styles/StyledNav';

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
    <Link>
      <a>CART</a>
    </Link>
  </StyledNav>
);

export default Nav;