import Home from "../components/Home";
import HomeMobile from "../components/HomeMobile";
import { BrowserView, MobileView } from "react-device-detect";

const HomePage = () => {
  return (
    <div>
      <BrowserView>
        <Home />
      </BrowserView>
      <MobileView>
        <HomeMobile />
      </MobileView>
    </div>
  );
};

export default HomePage;
