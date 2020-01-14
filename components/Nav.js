import Link from 'next/link';
import StyledNav from './styles/StyledNav';

const Nav = () => (
  <StyledNav>
    {/* <Link href='/'>
      <a>HOME</a>
    </Link> */}
    <Link href='/shop'>
      <a>SHOP</a>
    </Link>
    <Link href='/sell'>
      <a>SELL</a>
    </Link>
    <Link href='contact'>
      <a>CONTACT</a>
    </Link>
    <Link href='/cart'>
      <a>CART</a>
    </Link>
    <Link href='/signup'>
      <a>SIGN UP</a>
    </Link>
  </StyledNav>
);

export default Nav;