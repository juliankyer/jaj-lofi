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
    background-image: url("../static/images/heroAsmall.jpg");
  }

  .plx__img--middle {
    clip-path: polygon(0 14%, 100% 0%, 100% 86%, 0% 100%);
    background-image: url("/static/images/heroBsmall.jpg");
  }

  .plx__img--last {
    clip-path: polygon(0 14%, 100% 0%, 100% 100%, 0% 100%);
    background-image: url("/static/images/heroCsmall.jpg");
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

const HomeMobile = () => {
  return (
    <StyledParallax>
      <div className="plx__img plx__img--first"></div>

      <div className="plx__content">
        <h3>Welcome to Your Bespoke Jeweler</h3>
        <p className="quote">
          <i>"Maybe it's not about the ending. Maybe it's about the story.”</i>
        </p>
        <p>
          Every experience leaves a memory. The defining moments in life are
          what create that memory. Working with Jennifer Amy will create the
          high end personal experience that everyone dreams for using her deep
          connections and hand selected pieces from a private jeweler.
        </p>
      </div>

      <div className="plx__img plx__img--middle"></div>

      <div className="plx__content">
        <h3>Just for You</h3>
        <p>
          The core value of Jennifer Amy Jewelry is to bestow the client with
          the most elegant, suited, ring. This can mean a variety of things
          including color, cost, and needs.
        </p>
      </div>

      <div className="plx__img plx__img--last"></div>
    </StyledParallax>
  );
};

export default HomeMobile;
