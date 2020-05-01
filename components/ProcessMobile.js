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
    background-image: url("../static/images/processAsmall.jpg");
  }

  .plx__img--middle {
    clip-path: polygon(0 14%, 100% 0%, 100% 86%, 0% 100%);
    background-image: url("../static/images/processBsmall.jpg");
  }

  .plx__img--last {
    clip-path: polygon(0 14%, 100% 0%, 100% 100%, 0% 100%);
    background-image: url("../static/images/processCsmall.jpg");
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

const ProcessMobile = () => {
  return (
    <StyledParallax>
      <div className="plx__img plx__img--first"></div>

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

      <div className="plx__img plx__img--middle"></div>

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

      <div className="plx__img plx__img--last"></div>
    </StyledParallax>
  );
};

export default ProcessMobile;
