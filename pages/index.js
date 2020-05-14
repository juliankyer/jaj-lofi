import Home from "../components/Home";
import HomeMobile from "../components/HomeMobile";

const HomePage = ({ isMobileView }) => {
  return <div>{isMobileView ? <HomeMobile /> : <Home />}</div>;
};

HomePage.getInitialProps = (ctx) => {
  let isMobileView = (ctx.req
    ? ctx.req.headers["user-agent"]
    : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);

  return {
    isMobileView: Boolean(isMobileView),
  };
};

export default HomePage;
