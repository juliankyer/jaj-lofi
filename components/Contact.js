import styled from "styled-components";

const StyledContact = styled.div`
  border: 2px solid magenta;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contact = () => (
  <StyledContact>
    <h1>Let's get started today</h1>
    <p>
      The best way to get your perfect ring or completely custom jewlery is to
      call me
    </p>
    <a href="mailto:jenniferamydesigns@gmail.com" target="_blank">
      jenniferamydesigns@gmail.com
    </a>
  </StyledContact>
);

export default Contact;
