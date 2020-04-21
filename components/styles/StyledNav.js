import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-right: 10px;
  font-size: 1.5rem;

  a,
  button {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    /* font-weight: 500; */
    /* font-size: 1em; */
    background: none;
    border: 0;
    cursor: pointer;
    @media (max-width: 700px) {
      font-size: 12px;
      padding: 0 10px;
    }
    &:before {
      content: "";
      width: 2px;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: ${(props) => props.theme.brand01};
      content: "";
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.5s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
  @media (max-width: 1300px) {
    border-top: 1px solid ${(props) => props.theme.text03};
    justify-content: end;
    font-size: 1.5rem;
  }
`;

export default StyledNav;
