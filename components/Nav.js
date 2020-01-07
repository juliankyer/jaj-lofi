import Link from 'next/link';

const Nav = () => (
  <nav>
    <Link href='/'>
      <a>HOME</a>
    </Link>
    <Link href='/sell'>
      <a>SELL</a>
    </Link>

    {/* TODO: set up these 3 routes */}
    <Link href='/about'>
      <a>ABOUT</a>
    </Link>
    <Link href='/process'>
      <a>PROCESS</a>
    </Link>
    <Link href='contact'>
      <a>CONTACT</a>
    </Link>
  </nav>
);

export default Nav;