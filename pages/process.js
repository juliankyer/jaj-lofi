import Process from "../components/Process";
import ProcessMobile from "../components/ProcessMobile";
import { BrowserView, MobileView } from "react-device-detect";

const ProcessPage = () => {
  return (
    <div>
      <BrowserView>
        <Process />
      </BrowserView>
      <MobileView>
        <ProcessMobile />
      </MobileView>
    </div>
  );
};

export default ProcessPage;
