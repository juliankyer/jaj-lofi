import Contact from "../components/Contact";
import ContactMobile from "../components/ContactMobile";

const ContactPage = ({ isMobileView }) => {
  return <div>{isMobileView ? <ContactMobile /> : <Contact />}</div>;
};

ContactPage.getInitialProps = (ctx) => {
  let isMobileView = (ctx.req
    ? ctx.req.headers["user-agent"]
    : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);

  return {
    isMobileView: Boolean(isMobileView),
  };
};

export default ContactPage;
