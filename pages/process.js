import Process from "../components/Process";
import ProcessMobile from "../components/ProcessMobile";

const ProcessPage = ({ isMobileView }) => {
  return <div>{isMobileView ? <ProcessMobile /> : <Process />}</div>;
};

ProcessPage.getInitialProps = (ctx) => {
  let isMobileView = (ctx.req
    ? ctx.req.headers["user-agent"]
    : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);

  return {
    isMobileView: Boolean(isMobileView),
  };
};

export default ProcessPage;
