// import Link from 'next/link';
// import Nav from './Nav';
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: $text-01;

  p {
    font-size: 1.3rem;
  }

  .footer__logo {
    width: 200px;
  }

  .footer__interactive {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .footer__link--wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .footer__label {
        margin: 0;
      }

      .footer__phone-number {
        text-decoration: underline;
        color: ${(props) => props.theme.brand01};
      }
    }
  }

  .social-icon {
    height: 3rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <img className="footer__logo" src="../static/ja-logo.png" />

      <section className="footer__interactive">
        <div className="footer__link--wrapper footer__link--consult">
          <p className="footer__label">Call me to set up a consultation:</p>
          <a className="footer__phone-number" href="tel: 949-784-9719">
            949-784-9719
          </a>
        </div>

        <div className="footer__link--wrapper footer__link--instagram">
          <p className="footer__label">Follow me on Instagram</p>
          <a
            href="https://instagram.com/jenamyjewelry"
            target="_blank"
            className="footer__link"
          >
            <img
              src="../static/images/instagram-logo.png"
              className="social-icon"
            />
          </a>
        </div>
      </section>
    </StyledFooter>
  );
};

export default Footer;
