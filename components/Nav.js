import Link from "next/link";
import StyledNav from "./styles/StyledNav";

const Nav = () => (
  <StyledNav>
    <Link href="/process">
      <a>MY PROCESS</a>
    </Link>
    <Link href="contact">
      <a>CONTACT ME</a>
    </Link>
  </StyledNav>
);

export default Nav;
