import styled from "styled-components";

const StyledParallax = styled.div`
  .plx__img-wrapper {
    height: 660px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }

  .plx__img-wrapper--first {
    clip-path: polygon(0 0, 100% 0%, 100% 86%, 0% 100%);
    background-image: url("/static/images/contactA.jpg");
  }

  .plx__img-wrapper--last {
    clip-path: polygon(0 14%, 100% 0%, 100% 100%, 0% 100%);
    background-color: #15c3d1;
    color: #15c3d1;
    background-image: url("/static/images/contactB.jpg");
  }

  .plx__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 25%;
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

    a {
      cursor: pointer;
      color: ${(props) => props.theme.brand01};
    }
  }
`;

const Contact = () => {
  return (
    <StyledParallax>
      <div className="plx__img-wrapper plx__img-wrapper--first">
        <span
          className="backgound-image"
          aria-label="image of blonde model with a glass of wine and diamond ring"
        ></span>
      </div>

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
      <div className="plx__img-wrapper plx__img-wrapper--last">
        <span
          className="backgound-image"
          aria-label="model looking at her engagement ring"
        ></span>
      </div>
    </StyledParallax>
  );
};

export default Contact;
