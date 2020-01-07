import Link from 'next/link';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <Link href='/'>
        <a>LOGO HOME</a>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;