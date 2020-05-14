import Home from "../components/Home";
import HomeMobile from "../components/HomeMobile";
import { BrowserView, MobileView } from "react-device-detect";

const HomePage = ({ isMobileView }) => {
  console.log("mobile?", isMobileView);
  return <div>{isMobileView ? <Home /> : <HomeMobile />}</div>;
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
