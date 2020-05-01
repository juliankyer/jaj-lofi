import Contact from "../components/Contact";
import ContactMobile from "../components/ContactMobile";
import { BrowserView, MobileView } from "react-device-detect";

const ContactPage = () => {
  return (
    <div>
      <BrowserView>
        <Contact />
      </BrowserView>
      <MobileView>
        <ContactMobile />
      </MobileView>
    </div>
  );
};

export default ContactPage;
