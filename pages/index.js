import Home from "../components/Home";
import HomeMobile from "../components/HomeMobile";
import { BrowserView, MobileView } from "react-device-detect";

const HomePage = () => {
  return (
    <div>
      {/* <BrowserView> */}
      {/* <Home /> */}
      <HomeMobile />
      {/* </BrowserView> */}
      {/* <MobileView> */}
      {/* <HomeMobile /> */}
      {/* <Home /> */}
      {/* </MobileView> */}
    </div>
  );
};

export default HomePage;
