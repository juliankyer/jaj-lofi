import styled from "styled-components";

const StyledContact = styled.div`
  display: grid;
  grid-template-columns: 5% 1fr 5%;
  align-content: center;
  margin-bottom: 40px;
  width: 100%;

  h1,
  p,
  a {
    grid-column: 2/3;
    justify-self: center;
  }

  a {
    cursor: pointer;
    color: ${(props) => props.theme.brand01};
  }
`;

const Contact = () => (
  <StyledContact>
    <h1>Let's get started today</h1>
    <p>
      The best way to get your perfect ring or completely custom jewlery is to
      call or email me. Let's talk so that I can best understand your perfect
      piece of jewelry.
    </p>
    <p>
      Phone:{"  "}
      <a className="footer__phone-number" href="tel: 949-784-9719">
        949-784-9719
      </a>
    </p>
    <p>
      Email:{"  "}
      <a href="mailto:jenniferamydesigns@gmail.com" target="_blank">
        jenniferamydesigns@gmail.com
      </a>
    </p>
  </StyledContact>
);

export default Contact;
