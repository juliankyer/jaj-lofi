import styled from "styled-components";

const StyledParallax = styled.div`
  display: flex;
  flex-direction: column;

  .plx__img {
    width: 100vw;
    height: 300px;
    background-position: center;
    background-attachment: scroll;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .plx__img--first {
    clip-path: polygon(0 0, 100% 0%, 100% 86%, 0% 100%);
    background-image: url("/static/images/contactAsmall.jpg");
  }

  .plx__img--last {
    clip-path: polygon(0 14%, 100% 0%, 100% 100%, 0% 100%);
    background-image: url("/static/images/contactBsmall.jpg");
  }

  .plx__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 15%;
    color: $text-01;

    h3 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    p {
      text-align: center;
    }

    .quote {
      font-style: italic;
      margin: 20px 0px;
    }
  }
`;

const ContactMobile = () => {
  return (
    <StyledParallax>
      <div className="plx__img plx__img--first"></div>

      <div className="plx__content">
        <h3>Let's Get Started Today</h3>
        <p>
          The best way to get your perfect ring or completely custom jewlery is
          to call or email me. Let's talk so that I can best understand your
          perfect piece of jewelry.
        </p>
        <p>
          Phone:{"  "}
          <a className="footer__phone-number" href="tel: 949-784-9719">
            949-784-9719
          </a>
        </p>
        <p>
          Email:{"  "}
          <a href="mailto:info@jenniferamyjewelry.com" target="_blank">
            info@jenniferamyjewelry.com
          </a>
        </p>
      </div>

      <div className="plx__img plx__img--last"></div>
    </StyledParallax>
  );
};

export default ContactMobile;
