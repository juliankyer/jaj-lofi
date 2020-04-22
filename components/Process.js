import styled from "styled-components";

const StyledParallax = styled.div`
  .plx__img-wrapper {
    height: 700px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }

  .plx__img-wrapper--first {
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 86%);
    background-image: url("/static/images/processA.jpg");
  }

  .plx__img-wrapper--middle {
    clip-path: polygon(0 0%, 100% 14%, 100% 100%, 0% 86%);
    background-image: url("/static/images/processB.jpg");
  }

  .plx__img-wrapper--last {
    clip-path: polygon(0 0%, 100% 14%, 100% 100%, 0% 100%);
    background-color: #15c3d1;
    color: #15c3d1;
    background-image: url("/static/images/processC.jpg");
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
  }
`;

const Process = () => {
  return (
    <StyledParallax>
      <div className="plx__img-wrapper plx__img-wrapper--first">
        <span
          className="backgound-image"
          aria-label="blonde model with a glass of wine and diamond ring"
        ></span>
      </div>

      <div className="plx__content">
        <h3>Completely Custom</h3>
        <p>
          The core value of Jennifer Amy Jewelry is to bestow the client with
          the most elegant, suited, ring. This can mean variety of things
          including color, cost, and needs.
        </p>
        <p>
          How does the process work you ask? It is actually quite simple. Start
          with an idea of what you would like. Pick an example from a friend or
          from a magazine. Once you have a foundation of what you would like,
          give Jennifer a call.
        </p>
        <p>
          The initial process doesn’t take long. It simply is a conversation to
          fully allow Jennifer to understand your dream piece.
        </p>
      </div>

      <div className="plx__img-wrapper plx__img-wrapper--middle">
        <span
          className="backgound-image"
          aria-label="close-up of hand wearing a diamond ring on each finger"
        ></span>
      </div>

      <div className="plx__content">
        <h3>Just for You</h3>
        <p>
          Next she will take her masterful experience and create various mockups
          for you to enjoy. Settling on a ring isn’t easy. The process continues
          with a bit more precision and accuracy on both sides by picking what
          you love and what you can live without.
        </p>
        <p>
          Next the gem will be placed in a ring and examined by Jennifer. Once
          everything fits like a glove, Jennifer will let you experience your
          new piece. The final step is crossing the t’s and dotting the I’s with
          insurance and paperwork. Your new ring will be delivered to you before
          your magical day.
        </p>
        <p>
          No matter a wedding or a gift, Jennifer Amy Jewelry will create your
          dream piece.
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

export default Process;
